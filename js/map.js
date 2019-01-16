/* ===================================================================
 * Trasicio Maina < cisiomaina@gmail.com>
 *
 * 16-Jan-2019
 * ------------------------------------------------------------------- */

var map = null, infobox, dataLayer;

/*
        The credentials used herein are for TEST PURPOSES ONLY.
        They shall be invalidated once I have tested the page to satsfaction.
        Further they have a limit on usage (max 50,000 hits per day).
*/

function GetMap() {
    map = new Microsoft.Maps.Map(document.getElementById("myMap"),
        {
            credentials: "Ap9gcOqVjTE1TIN5S3RUdmmjNK1aSWdkVHEMAQAVvFAMBMwNlLhzGI6XuxtVDEYU",
            center: new Microsoft.Maps.Location(-5, 40)
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

/*      Perhaps it serves reason to state some design features;
                It would be more computationally efficient to fetch the coordinates from a  relational database
                or at the very least, a JSON file.
                This would allow us to insert more points (even with automation) in the future. More importantly,
                clustering should be applied if the above is considered by implementation of layers. Clustering would
                make the map appear neat.

                The direct-insertion applied herein is done with the obvious knowledge that we have a fixed
                number of points, and that the developer has limited time and resources (hence code efficience
                is more important than computational efficiency).

          There are supplied two files from which I have extracted the data. Points have been assigned markers based
          on the file the are extracted from. ie. points from the same file have the same marker.
*/

function AddData() {

    /*
    These are coordinates from the file "data_2 (1).csv"
    The data arranged as (lat , long) and description values (where they've been given).
    NOTE that the data in CSVs is arranged as (long, lat) and so it has had to be re-organized.
    */
    var pA = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.78334, 39.670486), { icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pA.Title = "Kizingo nursery";
    pA.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA, 'mouseover', displayInfobox);
    dataLayer.push(pA);

    var pB = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-1.49397130662931, 39.6826171875), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pB.Title = "Kamatish's School";
    pB.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pB, 'mouseover', displayInfobox);
    dataLayer.push(pB);

    var pC = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(6.31529853833003, 33.22265625), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pC.Title = "Test after commenting";
    pC.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pC, 'mouseover', displayInfobox);
    dataLayer.push(pC);

    var pD = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(7.044651, 38.487855), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pD.Title = "ict";
    pD.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pD, 'mouseover', displayInfobox);
    dataLayer.push(pD);

    var pE = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(3.16245553023785, 39.90234375), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pE.Title = "Test Add Data";
    pE.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pE, 'mouseover', displayInfobox);
    dataLayer.push(pE);

    var pF = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(6.66460756217257, 12.83203125), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pF.Title = "Mercy Image test";
    pF.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pF, 'mouseover', displayInfobox);
    dataLayer.push(pF);

    var pG = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-0.703107352436478, 34.98046875), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pG.Title = "Kizingo nursery";
    pG.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pG, 'mouseover', displayInfobox);
    dataLayer.push(pG);

    var pH = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.485907, 39.88699), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pH.Title = "Buru Sec School";
    pH.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pH, 'mouseover', displayInfobox);
    dataLayer.push(pH);

    var pJ = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.785518, 39.682212), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pJ.Title = "Sayuni nursery school";
    pJ.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pJ, 'mouseover', displayInfobox);
    dataLayer.push(pJ);

    var pA0 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.479406, 39.744492), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pA0.Title = "Mwazangombe pr sch";
    pA0.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA0, 'mouseover', displayInfobox);
    dataLayer.push(pA0);

    var pA1 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.438276, 39.766075), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pA1.Title = "Kachororoni";
    pA1.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA1, 'mouseover', displayInfobox);
    dataLayer.push(pA1);

    var pA2 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.464137, 39.694638), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pA2.Title = "Bale";
    pA2.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA2, 'mouseover', displayInfobox);
    dataLayer.push(pA2);

    var pA3 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.475631, 39.92941), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pA3.Title = "Migodomani";
    pA3.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA3, 'mouseover', displayInfobox);
    dataLayer.push(pA3);

    var pA4 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(3.16245553023785, 37.6171875), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pA4.Title = "Ufuoni3";
    pA4.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA4, 'mouseover', displayInfobox);
    dataLayer.push(pA4);

    var pA5 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(6.31529853833003, 39.19921875), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pA5.Title = "Kipepeo";
    pA5.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA5, 'mouseover', displayInfobox);
    dataLayer.push(pA5);

    var pA6 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(60.186639, 24.958656), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pA6.Title = "Simon's School";
    pA6.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA6, 'mouseover', displayInfobox);
    dataLayer.push(pA6);

    var pA7 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.784295, 39.672554), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pA7.Title = "Kallio Art School";
    pA7.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA7, 'mouseover', displayInfobox);
    dataLayer.push(pA7);

    var pA8 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.810652, 39.672738), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pA8.Title = "Kizingo pre school";
    pA8.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA8, 'mouseover', displayInfobox);
    dataLayer.push(pA8);

    var pA9 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.581305, 39.744397), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pA9.Title = "Vwevwesi nursery school";
    pA9.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA9, 'mouseover', displayInfobox);
    dataLayer.push(pA9);

    var pB0 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.485453, 39.78441), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pB0.Title = "Magogoni";
    pB0.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pB0, 'mouseover', displayInfobox);
    dataLayer.push(pB0);

    var pB1 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.779383, 39.657263), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pB1.Title = "Danicha";
    pB1.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pB1, 'mouseover', displayInfobox);
    dataLayer.push(pB1);

    var pB2 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.784535, 39.671826), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pB2.Title = "Garashi nursery";
    pB2.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pB2, 'mouseover', displayInfobox);
    dataLayer.push(pB2);

    var pB3 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.784556, 39.672475), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pB3.Title = "Paul Harris Sec";
    pB3.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pB3, 'mouseover', displayInfobox);
    dataLayer.push(pB3);

    var pB4 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.784556, 39.672475), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pB4.Title = "Kizingo primary";
    pB4.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pB4, 'mouseover', displayInfobox);
    dataLayer.push(pB4);

    var pB5 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.428868, 39.735729), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pB5.Title = "Kizingo primary";
    pB5.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pB5, 'mouseover', displayInfobox);
    dataLayer.push(pB5);

    var pB6 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.523658, 39.767899), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pB6.Title = "Mangudho";
    pB6.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pB6, 'mouseover', displayInfobox);
    dataLayer.push(pB6);

    var pB7 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(-3.554167, 39.790009), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pB7.Title = "Sokoke pri sch";
    pB7.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pB7, 'mouseover', displayInfobox);
    dataLayer.push(pB7);

    var pB8 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.693123, 39.75381), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pB8.Title = "Mrima wa kuku";
    pB8.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pB8, 'mouseover', displayInfobox);
    dataLayer.push(pB8);

    var pB9 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.653812, 39.753211), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pB9.Title = "Ngamani";
    pB9.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pB9, 'mouseover', displayInfobox);
    dataLayer.push(pB9);

    var pC0 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.784535, 39.671826), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pC0.Title = "Mikuluni";
    pC0.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pC0, 'mouseover', displayInfobox);
    dataLayer.push(pC0);

    var pC1 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.58077, 39.808995), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pC1.Title = "Paul Harris Sec";
    pC1.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pC1, 'mouseover', displayInfobox);
    dataLayer.push(pC1);

    var pC2 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.784535, 39.671826), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pC2.Title = "Konjora spe";
    pC2.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pC2, 'mouseover', displayInfobox);
    dataLayer.push(pC2);

    var pC3 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.565923, 39.717463), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pC3.Title = "Paul Harris Sec";
    pC3.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pC3, 'mouseover', displayInfobox);
    dataLayer.push(pC3);

    var pC4 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.43866, 39.765704), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pC4.Title = "Timboni";
    pC4.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pC4, 'mouseover', displayInfobox);
    dataLayer.push(pC4);

    var pC5 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.554127, 39.790419), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pC5.Title = "Bale";
    pC5.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pC5, 'mouseover', displayInfobox);
    dataLayer.push(pC5);

    var pC6 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.395598, 39.749063), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pC6.Title = "Mrima wa kuku";
    pC6.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pC6, 'mouseover', displayInfobox);
    dataLayer.push(pC6);

    var pC7 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.692336, 39.727588), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pC7.Title = "Madamani";
    pC7.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pC7, 'mouseover', displayInfobox);
    dataLayer.push(pC7);

    var pC8 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.784556, 39.672475), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pC8.Title = "Dunguni";
    pC8.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pC8, 'mouseover', displayInfobox);
    dataLayer.push(pC8);

    var pC9 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.8104, 39.673222), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pC9.Title = "Kizingo primary";
    pC9.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pC9, 'mouseover', displayInfobox);
    dataLayer.push(pC9);

    var pD0 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.485691, 39.784538), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pD0.Title = "Vwevwesi primary school";
    pD0.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pD0, 'mouseover', displayInfobox);
    dataLayer.push(pD0);

    var pD1 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.3072097, 36.9054487), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pD1.Title = "Danicha";
    pD1.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pD1, 'mouseover', displayInfobox);
    dataLayer.push(pD1);

    var pD2 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(7.044967, 38.486948), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pD2.Title = "Vision plaza";
    pD2.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pD2, 'mouseover', displayInfobox);
    dataLayer.push(pD2);

    var pD3 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(7.049572, 38.479348), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pD3.Title = "gib";
    pD3.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pD3, 'mouseover', displayInfobox);
    dataLayer.push(pD3);

    var pD4 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.33293467955381, 36.94702148438), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pD4.Title = "eshe";
    pD4.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pD4, 'mouseover', displayInfobox);
    dataLayer.push(pD4);

    var pD5 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.60747827674708, 37.5178005498057), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pD5.Title = "Pangani Primary School";
    pD5.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pD5, 'mouseover', displayInfobox);
    dataLayer.push(pD5);

    var pD6 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 2.2790618517717, 40.1165771484357), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pD6.Title = "Part primary school";
    pD6.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pD6, 'mouseover', displayInfobox);
    dataLayer.push(pD6);

    var pD7 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(39.88699, -3.485907), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pD7.Title = "Garsen Pri Sch";
    pD7.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pD7, 'mouseover', displayInfobox);
    dataLayer.push(pD7);

    var pD8 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.452099, 39.894083), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pD8.Title = "Sayuni nursery school";
    pD8.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pD8, 'mouseover', displayInfobox);
    dataLayer.push(pD8);

    var pD9 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.2814496704798, 36.8344116210981), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pD9.Title = "Kararacha primary school";
    pD9.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pD9, 'mouseover', displayInfobox);
    dataLayer.push(pD9);

    var pE0 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.04290865246845, 37.751952409744), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pE0.Title = "Buru baptist";
    pE0.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pE0, 'mouseover', displayInfobox);
    dataLayer.push(pE0);

    var pE1 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.63581099999997, 39.6873680000002), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pE1.Title = "buruburu baptist primary school";
    pE1.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pE1, 'mouseover', displayInfobox);
    dataLayer.push(pE1);

    var pE2 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.61492200000003, 39.7037699999999), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pE2.Title = "Makalangeni";
    pE2.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pE2, 'mouseover', displayInfobox);
    dataLayer.push(pE2);

    var pE3 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.61492200000003, 39.7037699999999), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pE3.Title = "Mwapula";
    pE3.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pE3, 'mouseover', displayInfobox);
    dataLayer.push(pE3);

    var pE4 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.61492200000003, 39.7037699999999), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pE4.Title = "Mwapula";
    pE4.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pE4, 'mouseover', displayInfobox);
    dataLayer.push(pE4);

    var pE5 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.30451374360599, 36.8316650390614), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pE5.Title = "Mwapula";
    pE5.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pE5, 'mouseover', displayInfobox);
    dataLayer.push(pE5);

    var pE6 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.70263021360231, 37.0568847656253), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pE6.Title = "Alliance high school";
    pE6.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pE6, 'mouseover', displayInfobox);
    dataLayer.push(pE6);

    var pE7 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.38335875103052, 37.0682957949826), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pE7.Title = "Strathmore";
    pE7.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pE7, 'mouseover', displayInfobox);
    dataLayer.push(pE7);

    var pE8 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 0.246333317044422, 36.0089349746684), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pE8.Title = "Mwapulas";
    pE8.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pE8, 'mouseover', displayInfobox);
    dataLayer.push(pE8);

    var pE9 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.48617337108684, 39.7954144766241), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pE9.Title = "Nakuru high school";
    pE9.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pE9, 'mouseover', displayInfobox);
    dataLayer.push(pE9);

    var pF0 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(35.9492781406315, -1.15376972395517), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pF0.Title = "Ezamoyo";
    pF0.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pF0, 'mouseover', displayInfobox);
    dataLayer.push(pF0);

    var pF1 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(39.683369, -3.59661), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pF1.Title = "Narok high school";
    pF1.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pF1, 'mouseover', displayInfobox);
    dataLayer.push(pF1);

    var pF2 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(39.694913, -3.464617), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pF2.Title = "Mbonga1";
    pF2.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pF2, 'mouseover', displayInfobox);
    dataLayer.push(pF2);

    var pF3 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(39.5507812500002, 3.51342104563999), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pF3.Title = "Migodomani";
    pF3.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pF3, 'mouseover', displayInfobox);
    dataLayer.push(pF3);

    var pF4 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(2.10889865924314, 35.5078125), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pF4.Title = "Maranda High School";
    pF4.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pF4, 'mouseover', displayInfobox);
    dataLayer.push(pF4);

    var pF5 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 0.329588026053569, 37.3370361328125), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pF5.Title = "Nyeri high school";
    pF5.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pF5, 'mouseover', displayInfobox);
    dataLayer.push(pF5);

    var pF6 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(4.21494314139065, 32.6953125), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pF6.Title = "Bukolwe sec";
    pF6.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pF6, 'mouseover', displayInfobox);
    dataLayer.push(pF6);

    var pF7 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.40610883543515, 28.125), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pF7.Title = "Kericho High";
    pF7.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pF7, 'mouseover', displayInfobox);
    dataLayer.push(pF7);

    var pF8 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(3.51342104564006, 28.125), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pF8.Title = "Boniface Test";
    pF8.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pF8, 'mouseover', displayInfobox);
    dataLayer.push(pF8);

    var pF9 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(0, 28.828125), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pF9.Title = "Test Boniface";
    pF9.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pF9, 'mouseover', displayInfobox);
    dataLayer.push(pF9);

    var pG0 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(0, 28.828125), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pG0.Title = "Boniface Part of";
    pG0.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pG0, 'mouseover', displayInfobox);
    dataLayer.push(pG0);

    var pG1 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(2.10889865924314, 37.6171875), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pG1.Title = "Boniface Part of";
    pG1.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pG1, 'mouseover', displayInfobox);
    dataLayer.push(pG1);

    var pG2 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(0, 36.0791015625), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pG2.Title = "Buchenya High school";
    pG2.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pG2, 'mouseover', displayInfobox);
    dataLayer.push(pG2);

    var pG3 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(0.703107352436478, 37.705078125), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pG3.Title = "Lunza sec school";
    pG3.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pG3, 'mouseover', displayInfobox);
    dataLayer.push(pG3);

    var pG4 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 0.922811662685694, 36.40869140625), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pG4.Title = "Image Test";
    pG4.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pG4, 'mouseover', displayInfobox);
    dataLayer.push(pG4);

    var pG5 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(0.351560293992271, 34.98046875), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pG5.Title = "Part-of-test 2";
    pG5.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pG5, 'mouseover', displayInfobox);
    dataLayer.push(pG5);

    var pG6 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(60.18697389, 24.9588684), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pG6.Title = "Koma Sec School";
    pG6.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pG6, 'mouseover', displayInfobox);
    dataLayer.push(pG6);

    var pG7 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 13.2399454992863, 37.96875), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pG7.Title = "kallio";
    pG7.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pG7, 'mouseover', displayInfobox);
    dataLayer.push(pG7);

    var pG8 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(0.439448816413977, 36.0791015625), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pG8.Title = "Buchenya Sec";
    pG8.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pG8, 'mouseover', displayInfobox);
    dataLayer.push(pG8);

    var pG9 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(0, 35.5078125), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pG9.Title = "Buchoke High";
    pG9.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pG9, 'mouseover', displayInfobox);
    dataLayer.push(pG9);

    var pH0 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 0.615222552406841, 36.8701171875), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pH0.Title = "Test school";
    pH0.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pH0, 'mouseover', displayInfobox);
    dataLayer.push(pH0);

    var pH1 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.40610883543515, 37.177734375), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pH1.Title = "Test sec School";
    pH1.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pH1, 'mouseover', displayInfobox);
    dataLayer.push(pH1);

    var pH2 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(6.44389236551807, 48.9135575294495), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pH2.Title = "Backbone test";
    pH2.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pH2, 'mouseover', displayInfobox);
    dataLayer.push(pH2);

    var pH3 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.75753681130831, 36.7822265625), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pH3.Title = "hello part of";
    pH3.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pH3, 'mouseover', displayInfobox);
    dataLayer.push(pH3);

    var pH4 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(0.0878905905308369, 36.0791015625), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pH4.Title = "Backbone Sch";
    pH4.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pH4, 'mouseover', displayInfobox);
    dataLayer.push(pH4);

    var pH5 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.04913570391281, 37.1200561523438), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pH5.Title = "Backbone test";
    pH5.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pH5, 'mouseover', displayInfobox);
    dataLayer.push(pH5);

    var pH6 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 0.516350432377746, 37.001953125), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pH6.Title = "Thika High School";
    pH6.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pH6, 'mouseover', displayInfobox);
    dataLayer.push(pH6);

    var pH7 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(10.3149192858132, 36.9140625), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pH7.Title = "BackBone High";
    pH7.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pH7, 'mouseover', displayInfobox);
    dataLayer.push(pH7);

    var pH8 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.795858, 39.674096), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pH8.Title = "Butere High";
    pH8.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pH8, 'mouseover', displayInfobox);
    dataLayer.push(pH8);

    var pH9 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 0.922811662685694, 36.80419921875), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pH9.Title = "Neema nursery school";
    pH9.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pH9, 'mouseover', displayInfobox);
    dataLayer.push(pH9);

    var pJ0 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(4.21494314139065, 34.1015625), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pJ0.Title = "Backbone 2";
    pJ0.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pJ0, 'mouseover', displayInfobox);
    dataLayer.push(pJ0);

    var pJ1 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 0.351560293992271, 37.705078125), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pJ1.Title = "Mpeketoni Sch";
    pJ1.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pJ1, 'mouseover', displayInfobox);
    dataLayer.push(pJ1);

    var pJ2 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.483925, 39.913624), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pJ2.Title = "Mpeke High School";
    pJ2.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pJ2, 'mouseover', displayInfobox);
    dataLayer.push(pJ2);

    var pJ3 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(15.9613290815966, 53.26171875), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pJ3.Title = "Chumani village nursery school";
    pJ3.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pJ3, 'mouseover', displayInfobox);
    dataLayer.push(pJ3);

    var pJ4 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.580884, 39.808837), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pJ4.Title = "name of image";
    pJ4.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pJ4, 'mouseover', displayInfobox);
    dataLayer.push(pJ4);

    var pJ5 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.452016, 39.894336), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pJ5.Title = "Konjora";
    pJ5.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pJ5, 'mouseover', displayInfobox);
    dataLayer.push(pJ5);

    var pJ6 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.452099, 39.894083), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pJ6.Title = "Kararacha pre school";
    pJ6.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pJ6, 'mouseover', displayInfobox);
    dataLayer.push(pJ6);

    var pJ7 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(7.0529118, 38.4968615), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pJ7.Title = "Kararacha primary";
    pJ7.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pJ7, 'mouseover', displayInfobox);
    dataLayer.push(pJ7);

    var pJ8 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(4.91583280131316, 38.49609375), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pJ8.Title = "Hawassa University";
    pJ8.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pJ8, 'mouseover', displayInfobox);
    dataLayer.push(pJ8);

    var pJ9 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(6.31529853833003, 38.49609375), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pJ9.Title = "Musaimo Primary School";
    pJ9.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pJ9, 'mouseover', displayInfobox);
    dataLayer.push(pJ9);

    var pA00 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(28.6134594240044, 14.4140625), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pA00.Title = "Shule Jipya";
    pA00.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA00, 'mouseover', displayInfobox);
    dataLayer.push(pA00);

    var pA01 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(42.8115217450979, 83.3203125), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pA01.Title = "adc";
    pA01.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA01, 'mouseover', displayInfobox);
    dataLayer.push(pA01);

    var pA02 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(11.8673509114593, -5.625), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pA02.Title = "Test Subforms";
    pA02.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA02, 'mouseover', displayInfobox);
    dataLayer.push(pA02);

    var pA03 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(18.3128108464255, 20.390625), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pA03.Title = "Masomo Matiang'i";
    pA03.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA03, 'mouseover', displayInfobox);
    dataLayer.push(pA03);

    var pA04 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(19.642587534013, 29.1796875), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pA04.Title = "June test1";
    pA04.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA04, 'mouseover', displayInfobox);
    dataLayer.push(pA04);

    var pA05 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 6.25114158066831, 34.7209167480469), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pA05.Title = "JLT";
    pA05.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA05, 'mouseover', displayInfobox);
    dataLayer.push(pA05);

    var pA06 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 6.25114158066831, 34.7209167480469), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pA06.Title = "Test2";
    pA06.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA06, 'mouseover', displayInfobox);
    dataLayer.push(pA06);

    var pA07 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(16.6361918783977, 29.53125), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pA07.Title = "Test 3";
    pA07.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA07, 'mouseover', displayInfobox);
    dataLayer.push(pA07);

    var pA08 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(18.3128108464255, 38.671875), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pA08.Title = "fryt";
    pA08.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA08, 'mouseover', displayInfobox);
    dataLayer.push(pA08);

    var pA09 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(0.703107352436491, 39.0234375), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pA09.Title = "Tuzo Primary school";
    pA09.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA09, 'mouseover', displayInfobox);
    dataLayer.push(pA09);

    var pA10 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(2.81137119333114, 38.3203125), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pA10.Title = "Backslash Test";
    pA10.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA10, 'mouseover', displayInfobox);
    dataLayer.push(pA10);

    var pA11 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(2.81137119333114, 38.3203125), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pA11.Title = "Theo School";
    pA11.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA11, 'mouseover', displayInfobox);
    dataLayer.push(pA11);

    var pA12 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.620423, 39.796771), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pA12.Title = "Theo School";
    pA12.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA12, 'mouseover', displayInfobox);
    dataLayer.push(pA12);

    var pA13 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.652977, 39.752981), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pA13.Title = "Kwa maya";
    pA13.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA13, 'mouseover', displayInfobox);
    dataLayer.push(pA13);

    var pA14 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.692456, 39.727522), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pA14.Title = "Mikuluni";
    pA14.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA14, 'mouseover', displayInfobox);
    dataLayer.push(pA14);

    var pA15 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(2.81137119333114, 38.3203125), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pA15.Title = "Dunguni";
    pA15.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA15, 'mouseover', displayInfobox);
    dataLayer.push(pA15);

    var pA16 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 14.2643830875626, 33.75), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pA16.Title = "Theo School";
    pA16.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA16, 'mouseover', displayInfobox);
    dataLayer.push(pA16);

    var pA17 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 14.2643830875626, 33.75), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pA17.Title = "Release test 22.1";
    pA17.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA17, 'mouseover', displayInfobox);
    dataLayer.push(pA17);

    var pA17 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(2.81137119333114, 38.3203125), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pA17.Title = "Release test 22.1";
    pA17.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA17, 'mouseover', displayInfobox);
    dataLayer.push(pA17);

    var pA18 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(4.21494314139065, 49.921875), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pA18.Title = "sub-release";
    pA18.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA18, 'mouseover', displayInfobox);
    dataLayer.push(pA18);

    var pA19 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(4.21494314139065, 49.921875), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pA19.Title = "Trees";
    pA19.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA19, 'mouseover', displayInfobox);
    dataLayer.push(pA19);

    var pA20 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.79008, 39.686182), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pA20.Title = "Trees";
    pA20.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA20, 'mouseover', displayInfobox);
    dataLayer.push(pA20);

    var pA21 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(20.632784250388, 35.5078125), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pA21.Title = "Ack mwarakaya";
    pA21.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA21, 'mouseover', displayInfobox);
    dataLayer.push(pA21);

    var pA22 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(19.9733487861106, 11.25), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pA22.Title = "123";
    pA22.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA22, 'mouseover', displayInfobox);
    dataLayer.push(pA22);

    var pA23 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(15.6230368315283, 27.0703125), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pA23.Title = "Cycl";
    pA23.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA23, 'mouseover', displayInfobox);
    dataLayer.push(pA23);

    var pA24 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(3.65048183614677, 39.375), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pA24.Title = "Recreate";
    pA24.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA24, 'mouseover', displayInfobox);
    dataLayer.push(pA24);

    var pA25 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(8.61089423955451, 35.1589965820313), {icon: 'images/icons/png/cramschool.png', color: 'aqua' });
    pA25.Title = "Boniface Test 1";
    pA25.Description = "One of data_2(1).csv points";
    Microsoft.Maps.Events.addHandler(pA25, 'mouseover', displayInfobox);
    dataLayer.push(pA25);


    /*
    These are coordinates from the file "data_3 (1).csv"
    The data arranged as (lat , long) and description values (where they've been given).
    NOTE that the data in CSVs is arranged as (long, lat) and so it has had to be re-organized.
    Note that the markers used for the following points differ from the ones above as per instructions given.
    */


    var pxA1 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.488031, 39.743415), {icon: 'images/icons/png/mark.png', color: 'aqua' });
    pxA1.Title = "Bahati women group";
    pxA1.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA1, 'mouseover', displayInfobox);
    dataLayer.push(pxA1);

    var pxA2 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.643847, 39.674394), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA2.Title = "Polepole women group";
    pxA2.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA2, 'mouseover', displayInfobox);
    dataLayer.push(pxA2);

    var pxA3 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.789006, 39.671329), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA3.Title = "Vdc kizingo A group";
    pxA3.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA3, 'mouseover', displayInfobox);
    dataLayer.push(pxA3);

    var pxA4 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.465359, 39.884207), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA4.Title = "Nauvoya";
    pxA4.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA4, 'mouseover', displayInfobox);
    dataLayer.push(pxA4);

    var pxA5 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.465359, 39.884207), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA5.Title = "Nauvoya";
    pxA5.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA5, 'mouseover', displayInfobox);
    dataLayer.push(pxA5);

    var pxA6 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.628745, 39.679341), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA6.Title = "Makalangeni";
    pxA6.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA6, 'mouseover', displayInfobox);
    dataLayer.push(pxA6);

    var pxA7 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.779373, 39.657088), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA7.Title = "Upendo women grp";
    pxA7.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA7, 'mouseover', displayInfobox);
    dataLayer.push(pxA7);

    var pxA8 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.779373, 39.657088), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA8.Title = "Mpirani tree nursery";
    pxA8.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA8, 'mouseover', displayInfobox);
    dataLayer.push(pxA8);

    var pxA9 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.485015, 39.893239), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA9.Title = "Amani widows";
    pxA9.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA9, 'mouseover', displayInfobox);
    dataLayer.push(pxA9);

    var pxA10 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.486082, 39.887246), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA10.Title = "Kaoyeni amkeni group";
    pxA10.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA10, 'mouseover', displayInfobox);
    dataLayer.push(pxA10);

    var pxA11 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.809642, 39.689527), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA11.Title = "Tumaini women Group";
    pxA11.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA11, 'mouseover', displayInfobox);
    dataLayer.push(pxA11);

    var pxA12 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.535451, 39.807941), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA12.Title = "Mwito vsla group";
    pxA12.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA12, 'mouseover', displayInfobox);
    dataLayer.push(pxA12);

    var pxA13 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.8047641824332, 39.677852132324), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA13.Title = "test";
    pxA13.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA13, 'mouseover', displayInfobox);
    dataLayer.push(pxA13);

    var pxA13 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(60.1865630888889, 24.9589080111111), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA13.Title = "petra0711";
    pxA13.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA13, 'mouseover', displayInfobox);
    dataLayer.push(pxA13);

    var pxA14 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.787557, 39.67549), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA14.Title = "Chechemeko raha";
    pxA14.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA14, 'mouseover', displayInfobox);
    dataLayer.push(pxA14);

    var pxA15 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(0, 0), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA15.Title = "Axx int test";
    pxA15.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA15, 'mouseover', displayInfobox);
    dataLayer.push(pxA15);

    var pxA16 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(0, 0), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA16.Title = "interest numeric";
    pxA16.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA16, 'mouseover', displayInfobox);
    dataLayer.push(pxA16);

    var pxA17 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(60.18600003, 24.7843194), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA17.Title = "volu";
    pxA17.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA17, 'mouseover', displayInfobox);
    dataLayer.push(pxA17);

    var pxA17 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(0, 0), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA17.Title = "axxintrest1";
    pxA17.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA17, 'mouseover', displayInfobox);
    dataLayer.push(pxA17);

    var pxA18 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.296756375, 36.79725955), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA18.Title = "j";
    pxA18.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA18, 'mouseover', displayInfobox);
    dataLayer.push(pxA18);

    var pxA19 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.29675925, 36.7972036), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA19.Title = "kanyamwa west";
    pxA19.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA19, 'mouseover', displayInfobox);
    dataLayer.push(pxA19);

    var pxA20 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.3072097, 36.9054487), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA20.Title = "leonar";
    pxA20.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA20, 'mouseover', displayInfobox);
    dataLayer.push(pxA20);

    var pxA21 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(7.044557, 38.488014), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA21.Title = "melaku intets";
    pxA21.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA21, 'mouseover', displayInfobox);
    dataLayer.push(pxA21);

    var pxA22 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(6.4171918923554, 38.303833007819), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA22.Title = "dilla interest group ";
    pxA22.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA22, 'mouseover', displayInfobox);
    dataLayer.push(pxA22);

    var pxA23 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.288485, 36.80553), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA23.Title = "biko.gwendo";
    pxA23.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA23, 'mouseover', displayInfobox);
    dataLayer.push(pxA23);

    var pxA24 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(7.044557, 38.488014), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA24.Title = "mel inter";
    pxA24.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA24, 'mouseover', displayInfobox);
    dataLayer.push(pxA24);

    var pxA25 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(7.048396, 38.475835), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA25.Title = "st office";
    pxA25.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA25, 'mouseover', displayInfobox);
    dataLayer.push(pxA25);

    var pxA26 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(7.066739, 38.488826), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA26.Title = "zain filed";
    pxA26.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA26, 'mouseover', displayInfobox);
    dataLayer.push(pxA26);

    var pxA27 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(8.996983, 38.771667), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA27.Title = "stp aa";
    pxA27.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA27, 'mouseover', displayInfobox);
    dataLayer.push(pxA27);

    var pxA28 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(7.07606, 38.49677), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA28.Title = "mass media cafe";
    pxA28.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA28, 'mouseover', displayInfobox);
    dataLayer.push(pxA28);

    var pxA29 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.535797, 39.808182), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA29.Title = "Mpirani passion project";
    pxA29.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA29, 'mouseover', displayInfobox);
    dataLayer.push(pxA29);

    var pxA30 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(60.18439029, 24.81383119), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA30.Title = "ptest";
    pxA30.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA30, 'mouseover', displayInfobox);
    dataLayer.push(pxA30);

    var pxA31 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(31.952162238025, -34.453125), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA31.Title = "hello pictures";
    pxA31.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA31, 'mouseover', displayInfobox);
    dataLayer.push(pxA31);

    var pxA32 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(37.1603165467368, -9.84375), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA32.Title = "1t";
    pxA32.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA32, 'mouseover', displayInfobox);
    dataLayer.push(pxA32);

    var pxA33 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(4.21494314139065, 41.1328125), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA33.Title = "fsad";
    pxA33.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA33, 'mouseover', displayInfobox);
    dataLayer.push(pxA33);

    var pxA34 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(19.9733487861106, -67.1484375), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA34.Title = "123";
    pxA34.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA34, 'mouseover', displayInfobox);
    dataLayer.push(pxA34);

    var pxA35 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(50.0641917366591, 5.2734375), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA35.Title = "fdsa";
    pxA35.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA35, 'mouseover', displayInfobox);
    dataLayer.push(pxA35);

    var pxA36 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(42.8115217450979, 5.9765625), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA36.Title = "321";
    pxA36.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA36, 'mouseover', displayInfobox);
    dataLayer.push(pxA36);

    var pxA37 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(12.8974891837559, 58.0078125), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA37.Title = "21";
    pxA37.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA37, 'mouseover', displayInfobox);
    dataLayer.push(pxA37);

    var pxA38 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.488136, 39.892793), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA38.Title = "";
    pxA38.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA38, 'mouseover', displayInfobox);
    dataLayer.push(pxA38);

    var pxA39 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.476561, 39.891412), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA39.Title = "Ebenezar";
    pxA39.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA39, 'mouseover', displayInfobox);
    dataLayer.push(pxA39);

    var pxA40 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.476561, 39.891412), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA40.Title = "Shime";
    pxA40.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA40, 'mouseover', displayInfobox);
    dataLayer.push(pxA40);

    var pxA41 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.486082, 39.887246), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA41.Title = "Shime";
    pxA41.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA41, 'mouseover', displayInfobox);
    dataLayer.push(pxA41);

    var pxA42 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(7.1008154, 38.6278305), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA42.Title = "Equator";
    pxA42.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA42, 'mouseover', displayInfobox);
    dataLayer.push(pxA42);

    var pxA43 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.789763, 39.667059), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA43.Title = "Kaoyeni amkeni group";
    pxA43.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA43, 'mouseover', displayInfobox);
    dataLayer.push(pxA43);

    var pxA44 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.791456, 39.672508), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA44.Title = "testt";
    pxA44.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA44, 'mouseover', displayInfobox);
    dataLayer.push(pxA44);

    var pxA45 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.650962, 39.684708), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA45.Title = "Lamkani2";
    pxA45.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA45, 'mouseover', displayInfobox);
    dataLayer.push(pxA45);

    var pxA46 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.537466, 39.852819), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA46.Title = "Tunajaribu2";
    pxA46.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA46, 'mouseover', displayInfobox);
    dataLayer.push(pxA46);

    var pxA47 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(0, 0), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA47.Title = "Chonje";
    pxA47.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA47, 'mouseover', displayInfobox);
    dataLayer.push(pxA47);

    var pxA48 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.7201591119243, 39.313888549804), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA48.Title = "Songohe";
    pxA48.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA48, 'mouseover', displayInfobox);
    dataLayer.push(pxA48);

    var pxA49 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.29394389688969, 36.7848238628358), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA49.Title = "Axxim";
    pxA49.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA49, 'mouseover', displayInfobox);
    dataLayer.push(pxA49);

    var pxA50 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(60.1866381, 24.9590651), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA50.Title = "Chengoni52";
    pxA50.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA50, 'mouseover', displayInfobox);
    dataLayer.push(pxA50);

    var pxA51 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(7.045061, 38.486807), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA51.Title = "Shimba";
    pxA51.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA51, 'mouseover', displayInfobox);
    dataLayer.push(pxA51);

    var pxA52 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.474536, 39.916195), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA52.Title = "petra1";
    pxA52.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA52, 'mouseover', displayInfobox);
    dataLayer.push(pxA52);

    var pxA53 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 3.485015, 39.893239), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA53.Title = "Amani widows";
    pxA53.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA53, 'mouseover', displayInfobox);
    dataLayer.push(pxA53);

    var pxA54 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.2848348, 36.8210215), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA54.Title = "Timestamp";
    pxA54.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA54, 'mouseover', displayInfobox);
    dataLayer.push(pxA54);

    var pxA55 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(- 1.2847371, 36.82096899), {icon: 'images/icons/png/mark.png', color: 'red' });
    pxA55.Title = "Time";
    pxA55.Description = "One of data_3(1).csv points";
    Microsoft.Maps.Events.addHandler(pxA55, 'mouseover', displayInfobox);
    dataLayer.push(pxA55);


}

function displayInfobox(e) {
    if (e.targetType == 'pushpin') {
        infobox.setLocation(e.target.getLocation(), {icon: 'images/icons/png/mark.png', color: 'red' });

        infobox.setOptions({
            visible: true,
            title: e.target.Title,
            description: e.target.Description
        });
    }
}