$( window ).load(function() {
	var numDays = 37;
	var positions = [];
	var scrollTop = $(window).scrollTop();
	var cities = ["NEW YORK CITY","STRASBOURG, FRANCE","DOWNTOWN LOS ANGELES",
	"NEW YORK CITY","SEATTLE, WASHINGTON","SEATTLE, WASHINGTON", "DOWNTOWN SEATTLE",
	"GRANADA, SPAIN", "GRANADA, SPAIN", "GRANADA, SPAIN", "MACAU", "STRASBOURG, FRANCE",
	"HONG KONG", "PARIS, FRANCE", "NEW YORK CITY", "STRASBOURG, FRANCE", "MACAU",
	"BARCELONA, SPAIN", "IBIZA, SPAIN", "BARCELONA, SPAIN", "FEZ, MOROCCO",
	"PARIS, FRANCE", "TAIPEI, TAIWAN", "STRASBOURG, FRANCE", "MADRID, SPAIN",
	"GALLE, SRI LANKA", "PHUKET, THAILAND", "BARCELONA, SPAIN", "XINBEI, TAIWAN",
	"MACAU", "BERLIN, GERMANY", "SAHARA, MOROCCO", "MARRAKECH, MOROCCO",
	"HATTON, SRI LANKA", "FORMENTERA, SPAIN", "LAGUNA BEACH, CALIFORNIA",
  "KOREATOWN, LOS ANGELES"
	];

  var descriptions =
  ["Home away from home. Not really, but yes Koreatown feed me well during my 5 years in SoCal.",

  "Everyday for 100 days, I will document photographs of windows that I've passed by during my travels and illustrate the stories of lives living within through the lens of my imagination. All photographs are originals taken by me during my travels.",

  "Photo taken in June2014 during my post college graduation backpacking trip around Europe. Across from the river I took this photo and thought to myself \"What a good life we have here.\"",

  "Photo taken early 2014 during a visit to my friend's place in dtla as we geared up for our grad show for ArtCenter.",

  "Photo taken April2012 during a trip to spring break. Windows and balconies in nyc had me like 😚.",

  "Photo taken Dec2013 when I was invited to spend Christmas with my friend @rchoung and her family. I can't tell whether this couple is exchanging a romantic conversation or arguing. They look pretty serious though.",

  "Photo taken Dec2013. Little did they know of the life that was surrounding them.",

  "Photo taken Dec2013. Zoomed into a penthouse in the skies hoping to see a glimpse of life inside.",

  "Photo taken May2014. During my post college graduation trip around Europe. Granada, Spain was my favorite place because everywhere I went screamed, \"...and they lived happily ever after.\" 🏡",

  "Photo taken May2015. Walking through the maze like streets of Granada, I heard the most amazing singing and guitar strumming from a window. I thought, \"I could be in a movie right now.\" 💃",

  "Photo taken May2015. Me looking in, you looking out as I began my tour through the maze alleys of Granada, Spain.",

  "Photo taken April2011 while on a spontaneous 1night 1day trip through Macau after missing our ferry to Guangzhou from Hong Kong. There was a man standing in the shadow and he was definitely naked from that split second glimpse I caught.",

  "Photo taken June2014 Strasbourg located in the Alsace region of France is a scene right out of Disney classics. Here is Belle having tea time at Snow White's place. 🏡🍵🌼",

  "Photo taken March2011 from above a fancy ass ⭐️⭐️⭐️⭐️⭐️ Langham hotel in central Hong Kong. @kusoss2 I sat by the window observing the apartments, penthouses, roof houses, and other tall buildings with the like vigilance of playing \"where's Waldo\".",

  "Photo taken in July2014 I would have avoided Paris if it wasn't for my Spaniard friends who suggested me to pay a visit to the Eiffel Tower. The best part of Paris was hanging with @kewrater eating to my heart's content. 😋🍟☕️🍪🍫🍰",

  "Photo taken October2014 during a weekend trip to NYC visiting my childhood friend for the first time in 5years. This is a photo from her place in the financial district as my window obsession continues.",

  "Photo taken June2014 This is a view from the restroom of my airbnb place. After being sick for an entire day in bed, I finally had the energy to take shower, but mine wasn't this fancy. 🛀",

  "A lot of balconies in Macau remind me of bird cages. These apartments looked so dingy inside, which made me even more curious to know what mundane but individually unique lives the locals lived behind the safety bars of their cages. @kusoss2 p.s. Did that make sense? It's so late right now.",

  "June2014 View from my hostel in Barcelona . My memories of kindred souls in Spain.",

  "Taking a siesta while air drying our wet linen towels and clothes from playing out in the sun.",

  "Photo taken June2014 \"Eixample\" is district in Barcelona characterized by their strict grid pattern crossed by wide avenues, and square blocks with chamfered corners. On the interior of each square block there is an open square to bring light into the interior from the front and back of the house. What a whimsical array of life in a box! 😍🏡🏫",

  "Photo taken June2014 while traveling through Morocco. Fez is town in Morocco famous for their leather tanneries. This #pharmacy that I came across was love at first sight. If I could open a healing cafe in the future this architecture would be it. 😍🏠 I have 10,000 stories to share from a one week trip through Morocco. 💁🌍",

  "Remembering that time in Paris when I was 3min late for breakfast and was denied not even a cup of OJ.",

  "Photo from a family trip to Taiwan. Street Market Food. Hot spring baths. Constant rain.",

  "Party starts at noon in the small seemingly quiet town of Strasbourg. 💃🔥",

  "This is a view from my kind friend's balcony in Madrid. Post graduation, I flew to Madrid wearing a 15lb backpack with zero plans as to where I would head next. 4 days later, I was out on the road around southern Spain, but thank God for this kind soul, I had a place to come back to whenever I got tired. Thank you friend and friends for all the sweet memories in Spain. 💃🍺🍞🍷🍴",

  "Photo taken Dec2012 during a grad trip to Sri Lanka. Following a week of non stop partying with the MBAs, I extended my stay one week longer to do some solo traveling around Sri Lanka. In Hikkadua, the beach where I was staying, I met an Italian girl and a Portuguese boy, and we decided to take a day trip to Galle to see the mosques.",

  "Calm following an eye opening night out at the lady boy district in Phuket. 👀 😳 An overnight stay in Phuket before flying out to Krabi en route to KoPhiPhi, backpacker's party destination.",

  "Photo taken from the hostel balcony in Barcelona. There was awesome vibes in the hostel. We always had good breeze, good music, good company, and a bottle of wine at hand. 🍷",

  "Photo from a family trip to Taiwan with my brother @sol73088 as our tour guide and mandarin translator. This was a view of some apartments facing the natural hot spring in the Wulai district of Taiwan.",

  "Legit window photo from a day trip to Macau with @kusoss2. What if we could just transport ourselves and fly away from our balconies?",

  "Photo from my last days of backpacking around Europe. I drank a whole lot of ClubMate, ate never ending currywurst, got lost in city, and watched Germany win the WorldCup. 🍻 ⚽️ 🎉 Young vibrant city filled with hipsters. Oh by the way, that's a dude rolling out of his apartment on a grocery conveyer belt.",

  "Photo from that time I spontaneously booked a ticket to Morocco lured by the country's color pallet. This photo is from a 3night 4day trip out to the Sahara desert. I would say the greatest in the world.",

  "Photo taken June 2014 during a solo backpacking trip to Morocco. Remember that time I walked into a spice shop and ended up spending an hour talking to the old spice man about books and traveling over several hot cups of Moroccan mint tea.",

  "During a trip to Sri Lanka, I boarded a local bus headed for Hatton. Hatton because I thought that's where I could meet a lot of elephants, but I was very wrong. There were no elephants here. Instead, on the bus there was a gentleman who helped me and my friend from getting gypped by the bus driver on our bus fare. I said \"Thank you. What's your name? Where you headed?\" He said he lived in Hatton with his family, and invited me and my friend for lunch the next day. This is a photo from their house as we were leaving. Small house but lots of love. The mom presented me with pink leggings as I left.",

  "I took this photo of the old man walking around his rooftop and thought Formentera would be a good place to retire. Quiet but just a boat ride away from Ibiza's party scene. That's me in the black wetsuit trying to get in on that retirement plan. ",

  "While you're looking out at the waves, I'm looking at you wishing I could be part of that world."
  ];

	for(var x = numDays; x>0;x--){
		var top = $('#day-'+x).position().top-100;
		changeDays(scrollTop,top,x);
		changeCity(scrollTop,top,x);
		positions.push(top);
	}

  $("#day-description").hide();
  var closed = true;
  $("#day-link").click(function(){
    if(closed) {
      $("#day-link").text("Close");
      $("#day-description").show();
    }
    else {
      $("#day-link").text("Read Story");
      $("#day-description").hide();
    }
    closed = !closed;
  })

	$(window).scroll(function() {
		scrollTop = $(window).scrollTop();
		$.each(positions, function( index, value ) {
			changeDays(scrollTop,value,numDays-index);
			changeCity(scrollTop,value,numDays-index-1);
		});
	});
	function changeDays(scrollTop,value,index){
		if (scrollTop>=value){
				day = pad((index), 3 );
				$("#day-tracker").text('DAY '+day);
		}
	};
	function changeCity(scrollTop,value,index){
		if (scrollTop>=value){
				city = cities[index];
        description = descriptions[index];
				$("#city-tracker").text(city);
        $("#day-description").text(description);
		}
	};
	function pad (str, max) {
		str = str.toString();
		return str.length < max ? pad("0" + str, max) : str;
	}

	/*$(document).ready(function(){
            $('#container').beforeAfter();
    });*/
});
