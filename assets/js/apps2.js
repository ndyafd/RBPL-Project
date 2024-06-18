var theMarker, theCircle, geojsonLayer, theMarker2, theCircle2, geojsonLayer2;
function histori_select(e, a, t) {
    $("#katalog_table").empty(),
    $("#katalog_table tr").remove(),
    null != theCircle && map2.removeLayer(theCircle),
    null != theMarker && map2.removeLayer(theMarker),
    null != geojsonLayer && map2.removeLayer(geojsonLayer),
    null != theMarker2 && map.removeLayer(theMarker2),
    null != geojsonLayer2 && map.removeLayer(geojsonLayer2),
    theMarker = circleWithText2([e, a], t, 25, 2, "circle2").addTo(map2),
    SelectPoints(e, a)
}
function SelectPoints(e, a) {
    var t = []
      , n = [];
    xy = [e, a],
    dist = 250;
    var i = 1e3 * dist;
    t.length = 0,
    katalog_sebar.eachLayer((function(e) {
        layer_lat_long = e.getLatLng(),
        distance_from_centerPoint = layer_lat_long.distanceTo(xy),
        distance_from_centerPoint <= i && t.push(e.feature)
    }
    )),
    katalog_3bulan.eachLayer((function(e) {
        layer_lat_long = e.getLatLng(),
        distance_from_centerPoint = layer_lat_long.distanceTo(xy),
        distance_from_centerPoint <= i && n.push(e.feature)
    }
    )),
    theCircle = L.circle(xy, i, {
        color: "red",
        fillOpacity: 0,
        opacity: 1
    }).addTo(map2),
    theCircle2 = L.circle(xy, i, {
        color: "red",
        fillOpacity: 0,
        opacity: 1
    }).addTo(map);
    var r = L.Icon.Label.extend({
        options: {
            iconUrl: "https://inatews.bmkg.go.id/assets_inatews/img/icon_kosong.png",
            shadowUrl: null,
            iconSize: new L.Point(40,40),
            iconAnchor: new L.Point(0,1),
            labelAnchor: new L.Point(26,0),
            wrapperAnchor: new L.Point(12,13),
            labelClassName: "sweet-deal-label"
        }
    })
      , o = L.Icon.Label.extend({
        options: {
            iconUrl: "https://inatews.bmkg.go.id/assets_inatews/img/icon_kosong.png",
            shadowUrl: null,
            iconSize: new L.Point(40,40)
        }
    });
    geojsonLayer = L.geoJson(t, {
        pointToLayer: function(e, a) {
            return "Tidak" == e.properties.tsunami ? new L.Marker(a,{
                icon: new o
            }) : new L.Marker(a,{
                icon: new r({
                    labelText: "Tsunami"
                })
            })
        },
        onEachFeature: function(e, a) {
            a.bindPopup("Magnitude: " + e.properties.mag + "<br>Waktu Kejadian: " + e.properties.date + "<br>Lokasi: " + e.properties.dirasakan + "<br>Tsunami: " + e.properties.tsunami)
        }
    }),
    map2.addLayer(geojsonLayer);
    var l = L.Icon.Label.extend({
        options: {
            iconUrl: "https://inatews.bmkg.go.id/assets_inatews/img/icon_kosong.png",
            shadowUrl: null,
            iconSize: new L.Point(40,40)
        }
    });
    geojsonLayer2 = L.geoJson(n, {
        pointToLayer: function(e, a) {
            return new L.Marker(a,{
                icon: new l
            })
        },
        onEachFeature: function(e, a) {
            a.bindPopup("Magnitude: " + e.properties.mag.substring(0, 3) + "<br>Waktu Kejadian: " + e.properties.time + "UTC<br>Lokasi: " + e.properties.place + "<br>Kedalaman: " + parseInt(e.properties.depth) + " Km")
        }
    }),
    map.addLayer(geojsonLayer2);
    var s = {
        type: "FeatureCollection",
        features: t
    }.features;
    if (0 == $("#katalog_table thead").length) {
        var d = " <thead><tr >  <th>OT(UTC)</th> <th >Mag</th>  <th class='besar'>Lokasi</th> <th class='besar' >Kedalaman</th><th class='besar' >Wilayah</th><th width='30%' >Dampak</th><th >Tsunami</th></tr></thead><tbody>";
        $("#katalog_table").append(d)
    } else {
        $("#katalog_table").append(d)
    }
    if (s.length)
        for (var m = 0; m < s.length; m++) {
            var c = "<td>" + s[m].properties.date + "  " + s[m].properties.ot_utc + "</td>"
              , p = "<td>" + s[m].properties.mag + "</td>"
              , g = "<td class='besar'>" + s[m].geometry.coordinates[1] + "," + s[m].geometry.coordinates[0] + "</td>"
              , b = "<td class='besar'>" + s[m].properties.depth + "</td>"
              , u = "<td class='besar'>" + s[m].properties.pusat_gempa + "</td>"
              , h = "<td>" + s[m].properties.korban_kerusakan + "</td>"
              , y = "<td>" + s[m].properties.tsunami + "</td>";
            $("#katalog_table").append("<tr>" + c + p + g + b + u + h + y)
        }
    setTimeout((function() {
        $("#katalog_table").DataTable().destroy();
        $("#katalog_table").DataTable().draw();
        let e, a, t = JSON.parse(JSON.stringify(n)), i = [], r = [], o = moment().week(), l = o - 11, s = moment().format("YYYY");
        for (let n = l; n <= o; n++) {
            0 == n ? (a = 53 - n,
            e = s - 1) : n < 0 ? (a = 53 + n,
            e = s - 1) : (a = n,
            e = s);
            let o = moment().day("Sunday").year(e).week(a).format("DD-MM-YY");
            r.push(o),
            i.push(t.filter((function(e) {
                return moment(e.properties.time, "YYYY-MM-DD").week() == a
            }
            )).length)
        }
        chart.xAxis[0].update({
            categories: r
        }),
        chart.series[0].setData(i),
        chart.series[1].setData(i)
    }
    ), 2e3)
}
function loadata(e, a) {
    var t = new XMLHttpRequest;
    t.onreadystatechange = function() {
        4 == this.readyState && 200 == this.status && myFunction(this, a, e)
    }
    ,
    t.open("GET", e, !0),
    t.send()
}
function myFunction(e, a, t) {
    var n;
    let i;
    if ("home5" == a)
        var r = '<div class="p-3"><div class="alert alert-warning" style="margin:0!important"role="alert"> Disclaimer!:Merupakan informasi gempabumi yang didiseminasikan dalam waktu kurang dari 5 menit setelah kejadian gempa melalui multi-moda penyebaran informasi  antara lain: SMS, App Seluler, E-mail, Fax, Website, WRS, GTS dan Sosial Media. Informasi ini merupakan informasi gempabumi secara cepat dari InaTEWS. Tidak akan ada pemutakhiran parameter gempabumi dan parameter gempabumi yang final boleh jadi berbeda.</div></div>';
    else if ("profile5" == a)
        r = '<div class="p-3"><div class="alert alert-warning" style="margin:0!important"role="alert"> Disclaimer!:Merupakan daftar informasi gempabumi dirasakan yang didiseminasikan setelah BMKG menerima laporan kerusakan atau dirasakan dari masyarakat. Tidak  ada pemutakhiran parameter gempabumi dan parameter gempabumi yang final boleh jadi berbeda dengan informasi dalam daftar ini.</div></div>';
    else if ("contact5" == a)
        r = '<div class="p-3"><div class="alert alert-warning" style="margin:0!important"role="alert"> Disclaimer!:Daftar tsunami berikut ini adalah rangkaian buletin peringatan dini tsunami BMKG yang didiseminasikan melalui multi-moda penyebaran informasi antara lain: SMS, Aplikasi Seluler, Email, Faks, Situs Web, WRS, GTS, dan Media Sosial. Informasi ini merupakan peringatan dini tsunami secara cepat dari InaTEWS. Parameter gempabumi yang final boleh jadi berbeda dengan informasi dalam daftar ini.</div></div>';
    else
        r = '<div class="p-3"><div class="alert alert-warning" style="margin:0!important"role="alert"> Disclaimer!:Dalam beberapa menit pertama setelah gempabumi, parameter gempabumi dapat berubah dan boleh jadi belum akurat, kecuali telah direvisi atau dianalisis ulang oleh ahli seismologi.</div></div>';
    if ("home5" == a || "profile5" == a || "contact5" == a) {
        var o = e.responseXML.getElementsByTagName("info");
        for (n = 0; n < o.length; n++) {
            i = o[n].getElementsByTagName("subject")[0].childNodes[0].nodeValue;
            o[n].getElementsByTagName("date")[0].childNodes[0].nodeValue;
            if ("https://bmkg-content-inatews.storage.googleapis.com/last30event.xml" == t)
                var l = 578;
            else if ("https://bmkg-content-inatews.storage.googleapis.com/last30feltevent.xml" == t)
                l = 476;
            else if ("https://bmkg-content-inatews.storage.googleapis.com/last30tsunamievent.xml" == t)
                l = 614;
            else
                l = 313;
            r += '<a target="_blank" href="detail?name=' + o[n].getElementsByTagName("eventid")[0].childNodes[0].nodeValue + "&day=" + l + '"><div class="d-flex flex-row text-black align-items-start text-left border-1" style="border-bottom-style: solid!important;border-bottom-width: thin; border-bottom-color: coral;"> <div class="col-lg-2 col-sm-3  p-2 bg-secondary " id="" style="background-color:#9A0101!important" ><div class="card card-body text-black p-1 border-0" style="background-color:rgb(0,0,0,0)!important"><p style="margin-bottom:0px; color:#FFA858; text-align:center"> Magnitudo</p><h2 style=" text-align:center; font-size:350%; margin-top:0px; color:#FFA858; font-weight:bold !important" id="">' + o[n].getElementsByTagName("magnitude")[0].childNodes[0].nodeValue + '</h2></div></div> <div class="col-lg-10 col-sm-9  p-0 bg-secondary border-0" id="" style="border-style: solid;background-color:rgb(0,0,0,0)!important"> <div class="card card-body bg-none text-black py-1 border-0" style="background-color:rgb(0, 0, 0,0)!important"><p class="text-black" style="color:black; margin-bottom:0; font-weight:bold">' + o[n].getElementsByTagName("subject")[0].childNodes[0].nodeValue.toUpperCase() + '</p><p class="text-black" style="color:black; margin-bottom:0; font-weight:bold">' + o[n].getElementsByTagName("date")[0].childNodes[0].nodeValue + " " + o[n].getElementsByTagName("time")[0].childNodes[0].nodeValue + '</p><p class="text-black" style="color:black; font-size:90%; margin-bottom:0; font-weight:normal"> Pusat Gempabumi ' + o[n].getElementsByTagName("area")[0].childNodes[0].nodeValue + '</p>  <p class="text-black" style="color:black; margin-bottom:0; font-weight:normal">Kedalaman : ' + o[n].getElementsByTagName("depth")[0].childNodes[0].nodeValue + "</p></div></div></div></a>"
        }
        document.getElementById(a).innerHTML = r
    }
}
loadata("https://bmkg-content-inatews.storage.googleapis.com/last30event.xml", "home5"),
loadata("https://bmkg-content-inatews.storage.googleapis.com/last30feltevent.xml", "profile5"),
loadata("https://bmkg-content-inatews.storage.googleapis.com/last30tsunamievent.xml", "contact5"),
loadata("https://bmkg-content-inatews.storage.googleapis.com/live30event.xml", "realtime");
