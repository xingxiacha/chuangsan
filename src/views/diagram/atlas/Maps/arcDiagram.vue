<template>
  <figure class="highcharts-figure">
    <div id="container"></div>
  </figure>
</template>
<style lang='scss'>
.highcharts-strong {
  font-weight: bold;
}

.highcharts-figure,
.highcharts-data-table table {
  min-width: 320px;
  max-width: 600px;
  margin: 1em auto;
}

.highcharts-data-table table {
  font-family: Verdana, sans-serif;
  border-collapse: collapse;
  border: 1px solid #ebebeb;
  margin: 10px auto;
  text-align: center;
  width: 100%;
  max-width: 500px;
}

.highcharts-data-table caption {
  padding: 1em 0;
  font-size: 1.2em;
  color: #555;
}

.highcharts-data-table th {
  font-weight: 600;
  padding: 0.5em;
}

.highcharts-data-table td,
.highcharts-data-table th,
.highcharts-data-table caption {
  padding: 0.5em;
}

.highcharts-data-table thead tr,
.highcharts-data-table tr:nth-child(even) {
  background: #f8f8f8;
}

.highcharts-data-table tr:hover {
  background: #f1f7ff;
}
</style>
<script>
// 导入chart组件
import Highcharts from "highcharts";
import timeline from "highcharts/modules/timeline";
timeline(Highcharts);

export default {
  mounted: function () {
    this.HighchartsData();
  },
  methods: {
    HighchartsData() {

      Highcharts.chart("container", {
        chart: {
          type: "timeline",
        },
        accessibility: {
          screenReaderSection: {
            beforeChartFormat:
              "<h5>{chartTitle}</h5>" +
              "<div>{typeDescription}</div>" +
              "<div>{chartSubtitle}</div>" +
              "<div>{chartLongdesc}</div>" +
              "<div>{viewTableButton}</div>",
          },
          point: {
            valueDescriptionFormat:
              "{index}. {point.label}. {point.description}.",
          },
        },
        xAxis: {
          visible: false,
        },
        yAxis: {
          visible: false,
        },
        title: {
          text: "Timeline of Space Exploration",
        },
        subtitle: {
          text: 'Info source: <a href="https://en.wikipedia.org/wiki/Timeline_of_space_exploration">www.wikipedia.org</a>',
        },
        colors: [
          "#4185F3",
          "#427CDD",
          "#406AB2",
          "#3E5A8E",
          "#3B4A68",
          "#363C46",
        ],
        series: [
          {
            data: [
              {
                name: "First dogs",
                label: "1951: First dogs in space",
                description:
                  "22 July 1951 First dogs in space (Dezik and Tsygan) ",
              },
              {
                name: "Sputnik 1",
                label: "1957: First artificial satellite",
                description:
                  "4 October 1957 First artificial satellite. First signals from space.",
              },
              {
                name: "First human spaceflight",
                label: "1961: First human spaceflight (Yuri Gagarin)",
                description:
                  "First human spaceflight (Yuri Gagarin), and the first human-crewed orbital flight",
              },
              {
                name: "First human on the Moon",
                label: "1969: First human on the Moon",
                description:
                  "First human on the Moon, and first space launch from a celestial body other than the Earth. First sample return from the Moon",
              },
              {
                name: "First space station",
                label: "1971: First space station",
                description:
                  "Salyut 1 was the first space station of any kind, launched into low Earth orbit by the Soviet Union on April 19, 1971.",
              },
              {
                name: "Apollo–Soyuz Test Project",
                label: "1975: First multinational manned mission",
                description:
                  "The mission included both joint and separate scientific experiments, and provided useful engineering experience for future joint US–Russian space flights, such as the Shuttle–Mir Program and the International Space Station.",
              },
            ],
          },
        ],
      });

    },
  },
};
</script>
