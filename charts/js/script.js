const vis = new Vue({
  el: "#vis_map",
  data: function () {
    return {
      MARGIN: {
        TOP: 0,
        BOTTOM: 0,
        LEFT: 0,
        RIGHT: 0
      },
      colours : ["#0F4F99", "#2989D8", "#99C4E5", "#99C4E5", "#99C4E5", "#2989D8", "#0F4F99"],
      // colours: ["#FDA860", "#FC8669", "#E36172", "#C64277", "#E36172", "#FC8669", "#FDA860"],
      FILEPATH: 'data/datos_agregados.json',
      windowWidth: 0,
      windowHeight: 0,
      countries: {},
      summary: {},
      ofos: {},
      data: [],
      svg: null,
      defs: null,
      linearGradients: null,
      path: null,
      projection: null,
      graticule: null,
      pathGenerator: null,
      gradientGenerator: null,
      line: null,
      selected_origin: '',
      selected_destination: '',
    }
  },
  computed: {
    height() {
      return this.windowHeight * 0.9;
    },
    width() {
      return this.windowWidth * 0.65;
    },
    info_title() {
      return this.selected_origin != '' && this.selected_destination != '' ?
        `${this.countries[this.selected_origin]['pais_estudio']} a ${this.countries[this.selected_destination]['pais_estudio']}` :
        'Seleccione origen y destino para ver detalle de flujo de estudios.'
    },
    selected() {
      return this.selected_origin != '' && this.selected_destination != '' ?
        this.summary[`${this.selected_origin}-${this.selected_destination}`] : null;
    },
    possible_origins() {
      return Object.entries(this.countries).filter(c => c[1]['dest'].length > 0);
    }
  },
  mounted() {
    this.$nextTick(function () {
      window.addEventListener('resize', this.getWindowWidth);
      window.addEventListener('resize', this.getWindowHeight);
      this.getWindowWidth();
      this.getWindowHeight();
      this.initialize();
      this.getData();
    })

  },
  methods: {
    initialize() {

      this.svg = d3.select("#container");
      this.defs = this.svg.append("defs");
      this.projection = d3.geoMercator()
        .scale(this.width / 2 / Math.PI)
        //.scale(100)
        .translate([this.width / 2, this.height / 2])
        .rotate([50, 0])
        .precision(.1);
      this.path = d3.geoPath().projection(this.projection);
      this.graticule = d3.geoGraticule();


      d3.json("data/datos_agregados.json",
        (error, json) => {
          this.countries = json.countries;
          this.data = Object.values(json.summary);
          this.summary = json.summary;
          this.ofos = json.ofos;

          this.pathGenerator = pathGeneratorConst(this.projection, this.path, this.countries);
          this.gradientGenerator = gradientGeneratorConst(this.projection, this.path, this.countries);
          this.linearGradients = this.data.map((d, i) => this.gradientGenerator(this.defs, d, i));
          this.linearGradients.forEach(gradient => {
            gradient.selectAll(".stop")
              .data(this.colours)
              .enter().append("stop")
              .attr("offset", (_, i) => i / (this.colours.length - 1))
              .attr("stop-color", d => d);
          });

          this.svg.append("defs")
            .append("path")
            .datum({
              type: "Sphere"
            })
            .attr("id", "sphere")
            .attr("d", this.path);

          this.svg.append("use")
            .attr("class", "stroke")
            .attr("xlink:href", "#sphere");

          this.svg.append("use")
            .attr("class", "fill")
            .attr("xlink:href", "#sphere");

          this.svg.append("path")
            .datum(this.graticule)
            .attr("class", "graticule")
            .attr("d", this.path);

          // console.log(d3.extent(data, d => d.overall.amount))

          const strokeScale = d3.scaleLinear()
            .domain(d3.extent(this.data, d => d.overall.amount))
            .range([0.5, 4]);

          this.svg.append('rect')
            .attr('width', this.width)
            .attr('height', this.height)
            .attr('fill', "none")
            .on("click", () => {
              this.selected_origin = '';
            });

          this.svg.selectAll(".route")
            .data(this.data)
            .enter()
            .append("path")
            .attr("class", d => `route o-${d.origen} d-${d.destino}`)
            .attr("id", (d, i) => `route-${i}`)
            .attr("d", d => this.pathGenerator(d))
            // .attr("stroke-width", d => strokeScale(d.overall.amount));
            .attr("stroke-width", 0.5);

          this.svg.selectAll(".route")
            .attr('stroke', "#0F4F99");
          // .attr('stroke', (_, i) => `url(#animate-gradient-${i})`);

          this.svg.selectAll('circle')
            .data(Object.entries(this.countries))
            .enter()
            .append('circle')
            .attr('id', d => 'c' + d[0])
            .attr('r', d => d[1]['dest'].length > 0 ? 2 : 0)
            .attr('fill', "#f2f2f2")
            .attr('stroke', "#2989D8")
            .attr('cx', d => this.projection([d[1].long, d[1].lat])[0])
            .attr('cy', d => this.projection([d[1].long, d[1].lat])[1])
            .on('mouseenter', (d, i, el) => {
              d3.select(el[i]).attr('r', 8);
            })
            .on('mouseleave', (d, i, el) => {
              d3.select(el[i]).attr('r', 2);
            })
            .on('click', (d, i, el) => {
              if (this.selected_origin == '' && this.countries[d[0]]['dest'].length > 0) {
                this.selected_origin = d[0];
              } else if (this.selected_origin == d[0]) {
                this.selected_origin = '';
              } else {
                if (this.countries[this.selected_origin]['dest'].includes(d[0])) {
                  this.selected_destination = d[0];
                }
              }

            })
            .append('title')
            .text(d => d[1]['pais_estudio'])


          this.renderMap();
        })

    },
    getWindowWidth(event) {
      this.windowWidth = document.documentElement.clientWidth;
    },
    getWindowHeight(event) {
      this.windowHeight = document.documentElement.clientHeight;
    },
    getData() {
      d3.json(this.FILEPATH, (error, data) => {});
    },
    renderMap() {
      d3.json("data/map.json",
        (error, world) => {
          if (error) throw error;

          this.svg.insert("path", ".graticule")
            .datum(topojson.feature(world, world.objects.land))
            .attr("class", "land")
            .attr("d", this.path);

          this.svg.insert("path", ".graticule")
            .datum(topojson.mesh(world, world.objects.countries, function (a, b) {
              return a !== b;
            }))
            .attr("class", "boundary")
            .attr("d", this.path);
        });
    },
    resize() {},
    applySelection() {

      this.svg.selectAll(`.route`)
        .attr('stroke', 'grey')
        .attr("stroke-width", 0.5);

      const class_string = '.route' +
        (this.selected_origin != '' ? `.o-${this.selected_origin}` : '') +
        (this.selected_destination != '' ? `.d-${this.selected_destination}` : '');
      if (class_string != '.route') {
        this.svg.selectAll(class_string)
          .transition()
          .duration(100)
          .attr('stroke', (d, i) => `url(#animate-gradient-${d.origen + d.destino})`)
          .attr("stroke-width", 2);
      } else {
        this.svg.selectAll(`.route`)
          .transition()
          .duration(100)
          .attr('stroke', "#0F4F99")
          .attr("stroke-width", 0.5);
      }
      if (this.selected_origin != '') {
        this.svg.selectAll('circle')
          .transition()
          .duration(100)
          .attr('r', d => d[0] == this.selected_origin ? 8 :
            (this.countries[this.selected_origin]['dest'].includes(d[0]) ? 3 : 0));
      } else {
        this.svg.selectAll('circle')
          .transition()
          .duration(100)
          .attr('r', d => d[1]['dest'].length > 0 ? 2 : 0);
      }
    }
  },
  watch: {
    windowWidth: function (val) {
      this.resize();
    },
    windowHeight: function (val) {
      this.resize();
    },
    selected_origin: function (val) {
      if (val != '') {
        if (!this.countries[val]['dest'].includes(this.selected_destination)) {
          this.selected_destination = '';
        }
      } else {
        this.selected_destination = '';
      }
      this.applySelection();
    },
    selected_destination: function (val) {
      this.applySelection();
    }
  }
});