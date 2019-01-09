/* ===================================================================
 * Trasicio Maina < cisiomaina@gmail.com>
 *
 * 08-Jan-2019
 * ------------------------------------------------------------------- */

var map = null, infobox, dataLayer;

  function GetMap() 
  {
      map = new Microsoft.Maps.Map(document.getElementById("myMap"),
         {
            credentials: "Ap9gcOqVjTE1TIN5S3RUdmmjNK1aSWdkVHEMAQAVvFAMBMwNlLhzGI6XuxtVDEYU",
            center: new Microsoft.Maps.Location(40, -1)});
     dataLayer = new Microsoft.Maps.EntityCollection();
     map.entities.push(dataLayer);
     map.setView({ zoom: 5 });
   var infoboxLayer = new Microsoft.Maps.EntityCollection();
     map.entities.push(infoboxLayer);
     infobox = new Microsoft.Maps.Infobox();
     infoboxLayer.push(infobox);
     AddData();
  }

function AddData() {
//Below is the data arranged as (lat , long) and description values (where they've been given).
    var pin1 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.78334, 39.670486));
    pin1.Title = "Kizingo nursery";
    pin1.Description = "Pin 1 description";
    Microsoft.Maps.Events.addHandler(pin1, 'click', displayInfobox);
    dataLayer.push(pin1);

    var pin2 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-1.49397130662931, 39.6826171875, ));
    pin2.Title = "Kamatish's School";
    pin2.Description = "Pin 2 description";
    Microsoft.Maps.Events.addHandler(pin2, 'click', displayInfobox);
    dataLayer.push(pin2);

var pin3 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(6.31529853833003, 33.22265625));
    pin3.Title = "Test after commenting";
    pin3.Description = "Pin 3 description";
    Microsoft.Maps.Events.addHandler(pin3, 'click', displayInfobox);
    dataLayer.push(pin3);

var pin4 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(7.044651, 38.487855));
    pin4.Title = "ict";
    pin4.Description = "Pin 4 description";
    Microsoft.Maps.Events.addHandler(pin4, 'click', displayInfobox);
    dataLayer.push(pin4);

var pin5 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(3.16245553023785, 39.90234375));
    pin5.Title = "Test Add Data";
    pin5.Description = "Pin 5 description";
    Microsoft.Maps.Events.addHandler(pin5, 'click', displayInfobox);
    dataLayer.push(pin5);

var pin6 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(6.66460756217257, 12.83203125));
    pin6.Title = "Mercy Image test";
    pin6.Description = "Pin 6 description";
    Microsoft.Maps.Events.addHandler(pin6, 'click', displayInfobox);
    dataLayer.push(pin6);

var pin7 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-0.703107352436478, 34.98046875));
    pin7.Title = "Kizingo nursery";
    pin7.Description = "Pin 7 description";
    Microsoft.Maps.Events.addHandler(pin7, 'click', displayInfobox);
    dataLayer.push(pin7);

var pin8 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.485907, 39.88699));
    pin8.Title = "Kizingo nursery";
    pin8.Description = "Pin 8 description";
    Microsoft.Maps.Events.addHandler(pin8, 'click', displayInfobox);
    dataLayer.push(pin8);

var pin9 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.785518, 39.682212));
    pin9.Title = "Kizingo nursery";
    pin9.Description = "Pin 9 description";
    Microsoft.Maps.Events.addHandler(pin9, 'click', displayInfobox);
    dataLayer.push(pin9);

var pin10 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.479406, 39.744492));
    pin10.Title = "Kizingo nursery";
    pin10.Description = "Pin 10 description";
    Microsoft.Maps.Events.addHandler(pin10, 'click', displayInfobox);
    dataLayer.push(pin10);

var pin11 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.438276, 39.766075));
    pin11.Title = "Kizingo nursery";
    pin11.Description = "Pin 11 description";
    Microsoft.Maps.Events.addHandler(pin11, 'click', displayInfobox);
    dataLayer.push(pin11);

var pin12 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.464137, 39.694638));
    pin12.Title = "Kizingo nursery";
    pin12.Description = "Pin 12 description";
    Microsoft.Maps.Events.addHandler(pin12, 'click', displayInfobox);
    dataLayer.push(pin12);

var pin13 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.475631, 39.92941));
    pin13.Title = "Kizingo nursery";
    pin13.Description = "Pin 13 description";
    Microsoft.Maps.Events.addHandler(pin13, 'click', displayInfobox);
    dataLayer.push(pin13);

    var pin14 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(3.16245553023785, 37.6171875));
    pin14.Title = "Kizingo nursery";
    pin14.Description = "Pin 14 description";
    Microsoft.Maps.Events.addHandler(pin14, 'click', displayInfobox);
    dataLayer.push(pin14);

    var pin15 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(6.31529853833003, 39.19921875));
    pin15.Title = "Kizingo nursery";
    pin15.Description = "Pin 15 description";
    Microsoft.Maps.Events.addHandler(pin15, 'click', displayInfobox);
    dataLayer.push(pin15);

    var pin16 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(60.186639, 24.958656));
    pin16.Title = "Kizingo nursery";
    pin16.Description = "Pin 16 description";
    Microsoft.Maps.Events.addHandler(pin16, 'click', displayInfobox);
    dataLayer.push(pin16);

    var pin17 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.784295, 39.672554));
    pin17.Title = "Kizingo nursery";
    pin17.Description = "Pin 17 description";
    Microsoft.Maps.Events.addHandler(pin17, 'click', displayInfobox);
    dataLayer.push(pin17);

    var pin18 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.810652, 39.672738));
    pin18.Title = "Kizingo nursery";
    pin18.Description = "Pin 18 description";
    Microsoft.Maps.Events.addHandler(pin18, 'click', displayInfobox);
    dataLayer.push(pin18);

    var pin19 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.581305, 39.744397));
    pin19.Title = "Kizingo nursery";
    pin19.Description = "Pin 19 description";
    Microsoft.Maps.Events.addHandler(pin19, 'click', displayInfobox);
    dataLayer.push(pin19);

    var pin20 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.485453, 39.78441));
    pin20.Title = "Kizingo nursery";
    pin20.Description = "Pin 20 description";
    Microsoft.Maps.Events.addHandler(pin20, 'click', displayInfobox);
    dataLayer.push(pin20);

    var pin21 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.779383, 39.657263));
    pin21.Title = "Kizingo nursery";
    pin21.Description = "Pin 21 description";
    Microsoft.Maps.Events.addHandler(pin21, 'click', displayInfobox);
    dataLayer.push(pin21);


}

function displayInfobox(e) {
    if (e.targetType == 'pushpin') {
        infobox.setLocation(e.target.getLocation());
                 
        infobox.setOptions({
            visible: true,
            title: e.target.Title,
            description: e.target.Description
        });
    }
}