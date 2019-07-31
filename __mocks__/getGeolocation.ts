const getGeolocation = {
	"results": [{
		"address_components": [{
				"long_name": "02050",
				"short_name": "02050",
				"types": [
					"postal_code"
				]
			},
			{
				"long_name": "Marshfield",
				"short_name": "Marshfield",
				"types": [
					"locality",
					"political"
				]
			},
			{
				"long_name": "Plymouth County",
				"short_name": "Plymouth County",
				"types": [
					"administrative_area_level_2",
					"political"
				]
			},
			{
				"long_name": "Massachusetts",
				"short_name": "MA",
				"types": [
					"administrative_area_level_1",
					"political"
				]
			},
			{
				"long_name": "United States",
				"short_name": "US",
				"types": [
					"country",
					"political"
				]
			}
		],
		"formatted_address": "Marshfield, MA 02050, USA",
		"geometry": {
			"bounds": {
				"northeast": {
					"lat": 42.2037299,
					"lng": -70.63502799999999
				},
				"southwest": {
					"lat": 42.0525898,
					"lng": -70.7879798
				}
			},
			"location": {
				"lat": 42.110535,
				"lng": -70.70495199999999
			},
			"location_type": "APPROXIMATE",
			"viewport": {
				"northeast": {
					"lat": 42.2037299,
					"lng": -70.63502799999999
				},
				"southwest": {
					"lat": 42.0525898,
					"lng": -70.7879798
				}
			}
		},
		"partial_match": true,
		"place_id": "ChIJnZhyCi6n5IkRmQ_yKsX6weY",
		"types": [
			"postal_code"
		]
	}],
	"status": "OK"
};

export default getGeolocation;