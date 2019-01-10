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

    /*
    This are co - ordinates from the file "data_2 (1).csv"
    The data arranged as (lat , long) and description values (where they've been given).
    NOTE that the data in CSVs is arranged as (long, lat) and so it has had to be re-organized.
    */
    var pA = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.78334, 39.670486));
    pA.Title = "Kizingo nursery";
    pA.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA, 'click', displayInfobox);
    dataLayer.push(pA);

    var pB = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-1.49397130662931, 39.6826171875));
    pB.Title = "Kamatish's School";
    pB.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pB, 'click', displayInfobox);
    dataLayer.push(pB);

    var pC = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(6.31529853833003, 33.22265625));
    pC.Title = "Test after commenting";
    pC.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pC, 'click', displayInfobox);
    dataLayer.push(pC);

    var pD = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(7.044651, 38.487855));
    pD.Title = "ict";
    pD.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pD, 'click', displayInfobox);
    dataLayer.push(pD);

    var pE = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(3.16245553023785, 39.90234375));
    pE.Title = "Test Add Data";
    pE.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pE, 'click', displayInfobox);
    dataLayer.push(pE);

    var pF = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(6.66460756217257, 12.83203125));
    pF.Title = "Mercy Image test";
    pF.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pF, 'click', displayInfobox);
    dataLayer.push(pF);

    var pG = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-0.703107352436478, 34.98046875));
    pG.Title = "Kizingo nursery";
    pG.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pG, 'click', displayInfobox);
    dataLayer.push(pG);

    var pH = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.485907, 39.88699));
    pH.Title = "Buru Sec School";
    pH.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pH, 'click', displayInfobox);
    dataLayer.push(pH);

    var pJ = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.785518, 39.682212));
    pJ.Title = "Sayuni nursery school";
    pJ.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pJ, 'click', displayInfobox);
    dataLayer.push(pJ);

    var pA0 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.479406, 39.744492));
    pA0.Title = "Mwazangombe pr sch";
    pA0.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA0, 'click', displayInfobox);
    dataLayer.push(pA0);

    var pA1 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.438276, 39.766075));
    pA1.Title = "Kachororoni";
    pA1.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA1, 'click', displayInfobox);
    dataLayer.push(pA1);

    var pA2 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.464137, 39.694638));
    pA2.Title = "Bale";
    pA2.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA2, 'click', displayInfobox);
    dataLayer.push(pA2);

    var pA3 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.475631, 39.92941));
    pA3.Title = "Migodomani";
    pA3.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA3, 'click', displayInfobox);
    dataLayer.push(pA3);

    var pA4 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(3.16245553023785, 37.6171875));
    pA4.Title = "Ufuoni3";
    pA4.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA4, 'click', displayInfobox);
    dataLayer.push(pA4);

    var pA5 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(6.31529853833003, 39.19921875));
    pA5.Title = "Kipepeo";
    pA5.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA5, 'click', displayInfobox);
    dataLayer.push(pA5);

    var pA6 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(60.186639, 24.958656));
    pA6.Title = "Simon's School";
    pA6.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA6, 'click', displayInfobox);
    dataLayer.push(pA6);

    var pA7 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.784295, 39.672554));
    pA7.Title = "Kallio Art School";
    pA7.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA7, 'click', displayInfobox);
    dataLayer.push(pA7);

    var pA8 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.810652, 39.672738));
    pA8.Title = "Kizingo pre school";
    pA8.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA8, 'click', displayInfobox);
    dataLayer.push(pA8);

    var pA9 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.581305, 39.744397));
    pA9.Title = "Vwevwesi nursery school";
    pA9.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA9, 'click', displayInfobox);
    dataLayer.push(pA9);

    var pB0 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.485453, 39.78441));
    pB0.Title = "Magogoni";
    pB0.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pB0, 'click', displayInfobox);
    dataLayer.push(pB0);

    var pB1 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.779383, 39.657263));
    pB1.Title = "Danicha";
    pB1.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pB1, 'click', displayInfobox);
    dataLayer.push(pB1);

    var pB2 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.784535, 39.671826));
    pB2.Title = "Garashi nursery";
    pB2.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pB2, 'click', displayInfobox);
    dataLayer.push(pB2);

    var pB3 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.784556, 39.672475));
    pB3.Title = "Paul Harris Sec";
    pB3.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pB3, 'click', displayInfobox);
    dataLayer.push(pB3);

    var pB4 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.784556, 39.672475));
    pB4.Title = "Kizingo primary";
    pB4.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pB4, 'click', displayInfobox);
    dataLayer.push(pB4);

    var pB5 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.428868, 39.735729));
    pB5.Title = "Kizingo primary";
    pB5.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pB5, 'click', displayInfobox);
    dataLayer.push(pB5);

    var pB6 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.523658, 39.767899));
    pB6.Title = "Mangudho";
    pB6.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pB6, 'click', displayInfobox);
    dataLayer.push(pB6);

    var pB7 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.554167, 39.790009));
    pB7.Title = "Sokoke pri sch";
    pB7.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pB7, 'click', displayInfobox);
    dataLayer.push(pB7);

    var pB8 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.693123, 39.75381));
    pB8.Title = "Mrima wa kuku";
    pB8.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pB8, 'click', displayInfobox);
    dataLayer.push(pB8);

    var pB9 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.653812, 39.753211));
    pB9.Title = "Ngamani";
    pB9.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pB9, 'click', displayInfobox);
    dataLayer.push(pB9);

    var pC0 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.784535, 39.671826));
    pC0.Title = "Mikuluni";
    pC0.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pC0, 'click', displayInfobox);
    dataLayer.push(pC0);

    var pC1 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.58077, 39.808995));
    pC1.Title = "Paul Harris Sec";
    pC1.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pC1, 'click', displayInfobox);
    dataLayer.push(pC1);

    var pC2 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.784535, 39.671826));
    pC2.Title = "Konjora spe";
    pC2.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pC2, 'click', displayInfobox);
    dataLayer.push(pC2);

    var pC3 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.565923, 39.717463));
    pC3.Title = "Paul Harris Sec";
    pC3.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pC3, 'click', displayInfobox);
    dataLayer.push(pC3);

    var pC4 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.43866, 39.765704));
    pC4.Title = "Timboni";
    pC4.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pC4, 'click', displayInfobox);
    dataLayer.push(pC4);

    var pC5 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.554127, 39.790419));
    pC5.Title = "Bale";
    pC5.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pC5, 'click', displayInfobox);
    dataLayer.push(pC5);

    var pC6 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.395598, 39.749063));
    pC6.Title = "Mrima wa kuku";
    pC6.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pC6, 'click', displayInfobox);
    dataLayer.push(pC6);

    var pC7 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.692336, 39.727588));
    pC7.Title = "Madamani";
    pC7.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pC7, 'click', displayInfobox);
    dataLayer.push(pC7);

    var pC8 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.784556, 39.672475));
    pC8.Title = "Dunguni";
    pC8.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pC8, 'click', displayInfobox);
    dataLayer.push(pC8);

    var pC9 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.8104, 39.673222));
    pC9.Title = "Kizingo primary";
    pC9.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pC9, 'click', displayInfobox);
    dataLayer.push(pC9);

    var pD0 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.485691, 39.784538));
    pD0.Title = "Vwevwesi primary school";
    pD0.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pD0, 'click', displayInfobox);
    dataLayer.push(pD0);

    var pD1 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.3072097, 36.9054487));
    pD1.Title = "Danicha";
    pD1.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pD1, 'click', displayInfobox);
    dataLayer.push(pD1);

    var pD2 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(7.044967, 38.486948));
    pD2.Title = "Vision plaza";
    pD2.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pD2, 'click', displayInfobox);
    dataLayer.push(pD2);

    var pD3 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(7.049572, 38.479348));
    pD3.Title = "gib";
    pD3.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pD3, 'click', displayInfobox);
    dataLayer.push(pD3);

    var pD4 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.33293467955381, 36.94702148438));
    pD4.Title = "eshe";
    pD4.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pD4, 'click', displayInfobox);
    dataLayer.push(pD4);

    var pD5 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.60747827674708, 37.5178005498057));
    pD5.Title = "Pangani Primary School";
    pD5.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pD5, 'click', displayInfobox);
    dataLayer.push(pD5);

    var pD6 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 2.2790618517717, 40.1165771484357));
    pD6.Title = "Part primary school";
    pD6.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pD6, 'click', displayInfobox);
    dataLayer.push(pD6);

    var pD7 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(39.88699, -3.485907));
    pD7.Title = "Garsen Pri Sch";
    pD7.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pD7, 'click', displayInfobox);
    dataLayer.push(pD7);

    var pD8 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.452099, 39.894083));
    pD8.Title = "Sayuni nursery school";
    pD8.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pD8, 'click', displayInfobox);
    dataLayer.push(pD8);

    var pD9 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.2814496704798, 36.8344116210981));
    pD9.Title = "Kararacha primary school";
    pD9.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pD9, 'click', displayInfobox);
    dataLayer.push(pD9);

    var pE0 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.04290865246845, 37.751952409744));
    pE0.Title = "Buru baptist";
    pE0.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pE0, 'click', displayInfobox);
    dataLayer.push(pE0);

    var pE1 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.63581099999997, 39.6873680000002));
    pE1.Title = "buruburu baptist primary school";
    pE1.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pE1, 'click', displayInfobox);
    dataLayer.push(pE1);

    var pE2 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.61492200000003, 39.7037699999999));
    pE2.Title = "Makalangeni";
    pE2.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pE2, 'click', displayInfobox);
    dataLayer.push(pE2);

    var pE3 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.61492200000003, 39.7037699999999));
    pE3.Title = "Mwapula";
    pE3.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pE3, 'click', displayInfobox);
    dataLayer.push(pE3);

    var pE4 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.61492200000003, 39.7037699999999));
    pE4.Title = "Mwapula";
    pE4.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pE4, 'click', displayInfobox);
    dataLayer.push(pE4);

    var pE5 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.30451374360599, 36.8316650390614));
    pE5.Title = "Mwapula";
    pE5.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pE5, 'click', displayInfobox);
    dataLayer.push(pE5);

    var pE6 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.70263021360231, 37.0568847656253));
    pE6.Title = "Alliance high school";
    pE6.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pE6, 'click', displayInfobox);
    dataLayer.push(pE6);

    var pE7 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.38335875103052, 37.0682957949826));
    pE7.Title = "Strathmore";
    pE7.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pE7, 'click', displayInfobox);
    dataLayer.push(pE7);

    var pE8 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 0.246333317044422, 36.0089349746684));
    pE8.Title = "Mwapulas";
    pE8.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pE8, 'click', displayInfobox);
    dataLayer.push(pE8);

    var pE9 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.48617337108684, 39.7954144766241));
    pE9.Title = "Nakuru high school";
    pE9.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pE9, 'click', displayInfobox);
    dataLayer.push(pE9);

    var pF0 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(35.9492781406315, -1.15376972395517));
    pF0.Title = "Ezamoyo";
    pF0.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pF0, 'click', displayInfobox);
    dataLayer.push(pF0);

    var pF1 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(39.683369, -3.59661));
    pF1.Title = "Narok high school";
    pF1.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pF1, 'click', displayInfobox);
    dataLayer.push(pF1);

    var pF2 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(39.694913, -3.464617));
    pF2.Title = "Mbonga1";
    pF2.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pF2, 'click', displayInfobox);
    dataLayer.push(pF2);

    var pF3 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(39.5507812500002, 3.51342104563999));
    pF3.Title = "Migodomani";
    pF3.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pF3, 'click', displayInfobox);
    dataLayer.push(pF3);

    var pF4 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(2.10889865924314, 35.5078125));
    pF4.Title = "Maranda High School";
    pF4.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pF4, 'click', displayInfobox);
    dataLayer.push(pF4);

    var pF5 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 0.329588026053569, 37.3370361328125));
    pF5.Title = "Nyeri high school";
    pF5.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pF5, 'click', displayInfobox);
    dataLayer.push(pF5);

    var pF6 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(4.21494314139065, 32.6953125));
    pF6.Title = "Bukolwe sec";
    pF6.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pF6, 'click', displayInfobox);
    dataLayer.push(pF6);

    var pF7 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.40610883543515, 28.125));
    pF7.Title = "Kericho High";
    pF7.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pF7, 'click', displayInfobox);
    dataLayer.push(pF7);

    var pF8 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(3.51342104564006, 28.125));
    pF8.Title = "Boniface Test";
    pF8.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pF8, 'click', displayInfobox);
    dataLayer.push(pF8);

    var pF9 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(0, 28.828125));
    pF9.Title = "Test Boniface";
    pF9.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pF9, 'click', displayInfobox);
    dataLayer.push(pF9);

    var pG0 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(0, 28.828125));
    pG0.Title = "Boniface Part of";
    pG0.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pG0, 'click', displayInfobox);
    dataLayer.push(pG0);

    var pG1 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(2.10889865924314, 37.6171875));
    pG1.Title = "Boniface Part of";
    pG1.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pG1, 'click', displayInfobox);
    dataLayer.push(pG1);

    var pG2 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(0, 36.0791015625));
    pG2.Title = "Buchenya High school";
    pG2.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pG2, 'click', displayInfobox);
    dataLayer.push(pG2);

    var pG3 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(0.703107352436478, 37.705078125));
    pG3.Title = "Lunza sec school";
    pG3.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pG3, 'click', displayInfobox);
    dataLayer.push(pG3);

    var pG4 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 0.922811662685694, 36.40869140625));
    pG4.Title = "Image Test";
    pG4.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pG4, 'click', displayInfobox);
    dataLayer.push(pG4);

    var pG5 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(0.351560293992271, 34.98046875));
    pG5.Title = "Part-of-test 2";
    pG5.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pG5, 'click', displayInfobox);
    dataLayer.push(pG5);

    var pG6 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(60.18697389, 24.9588684));
    pG6.Title = "Koma Sec School";
    pG6.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pG6, 'click', displayInfobox);
    dataLayer.push(pG6);

    var pG7 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 13.2399454992863, 37.96875));
    pG7.Title = "kallio";
    pG7.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pG7, 'click', displayInfobox);
    dataLayer.push(pG7);

    var pG8 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(0.439448816413977, 36.0791015625));
    pG8.Title = "Buchenya Sec";
    pG8.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pG8, 'click', displayInfobox);
    dataLayer.push(pG8);

    var pG9 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(0, 35.5078125));
    pG9.Title = "Buchoke High";
    pG9.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pG9, 'click', displayInfobox);
    dataLayer.push(pG9);

    var pH0 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 0.615222552406841, 36.8701171875));
    pH0.Title = "Test school";
    pH0.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pH0, 'click', displayInfobox);
    dataLayer.push(pH0);

    var pH1 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.40610883543515, 37.177734375));
    pH1.Title = "Test sec School";
    pH1.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pH1, 'click', displayInfobox);
    dataLayer.push(pH1);

    var pH2 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(6.44389236551807, 48.9135575294495));
    pH2.Title = "Backbone test";
    pH2.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pH2, 'click', displayInfobox);
    dataLayer.push(pH2);

    var pH3 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.75753681130831, 36.7822265625));
    pH3.Title = "hello part of";
    pH3.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pH3, 'click', displayInfobox);
    dataLayer.push(pH3);

    var pH4 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(0.0878905905308369, 36.0791015625));
    pH4.Title = "Backbone Sch";
    pH4.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pH4, 'click', displayInfobox);
    dataLayer.push(pH4);

    var pH5 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.04913570391281, 37.1200561523438));
    pH5.Title = "Backbone test";
    pH5.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pH5, 'click', displayInfobox);
    dataLayer.push(pH5);

    var pH6 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 0.516350432377746, 37.001953125));
    pH6.Title = "Thika High School";
    pH6.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pH6, 'click', displayInfobox);
    dataLayer.push(pH6);

    var pH7 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(10.3149192858132, 36.9140625));
    pH7.Title = "BackBone High";
    pH7.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pH7, 'click', displayInfobox);
    dataLayer.push(pH7);

    var pH8 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.795858, 39.674096));
    pH8.Title = "Butere High";
    pH8.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pH8, 'click', displayInfobox);
    dataLayer.push(pH8);

    var pH9 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 0.922811662685694, 36.80419921875));
    pH9.Title = "Neema nursery school";
    pH9.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pH9, 'click', displayInfobox);
    dataLayer.push(pH9);

    var pJ0 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(4.21494314139065, 34.1015625));
    pJ0.Title = "Backbone 2";
    pJ0.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pJ0, 'click', displayInfobox);
    dataLayer.push(pJ0);

    var pJ1 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 0.351560293992271, 37.705078125));
    pJ1.Title = "Mpeketoni Sch";
    pJ1.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pJ1, 'click', displayInfobox);
    dataLayer.push(pJ1);

    var pJ2 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.483925, 39.913624));
    pJ2.Title = "Mpeke High School";
    pJ2.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pJ2, 'click', displayInfobox);
    dataLayer.push(pJ2);

    var pJ3 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(15.9613290815966, 53.26171875));
    pJ3.Title = "Chumani village nursery school";
    pJ3.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pJ3, 'click', displayInfobox);
    dataLayer.push(pJ3);

    var pJ4 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.580884, 39.808837));
    pJ4.Title = "name of image";
    pJ4.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pJ4, 'click', displayInfobox);
    dataLayer.push(pJ4);

    var pJ5 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.452016, 39.894336));
    pJ5.Title = "Konjora";
    pJ5.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pJ5, 'click', displayInfobox);
    dataLayer.push(pJ5);

    var pJ6 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.452099, 39.894083));
    pJ6.Title = "Kararacha pre school";
    pJ6.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pJ6, 'click', displayInfobox);
    dataLayer.push(pJ6);

    var pJ7 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(7.0529118, 38.4968615));
    pJ7.Title = "Kararacha primary";
    pJ7.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pJ7, 'click', displayInfobox);
    dataLayer.push(pJ7);

    var pJ8 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(4.91583280131316, 38.49609375));
    pJ8.Title = "Hawassa University";
    pJ8.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pJ8, 'click', displayInfobox);
    dataLayer.push(pJ8);

    var pJ9 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(6.31529853833003, 38.49609375));
    pJ9.Title = "Musaimo Primary School";
    pJ9.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pJ9, 'click', displayInfobox);
    dataLayer.push(pJ9);

    var pA00 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(28.6134594240044, 14.4140625));
    pA00.Title = "Shule Jipya";
    pA00.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA00, 'click', displayInfobox);
    dataLayer.push(pA00);

    var pA01 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(42.8115217450979, 83.3203125));
    pA01.Title = "adc";
    pA01.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA01, 'click', displayInfobox);
    dataLayer.push(pA01);

    var pA02 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(11.8673509114593, -5.625));
    pA02.Title = "Test Subforms";
    pA02.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA02, 'click', displayInfobox);
    dataLayer.push(pA02);

    var pA03 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(18.3128108464255, 20.390625));
    pA03.Title = "Masomo Matiang'i";
    pA03.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA03, 'click', displayInfobox);
    dataLayer.push(pA03);

    var pA04 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(19.642587534013, 29.1796875));
    pA04.Title = "June test1";
    pA04.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA04, 'click', displayInfobox);
    dataLayer.push(pA04);

    var pA05 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 6.25114158066831, 34.7209167480469));
    pA05.Title = "JLT";
    pA05.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA05, 'click', displayInfobox);
    dataLayer.push(pA05);

    var pA06 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 6.25114158066831, 34.7209167480469));
    pA06.Title = "Test2";
    pA06.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA06, 'click', displayInfobox);
    dataLayer.push(pA06);

    var pA07 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(16.6361918783977, 29.53125));
    pA07.Title = "Test 3";
    pA07.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA07, 'click', displayInfobox);
    dataLayer.push(pA07);

    var pA08 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(18.3128108464255, 38.671875));
    pA08.Title = "fryt";
    pA08.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA08, 'click', displayInfobox);
    dataLayer.push(pA08);

    var pA09 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(0.703107352436491, 39.0234375));
    pA09.Title = "Tuzo Primary school";
    pA09.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA09, 'click', displayInfobox);
    dataLayer.push(pA09);

    var pA10 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(2.81137119333114, 38.3203125));
    pA10.Title = "Backslash Test";
    pA10.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA10, 'click', displayInfobox);
    dataLayer.push(pA10);

    var pA11 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(2.81137119333114, 38.3203125));
    pA11.Title = "Theo School";
    pA11.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA11, 'click', displayInfobox);
    dataLayer.push(pA11);

    var pA12 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.620423, 39.796771));
    pA12.Title = "Theo School";
    pA12.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA12, 'click', displayInfobox);
    dataLayer.push(pA12);

    var pA13 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.652977, 39.752981));
    pA13.Title = "Kwa maya";
    pA13.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA13, 'click', displayInfobox);
    dataLayer.push(pA13);

    var pA14 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.692456, 39.727522));
    pA14.Title = "Mikuluni";
    pA14.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA14, 'click', displayInfobox);
    dataLayer.push(pA14);

    var pA15 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(2.81137119333114, 38.3203125));
    pA15.Title = "Dunguni";
    pA15.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA15, 'click', displayInfobox);
    dataLayer.push(pA15);

    var pA16 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 14.2643830875626, 33.75));
    pA16.Title = "Theo School";
    pA16.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA16, 'click', displayInfobox);
    dataLayer.push(pA16);

    var pA17 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 14.2643830875626, 33.75));
    pA17.Title = "Release test 22.1";
    pA17.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA17, 'click', displayInfobox);
    dataLayer.push(pA17);

    var pA17 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(2.81137119333114, 38.3203125));
    pA17.Title = "Release test 22.1";
    pA17.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA17, 'click', displayInfobox);
    dataLayer.push(pA17);

    var pA18 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(4.21494314139065, 49.921875));
    pA18.Title = "sub-release";
    pA18.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA18, 'click', displayInfobox);
    dataLayer.push(pA18);

    var pA19 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(4.21494314139065, 49.921875));
    pA19.Title = "Trees";
    pA19.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA19, 'click', displayInfobox);
    dataLayer.push(pA19);

    var pA20 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.79008, 39.686182));
    pA20.Title = "Trees";
    pA20.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA20, 'click', displayInfobox);
    dataLayer.push(pA20);

    var pA21 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(20.632784250388, 35.5078125));
    pA21.Title = "Ack mwarakaya";
    pA21.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA21, 'click', displayInfobox);
    dataLayer.push(pA21);

    var pA22 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(19.9733487861106, 11.25));
    pA22.Title = "123";
    pA22.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA22, 'click', displayInfobox);
    dataLayer.push(pA22);

    var pA23 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(15.6230368315283, 27.0703125));
    pA23.Title = "Cycl";
    pA23.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA23, 'click', displayInfobox);
    dataLayer.push(pA23);

    var pA24 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(3.65048183614677, 39.375));
    pA24.Title = "Recreate";
    pA24.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA24, 'click', displayInfobox);
    dataLayer.push(pA24);

    var pA25 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(8.61089423955451, 35.1589965820313));
    pA25.Title = "Boniface Test 1";
    pA25.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA25, 'click', displayInfobox);
    dataLayer.push(pA25);


    /*
    This are co - ordinates from the file "data_2 (1).csv"
    The data arranged as (lat , long) and description values (where they've been given).
    NOTE that the data in CSVs is arranged as (long, lat) and so it has had to be re-organized.
    Note that the markers used for the following points differ from the ones above as per instructions given.
    */


    var pA26 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.488031, 39.743415));
    pA26.Title = "";
    pA26.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA26, 'click', displayInfobox);
    dataLayer.push(pA26);

    var pA27 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.643847, 39.674394));
    pA27.Title = "";
    pA27.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA27, 'click', displayInfobox);
    dataLayer.push(pA27);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.789006, 39.671329));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.465359, 39.884207));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.465359, 39.884207));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location((- 3.628745, 39.679341));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.779373, 39.657088));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.779373, 39.657088));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.485015, 39.893239));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.486082, 39.887246));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.809642, 39.689527));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.535451, 39.807941));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.8047641824332, 39.677852132324));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(60.1865630888889, 24.9589080111111));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.787557, 39.67549));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(0, 0));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(0, 0));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(60.18600003, 24.7843194));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(0, 0));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.296756375, 36.79725955));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.29675925, 36.7972036));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.3072097, 36.9054487));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(7.044557, 38.488014));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(6.4171918923554, 38.303833007819));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.288485, 36.80553));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(7.044557, 38.488014));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(7.048396, 38.475835));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(7.066739, 38.488826));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(8.996983, 38.771667));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(7.07606, 38.49677));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.535797, 39.808182));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(60.18439029, 24.81383119));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(31.952162238025, -34.453125));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(37.1603165467368, -9.84375));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(4.21494314139065, 41.1328125));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(19.9733487861106, -67.1484375));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(50.0641917366591, 5.2734375));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(42.8115217450979, 5.9765625));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(12.8974891837559, 58.0078125));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.488136, 39.892793));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.476561, 39.891412));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.476561, 39.891412));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.486082, 39.887246));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(7.1008154, 38.6278305));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.789763, 39.667059));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.791456, 39.672508));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.650962, 39.684708));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.537466, 39.852819));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(0, 0));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.7201591119243, 39.313888549804));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.29394389688969, 36.7848238628358));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(60.1866381, 24.9590651));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(7.045061, 38.486807));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.474536, 39.916195));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.485015, 39.893239));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.2848348, 36.8210215));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);

    var pA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.2847371, 36.82096899));
    pA28.Title = "";
    pA28.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA28, 'click', displayInfobox);
    dataLayer.push(pA28);


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