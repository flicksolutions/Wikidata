
class SPARQLQueryDispatcher {
	constructor( endpoint ) {
		this.endpoint = endpoint;
	}

	query( sparqlQuery ) {
		const fullUrl = this.endpoint + '?query=' + encodeURIComponent( sparqlQuery );
		const headers = { 'Accept': 'application/sparql-results+json' };

		return fetch( fullUrl, { headers } ).then( body => body.json() );
	}
}

const endpointUrl = 'https://query.wikidata.org/sparql';
const sparqlQuery = `#Länder nach Einwohnerzahl
# defaultView:BubbleChart
SELECT DISTINCT ?countryLabel ?population
{
  ?country wdt:P31 wd:Q6256 ;
           wdt:P1082 ?population .
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en" }
}
GROUP BY ?population ?countryLabel
ORDER BY DESC(?population)`;

const queryDispatcher = new SPARQLQueryDispatcher( endpointUrl );

let data = "empty";

const runquery = () => {
  queryDispatcher.query( sparqlQuery ).then( result => {
    let labels;
    let datasetValues;
    //console.log(result);
    labels = result.results.bindings.map( object => { 
      //console.log(object.countryLabel.value) 
      return object.countryLabel.value;
      });
    //console.log(labels);

    datasetValues = result.results.bindings.map( object => { 
      //console.log(object.countryLabel.value) 
      return object.population.value / 1000000;
      });

    data = {
      labels: labels,
      datasets: [{
        name: "Population", type: "bar",
        values: datasetValues
      }],

    }
    //console.log(data);
    } )
};

const createChart = () => {
  //console.log(data);
  let chart = new frappe.Chart("#chart", {
    data: data,

      title: "Länder nach Population",
      type: 'bar', // or 'bar', 'line', 'pie', 'percentage'
      height: 300,
      colors: ['purple', '#ffa3ef', 'light-blue'],
      axisOptions: {
        yAxisMode: "tick",
        xIsSeries: 1,
        
      },
      tooltipOptions: {
        formatTooltipX: d => (d + '').toUpperCase(),
        formatTooltipY: d => d + 'Mio. Menschen',
      }
  });
}


