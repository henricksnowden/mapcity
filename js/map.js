/* ===================================================================
 * Trasicio Maina < cisiomaina@gmail.com>
 *
 * 08-Jan-2019
 * ------------------------------------------------------------------- */

var map = null, infobox, dataLayer;

function GetMap() {
    map = new Microsoft.Maps.Map(document.getElementById("myMap"),
        {
            credentials: "Ap9gcOqVjTE1TIN5S3RUdmmjNK1aSWdkVHEMAQAVvFAMBMwNlLhzGI6XuxtVDEYU",
            center: new Microsoft.Maps.Location(40, -1)
        });
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

    //This are co - ordinates from the first file "data_2 (1).csv"
    //Below is the data arranged as (lat , long) and description values (where they've been given).
    var pin1 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.78334, 39.670486));
    pin1.Title = "Kizingo nursery";
    pin1.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin1, 'click', displayInfobox);
    dataLayer.push(pin1);

    var pin2 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-1.49397130662931, 39.6826171875));
    pin2.Title = "Kamatish's School";
    pin2.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin2, 'click', displayInfobox);
    dataLayer.push(pin2);

    var pin3 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(6.31529853833003, 33.22265625));
    pin3.Title = "Test after commenting";
    pin3.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin3, 'click', displayInfobox);
    dataLayer.push(pin3);

    var pin4 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(7.044651, 38.487855));
    pin4.Title = "ict";
    pin4.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin4, 'click', displayInfobox);
    dataLayer.push(pin4);

    var pin5 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(3.16245553023785, 39.90234375));
    pin5.Title = "Test Add Data";
    pin5.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin5, 'click', displayInfobox);
    dataLayer.push(pin5);

    var pin6 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(6.66460756217257, 12.83203125));
    pin6.Title = "Mercy Image test";
    pin6.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin6, 'click', displayInfobox);
    dataLayer.push(pin6);

    var pin7 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-0.703107352436478, 34.98046875));
    pin7.Title = "Kizingo nursery";
    pin7.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin7, 'click', displayInfobox);
    dataLayer.push(pin7);

    var pin8 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.485907, 39.88699));
    pin8.Title = "Kizingo nursery";
    pin8.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin8, 'click', displayInfobox);
    dataLayer.push(pin8);

    var pin9 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.785518, 39.682212));
    pin9.Title = "Kizingo nursery";
    pin9.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin9, 'click', displayInfobox);
    dataLayer.push(pin9);

    var pin10 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.479406, 39.744492));
    pin10.Title = "Kizingo nursery";
    pin10.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin10, 'click', displayInfobox);
    dataLayer.push(pin10);

    var pin11 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.438276, 39.766075));
    pin11.Title = "Kizingo nursery";
    pin11.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin11, 'click', displayInfobox);
    dataLayer.push(pin11);

    var pin12 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.464137, 39.694638));
    pin12.Title = "Kizingo nursery";
    pin12.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin12, 'click', displayInfobox);
    dataLayer.push(pin12);

    var pin13 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.475631, 39.92941));
    pin13.Title = "Kizingo nursery";
    pin13.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin13, 'click', displayInfobox);
    dataLayer.push(pin13);

    var pin14 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(3.16245553023785, 37.6171875));
    pin14.Title = "Kizingo nursery";
    pin14.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin14, 'click', displayInfobox);
    dataLayer.push(pin14);

    var pin15 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(6.31529853833003, 39.19921875));
    pin15.Title = "Kizingo nursery";
    pin15.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin15, 'click', displayInfobox);
    dataLayer.push(pin15);

    var pin16 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(60.186639, 24.958656));
    pin16.Title = "Kizingo nursery";
    pin16.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin16, 'click', displayInfobox);
    dataLayer.push(pin16);

    var pin17 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.784295, 39.672554));
    pin17.Title = "Kizingo nursery";
    pin17.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin17, 'click', displayInfobox);
    dataLayer.push(pin17);

    var pin18 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.810652, 39.672738));
    pin18.Title = "Kizingo nursery";
    pin18.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin18, 'click', displayInfobox);
    dataLayer.push(pin18);

    var pin19 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.581305, 39.744397));
    pin19.Title = "Kizingo nursery";
    pin19.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin19, 'click', displayInfobox);
    dataLayer.push(pin19);

    var pin20 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.485453, 39.78441));
    pin20.Title = "Kizingo nursery";
    pin20.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin20, 'click', displayInfobox);
    dataLayer.push(pin20);

    var pin21 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.779383, 39.657263));
    pin21.Title = "Kizingo nursery";
    pin21.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin21, 'click', displayInfobox);
    dataLayer.push(pin21);

    var pin22 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.784535, 39.671826));
    pin22.Title = "";
    pin22.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin22, 'click', displayInfobox);
    dataLayer.push(pin22);

    var pin23 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.784556, 39.672475));
    pin23.Title = "";
    pin23.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin23, 'click', displayInfobox);
    dataLayer.push(pin23);

    var pin24 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.784556, 39.672475));
    pin24.Title = "";
    pin24.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin24, 'click', displayInfobox);
    dataLayer.push(pin24);

    var pin25 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.428868, 39.735729));
    pin25.Title = "";
    pin25.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin25, 'click', displayInfobox);
    dataLayer.push(pin25);

    var pin26 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.523658, 39.767899));
    pin26.Title = "";
    pin26.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin26, 'click', displayInfobox);
    dataLayer.push(pin26);

    var pin27 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.554167, 39.790009));
    pin27.Title = "";
    pin27.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin27, 'click', displayInfobox);
    dataLayer.push(pin27);

    var pin28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.693123, 39.75381));
    pin28.Title = "";
    pin28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin28, 'click', displayInfobox);
    dataLayer.push(pin28);

    var pin29 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.653812, 39.753211));
    pin29.Title = "";
    pin29.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin29, 'click', displayInfobox);
    dataLayer.push(pin29);

    var pin30 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.784535, 39.671826));
    pin30.Title = "";
    pin30.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin30, 'click', displayInfobox);
    dataLayer.push(pin30);

    var pin31 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.58077, 39.808995));
    pin31.Title = "";
    pin31.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin31, 'click', displayInfobox);
    dataLayer.push(pin31);

    var pin32 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.784535, 39.671826));
    pin32.Title = "";
    pin32.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin32, 'click', displayInfobox);
    dataLayer.push(pin32);

    var pin33 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.565923, 39.717463));
    pin33.Title = "";
    pin33.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin33, 'click', displayInfobox);
    dataLayer.push(pin33);

    var pin34 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.43866, 39.765704));
    pin34.Title = "";
    pin34.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin34, 'click', displayInfobox);
    dataLayer.push(pin34);

    var pin35 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.554127, 39.790419));
    pin35.Title = "";
    pin35.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin35, 'click', displayInfobox);
    dataLayer.push(pin35);

    var pin36 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.395598, 39.749063));
    pin36.Title = "";
    pin36.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin36, 'click', displayInfobox);
    dataLayer.push(pin36);

    var pin37 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.692336, 39.727588 ));
    pin37.Title = "";
    pin37.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin37, 'click', displayInfobox);
    dataLayer.push(pin37);

    var pin38 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.784556, 39.672475));
    pin38.Title = "";
    pin38.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin38, 'click', displayInfobox);
    dataLayer.push(pin38);

    var pin39 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.8104, 39.673222));
    pin39.Title = "";
    pin39.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin39, 'click', displayInfobox);
    dataLayer.push(pin39);

    var pin40 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.485691, 39.784538));
    pin40.Title = "";
    pin40.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin40, 'click', displayInfobox);
    dataLayer.push(pin40);

    var pin41 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.3072097, 36.9054487));
    pin41.Title = "";
    pin41.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin41, 'click', displayInfobox);
    dataLayer.push(pin41);

    var pin42 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(7.044967, 38.486948));
    pin42.Title = "";
    pin42.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin42, 'click', displayInfobox);
    dataLayer.push(pin42);

    var pin43 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(7.049572, 38.479348));
    pin43.Title = "";
    pin43.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin43, 'click', displayInfobox);
    dataLayer.push(pin43);

    var pin44 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.33293467955381, 36.94702148438));
    pin44.Title = "";
    pin44.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin44, 'click', displayInfobox);
    dataLayer.push(pin44);

    var pin45 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.60747827674708, 37.5178005498057));
    pin45.Title = "";
    pin45.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin45, 'click', displayInfobox);
    dataLayer.push(pin45);

    var pin46 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 2.2790618517717, 40.1165771484357));
    pin46.Title = "";
    pin46.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin46, 'click', displayInfobox);
    dataLayer.push(pin46);

    var pin47 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(39.88699, -3.485907));
    pin47.Title = "";
    pin47.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin47, 'click', displayInfobox);
    dataLayer.push(pin47);

    var pin48 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.452099, 39.894083));
    pin48.Title = "";
    pin48.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin48, 'click', displayInfobox);
    dataLayer.push(pin48);

    var pin49 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.2814496704798, 36.8344116210981));
    pin49.Title = "";
    pin49.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin49, 'click', displayInfobox);
    dataLayer.push(pin49);

    var pin50 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.04290865246845, 37.751952409744));
    pin50.Title = "";
    pin50.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin50, 'click', displayInfobox);
    dataLayer.push(pin50);

    var pin51 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.63581099999997, 39.6873680000002));
    pin51.Title = "";
    pin51.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin51, 'click', displayInfobox);
    dataLayer.push(pin51);

    var pin52 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.61492200000003, 39.7037699999999));
    pin52.Title = "";
    pin52.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin52, 'click', displayInfobox);
    dataLayer.push(pin52);

    var pin53 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.61492200000003, 39.7037699999999));
    pin53.Title = "";
    pin53.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin53, 'click', displayInfobox);
    dataLayer.push(pin53);

    var pin54 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.61492200000003, 39.7037699999999));
    pin54.Title = "";
    pin54.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin54, 'click', displayInfobox);
    dataLayer.push(pin54);

    var pin55 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.30451374360599, 36.8316650390614));
    pin55.Title = "";
    pin55.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin55, 'click', displayInfobox);
    dataLayer.push(pin55);

    var pin56 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.70263021360231, 37.0568847656253));
    pin56.Title = "";
    pin56.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin56, 'click', displayInfobox);
    dataLayer.push(pin56);

    var pin57 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.38335875103052, 37.0682957949826));
    pin57.Title = "";
    pin57.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin57, 'click', displayInfobox);
    dataLayer.push(pin57);

    var pin58 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 0.246333317044422, 36.0089349746684));
    pin58.Title = "";
    pin58.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin58, 'click', displayInfobox);
    dataLayer.push(pin58);

    var pin59 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.48617337108684, 39.7954144766241));
    pin59.Title = "";
    pin59.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin59, 'click', displayInfobox);
    dataLayer.push(pin59);

    var pin60 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(35.9492781406315, -1.15376972395517));
    pin60.Title = "";
    pin60.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin60, 'click', displayInfobox);
    dataLayer.push(pin60);

    var pin61 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(39.683369, -3.59661));
    pin61.Title = "";
    pin61.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin61, 'click', displayInfobox);
    dataLayer.push(pin61);

    var pin62 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(39.694913, -3.464617));
    pin62.Title = "";
    pin62.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin62, 'click', displayInfobox);
    dataLayer.push(pin62);

    var pin63 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(39.5507812500002, 3.51342104563999));
    pin63.Title = "";
    pin63.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin63, 'click', displayInfobox);
    dataLayer.push(pin63);

    var pin64 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(2.10889865924314, 35.5078125));
    pin64.Title = "";
    pin64.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin64, 'click', displayInfobox);
    dataLayer.push(pin64);

    var pin65 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 0.329588026053569, 37.3370361328125));
    pin65.Title = "";
    pin65.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin65, 'click', displayInfobox);
    dataLayer.push(pin65);

    var pin66 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(4.21494314139065, 32.6953125));
    pin66.Title = "";
    pin66.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin66, 'click', displayInfobox);
    dataLayer.push(pin66);

    var pin67 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.40610883543515, 28.125));
    pin67.Title = "";
    pin67.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin67, 'click', displayInfobox);
    dataLayer.push(pin67);

    var pin68 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(3.51342104564006, 28.125));
    pin68.Title = "";
    pin68.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin68, 'click', displayInfobox);
    dataLayer.push(pin68);

    var pin69 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(0, 28.828125));
    pin69.Title = "";
    pin69.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin69, 'click', displayInfobox);
    dataLayer.push(pin69);

    var pin70 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(0, 28.828125));
    pin70.Title = "";
    pin70.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin70, 'click', displayInfobox);
    dataLayer.push(pin70);

    var pin71 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(2.10889865924314, 37.6171875));
    pin71.Title = "";
    pin71.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin71, 'click', displayInfobox);
    dataLayer.push(pin71);

    var pin72 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(0, 36.0791015625));
    pin72.Title = "";
    pin72.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin72, 'click', displayInfobox);
    dataLayer.push(pin72);

    var pin73 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(0.703107352436478, 37.705078125));
    pin73.Title = "";
    pin73.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin73, 'click', displayInfobox);
    dataLayer.push(pin73);

    var pin74 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 0.922811662685694, 36.40869140625));
    pin74.Title = "";
    pin74.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin74, 'click', displayInfobox);
    dataLayer.push(pin74);

    var pin75 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(0.351560293992271, 34.98046875));
    pin75.Title = "";
    pin75.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin75, 'click', displayInfobox);
    dataLayer.push(pin75);

    var pin76 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(60.18697389, 24.9588684));
    pin76.Title = "";
    pin76.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin76, 'click', displayInfobox);
    dataLayer.push(pin76);

    var pin77 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 13.2399454992863, 37.96875));
    pin77.Title = "";
    pin77.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin77, 'click', displayInfobox);
    dataLayer.push(pin77);

    var pin78 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(0.439448816413977, 36.0791015625));
    pin78.Title = "";
    pin78.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin78, 'click', displayInfobox);
    dataLayer.push(pin78);

    var pin79 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(0, 35.5078125));
    pin79.Title = "";
    pin79.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin79, 'click', displayInfobox);
    dataLayer.push(pin79);

    var pin80 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 0.615222552406841, 36.8701171875));
    pin80.Title = "";
    pin80.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin80, 'click', displayInfobox);
    dataLayer.push(pin80);

    var pin81 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.40610883543515, 37.177734375));
    pin81.Title = "";
    pin81.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin81, 'click', displayInfobox);
    dataLayer.push(pin81);

    var pin82 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(6.44389236551807, 48.9135575294495));
    pin82.Title = "";
    pin82.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin82, 'click', displayInfobox);
    dataLayer.push(pin82);

    var pin83 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.75753681130831, 36.7822265625));
    pin83.Title = "";
    pin83.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin83, 'click', displayInfobox);
    dataLayer.push(pin83);

    var pin84 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(0.0878905905308369, 36.0791015625));
    pin84.Title = "";
    pin84.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin84, 'click', displayInfobox);
    dataLayer.push(pin84);

    var pin85 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.04913570391281, 37.1200561523438));
    pin85.Title = "";
    pin85.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin85, 'click', displayInfobox);
    dataLayer.push(pin85);

    var pin86 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 0.516350432377746, 37.001953125));
    pin86.Title = "";
    pin86.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin86, 'click', displayInfobox);
    dataLayer.push(pin86);

    var pin87 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(10.3149192858132, 36.9140625));
    pin87.Title = "";
    pin87.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin87, 'click', displayInfobox);
    dataLayer.push(pin87);

    var pin88 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.795858, 39.674096));
    pin88.Title = "";
    pin88.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin88, 'click', displayInfobox);
    dataLayer.push(pin88);

    var pin89 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 0.922811662685694, 36.80419921875));
    pin89.Title = "";
    pin89.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin89, 'click', displayInfobox);
    dataLayer.push(pin89);

    var pin90 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(4.21494314139065, 34.1015625));
    pin90.Title = "";
    pin90.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin90, 'click', displayInfobox);
    dataLayer.push(pin90);

    var pin91 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 0.351560293992271, 37.705078125));
    pin91.Title = "";
    pin91.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin91, 'click', displayInfobox);
    dataLayer.push(pin91);

    var pin92 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.483925, 39.913624));
    pin92.Title = "";
    pin92.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin92, 'click', displayInfobox);
    dataLayer.push(pin92);

    var pin93 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(15.9613290815966, 53.26171875));
    pin93.Title = "";
    pin93.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin93, 'click', displayInfobox);
    dataLayer.push(pin93);

    var pin94 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.580884, 39.808837));
    pin94.Title = "";
    pin94.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin94, 'click', displayInfobox);
    dataLayer.push(pin94);

    var pin95 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.452016, 39.894336));
    pin95.Title = "";
    pin95.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin95, 'click', displayInfobox);
    dataLayer.push(pin95);

    var pin96 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.452099, 39.894083));
    pin96.Title = "";
    pin96.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin96, 'click', displayInfobox);
    dataLayer.push(pin96);

    var pin97 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(7.0529118, 38.4968615));
    pin97.Title = "";
    pin97.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin97, 'click', displayInfobox);
    dataLayer.push(pin97);

    var pin98 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(4.91583280131316, 38.49609375));
    pin98.Title = "";
    pin98.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin98, 'click', displayInfobox);
    dataLayer.push(pin98);

    var pin99 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(6.31529853833003, 38.49609375));
    pin99.Title = "";
    pin99.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin99, 'click', displayInfobox);
    dataLayer.push(pin99);

    var pin100 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(28.6134594240044, 14.4140625));
    pin100.Title = "";
    pin100.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin100, 'click', displayInfobox);
    dataLayer.push(pin100);

    var pin101 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(42.8115217450979, 83.3203125));
    pin101.Title = "";
    pin101.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin101, 'click', displayInfobox);
    dataLayer.push(pin101);

    var pin102 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(11.8673509114593, -5.625));
    pin102.Title = "";
    pin102.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin102, 'click', displayInfobox);
    dataLayer.push(pin102);

    var pin103 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(18.3128108464255, 20.390625));
    pin103.Title = "";
    pin103.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin103, 'click', displayInfobox);
    dataLayer.push(pin103);

    var pin104 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(19.642587534013, 29.1796875));
    pin104.Title = "";
    pin104.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin104, 'click', displayInfobox);
    dataLayer.push(pin104);

    var pin105 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 6.25114158066831, 34.7209167480469));
    pin105.Title = "";
    pin105.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin105, 'click', displayInfobox);
    dataLayer.push(pin105);

    var pin106 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 6.25114158066831, 34.7209167480469));
    pin106.Title = "";
    pin106.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin106, 'click', displayInfobox);
    dataLayer.push(pin106);

    var pin107 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(16.6361918783977, 29.53125));
    pin107.Title = "";
    pin107.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin107, 'click', displayInfobox);
    dataLayer.push(pin107);

    var pin108 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(18.3128108464255, 38.671875));
    pin108.Title = "";
    pin108.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin108, 'click', displayInfobox);
    dataLayer.push(pin108);

    var pin109 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(0.703107352436491, 39.0234375));
    pin109.Title = "";
    pin109.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin109, 'click', displayInfobox);
    dataLayer.push(pin109);

    var pin110 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(2.81137119333114, 38.3203125));
    pin110.Title = "";
    pin110.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin110, 'click', displayInfobox);
    dataLayer.push(pin110);

    var pin111 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(2.81137119333114, 38.3203125));
    pin111.Title = "";
    pin111.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin111, 'click', displayInfobox);
    dataLayer.push(pin111);

    var pin112 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.620423, 39.796771));
    pin112.Title = "";
    pin112.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin112, 'click', displayInfobox);
    dataLayer.push(pin112);

    var pin113 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.652977, 39.752981));
    pin113.Title = "";
    pin113.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin113, 'click', displayInfobox);
    dataLayer.push(pin113);

    var pin114 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.692456, 39.727522));
    pin114.Title = "";
    pin114.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin114, 'click', displayInfobox);
    dataLayer.push(pin114);

    var pin115 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(2.81137119333114, 38.3203125));
    pin115.Title = "";
    pin115.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin115, 'click', displayInfobox);
    dataLayer.push(pin115);

    var pin116 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 14.2643830875626, 33.75));
    pin116.Title = "";
    pin116.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin116, 'click', displayInfobox);
    dataLayer.push(pin116);

    var pin117 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 14.2643830875626, 33.75));
    pin117.Title = "";
    pin117.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin117, 'click', displayInfobox);
    dataLayer.push(pin117);

    var pin117 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(2.81137119333114, 38.3203125));
    pin117.Title = "";
    pin117.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin117, 'click', displayInfobox);
    dataLayer.push(pin117);

    var pin118 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(4.21494314139065, 49.921875));
    pin118.Title = "";
    pin118.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin118, 'click', displayInfobox);
    dataLayer.push(pin118);

    var pin119 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(4.21494314139065, 49.921875));
    pin119.Title = "";
    pin119.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin119, 'click', displayInfobox);
    dataLayer.push(pin119);

    var pin120 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.79008, 39.686182));
    pin120.Title = "";
    pin120.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin120, 'click', displayInfobox);
    dataLayer.push(pin120);

    var pin121 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(20.632784250388, 35.5078125));
    pin121.Title = "";
    pin121.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin121, 'click', displayInfobox);
    dataLayer.push(pin121);

    var pin122 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(19.9733487861106, 11.25));
    pin122.Title = "";
    pin122.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin122, 'click', displayInfobox);
    dataLayer.push(pin122);

    var pin123 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(15.6230368315283, 27.0703125));
    pin123.Title = "";
    pin123.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin123, 'click', displayInfobox);
    dataLayer.push(pin123);

    var pin124 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(3.65048183614677, 39.375));
    pin124.Title = "";
    pin124.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin124, 'click', displayInfobox);
    dataLayer.push(pin124);

    var pin125 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(8.61089423955451, 35.1589965820313));
    pin125.Title = "";
    pin125.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin125, 'click', displayInfobox);
    dataLayer.push(pin125);

    // This are co-ordinates from the second file "data_3 (1).csv" Note that the markers used for the following points
    // differ from the ones above as per instructions given.


    var pin126 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location());
    pin126.Title = "";
    pin126.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin126, 'click', displayInfobox);
    dataLayer.push(pin126);

    var pin127 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location());
    pin127.Title = "";
    pin127.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin127, 'click', displayInfobox);
    dataLayer.push(pin127);

    var pin128 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location());
    pin128.Title = "";
    pin128.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pin128, 'click', displayInfobox);
    dataLayer.push(pin128);







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