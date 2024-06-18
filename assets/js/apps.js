var katalog_sebar, katalog_3bulan, timestamp = +new Date;
let defaultToDarkFilter = ["contrast:90%", "brightness:100%", "saturate:250%"];
var map = L.map("map").setView([-6, 115], 6);
L.tileLayer("https://services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}", {
    attribution: !1,
    maxZoom: 15,
    filter: defaultToDarkFilter
}).addTo(map);
var timer, map2 = L.map("map2").setView([-8, 110], 8);
function mapclear() {
    setTimeout((function() {
        map2.invalidateSize(),
        L.tileLayer("https://services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}", {
            attribution: !1,
            maxZoom: 18
        }).addTo(map2)
    }
    ), 500)
}
var green1 = L.icon({
    iconUrl: "https://inatews.bmkg.go.id/assets_inatews/epic2.png",
    iconSize: [20, 20]
})
  , pulsingIcon = L.icon.pulse({
    iconSize: [30, 30],
    color: "red",
    animate: !0,
    heartbeat: 2
})
  , pulsingIcon2 = L.icon.pulse({
    iconSize: [10, 10],
    color: "red",
    animate: !0,
    heartbeat: 3
});
let marker = L.marker([0, 0], {
    icon: pulsingIcon
}).addTo(map)
  , marker3 = L.marker([0, 0], {
    icon: pulsingIcon2
}).addTo(map2)
  , markershake = L.marker([-8.39, 117.46], {
    icon: green1
}).addTo(map);
var myStyle = {
    color: "red",
    weight: 1,
    opacity: 1
};
let marker_baru = circleWithText2([0, 0], 0, 20, 2, "circle2").addTo(map)
  , firstTime = !0;
var time, popupOptions = {
    maxWidth: "500",
    className: "another-popup",
    closeOnClick: !1,
    autoClose: !1
};
async function getGempa_awal() {
    api_url = "https://bmkg-content-inatews.storage.googleapis.com/datagempa.json?t=" + timestamp;
    const e = await fetch(api_url)
      , t = await e.json()
      , {latitude: a, longitude: n, info: i, OT: r, depth: o, ket: d, identifier: s, sent: l, area: g} = t;
    i.area.split("-")[0].split("di");
    var p = i.magnitude
      , c = p.split(".")
      , m = c[0] + "," + c[1]
      , u = (i.potential,
    i.instruction,
    i.point.coordinates.split(","));
    null != theCircle2 && map.removeLayer(theCircle2),
    null == marker_baru ? marker_baru = circleWithText2([u[1], u[0]], p, 20, 2, "circle2").addTo(map) : (map.removeLayer(marker_baru),
    $.ajax({
        url: "https://bmkg-content-inatews.storage.googleapis.com/" + i.eventid + "_focal.png",
        type: "HEAD",
        error: function() {
            document.getElementById("tos").style.display = "none",
            marker_baru = circleWithText2([u[1], u[0]], p, 20, 2, "circle2").addTo(map)
        },
        success: function() {
            document.getElementById("tos").style.display = "block",
            $(".toast").toast("show"),
            marker_baru = circleWithText2([u[1], u[0]], p, 20, 2, "circle2").bindPopup('<img onclick="detail_focal()" id="focal_img3" name="' + i.eventid + '" src="https://bmkg-content-inatews.storage.googleapis.com/' + i.eventid + '_focal.png"/>', popupOptions).addTo(map).openPopup().on("click", detail_focal),
            detail_focal(event)
        }
    })),
    markershake.setLatLng([u[1], u[0]]).bindPopup(i.headline),
    marker3.setLatLng([u[1], u[0]]).bindPopup(i.headline),
    marker.setLatLng([u[1], u[0]]).on("click", detail_focal),
    map2.setView([u[1], u[0]], 7),
    map.setView([u[1], u[0]], 7),
    setTimeout((function() {
        histori_select(u[1], u[0], p)
    }
    ), 1e3);
    let b = u[0]
      , y = u[1];
    var h = i.eventid;
    if (parseFloat(y) < 0 && parseFloat(y) > -1)
        var k = "-0" + String(-1 * Math.round(1e3 * parseFloat(y)));
    else if (parseFloat(y) >= 0 && parseFloat(y) < 10)
        k = "0" + String(Math.round(1e3 * parseFloat(y)));
    else
        k = String(Math.round(1e3 * parseFloat(y)));
    if (parseFloat(b) >= 100)
        var v = String(Math.round(1e3 * parseFloat(b)));
    else
        v = "0" + String(Math.round(1e3 * parseFloat(b)));
    if (getnarasi(i.eventid),
    "Warning Gempa dirasakan" == i.subject) {
        var f = i.subject;
        document.getElementById("logo_eva").innerHTML = '<div class="card card-body text-black py-2 px-1 border-0" style=" background-image: url(https://inatews.bmkg.go.id/assets_inatews/img/rasa-m5.png)!important; background-repeat:no-repeat; background-size: contain; background-position: center; height:140px"></div>';
        f.split(" ");
        var w = "GEMPABUMI DIRASAKAN"
          , _ = "GEMPABUMI DIRASAKAN";
        document.getElementById("div_tsu").style.display = "none",
        // document.getElementById("note").style.display = "none",
        // document.getElementById("shake_div").style.display = "block";
        parseFloat(p);
        $.ajax({
            url: "https://bmkg-content-inatews.storage.googleapis.com/" + i.eventid + "_rev/intensity_logo.jpg",
            type: "HEAD",
            error: function() {
                document.getElementById("report_gempa").innerHTML = "<img src='https://bmkg-content-inatews.storage.googleapis.com/" + i.shakemap + "' width='100%;' style='border:1px solid;'>",
                document.getElementById("report_gempa2").innerHTML = '<div class="card p-3" style="border-style: dotted; border-color: red; " >-</div>',
                document.getElementById("shakemap_sebaran").innerHTML = '<div class="card p-3" style="margin-bottom:20px; border-style: dotted; border-color: red;" >-</div>',
                document.getElementById("shakemap_list").innerHTML = '<div class="card p-3" style="border-style: dotted; border-color: red;" >-</div>',
                document.getElementById("sh_model").innerText = "Informasi dampak berdasarkan pemodelan :"
            },
            success: function() {
                document.getElementById("report_gempa").innerHTML = '<div style=" " ><img src="https://bmkg-content-inatews.storage.googleapis.com/' + i.eventid + '_rev/intensity_logo.jpg" alt="shakemap" align="center" width="95%"></div>',
                document.getElementById("report_gempa2").innerHTML = '<div style="" ><img src="https://bmkg-content-inatews.storage.googleapis.com/' + i.eventid + '_rev/impact_list.jpg" alt="shakemap" align="center" width="95%"></div>',
                document.getElementById("shakemap_sebaran").innerHTML = '<div style=" " ><img src="https://bmkg-content-inatews.storage.googleapis.com/' + i.eventid + '_rev/loc_map.png" alt="shakemap" align="center" width="95%"></div>',
                document.getElementById("shakemap_list").innerHTML = '<div style=" " ><img src="https://bmkg-content-inatews.storage.googleapis.com/' + i.eventid + '_rev/stationlist_MMI.jpg" alt="shakemap" align="center" width="95%"></div>'
            }
        })
    } else if ("Gempa M>5" == i.subject) {
        w = "GEMPABUMI M>5";
        document.getElementById("logo_eva").innerHTML = '<div class="card card-body text-black py-2 px-1 border-0" style=" background-image: url(assets_inatews/img/rasa-m5.png)!important; background-repeat:no-repeat; background-size: contain; background-position: center; height:140px"></div>';
        parseFloat(p);
        document.getElementById("div_tsu").style.display = "none",
        // document.getElementById("note").style.display = "none",
        // document.getElementById("shake_div").style.display = "block";
        _ = "TIDAK BERPOTENSI TSUNAMI";
        $.ajax({
            url: "https://bmkg-content-inatews.storage.googleapis.com/" + i.eventid + "_rev/intensity_logo.jpg",
            type: "HEAD",
            error: function() {
                document.getElementById("report_gempa").innerHTML = "<img src='https://bmkg-content-inatews.storage.googleapis.com/" + i.shakemap + "' width='100%; border:1;'>",
                document.getElementById("report_gempa2").innerHTML = '<div class="card p-3" style="border-style: dotted; border-color: red; " >-</div>',
                document.getElementById("shakemap_sebaran").innerHTML = '<div class="card p-3" style="margin-bottom:20px; border-style: dotted; border-color: red;" >-</div>',
                document.getElementById("shakemap_list").innerHTML = '<div class="card p-3" style="border-style: dotted; border-color: red;" >-</div>',
                document.getElementById("sh_model").innerText = "Informasi dampak berdasarkan pemodelan :"
            },
            success: function() {
                // document.getElementById("report_gempa").innerHTML = '<div style="height:570px; " ><img src="https://bmkg-content-inatews.storage.googleapis.com/' + i.eventid + '_rev/intensity_logo.jpg" alt="shakemap" align="center" width="95%"></div>',
                // document.getElementById("report_gempa2").innerHTML = '<div style="" ><img src="https://bmkg-content-inatews.storage.googleapis.com/' + i.eventid + '_rev/impact_list.jpg" alt="shakemap" align="center" width="95%"></div>',
                // document.getElementById("shakemap_sebaran").innerHTML = '<div style=" " ><img src="https://bmkg-content-inatews.storage.googleapis.com/' + i.eventid + '_rev/loc_map.png" alt="shakemap" align="center" width="95%"></div>',
                // document.getElementById("shakemap_list").innerHTML = '<div style=" " ><img src="https://bmkg-content-inatews.storage.googleapis.com/' + i.eventid + '_rev/stationlist_MMI.jpg" alt="shakemap" align="center" width="95%"></div>'
            }
        })
    } else {
        document.getElementById("report_tsunami").innerHTML = ' <a href="https://bmkg-content-inatews.storage.googleapis.com/' + i.eventid + '.gif" data-toggle="lightbox"><img src="https://bmkg-content-inatews.storage.googleapis.com/' + i.eventid + '.gif" alt="" width="100%" class="img-fluid"></a>';
        var x = document.getElementById("mytable2")
          , L = document.getElementById("mytable");
        if (null != x && (x.parentNode.removeChild(x),
        L.parentNode.removeChild(L)),
        "Warning Tsunami PD-4" == i.subject) {
            document.getElementById("div_tsu").style.display = "none",
            document.getElementById("dampak_div").style.display = "none",
            document.getElementById("shake_div").style.display = "none",
            document.getElementById("pd4_div").style.display = "block";
            w = i.subject,
            _ = "TSUNAMI TELAH BERAKHIR";
            document.getElementById("logo_eva").innerHTML = '<div class="card card-body text-black py-2 px-1 border-0" style=" background-image: url(assets_inatews/img/nothreat2.jpg)!important; background-repeat:no-repeat; background-size: contain; background-position: center; height:140px"></div>',
            document.getElementById("mag_kotak").style.backgroundColor = "green",
            document.getElementById("mag_kotak2").style.backgroundColor = "green",
            document.getElementById("note").innerHTML = '<p class="d-block" style="font-size:90%">Buletin ini merupakan buletin terakhir dari rangkaian buletin tsunami sebelumnya. Buletin ini menyatakan bahwa peringatan berakhir.</p>'
        } else {
            "Warning Tsunami PD-1" == i.subject ? document.getElementById("note").innerHTML = '<p class="d-block" style="font-size:90%">Buletin ini kirim dalam waktu 5 menit setelah terjadinya gempabumi melalui sarana diseminasi multi moda SMS, Mobile app, E-mail, Fax, Website, WRS, GTS, dan Sosial Media. Buletin ini akan dimutakhirkan dan atau disusul dengan rangkaian buletin tsunami berikutnya hingga terbitnya PDT-4 yang menyatakan berakhirnya peringatan.</p>' : "Warning Tsunami PD-2" == i.subject ? document.getElementById("note").innerHTML = '<p class="d-block" style="font-size:90%">Buletin ini merupakan lanjutan dari buletin sebelumnya, yang kirim sekitar 10-15 menit setelah gempabumi melalui sarana diseminasi multi moda SMS, Mobile app, E-mail, Fax, Website, WRS, GTS, dan Sosial Media. Buletin ini terdiri dari pemutakhiran informasi dari buletin sebelumnya dan atau akan ikuti dengan rangkaian buletin tsunami berikutnya sampai dikeluarkannya PDT-4 yang menyatakan berakhirnya peringatan.</p>' : document.getElementById("note").innerHTML = '<p class="d-block" style="font-size:90%">Buletin ini merupakan lanjutan dari buletin sebelumnya, dilengkapi dengan data pengamatan permukaan laut yang telah dikonfirmasi dan pemutakhiran dari buletin sebelumnya dan atau masih akan diikuti oleh rangkaian buletin tsunami berikutnya hingga dikeluarkannya PDT-4 yang menyatakan berakhirnya peringatan.</p>';
            w = i.subject,
            _ = "BERPOTENSI TSUNAMI";
            document.getElementById("logo_eva").innerHTML = '<div class="card card-body text-black py-2 px-1 border-0" style=" background-image: url(assets_inatews/img/evacuation.jpg)!important; background-repeat:no-repeat; background-size: contain; background-position: center; height:140px"></div>',
            // document.getElementById("shake_div").style.display = "none",
            $.ajax({
                url: "https://bmkg-content-inatews.storage.googleapis.com/" + i.eventid + ".gif",
                type: "HEAD",
                error: function() {
                    document.getElementById("report_gempa").innerHTML = "<img src='https://bmkg-content-inatews.storage.googleapis.com/" + i.shakemap + "' width='100%; border:1;'>",
                    document.getElementById("report_gempa2").innerHTML = "<img src='https://bmkg-content-inatews.storage.googleapis.com/" + i.shakemap + "' width='100%; border:1;'>"
                },
                success: function() {
                    var e = i.wzarea
                      , t = $("<table/>").attr("id", "mytable");
                    $("#div311").append(t);
                    var a = " <tr bgcolor='#35c910'>  <th>PROVINSI</th>  <th>KOTA/KABUPATEN</th>   <th width='15%'>STATUS PERINGATAN</th> <th width='30%'>ESTIMASI TIBA</th></tr>";
                    $("#mytable").append(a);
                    if (e.length)
                        for (var n = 0; n < e.length; n++) {
                            var r = "<tr>"
                              , o = "<td>" + e[n].province + "</td>"
                              , d = "<td>" + e[n].district + "</td>";
                            if ("AWAS" == e[n].level)
                                var s = "<td bgcolor='red'>" + e[n].level + "</td>";
                            else if ("SIAGA" == e[n].level)
                                s = "<td bgcolor='orange'>" + e[n].level + "</td>";
                            else if ("WASPADA" == e[n].level)
                                s = "<td bgcolor='yellow'>" + e[n].level + "</td>";
                            var l = "<td>" + e[n].date + " " + e[n].time + "</td></tr>";
                            $("#mytable").append(r + o + d + s + l)
                        }
                    else {
                        r = "<tr>",
                        o = "<td>" + e.province + "</td>",
                        d = "<td>" + e.district + "</td>";
                        if ("AWAS" == e.level)
                            s = "<td bgcolor='red'>" + e.level + "</td>";
                        else if ("SIAGA" == e.level)
                            s = "<td bgcolor='orange'>" + e.level + "</td>";
                        else if ("WASPADA" == e.level)
                            s = "<td bgcolor='yellow'>" + e.level + "</td>";
                        l = "<td>" + e.date + " " + e.time + "</td></tr>";
                        $("#mytable").append(r + o + d + s + l)
                    }
                    if (i.subject.split(".")[1]) {
                        var g = i.obsarea;
                        document.getElementById("subjudul_obs").innerHTML = '<p class="card-text border-0" style="font-size:100%; color:black; margin-bottom:0px; margin-top:10px;"> Berdasarkan pengamatan muka air laut, tsunami telah terdeteksi :</p>';
                        t = $("<table/>").attr("id", "mytable2");
                        $("#div31").append(t);
                        a = " <tr bgcolor='#0C8C5E'>  <th>LOKASI (KOORDINAT)</th>    <th>WAKTU</th> <th>KETINGGIAN (m)</th></tr>";
                        $("#mytable2").append(a);
                        for (n = 0; n < g.length; n++) {
                            r = "<tr>",
                            o = "<td align='center'>" + g[n].location + " </br>(" + g[n].loclatitude + " " + g[n].loclongitude + ")</td>",
                            d = "<td align='center'>" + g[n].date + "</br>" + g[n].time + "</td>",
                            s = "<td align='center'>" + g[n].height + "</td></tr>";
                            $("#mytable2").append(r + o + d + s)
                        }
                    }
                    document.getElementById("inst1").innerHTML = i.instruction1,
                    document.getElementById("inst2").innerHTML = i.instruction2,
                    document.getElementById("inst3").innerHTML = i.instruction3
                }
            })
        }
        parseFloat(p);
        $.ajax({
            url: "https://bmkg-content-inatews.storage.googleapis.com/" + i.eventid + "_rev/intensity_logo.jpg",
            type: "HEAD",
            error: function() {
                document.getElementById("report_gempa").innerHTML = ' <a href="https://bmkg-content-inatews.storage.googleapis.com/' + i.shakemap + '" data-toggle="lightbox"><img src="https://bmkg-content-inatews.storage.googleapis.com/' + i.shakemap + '" alt="" class="img-fluid"></a>'
            },
            success: function() {
                // document.getElementById("report_gempa").innerHTML = '<div style="height:570px; " ><img src="https://bmkg-content-inatews.storage.googleapis.com/' + i.eventid + '_rev/intensity_logo.jpg" alt="shakemap" align="center" width="95%"></div>',
                document.getElementById("report_gempa2").innerHTML = ' <a href="https://bmkg-content-inatews.storage.googleapis.com/' + i.eventid + '_rev/report-1.jpg" data-toggle="lightbox"><img src="https://bmkg-content-inatews.storage.googleapis.com/' + i.eventid + '_rev/report-1.jpg" alt="" class="img-fluid"></a>'
            }
        })
    }
    document.getElementById("instruction").innerHTML = i.instruction,
    document.getElementById("judul").innerText = w.toUpperCase(),
    document.getElementById("warn1").innerText = _.toUpperCase(),
    document.getElementById("mag_big").innerHTML = m,
    document.getElementById("deskripsi").innerText = i.headline.replace(/&lt;br&gt;/g, " "),
    document.getElementById("timelapse").innerHTML = "waktu kirim: " + i.timesent,
    document.getElementById("ot_gempa").innerHTML = i.date + " " + i.time,
    document.getElementById("lokasi_gempa").innerHTML = i.latitude + ", " + i.longitude,
    document.getElementById("kedalaman_gempa").innerHTML = " " + i.depth
}
getGempa_awal();
let allEarthquakes = new L.LayerGroup
  , tectonicPlates = new L.LayerGroup
  , majorEarthquakes = new L.LayerGroup
  , sensor_seis = new L.LayerGroup
  , sensor_global = new L.LayerGroup
  , kat_histori = new L.LayerGroup;
function circleWithText2(e, t, a, n, i) {
    var r = 1.3 * a
      , o = 'style="width: ' + r + "px; height: " + r + "px; border-width: " + n + 'px;"'
      , d = r + 2 * n
      , s = L.divIcon({
        html: '<span class="circle ' + i + '" ' + o + ">" + t + "</span>",
        className: "",
        iconSize: [d, d],
        popupAnchor: [-7, -12]
    });
    return L.marker(e, {
        icon: s
    })
}
d3.json("https://bmkg-content-inatews.storage.googleapis.com/3mgempaQL.json?t=" + timestamp).then((function(e) {
    function t(e) {
        return {
            opacity: 1,
            fillOpacity: 1,
            fillColor: "#bdbfbe",
            color: "#000000",
            radius: a(e.properties.mag),
            stroke: !0,
            weight: .5
        }
    }
    function a(e) {
        return 0 === e ? 1 : 1.1 * e
    }
    d3.json("https://bmkg-content-inatews.storage.googleapis.com/sensor_seismic.json").then((function(e) {
        L.geoJson(e, {
            pointToLayer: function(e, t) {
                var a = new L.Icon({
                    iconSize: [12, 12],
                    iconUrl: "https://inatews.bmkg.go.id/assets_inatews/img/sensor.png"
                });
                return L.marker(t, {
                    icon: a
                })
            },
            onEachFeature: function(e, t) {
                t.bindPopup("Kode: " + e.properties.id + "<br>Lokasi: " + e.properties.stakeholder)
            }
        }).addTo(sensor_seis)
    }
    )),
    d3.json("https://bmkg-content-inatews.storage.googleapis.com/sensor_global.json").then((function(e) {
        L.geoJson(e, {
            pointToLayer: function(e, t) {
                if ("IA" != e.properties.net && "GE" != e.properties.net) {
                    var a = new L.Icon({
                        iconSize: [12, 12],
                        iconUrl: "https://inatews.bmkg.go.id/assets_inatews/img/sensor_luar.png"
                    });
                    return L.marker(t, {
                        icon: a
                    })
                }
            },
            onEachFeature: function(e, t) {
                t.bindPopup("Kode: " + e.properties.sta + "<br>Lokasi: " + e.properties.description)
            }
        }).addTo(sensor_global)
    }
    )),
    katalog_3bulan = L.geoJson(e, {
        pointToLayer: function(e, t) {
            return L.circleMarker(t)
        },
        style: t,
        onEachFeature: function(e, t) {
            t.bindPopup("Magnitude: " + e.properties.mag.substring(0, 3) + "<br>Waktu Kejadian: " + e.properties.time + "UTC<br>Lokasi: " + e.properties.place + "<br>Kedalaman: " + parseInt(e.properties.depth) + " Km")
        }
    }).addTo(allEarthquakes),
    d3.json("https://bmkg-content-inatews.storage.googleapis.com/histori.json?t=" + timestamp).then((function(e) {
        L.geoJson(e, {
            pointToLayer: function(e, t) {
                return L.circleMarker(t)
            },
            style: t,
            onEachFeature: function(e, t) {
                t.bindPopup("Magnitude: " + e.properties.mag.substring(0, 3) + "<br>Waktu kejadian: " + e.properties.time + " UTC<br>Lokasi: " + e.properties.place + "<br>Kedalaman: " + parseInt(e.properties.depth) + " Km")
            }
        }).addTo(kat_histori)
    }
    )),
    allEarthquakes.addTo(map);
    L.control({
        position: "bottomright"
    });
    let n = {
        color: "#ff8c00",
        weight: 1
    };
    d3.json("https://bmkg-content-inatews.storage.googleapis.com/fault_indo_world.geojson").then((function(e) {
        L.geoJson(e, {
            style: n
        }).addTo(tectonicPlates),
        tectonicPlates.addTo(map)
    }
    ))
}
));
var legend3 = L.control({
    position: "bottomleft"
})
  , legend4 = L.control({
    position: "bottomleft"
});
(legend3 = L.control({
    position: "bottomleft"
})).onAdd = function(e) {
    this._div = L.DomUtil.create("div");
    return this._div.innerHTML = ' <div class="container d-none d-xl-block" style="width:330px; margin-bottom:10px; padding-top:20px;" ><div class="card d-flex flex-column" style="margin-top:30px"><div class="  px-4 py-1 d-sm-block bg-dark text-dark" style=" background: rgb(0,0,0,0)!important;"><p style="text-align:center!important; margin-bottom:0px;" id="judul_1">INFO RESMI BMKG</p><h5 style="text-align:center!important; ext-transform: uppercase; margin-bottom:0; font-size:130%"><strong id="judul"></strong></h5><span style="text-align:center!important" id="timelapse" class="d-none d-sm-block">--</span></div> </div></div><div class="container d-none d-xl-block" style="width:330px" ><div class="card" id="container_hc"style="background-color: rgba(255, 255, 255, 0.6);"></div>< </div><div class="container d-none d-xl-block" style="width:330px" id="test_toast" ><div class="card" style="background-color: rgba(255, 255, 255, 0.6);">   <p style="margin-top:3px; margin-bottom:0px; font-size:120%; color:black" align="center">::Legenda::</p>\t<hr style="border: 2px solid white; margin-top:0px;">\t<small class="text-muted" style="margin-left:15px"><b><font color="black">Magnitudo:</font></b></small><div class="row" style="margin-left:5%; margin-bottom:0px; padding-right:0px;"><div class="col-md-1" style="padding:0; margin:0; background-color: rgba(255, 255, 255, 0);"><div class="legend" style="padding:0; margin:0;"><span style="padding:0; margin:0;"><i class="circlepadding" style="width: 6px; height: 6px; background: lightgrey; border-width: thin; border-radius: 50%; padding:0; margin-top:40%; border-style: solid; border-color: black;"></i></span><span style="padding:0; margin:0; font-size:80%;"><p class="pcir">1</p></span></div></div><div class="col-md-1" style="padding:0; margin:0; background-color: rgba(255, 255, 255, 0);"><div class="legend" style="padding:0; margin:0;"><span style="padding:0; margin:0;"><i class="circlepadding" style="width: 8px; height: 8px; background: lightgrey; border-width: thin; border-radius: 50%; padding:0; margin-top:35%; border-style: solid; border-color: black;"></i></span><span style="padding:0; margin:0; font-size:80%;"><p class="pcir">2</p></span></div></div><div class="col-md-1" style="padding:0; margin:0; background-color: rgba(255, 255, 255, 0);"><div class="legend" style="padding:0; margin:0;"><span style="padding:0; margin:0;"><i class="circlepadding" style="width: 10px; height: 10px; background: lightgrey; border-width: thin; border-radius: 50%; padding:0; margin-top:30%; border-style: solid; border-color: black;"></i></span><span style="padding:0; margin:0; font-size:80%;"><p class="pcir">3</p></span></div></div><div class="col-md-1" style="padding:0; margin:0; background-color: rgba(255, 255, 255, 0);"><div class="legend" style="padding:0; margin:0;"><span style="padding:0; margin:0;"><i class="circlepadding" style="width: 14px; height: 14px; background: lightgrey; border-width: thin; border-radius: 50%; padding:0; margin-top:20%; border-style: solid; border-color: black;"></i></span><span style="padding:0; margin:0; font-size:80%;"><p class="pcir" >4</p></span></div></div><div class="col-md-2" style="padding:0; margin:0; background-color: rgba(255, 255, 255, 0); width:70%;"><div class="legend" style="padding:0 0 0 10; margin:0; "><span style="padding:0; margin:0;"><i class="circlepadding" style="width: 18px; height: 18px; background: lightgrey; border-width: thin; border-radius: 50%; padding:0; margin-top:-15%; border-style: solid; border-color: black;"></i></span><span style="padding:0; margin-top:-50%; font-size:80%;"><p class="pcir" style="margin-top:-22%;" >5</p></span></div></div><div class="col-md-2" style="padding:0; margin:0 0 0 0; background-color: rgba(255, 255, 255, 0);"><div class="legend" style="padding:0; margin-left:-10px;"><span style="padding:0; margin:0;"><i class="circlepadding" style="width: 24px; height: 24px; background: lightgrey; border-width: thin; border-radius: 50%; padding:0; margin-top:-5%; border-style: solid; border-color: black;"></i></span><span style="padding:0; margin:0; font-size:100%;"><p class="pcir" >6</p></span></div></div><div class="col-md-2" style="padding:0; margin:0 0 0 -2; background-color: rgba(255, 255, 255, 0);"><div class="legend" style="padding:0; margin-left:-20px;"><span style="padding:0; margin:0;"><i class="circlepadding" style="width: 28px; height: 28px; background: lightgrey; border-width: thin; border-radius: 50%; padding:0; margin-top:-10%; border-style: solid; border-color: black;"></i></span><span style="padding:0; margin:0; font-size:100%;"><p class="pcir" >7</p></span></div></div><div class="col-lg-2" style=" padding:0; margin:0 0 5% -10px; background-color: rgba(255, 255, 255, 0);"><div class="legend" style="padding:0; margin:0 0 5% -20px; width:200%; "><span style="padding:0; margin:0;"><i class="circlepadding" style="width: 32px; height: 32px; background: lightgrey; border-width: thin; border-radius: 50%; padding:0; margin-top:-8%; border-style: solid;  border-color: black; "></i></span><span style="padding:0; margin:0; font-size:100%;"><p class="pcir" >8+</p></span></div></div></div></div></div> </div>  ',
    this._div
}
,
legend3.addTo(map),
legend4.onAdd = function(e) {
    this._div = L.DomUtil.create("div");
    return this._div.innerHTML = ' <div class="container d-none d-xl-block" style="width:330px" id="test_toast" ><div class="card" style="background-color: rgba(255, 255, 255, 0.6);">   <p style="margin-top:3px; margin-bottom:0px; font-size:120%; color:black" align="center">::Legenda::</p>\t<hr style="border: 2px solid white; margin-top:0px;">\t<small class="text-muted"><b><font color="black">Magnitudo:</font></b></small><div class="row" style="margin-left:5%; margin-bottom:0px; padding-right:0px;"><div class="col-md-1" style="padding:0; margin:0; background-color: rgba(255, 255, 255, 0);"><div class="legend" style="padding:0; margin:0;"><span style="padding:0; margin:0;"><i class="circlepadding" style="width: 6px; height: 6px; background: lightgrey; border-width: thin; border-radius: 50%; padding:0; margin-top:40%; border-style: solid; border-color: black;"></i></span><span style="padding:0; margin:0; font-size:80%;"><p class="pcir">1</p></span></div></div><div class="col-md-1" style="padding:0; margin:0; background-color: rgba(255, 255, 255, 0);"><div class="legend" style="padding:0; margin:0;"><span style="padding:0; margin:0;"><i class="circlepadding" style="width: 8px; height: 8px; background: lightgrey; border-width: thin; border-radius: 50%; padding:0; margin-top:35%; border-style: solid; border-color: black;"></i></span><span style="padding:0; margin:0; font-size:80%;"><p class="pcir">2</p></span></div></div><div class="col-md-1" style="padding:0; margin:0; background-color: rgba(255, 255, 255, 0);"><div class="legend" style="padding:0; margin:0;"><span style="padding:0; margin:0;"><i class="circlepadding" style="width: 10px; height: 10px; background: lightgrey; border-width: thin; border-radius: 50%; padding:0; margin-top:30%; border-style: solid; border-color: black;"></i></span><span style="padding:0; margin:0; font-size:80%;"><p class="pcir">3</p></span></div></div><div class="col-md-1" style="padding:0; margin:0; background-color: rgba(255, 255, 255, 0);"><div class="legend" style="padding:0; margin:0;"><span style="padding:0; margin:0;"><i class="circlepadding" style="width: 14px; height: 14px; background: lightgrey; border-width: thin; border-radius: 50%; padding:0; margin-top:20%; border-style: solid; border-color: black;"></i></span><span style="padding:0; margin:0; font-size:80%;"><p class="pcir" >4</p></span></div></div><div class="col-md-2" style="padding:0; margin:0; background-color: rgba(255, 255, 255, 0); width:70%;"><div class="legend" style="padding:0 0 0 10; margin:0; "><span style="padding:0; margin:0;"><i class="circlepadding" style="width: 18px; height: 18px; background: lightgrey; border-width: thin; border-radius: 50%; padding:0; margin-top:-15%; border-style: solid; border-color: black;"></i></span><span style="padding:0; margin-top:-50%; font-size:80%;"><p class="pcir" style="margin-top:-22%;" >5</p></span></div></div><div class="col-md-2" style="padding:0; margin:0 0 0 0; background-color: rgba(255, 255, 255, 0);"><div class="legend" style="padding:0; margin-left:-10px;"><span style="padding:0; margin:0;"><i class="circlepadding" style="width: 24px; height: 24px; background: lightgrey; border-width: thin; border-radius: 50%; padding:0; margin-top:-5%; border-style: solid; border-color: black;"></i></span><span style="padding:0; margin:0; font-size:100%;"><p class="pcir" >6</p></span></div></div><div class="col-md-2" style="padding:0; margin:0 0 0 -2; background-color: rgba(255, 255, 255, 0);"><div class="legend" style="padding:0; margin-left:-20px;"><span style="padding:0; margin:0;"><i class="circlepadding" style="width: 28px; height: 28px; background: lightgrey; border-width: thin; border-radius: 50%; padding:0; margin-top:-10%; border-style: solid; border-color: black;"></i></span><span style="padding:0; margin:0; font-size:100%;"><p class="pcir" >7</p></span></div></div><div class="col-lg-2" style=" padding:0; margin:0 0 5% -10px; background-color: rgba(255, 255, 255, 0);"><div class="legend" style="padding:0; margin:0 0 5% -20px; width:200%; "><span style="padding:0; margin:0;"><i class="circlepadding" style="width: 32px; height: 32px; background: lightgrey; border-width: thin; border-radius: 50%; padding:0; margin-top:-8%; border-style: solid;  border-color: black; "></i></span><span style="padding:0; margin:0; font-size:100%;"><p class="pcir" >8+</p></span></div></div></div><small class="text-muted"><b><font color="black">Kedalaman (Km):</font></b></small><div class="row" style="margin-left:2%; margin-bottom:1px;"><div class="foo red"></div><div style="margin-top:2%"><=50</div><div class="foo orange"></div><div style="margin-top:2%"> <=100</div><div class="foo yellow"></div><div style="margin-top:2%"> <=250</div><div class="foo green"></div><div style="margin-top:2%"> <=600</div><div class="foo blue"></div><div style="margin-top:2%"> >600</div></div></div> </div>  ',
    this._div
}
,
legend3.addTo(map),
legend4.addTo(map2);
let allEarthquakes2 = new L.LayerGroup
  , tectonicPlates2 = new L.LayerGroup
  , majorEarthquakes2 = new L.LayerGroup;
d3.json("https://bmkg-content-inatews.storage.googleapis.com/katalog_gempa.json?t=" + timestamp).then((function(e) {
    function t(e) {
        return e > 300 ? "#98ee00" : e > 200 || e > 100 ? "#eecc00" : e > 60 ? "#ee9c00" : e > 10 ? "#ea822c" : "#ea2c2c"
    }
    function a(e) {
        return 0 === e ? 1 : 1.2 * e
    }
    katalog_sebar = L.geoJson(e, {
        pointToLayer: function(e, t) {
            if (null != t || "-" != t)
                return L.circleMarker(t)
        },
        style: function(e) {
            return {
                opacity: 1,
                fillOpacity: 1,
                fillColor: t(e.properties.depth),
                color: "#000000",
                radius: a(e.properties.mag),
                stroke: !0,
                weight: .5
            }
        },
        onEachFeature: function(e, t) {
            t.bindPopup("Magnitudo: " + e.properties.mag + "<br>Waktu Kejadian: " + e.properties.date + "<br>Lokasi: " + e.properties.dirasakan + "<br>Kedalaman: " + e.properties.depth + " Km")
        }
    }).addTo(allEarthquakes2),
    allEarthquakes2.addTo(map2);
    L.control({
        position: "bottomright"
    });
    let n = {
        color: "#ff8c00",
        weight: 1
    };
    d3.json("https://bmkg-content-inatews.storage.googleapis.com/indo_faults_lines.geojson").then((function(e) {
        L.geoJson(e, {
            style: n
        }).addTo(tectonicPlates2),
        tectonicPlates2.addTo(map2)
    }
    ))
}
));
var overlayMaps = {
    "Gempabumi < 3 Bulan": allEarthquakes,
    "Gempabumi < 5 Tahun": kat_histori,
    "Sensor Seismik BMKG": sensor_seis,
    "Sensor Seismik Global": sensor_global,
    Patahan: tectonicPlates
};
function getnarasi(e) {
    $.ajax({
        url: "https://bmkg-content-inatews.storage.googleapis.com/" + e + "_narasi.txt",
        dataType: "text",
        error: function(e) {
            document.getElementById("narasi").innerHTML = '<div class="card p-3" style="background-color:rgb(0,0,0,0)!important;border-style: dotted; border-color: red;" ><h4>-----</h4></div>'
        },
        success: function(e) {
            document.getElementById("narasi").innerHTML = e
        }
    })
}
L.control.layers(null, overlayMaps, {
    collapsed: !0
}).addTo(map);
// for (var header = document.getElementById("tombols"), btns = header.getElementsByClassName("port-item"), i = 0; i < btns.length; i++)
//     btns[i].addEventListener("click", (function() {
//         var e = document.getElementsByClassName("active");
//         e[0].className = e[0].className.replace(" active", ""),
//         this.className += " active"
//     }
//     ));
function detail_focal(e) {
    let t = document.getElementById("focal_img3").name;
    $.ajax({
        url: "https://bmkg-content-inatews.storage.googleapis.com/" + t + "_focal.json",
        dataType: "json",
        error: function() {},
        success: function(e) {
            document.getElementById("np1").innerHTML = "<span style='color:red'>Nodal Plane 1:</span> Strike(" + Math.round(100 * e.np1.strike1) / 100 + "), Dip(" + Math.round(100 * e.np1.dip1) / 100 + "), Rake(" + Math.round(100 * e.np1.rake1) / 100 + ")",
            document.getElementById("np2").innerHTML = "<span style='color:red'>Nodal Plane 2: </span>Strike(" + Math.round(100 * e.np2.strike2) / 100 + "), Dip(" + Math.round(100 * e.np2.dip2) / 100 + "), Rake(" + Math.round(100 * e.np2.rake2) / 100 + ")",
            document.getElementById("mw").innerHTML = "<span style='color:red'>Mw :</span> " + Math.round(100 * e.mw) / 100,
            document.getElementById("fd").innerHTML = "<span style='color:red'>Focal Depth: </span>" + Math.round(100 * e.focaldepth) / 100 + " Km",
            document.getElementById("fm_img").src = "https://bmkg-content-inatews.storage.googleapis.com/" + t + "_focal.png"
        }
    }),
    document.getElementById("tos").style.display = "block",
    $(".toast").toast("show")
}
