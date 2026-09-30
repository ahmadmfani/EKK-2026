/**
 * DASHBOARD EKK 2026 - MOBILE COMPACT + BAR CHART + TABEL 69 DETAIL
 * Fitur 5: Tabel Detail 69 Indikator (Aspek | Indikator | Sub | Status | Aksi)
 * Header compact fix + Warna Banjar
 */

const FOLDER_ID = "15HAHUpU3LgPG9yT2c-K10PcCTejtvIHa";
const MAPPING = [
  "1. Aspek Administrasi/1. Tersedia monografi kecamatan/1) Data umum kecamatan",
  "1. Aspek Administrasi/1. Tersedia monografi kecamatan/2) Data batas wilayah kecamatan",
  "1. Aspek Administrasi/1. Tersedia monografi kecamatan/3) Data jumlah desa-kelurahan-dusun di kecamatan",
  "1. Aspek Administrasi/1. Tersedia monografi kecamatan/4) Data desa-kelurahan",
  "1. Aspek Administrasi/1. Tersedia monografi kecamatan/5) Data lembaga kemasyarakatan",
  "1. Aspek Administrasi/1. Tersedia monografi kecamatan/6) Data sarana kesehatan",
  "1. Aspek Administrasi/1. Tersedia monografi kecamatan/7) Data sarana keagamaan",
  "1. Aspek Administrasi/1. Tersedia monografi kecamatan/8) Data sarana pendidikan formal",
  "1. Aspek Administrasi/1. Tersedia monografi kecamatan/9) Data sarana pendidikan non formal",
  "1. Aspek Administrasi/1. Tersedia monografi kecamatan/10) Data sarana pariwisata",
  "1. Aspek Administrasi/1. Tersedia monografi kecamatan/11) Data target dan realisasi PBB-P2",
  "1. Aspek Administrasi/2. Tersedia database kepegawaian kecamatan/1) Daftar nominatif pegawai kecamatan",
  "1. Aspek Administrasi/2. Tersedia database kepegawaian kecamatan/2) Buku jaga kenaikan pangkat",
  "1. Aspek Administrasi/2. Tersedia database kepegawaian kecamatan/3) Buku jaga kenaikan gaji berkala",
  "1. Aspek Administrasi/2. Tersedia database kepegawaian kecamatan/4) Buku register cuti-mutasi",
  "1. Aspek Administrasi/2. Tersedia database kepegawaian kecamatan/5) Struktur organisasi",
  "1. Aspek Administrasi/3. Tersedia data aset kecamatan/1) Kartu Inventaris Barang (KIB)",
  "1. Aspek Administrasi/3. Tersedia data aset kecamatan/2) Kartu Inventaris Ruangan (KIR)",
  "1. Aspek Administrasi/4. SAKIP/Nilai SAKIP",
  "1. Aspek Administrasi/5. Administrasi kecamatan/1) Buku register keputusan camat",
  "1. Aspek Administrasi/5. Administrasi kecamatan/2) Buku surat masuk-keluar",
  "1. Aspek Administrasi/5. Administrasi kecamatan/3) Buku tamu",
  "1. Aspek Administrasi/5. Administrasi kecamatan/4) Papan jadwal kegiatan",
  "1. Aspek Administrasi/6. Tersedia data perangkat desa-kelurahan/1) Data perangkat desa-kelurahan",
  "2. Aspek Pembinaan Penyelenggaraan Pemerintah Desa/1. Pembinaan penyelenggaraan pemerintah desa/1) Jadwal kegiatan",
  "2. Aspek Pembinaan Penyelenggaraan Pemerintah Desa/1. Pembinaan penyelenggaraan pemerintah desa/2) Notula",
  "2. Aspek Pembinaan Penyelenggaraan Pemerintah Desa/2. Data jumlah segmen batas desa antar kecamatan/1) Rekapitulasi data segmen batas desa antar kecamatan",
  "2. Aspek Pembinaan Penyelenggaraan Pemerintah Desa/2. Data jumlah segmen batas desa antar kecamatan/2) Berita acara",
  "2. Aspek Pembinaan Penyelenggaraan Pemerintah Desa/2. Data jumlah segmen batas desa antar kecamatan/3) Peraturan Bupati",
  "2. Aspek Pembinaan Penyelenggaraan Pemerintah Desa/3. Data segmen batas desa dalam kecamatan/1) Rekapitulasi data segmen batas desa dalam kecamatan",
  "2. Aspek Pembinaan Penyelenggaraan Pemerintah Desa/3. Data segmen batas desa dalam kecamatan/2) Berita acara",
  "2. Aspek Pembinaan Penyelenggaraan Pemerintah Desa/3. Data segmen batas desa dalam kecamatan/3) Peraturan Bupati",
  "2. Aspek Pembinaan Penyelenggaraan Pemerintah Desa/4. Pembinaan perangkat desa dan kelurahan/1) Rapat koordinasi",
  "2. Aspek Pembinaan Penyelenggaraan Pemerintah Desa/4. Pembinaan perangkat desa dan kelurahan/2) Notula",
  "2. Aspek Pembinaan Penyelenggaraan Pemerintah Desa/4. Pembinaan perangkat desa dan kelurahan/3) Dokumentasi",
  "3. Aspek Pelayanan Publik/1. Terdapat tempat khusus pelayanan publik/1) Foto ruang pelayanan",
  "3. Aspek Pelayanan Publik/2. Tersedia ruang tunggu/1) Foto ruang tunggu",
  "3. Aspek Pelayanan Publik/3. Tersedia petugas unit pengaduan atau kotak pengaduan/1) Foto petugas pengaduan atau kotak pengaduan",
  "3. Aspek Pelayanan Publik/4. Survei Kepuasan Masyarakat (SKM)/Nilai Indeks Kepuasan Masyarakat (IKM)",
  "3. Aspek Pelayanan Publik/5. Terdapat buku pengunjung-tamu/1) Foto buku pengunjung-tamu",
  "3. Aspek Pelayanan Publik/6. Memiliki halaman parkir mobil dan motor/1) Foto lahan parkir",
  "3. Aspek Pelayanan Publik/7. Tersedia website kecamatan yang aktif/1) Tangkapan layar beranda website",
  "3. Aspek Pelayanan Publik/8. Telah menggunakan aplikasi Srikandi/1) Tangkapan layar beranda Srikandi",
  "4. Aspek Kesejahteraan Sosial/1. Inventarisasi dan pengolahan data tentang organisasi sosial masyarakat/1) Rekapitulasi data organisasi sosial masyarakat",
  "4. Aspek Kesejahteraan Sosial/2. Terdapat data keluarga miskin yang akurat/1) Data keluarga miskin terbaru",
  "4. Aspek Kesejahteraan Sosial/3. Pelaksanaan Peringatan Hari Besar Nasional-Lokal/1) Foto kegiatan",
  "5. Aspek Ketentraman dan Ketertiban/1. Pelaporan ketentraman dan ketertiban umum & penyelenggaraan perlindungan masyarakat/1) Laporan ketentraman dan ketertiban umum",
  "5. Aspek Ketentraman dan Ketertiban/1. Pelaporan ketentraman dan ketertiban umum & penyelenggaraan perlindungan masyarakat/2) Laporan perlindungan masyarakat",
  "5. Aspek Ketentraman dan Ketertiban/2. Dialog camat dengan tokoh masyarakat, tokoh adat dan tokoh agama (FKUB)/1) Notula rapat koordinasi FKUB",
  "5. Aspek Ketentraman dan Ketertiban/2. Dialog camat dengan tokoh masyarakat, tokoh adat dan tokoh agama (FKUB)/2) Dokumentasi rapat koordinasi FKUB",
  "5. Aspek Ketentraman dan Ketertiban/3. Inventarisasi dan pengolahan data ketertiban, kesatuan bangsa, perlindungan masyarakat dan ormas/1) Data Perlindungan Masyarakat",
  "5. Aspek Ketentraman dan Ketertiban/3. Inventarisasi dan pengolahan data ketertiban, kesatuan bangsa, perlindungan masyarakat dan ormas/2) Data Organisasi Kemasyarakatan",
  "6. Aspek Pemerintahan Umum dan Pelimpahan Kewenangan/1. Pertemuan koordinasi FORKOPIMCAM/1) Notula rapat koordinasi FORKOPIMCAM",
  "6. Aspek Pemerintahan Umum dan Pelimpahan Kewenangan/1. Pertemuan koordinasi FORKOPIMCAM/2) Dokumentasi rapat koordinasi FORKOPIMCAM",
  "6. Aspek Pemerintahan Umum dan Pelimpahan Kewenangan/2. Pelayanan Administrasi Terpadu Kecamatan (PATEN) Non Perizinan/1) Laporan PATEN",
  "7. Aspek Pemberdayaan Masyarakat/1. Fasilitasi MUSRENBANG Kecamatan/1) Surat undangan kegiatan",
  "7. Aspek Pemberdayaan Masyarakat/1. Fasilitasi MUSRENBANG Kecamatan/2) Berita acara",
  "7. Aspek Pemberdayaan Masyarakat/1. Fasilitasi MUSRENBANG Kecamatan/3) Daftar hadir",
  "7. Aspek Pemberdayaan Masyarakat/1. Fasilitasi MUSRENBANG Kecamatan/4) Notula",
  "7. Aspek Pemberdayaan Masyarakat/1. Fasilitasi MUSRENBANG Kecamatan/5) Dokumentasi",
  "7. Aspek Pemberdayaan Masyarakat/1. Fasilitasi MUSRENBANG Kecamatan/6) Daftar skala prioritas",
  "7. Aspek Pemberdayaan Masyarakat/2. Fasilitasi MUSRENBANGDes/1) Jadwal kegiatan",
  "7. Aspek Pemberdayaan Masyarakat/2. Fasilitasi MUSRENBANGDes/2) Dokumentasi kegiatan",
  "7. Aspek Pemberdayaan Masyarakat/3. Fasilitasi pemilihan Pambakal, BPD dan RT/1) Foto kegiatan",
  "7. Aspek Pemberdayaan Masyarakat/3. Fasilitasi pemilihan Pambakal, BPD dan RT/2) Laporan hasil kegiatan",
  "7. Aspek Pemberdayaan Masyarakat/4. Pembinaan penyusunan APBDes/1) Keputusan tentang susunan tim pembinaan",
  "7. Aspek Pemberdayaan Masyarakat/4. Pembinaan penyusunan APBDes/2) Jadwal kegiatan",
  "7. Aspek Pemberdayaan Masyarakat/4. Pembinaan penyusunan APBDes/3) Dokumentasi kegiatan",
  "7. Aspek Pemberdayaan Masyarakat/4. Pembinaan penyusunan APBDes/4) Berita acara"
];

function doGet(){return HtmlService.createHtmlOutput(DASHBOARD_HTML).setTitle('EKK 2026 Mobile + Tabel 69');}

function getProgressData(){
  const start=new Date(); let useAPI=false; try{Drive.Files.get(FOLDER_ID); useAPI=true;}catch(e){}
  let map={}; if(useAPI){
    map[""]={hasFile:false, url:"https://drive.google.com/drive/folders/"+FOLDER_ID, id:FOLDER_ID};
    let q=[{id:FOLDER_ID, path:""}];
    while(q.length>0){let {id,path}=q.shift(); let res=Drive.Files.list({q:"'"+id+"' in parents and trashed=false", fields:"items(id,title,mimeType,alternateLink)", maxResults:1000}); let items=res.items||[]; let has=false; for(let it of items){if(it.mimeType!=="application/vnd.google-apps.folder") has=true; else{let sp=path?path+"/"+it.title:it.title; map[sp]={hasFile:false, url:it.alternateLink, id:it.id}; q.push({id:it.id, path:sp});}} if(map[path]) map[path].hasFile=map[path].hasFile||has;}
  }else{
    const root=DriveApp.getFolderById(FOLDER_ID); map[""]={hasFile:root.getFiles().hasNext(), url:root.getUrl()}; let q=[{folder:root, path:""}];
    while(q.length>0){let {folder,path}=q.shift(); let folders=folder.getFolders(); while(folders.hasNext()){let sub=folders.next(); let sp=path?path+"/"+sub.getName():sub.getName(); map[sp]={hasFile:sub.getFiles().hasNext(), url:sub.getUrl()}; q.push({folder:sub, path:sp});}}
  }
  let aspekStats={}; let results=[];
  for(let relPath of MAPPING){
    let parts=relPath.split("/"); let aspek=parts[0]; let indikator=parts[1]||""; let sub=parts[2]||"";
    if(!aspekStats[aspek]) aspekStats[aspek]={total:0, terisi:0, aspek:aspek};
    aspekStats[aspek].total++;
    let entry=map[relPath]; let isi=false; let url="";
    if(entry){url=entry.url; isi=entry.hasFile; if(!isi){let pre=relPath+"/"; for(let p in map) if(p.startsWith(pre)&&map[p].hasFile){isi=true; break;}}}
    if(isi) aspekStats[aspek].terisi++;
    results.push({aspek:aspek, indikator:indikator, sub:sub||indikator, path:relPath, jumlah:isi?1:0, status:isi?"TERISI":"KOSONG", ceklist:isi?1:0, url:url});
  }
  let total=results.length, terisi=results.filter(r=>r.jumlah>0).length; let persen=Math.round(terisi/total*10000)/100; let dur=(new Date()-start)/1000;
  const rootName=useAPI?Drive.Files.get(FOLDER_ID).title:DriveApp.getFolderById(FOLDER_ID).getName();
  return {summary:{total, terisi, belum:total-terisi, persen, timestamp:new Date().toLocaleString('id-ID'), rootName, duration:dur+"s", scanned:Object.keys(map).length}, aspekStats, details:results};
}

function cekProgressEKK(){
  const data=getProgressData();
  const ss=SpreadsheetApp.create("Laporan EKK 2026 - "+new Date().toLocaleString('id-ID'));
  const sh=ss.getActiveSheet();
  sh.appendRow(["KAB. BANJAR - EKK 2026 - "+data.summary.terisi+"/"+data.summary.total+" ("+data.summary.persen+"%)"]);
  sh.appendRow([""]);
  sh.appendRow(["Aspek","Indikator","Sub Indikator","Path","Status","Ceklist","Link Drive"]);
  let rows=data.details.map(d=>[d.aspek,d.indikator,d.sub,d.path,d.status,d.ceklist,d.url]);
  if(rows.length) sh.getRange(4,1,rows.length,7).setValues(rows);
  sh.getRange(3,1,1,7).setFontWeight('bold').setBackground('#0A3D8F').setFontColor('white');
  sh.autoResizeColumns(1,7);
  return {spreadsheetUrl:ss.getUrl(), summary:data.summary};
}

const LOGO_URL="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Lambang_Kabupaten_Banjar.png/150px-Lambang_Kabupaten_Banjar.png";

const DASHBOARD_HTML=`<!DOCTYPE html><html><head><base target="_top"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"><script src="https://cdn.tailwindcss.com"></script><script src="https://cdn.jsdelivr.net/npm/chart.js"></script><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"><style>body{font-family:-apple-system,BlinkMacSystemFont,sans-serif;background:#F5F8FF} .card{border-radius:14px;background:white;box-shadow:0 1px 6px rgba(10,61,143,0.08);} .table-scroll::-webkit-scrollbar{height:6px} .table-scroll::-webkit-scrollbar-thumb{background:#0A3D8F;border-radius:10px}</style></head><body class="pb-20">

<!-- HEADER COMPACT -->
<div class="bg-[#0A3D8F] text-white px-3 py-2 sticky top-0 z-50 flex items-center gap-2.5" style="border-bottom:3px solid #FFD700;">
  <div class="bg-white rounded-lg p-1 flex-shrink-0" style="border:1.5px solid #FFD700;"><img src="${LOGO_URL}" class="w-7 h-7 object-contain"></div>
  <div class="flex-1 min-w-0"><p class="text-[11px] font-extrabold leading-none">EKK 2026 - SUNGAI PINANG</p><p class="text-[10px] text-blue-200 leading-none mt-0.5 truncate"><span id="timestamp"></span> • <span id="duration"></span></p></div>
  <div class="flex items-center gap-1.5 flex-shrink-0">
    <div class="bg-white/10 px-2 py-1 rounded-full text-[11px] font-bold"><span id="persen">0%</span></div>
    <button onclick="loadData()" class="bg-[#FFD700] text-[#0A3D8F] w-8 h-8 rounded-full flex items-center justify-center active:scale-95"><i class="fas fa-sync-alt text-[11px]"></i></button>
  </div>
</div>

<div class="px-3 py-3 space-y-3 max-w-4xl mx-auto">

  <!-- RINGKASAN 4 KOLOM COMPACT -->
  <div class="grid grid-cols-4 gap-2">
    <div class="card p-2 text-center"><p class="text-[8px] text-slate-500 font-bold uppercase">Total</p><p id="total" class="text-[16px] font-extrabold text-[#0A3D8F]">69</p></div>
    <div class="card p-2 text-center border-t-2 border-emerald-500"><p class="text-[8px] text-emerald-700 font-bold uppercase">Terisi</p><p id="terisi" class="text-[16px] font-extrabold text-emerald-700">-</p></div>
    <div class="card p-2 text-center border-t-2 border-red-500"><p class="text-[8px] text-red-700 font-bold uppercase">Belum</p><p id="belum" class="text-[16px] font-extrabold text-red-700">-</p></div>
    <div class="card p-2 text-center bg-[#0A3D8F] text-white"><p class="text-[8px] text-yellow-200 font-bold uppercase">Progres</p><p id="persen2" class="text-[16px] font-extrabold">0%</p></div>
  </div>

  <!-- CHART BATANG PER ASPEK -->
  <div class="card p-3">
    <div class="flex items-center justify-between mb-2">
      <h2 class="font-bold text-[#0A3D8F] text-[12px]"><i class="fas fa-chart-bar mr-1 text-[#FFD700]"></i>Chart Per Aspek (7)</h2>
      <span id="scanned" class="text-[10px] bg-blue-50 text-[#0A3D8F] px-2 py-0.5 rounded-full font-bold">-</span>
    </div>
    <div style="height:300px; position:relative;"><canvas id="barChart"></canvas></div>
  </div>

  <!-- TABEL DETAIL 69 INDIKATOR -->
  <div class="card p-3">
    <div class="flex flex-wrap gap-2 items-center justify-between mb-3">
      <h2 class="font-bold text-[#0A3D8F] text-[12px]"><i class="fas fa-table mr-1 text-[#0A3D8F]"></i>Detail 69 Indikator</h2>
      <div class="flex gap-1.5 flex-wrap">
        <input id="searchInput" onkeyup="filterTable()" placeholder="Cari..." class="px-3 py-1.5 border border-blue-100 rounded-full text-[11px] w-24 focus:outline-none focus:border-[#0A3D8F]">
        <select id="filterStatus" onchange="filterTable()" class="px-2 py-1.5 border border-blue-100 rounded-full text-[11px] bg-white focus:outline-none"><option value="all">Semua</option><option value="TERISI">✅ Terisi</option><option value="KOSONG">❌ Kosong</option></select>
        <select id="filterAspek" onchange="filterTable()" class="px-2 py-1.5 border border-blue-100 rounded-full text-[11px] bg-white focus:outline-none max-w-[110px]"><option value="all">Semua Aspek</option></select>
        <button onclick="exportSheet()" class="bg-[#0A3D8F] text-white px-3 py-1.5 rounded-full text-[11px] font-bold"><i class="fas fa-file-excel mr-1"></i>Export</button>
      </div>
    </div>

    <!-- DESKTOP TABLE + MOBILE CARD VIEW -->
    <div class="hidden md:block overflow-x-auto table-scroll rounded-xl border border-blue-50">
      <table class="w-full text-[12px]"><thead class="bg-[#0A3D8F] text-white"><tr><th class="text-left p-2.5 font-semibold w-[18%]">Aspek</th><th class="text-left p-2.5 font-semibold w-[28%]">Indikator</th><th class="text-left p-2.5 font-semibold w-[28%]">Sub Indikator</th><th class="text-center p-2.5 font-semibold w-[13%]">Status</th><th class="text-center p-2.5 font-semibold w-[13%]">Aksi</th></tr></thead><tbody id="tableBodyDesktop"></tbody></table>
    </div>

    <!-- MOBILE: CARD LIST -->
    <div id="tableBodyMobile" class="md:hidden space-y-2"></div>

    <div class="mt-3 flex justify-between text-[10px] text-slate-400"><span id="filterInfo">69 data</span><span>Kab. Banjar BARAKAT</span></div>
  </div>

</div>

<script>
let allData=null; let barChart;
function loadData(){
  document.getElementById('tableBodyMobile').innerHTML='<p class="text-center text-[11px] py-6 text-slate-400"><i class="fas fa-spinner fa-spin mr-1"></i>Scan Drive...</p>';
  const desk=document.getElementById('tableBodyDesktop'); if(desk) desk.innerHTML='<tr><td colspan="5" class="text-center py-6 text-slate-400 text-[11px]"><i class="fas fa-spinner fa-spin mr-1"></i>Scan Drive...</td></tr>';
  google.script.run.withSuccessHandler(renderData).withFailureHandler(e=>{
    document.getElementById('tableBodyMobile').innerHTML='<p class="text-center text-red-600 text-[11px] py-3">'+e.message+'</p>';
  }).getProgressData();
}
function renderData(data){
  allData=data; const s=data.summary;
  document.getElementById('total').innerText=s.total;
  document.getElementById('terisi').innerText=s.terisi;
  document.getElementById('belum').innerText=s.belum;
  document.getElementById('persen').innerText=s.persen+'%';
  document.getElementById('persen2').innerText=s.persen+'%';
  document.getElementById('timestamp').innerText=s.timestamp.split(' ')[1]||s.timestamp;
  document.getElementById('duration').innerText=s.duration;
  document.getElementById('scanned').innerText=s.scanned+' folder';

  const labels=Object.keys(data.aspekStats);
  const terisi=labels.map(k=>data.aspekStats[k].terisi);
  const total=labels.map(k=>data.aspekStats[k].total);
  const belum=labels.map(k=>data.aspekStats[k].total - data.aspekStats[k].terisi);
  const persen=labels.map(k=>Math.round(data.aspekStats[k].terisi/data.aspekStats[k].total*100));

  const filterAspek=document.getElementById('filterAspek');
  filterAspek.innerHTML='<option value="all">Semua Aspek</option>';
  labels.forEach(a=>{filterAspek.innerHTML+='<option value="'+a+'">'+a.replace(/^\\d+\\.\\s*/,'').substring(0,30)+'</option>';});

  const ctx=document.getElementById('barChart').getContext('2d');
  if(barChart) barChart.destroy();
  barChart=new Chart(ctx,{
    type:'bar',
    data:{
      labels: labels.map(l=>l.replace(/^\\d+\\.\\s*/,'').replace('Aspek ','').substring(0,20)),
      datasets:[{label:'Terisi', data:terisi, backgroundColor:'#0A3D8F', borderRadius:4}, {label:'Belum', data:belum, backgroundColor:'#E3F2FD', borderRadius:4}]
    },
    options:{
      indexAxis:'y', responsive:true, maintainAspectRatio:false,
      plugins:{legend:{display:false}, tooltip:{callbacks:{label:c=>c.dataset.label+': '+c.parsed.x+'/'+total[c.dataIndex]+' ('+persen[c.dataIndex]+'%)'}}},
      scales:{x:{stacked:true, max:Math.max(...total)+1, grid:{color:'#F5F8FF'}, ticks:{font:{size:10}}}, y:{stacked:true, grid:{display:false}, ticks:{font:{size:10, weight:'600'}, color:'#0A3D8F'}}}
    }
  });

  renderTable(data.details);
}
function renderTable(details){
  const tbodyDesk=document.getElementById('tableBodyDesktop');
  const tbodyMob=document.getElementById('tableBodyMobile');
  if(tbodyDesk) tbodyDesk.innerHTML='';
  tbodyMob.innerHTML='';

  details.forEach((d,idx)=>{
    const isTerisi=d.status==='TERISI';
    const badgeCls=isTerisi?'bg-emerald-100 text-emerald-700 border-emerald-200':'bg-red-50 text-red-700 border-red-200';
    const icon=isTerisi?'✅':'❌';
    const aspekShort=d.aspek.replace(/^\\d+\\.\\s*/,'').substring(0,22);
    const indikatorShort=d.indikator.substring(0,45);
    const subShort=d.sub.substring(0,50);

    // Desktop row
    if(tbodyDesk){
      tbodyDesk.innerHTML+='<tr class="border-t hover:bg-blue-50/50"><td class="p-2.5 text-[11px]"><span class="bg-blue-50 text-[#0A3D8F] px-2 py-0.5 rounded-full text-[10px] font-bold">'+d.aspek.split(' ')[0]+'</span><div class="mt-1 font-semibold text-[#0A3D8F]">'+aspekShort+'</div></td><td class="p-2.5 text-[11px] text-slate-700">'+indikatorShort+'</td><td class="p-2.5 text-[11px]"><span class="font-semibold text-slate-800">'+subShort+'</span></td><td class="p-2.5 text-center"><span class="px-2.5 py-1 rounded-full text-[10px] font-bold border '+badgeCls+'">'+icon+' '+d.status+'</span></td><td class="p-2.5 text-center">'+(d.url?'<a href="'+d.url+'" target="_blank" class="inline-flex items-center gap-1 bg-[#0A3D8F] text-white px-3 py-1 rounded-full text-[10px] font-bold hover:bg-blue-800"><i class="fas fa-external-link-alt"></i> Buka</a>':'<span class="text-slate-300">-</span>')+'</td></tr>';
    }

    // Mobile card
    tbodyMob.innerHTML+='<div class="border rounded-xl p-2.5 bg-white" style="border-color:'+(isTerisi?'#A7F3D0':'#FECACA')+'"><div class="flex justify-between items-start gap-2"><div class="flex-1 min-w-0"><div class="flex items-center gap-1.5 mb-1"><span class="bg-[#0A3D8F] text-white px-1.5 py-0.5 rounded text-[9px] font-bold">'+(idx+1)+'</span><span class="text-[10px] font-bold text-[#0A3D8F] truncate">'+aspekShort+'</span><span class="ml-auto px-2 py-0.5 rounded-full text-[9px] font-bold border '+badgeCls+'">'+icon+' '+d.status+'</span></div><p class="text-[11px] font-semibold text-slate-800 leading-tight">'+indikatorShort+'</p><p class="text-[11px] text-slate-600 mt-0.5 leading-tight">'+subShort+'</p></div></div><div class="flex justify-between items-center mt-2"><span class="text-[9px] text-slate-400 truncate max-w-[60%]">'+d.path.split('/').slice(-2).join(' / ')+'</span>'+(d.url?'<a href="'+d.url+'" target="_blank" class="bg-[#0A3D8F] text-white px-3 py-1 rounded-full text-[10px] font-bold flex-shrink-0">Buka <i class="fas fa-external-link-alt ml-1"></i></a>':'')+'</div></div>';
  });

  document.getElementById('filterInfo').innerText=details.length+' data ditampilkan';
}
function filterTable(){
  if(!allData) return;
  let status=document.getElementById('filterStatus').value;
  let aspek=document.getElementById('filterAspek').value;
  let search=document.getElementById('searchInput').value.toLowerCase();
  let filtered=allData.details;
  if(status!=='all') filtered=filtered.filter(d=>d.status===status);
  if(aspek!=='all') filtered=filtered.filter(d=>d.aspek===aspek);
  if(search) filtered=filtered.filter(d=> (d.aspek+' '+d.indikator+' '+d.sub+' '+d.path).toLowerCase().includes(search));
  renderTable(filtered);
}
function exportSheet(){
  const btn=document.querySelector('button[onclick="exportSheet()"]'); const orig=btn.innerHTML; btn.innerHTML='<i class="fas fa-spinner fa-spin"></i>...';
  google.script.run.withSuccessHandler(r=>{window.open(r.spreadsheetUrl,'_blank'); btn.innerHTML=orig;}).withFailureHandler(e=>{alert('Gagal: '+e.message); btn.innerHTML=orig;}).cekProgressEKK();
}
window.onload=loadData;
</script></body></html>
`;
