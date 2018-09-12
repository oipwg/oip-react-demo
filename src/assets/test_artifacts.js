import { Artifact } from 'oip-index';

const biddy_bums = {  
	"oip042":{  
		"artifact":{  
			"floAddress":"FLZXRaHzVPxJJfaoM32CWT4GZHuj2rx63k",
			"timestamp":1536362615,
			"type":"Audio",
			"subtype":"Album",
			"info":{  
				"title":"On the Verge and in the Moment",
				"description":"The Biddy Bums",
				"year":2004
			},
			"details":{  
				"artist":"The Biddy Bums",
				"genre":"Alternative & Punk",
				"company":"Hot Bone Records"
			},
			"storage":{  
				"network":"IPFS",
				"location":"QmNhGURRoUCRY63AJ3kNvt5GLDJiwP87JPvoND9G6CfJNi",
				"files":[  
					{  
						"dname":"DJ Day",
						"duration":207,
						"fname":"01 DJ Day.mp3",
						"fsize":4612610,
						"sugPlay":10,
						"type":"Audio",
						"sugBuy":1000,
						"subtype":"Album Track"
					},
					{  
						"dname":"I Digress",
						"duration":174,
						"fname":"02 I Digress.mp3",
						"fsize":3961129,
						"sugPlay":10,
						"type":"Audio",
						"sugBuy":1000,
						"subtype":"Album Track"
					},
					{  
						"dname":"Snow White",
						"duration":338,
						"fname":"03 Snow White.mp3",
						"fsize":7229570,
						"sugPlay":10,
						"type":"Audio",
						"sugBuy":1000,
						"subtype":"Album Track"
					},
					{  
						"dname":"Offbeat",
						"duration":252,
						"fname":"04 Offbeat.mp3",
						"fsize":5509656,
						"sugPlay":10,
						"type":"Audio",
						"sugBuy":1000,
						"subtype":"Album Track"
					},
					{  
						"dname":"Mrs. D'Veau",
						"duration":308,
						"fname":"05 Mrs. D'Veau.mp3",
						"fsize":6641807,
						"sugPlay":10,
						"type":"Audio",
						"sugBuy":1000,
						"subtype":"Album Track"
					},
					{  
						"dname":"Shit Yeah",
						"duration":45,
						"fname":"06 Shit Yeah.mp3",
						"fsize":1368719,
						"sugPlay":10,
						"type":"Audio",
						"sugBuy":1000,
						"subtype":"Album Track"
					},
					{  
						"dname":"H.A.P.P.Y.",
						"duration":273,
						"fname":"07 H.A.P.P.Y..mp3",
						"fsize":5938598,
						"sugPlay":10,
						"type":"Audio",
						"sugBuy":1000,
						"subtype":"Album Track"
					},
					{  
						"dname":"Mississippi",
						"duration":197,
						"fname":"08 Mississippi.mp3",
						"fsize":4409920,
						"sugPlay":10,
						"type":"Audio",
						"sugBuy":1000,
						"subtype":"Album Track"
					},
					{  
						"dname":"Farewell Problems",
						"duration":294,
						"fname":"09 Farewell Problems.mp3",
						"fsize":6361256,
						"sugPlay":10,
						"type":"Audio",
						"sugBuy":1000,
						"subtype":"Album Track"
					},
					{  
						"dname":"Lady J",
						"duration":241,
						"fname":"10 Lady J.mp3",
						"fsize":5299121,
						"sugPlay":10,
						"type":"Audio",
						"sugBuy":1000,
						"subtype":"Album Track"
					},
					{  
						"dname":"Bluelight and Chik-a-layin",
						"duration":1108,
						"fname":"11 Bluelight and Chik-a-layin.mp3",
						"fsize":22626666,
						"sugPlay":10,
						"type":"Audio",
						"sugBuy":1000,
						"subtype":"Alternate Track"
					},
					{  
						"dname":"Bluelight (Live)",
						"duration":395,
						"fname":"Bluelight (Live).mp4",
						"fsize":23819228,
						"type":"Audio",
						"subtype":"Music Video"
					},
					{  
						"fname":"cover_art.jpg",
						"fsize":58319,
						"type":"Image",
						"subtype":"cover"
					}
				]
			},
			"payment":{  
				"fiat":"USD",
				"scale":"1000:1",
				"tokens":{  

				},
				"addresses":{  
					"BTC":"1LqBGSKuX5yYUonjxT5qGfpUsXKYYWeabA",
					"FLO":"FTogNNXik7eiHZw5uN2KMe4cvcr7GCEjbZ",
					"LTC":"LUWPbpM43E2p7ZSh8cyTBEkvpHmr3cB8Ez"
				},
				"platform":15,
				"influencer":15,
				"maxdisc":30
			},
			"signature":"IJRLDQNG+9m9Hv44PPXkmhCcA36tPiVCH8Gdcw02oCL0TMrMSkrekVnG4vkxG0DlIMgYcPkaDXAIcgQthgtsIno="
		}
	},
	"txid":"b4e6c9e86d14ca3565e57fed8b482d742a7a1cff0dd4cabfe9e3ea29efb3211c",
	"publisher":"FLZXRaHzVPxJJfaoM32CWT4GZHuj2rx63k",
	"publisherName":"OstlerDev"
}

export const TheBiddyBums = new Artifact(biddy_bums)