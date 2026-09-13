const starterFoods = [
  {id:1,name:'滕州菜煎饼',school:'中南大学',place:'后湖小区',category:'小吃',price:10,dish:'自选蔬菜煎饼',likes:128,image:'./assets/food/tengzhou-caijianbing.webp',reason:'饼皮现摊，自选蔬菜铺得很满，十块左右就能吃得很扎实。'},
  {id:2,name:'多肉小锅米线',school:'中南大学',place:'后湖小区',category:'正餐',price:12,dish:'原味多肉米线',likes:116,image:'./assets/food/duorou-xiaoguomixian.webp',reason:'肉料比想象中多，薄荷和酸菜很提味，十二元是后湖很稳的一顿。'},
  {id:3,name:'大伯卤肉饭',school:'中南大学',place:'后湖小区',category:'正餐',price:16,dish:'招牌卤肉饭',likes:154,image:'./assets/food/dabo-luroufan.webp',reason:'卤肉汁浓、青菜清爽，还能吃到卤蛋，拌饭很香。'},
  {id:4,name:'师傅的小店',school:'中南大学',place:'后湖小区',category:'正餐',price:12,dish:'纯肉片',likes:93,image:'./assets/food/shifu-chunroupian.webp',reason:'纯肉片分量直接，口味清爽，适合想吃肉又不想太油的时候。'},
  {id:5,name:'东北熏肉大饼',school:'中南大学',place:'后湖小区',category:'小吃',price:12,dish:'里脊熏肉套餐',likes:141,image:'./assets/food/dongbei-xunrou-dabing.webp',reason:'大饼卷得很满，里脊、火腿和蔬菜一口都能吃到，拿着就走。'},
  {id:6,name:'老麻抄手',school:'中南大学',place:'后湖小区',category:'正餐',price:16,dish:'大份微麻抄手',likes:167,image:'./assets/food/laoma-chaoshou.webp',reason:'红油香、抄手皮滑，微麻口味已经很开胃，适合重口味同学。'},
  {id:7,name:'鱼米家',school:'中南大学',place:'悦麓汇',category:'聚餐',price:46,dish:'寿司与拉面拼桌',likes:132,image:'./assets/food/yumijia.webp',reason:'寿司、拉面和炸物选择多，几个人一起点更容易控制预算。'},
  {id:8,name:'笨萝卜浏阳菜馆',school:'中南大学',place:'阳光100',category:'聚餐',price:38,dish:'小炒黄牛肉',likes:198,image:'./assets/food/benluobo-liuyangcai.webp',reason:'浏阳菜镬气足，辣味直接，几道下饭菜一起点适合宿舍聚餐。'},
  {id:9,name:'盛香亭小火锅',school:'中南大学',place:'阜埠河',category:'聚餐',price:55,dish:'番茄红油双拼锅',likes:108,image:'./assets/food/shengxiangting-hotpot.webp',reason:'锅底选择多，配菜按喜好拿，葡萄燕麦冰适合用来解辣。'},
  {id:10,name:'实分满糖水铺',school:'中南大学',place:'阜埠河',category:'饮品',price:12,dish:'常温椰奶芋圆糖水',likes:176,image:'./assets/food/shifenman-tangshui.webp',reason:'芋圆和小料给得很足，椰奶底不腻，晚饭后两个人分一碗也可以。'},
  {id:11,name:'龙师傅卤炒',school:'湖南大学',place:'天马路',category:'正餐',price:32,dish:'卤炒拼盘',likes:186,image:'./assets/food/longshifu-luchao.webp',reason:'卤味入味、现炒有锅气，三四个人点几个菜，人均三十多。'},
  {id:12,name:'胖伢子口味菜',school:'湖南大学',place:'天马小区',category:'聚餐',price:35,dish:'酸菜炒鸡杂',likes:153,image:'./assets/food/pangyazi-kouweicai.webp',reason:'典型长沙口味菜，分量大、辣味足，适合多人一起吃。'},
  {id:13,name:'成都小酒馆',school:'湖南大学',place:'天马路',category:'聚餐',price:39,dish:'辣子鸡',likes:144,image:'./assets/food/chengdu-xiaojiuguan.webp',reason:'川味香辣，辣子鸡和麻婆豆腐都很下饭，聚餐氛围热闹。'},
  {id:14,name:'泰荣荣',school:'湖南大学',place:'麓山南路',category:'正餐',price:24,dish:'冬阴功米线',likes:162,image:'./assets/food/tairongrong.webp',reason:'酸辣汤底很醒胃，肉片扎实，一份的量两个人小食也够。'},
  {id:15,name:'安记茶餐厅',school:'湖南大学',place:'麓山南路',category:'正餐',price:38,dish:'滑蛋叉烧饭',likes:205,image:'./assets/food/anji-chacanting.webp',reason:'滑蛋很嫩，叉烧油香，想一次吃到港式饭和小吃可以来这里。'},
  {id:16,name:'七丁二宝',school:'湖南大学',place:'麓山南路',category:'正餐',price:30,dish:'香肠鸡排双拼饭',likes:121,image:'./assets/food/qiding-erbao.webp',reason:'鸡排、香肠和流心蛋铺满一碗，西多士也适合两人分享。'},
  {id:17,name:'神奇的鸡蛋灌饼',school:'湖南大学',place:'麓山南路',category:'小吃',price:13,dish:'里脊鸡蛋灌饼',likes:238,image:'./assets/food/shenqi-jidanguanbing.webp',reason:'现擀现炸，饼皮酥脆，刷上辣椒油后特别香，是大学城排队热门。'},
  {id:18,name:'台北晓天亭',school:'湖南大学',place:'麓山南路',category:'正餐',price:15,dish:'台式卤肉饭',likes:172,image:'./assets/food/taibei-xiaotianting.webp',reason:'卤肉饭只要十几元，肉碎、青菜和卤蛋齐全，性价比很高。'},
  {id:19,name:'西红柿手擀面',school:'湖南大学',place:'阜埠河',category:'正餐',price:14,dish:'番茄鸡蛋手擀面',likes:102,image:'./assets/food/xihongshi-shouganmian.webp',reason:'番茄汤浓、面条有嚼劲，价格友好，是不容易踩雷的日常选择。'},
  {id:20,name:'遇见咖喱屋',school:'湖南大学',place:'阜埠河',category:'正餐',price:24,dish:'炸鸡块蛋包咖喱饭',likes:137,image:'./assets/food/yujian-galiwu.webp',reason:'咖喱酱给得多，蛋包饭嫩，配炸鸡或猪排都很有饱腹感。'},
  {id:21,name:'浅井泽田日料',school:'湖南师范大学',place:'麓山南路',category:'聚餐',price:52,dish:'炙烧寿司拼盘',likes:157,image:'./assets/food/qianjing-zetian.webp',reason:'寿司、饭团和小食种类丰富，三四个人拼桌更适合学生预算。'},
  {id:22,name:'临榆炸鸡腿',school:'湖南师范大学',place:'阜埠河',category:'夜宵',price:18,dish:'香骨鸡与鸡肉条',likes:189,image:'./assets/food/linyu-zhajitui.webp',reason:'外壳酥脆、肉汁足，趁热吃口感最好，夜宵带回宿舍很方便。'},
  {id:23,name:'牛肠酸',school:'湖南师范大学',place:'阜埠河',category:'小吃',price:22,dish:'牛杂河粉',likes:94,image:'./assets/food/niuchangsuan.webp',reason:'酸辣口味很特别，牛肉牛杂配河粉更入味，适合想换口味的时候。'},
  {id:24,name:'西安腊汁肉夹馍',school:'湖南师范大学',place:'阜埠河',category:'小吃',price:16,dish:'土豆泥肉酱拌面',likes:112,image:'./assets/food/xian-roujiamo.webp',reason:'除了肉夹馍，土豆泥肉酱拌面也很出彩，加一点小米辣更香。'},
  {id:25,name:'怡一口麻糍',school:'湖南师范大学',place:'阜埠河',category:'烘焙甜品',price:10,dish:'奥利奥冰淇淋麻糍',likes:168,image:'./assets/food/yiyikou-maci.webp',reason:'外皮软糯、内馅饱满，奥利奥冰淇淋口味很适合课后解馋。'},
  {id:26,name:'爱民螺蛳粉',school:'湖南师范大学',place:'阜埠河',category:'正餐',price:16,dish:'招牌螺蛳粉',likes:214,image:'./assets/food/aimin-luosifen.webp',reason:'粉偏硬有嚼劲，酸笋、酸豆角和泡青椒很开胃，重口味友好。'},
  {id:27,name:'周叔沙茶面',school:'湖南师范大学',place:'阜埠河',category:'正餐',price:18,dish:'经典碱面加量',likes:181,image:'./assets/food/zhoushu-shachamian.webp',reason:'沙茶汤鲜香，碱面有筋道，加量后很顶饱，是常吃也不腻的一碗。'},
  {id:28,name:'天马山牛肉饼',school:'湖南师范大学',place:'天马学生公寓',category:'烘焙甜品',price:12,dish:'麻薯冰与牛肉饼',likes:151,image:'./assets/food/tianmashan-niuroubing.webp',reason:'牛肉饼几元一个，麻薯冰料满又软糯，咸甜可以一起解决。'},
  {id:29,name:'鸡柳大人',school:'湖南师范大学',place:'麓山南路',category:'小吃',price:14,dish:'鸡柳年糕薯条三合一',likes:193,image:'./assets/food/jiliu-daren.webp',reason:'鸡柳现裹现炸，年糕外脆里糯，三合一适合边走边吃。'},
  {id:30,name:'潮汕肠粉',school:'湖南师范大学',place:'麓山南路',category:'正餐',price:22,dish:'牛肉生蚝基围虾三拼',likes:146,image:'./assets/food/chaoshan-changfen.webp',reason:'藏在小巷里的潮汕肠粉，三拼料很实在，鲜味和酱汁都足。'},
  {id:31,name:'和盛荟',school:'湖南师范大学',place:'麓山南路',category:'烘焙甜品',price:12,dish:'古早味鸡蛋糕',likes:129,image:'./assets/food/heshenghui-jidangao.webp',reason:'奶香明显、口感松软，刚出炉时最好吃，适合买一盒带回宿舍。'}
];

let foods = JSON.parse(localStorage.getItem('mishi-foods-v2') || 'null') || starterFoods;
let favorites = new Set(JSON.parse(localStorage.getItem('mishi-favorites-v2') || '[]'));
let liked = new Set(JSON.parse(localStorage.getItem('mishi-liked-v2') || '[]'));
let activeFood = null;
let editingFoodId = null;
let filters = {school:'全部',category:'全部',price:'不限',place:'全部',query:''};

const categories = ['全部','正餐','小吃','饮品','烘焙甜品','夜宵','聚餐'];
const prices = ['不限','10元以下','10–20元','20–30元','30元以上'];
const places = ['全部','后湖小区','阳光100','阜埠河','悦麓汇','麓山南路','天马路','天马小区','天马学生公寓'];
const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];

function saveState(){
  try {
    localStorage.setItem('mishi-foods-v2',JSON.stringify(foods));
    localStorage.setItem('mishi-favorites-v2',JSON.stringify([...favorites]));
    localStorage.setItem('mishi-liked-v2',JSON.stringify([...liked]));
    return true;
  } catch {
    showToast('图片仍然过大，请换一张后重试');
    return false;
  }
}
function showToast(message){
  const toast=$('#toast'); toast.textContent=message; toast.classList.remove('hidden');
  clearTimeout(window.toastTimer); window.toastTimer=setTimeout(()=>toast.classList.add('hidden'),2200);
}
function showView(name){
  $$('.view').forEach(v=>v.classList.remove('active'));
  $(`#${name}View`).classList.add('active');
  $$('.nav-link').forEach(b=>b.classList.toggle('active',b.dataset.view===name));
  if(name==='favorites') renderFavorites();
  if(name==='profile') renderProfile();
  if(name==='recommend') renderFoods();
  window.scrollTo({top:0,behavior:'smooth'});
}
function filterButtonMarkup(items,type){ return items.map((item,i)=>`<button class="${i===0?'active':''}" data-${type}="${item}">${item}</button>`).join(''); }
$('#categoryFilters').innerHTML=filterButtonMarkup(categories,'category');
$('#priceFilters').innerHTML=filterButtonMarkup(prices,'price');
$('#placeFilters').innerHTML=filterButtonMarkup(places,'place');

function matchesPrice(food){
  if(filters.price==='不限') return true;
  if(filters.price==='10元以下') return food.price<10;
  if(filters.price==='10–20元') return food.price>=10&&food.price<=20;
  if(filters.price==='20–30元') return food.price>20&&food.price<=30;
  return food.price>30;
}
function getFilteredFoods(){
  const q=filters.query.trim().toLowerCase();
  let list=foods.filter(f=>(filters.school==='全部'||f.school===filters.school)&&(filters.category==='全部'||f.category===filters.category)&&(filters.place==='全部'||f.place===filters.place)&&matchesPrice(f)&&(!q||[f.name,f.dish,f.school,f.place,f.category].join(' ').toLowerCase().includes(q)));
  const sort=$('#sortSelect').value;
  if(sort==='likes') list.sort((a,b)=>b.likes-a.likes);
  if(sort==='price') list.sort((a,b)=>a.price-b.price);
  if(sort==='newest') list.sort((a,b)=>b.id-a.id);
  return list;
}
function cardMarkup(food){
  return `<article class="food-card" data-food-id="${food.id}" tabindex="0" aria-label="查看${food.name}详情">
    ${food.image?`<img class="food-image" src="${food.image}" alt="${food.name}推荐菜：${food.dish}" loading="lazy">`:`<div class="food-image-placeholder"><span>等待上传“${food.dish}”实拍图</span></div>`}
    <div class="food-card-body"><div class="card-meta">${food.school} · ${food.place} · ${food.category}</div><h3>${food.name}</h3><p class="dish-name">推荐：${food.dish}</p><div class="card-bottom"><span class="price">¥${food.price}<small>/人</small></span><button class="like-button ${liked.has(food.id)?'liked':''}" data-like="${food.id}" aria-label="点赞">${liked.has(food.id)?'♥':'♡'} ${food.likes+(liked.has(food.id)?1:0)}</button></div></div>
  </article>`;
}
function bindCards(root){
  $$('[data-food-id]',root).forEach(card=>{card.addEventListener('click',e=>{if(!e.target.closest('[data-like]')) openDetail(Number(card.dataset.foodId));}); card.addEventListener('keydown',e=>{if(e.key==='Enter') openDetail(Number(card.dataset.foodId));});});
  $$('[data-like]',root).forEach(btn=>btn.addEventListener('click',e=>{e.stopPropagation(); toggleLike(Number(btn.dataset.like));}));
}
function renderFoods(){
  const list=getFilteredFoods(); $('#resultCount').textContent=list.length; $('#foodGrid').innerHTML=list.map(cardMarkup).join(''); $('#emptyState').classList.toggle('hidden',list.length>0); bindCards($('#foodGrid'));
}
function renderFavorites(){
  const list=foods.filter(f=>favorites.has(f.id)); $('#favoritesGrid').innerHTML=list.map(cardMarkup).join(''); $('#favoritesEmpty').classList.toggle('hidden',list.length>0); bindCards($('#favoritesGrid')); $('#myFavoritesCount').textContent=list.length;
}
function renderProfile(){
  const mine=foods.filter(f=>f.mine); $('#myPostsGrid').innerHTML=mine.map(cardMarkup).join(''); $('#myPostsEmpty').classList.toggle('hidden',mine.length>0); bindCards($('#myPostsGrid'));
  $('#myPostsCount').textContent=mine.length; $('#myFavoritesCount').textContent=favorites.size; $('#myLikesCount').textContent=mine.reduce((sum,f)=>sum+f.likes,0);
}
function toggleLike(id){ liked.has(id)?liked.delete(id):liked.add(id); saveState(); renderFoods(); renderFavorites(); renderProfile(); if(activeFood?.id===id) updateDetailActions(); }
function toggleFavorite(id){ favorites.has(id)?favorites.delete(id):favorites.add(id); saveState(); updateDetailActions(); showToast(favorites.has(id)?'已加入收藏':'已取消收藏'); }
function openDetail(id){
  activeFood=foods.find(f=>f.id===id); if(!activeFood)return;
  $('#detailTitle').textContent=`${activeFood.name} · ${activeFood.dish}`; $('#detailSchool').textContent=activeFood.school; $('#detailPlace').textContent=activeFood.place; $('#detailReason').textContent=`人均 ¥${activeFood.price}。${activeFood.reason}`; $('#detailImage').innerHTML=activeFood.image?`<img src="${activeFood.image}" alt="${activeFood.name}推荐菜：${activeFood.dish}">`:`<span>等待上传“${activeFood.dish}”学生实拍大图</span>`; $('#detailEdit').classList.toggle('hidden',!activeFood.mine); $('#detailDelete').classList.toggle('hidden',!activeFood.mine); updateDetailActions(); openModal('detailModal');
}
function updateDetailActions(){ if(!activeFood)return; $('#detailLike').textContent=`${liked.has(activeFood.id)?'♥':'♡'} 点赞 ${activeFood.likes+(liked.has(activeFood.id)?1:0)}`; $('#detailFavorite').textContent=`${favorites.has(activeFood.id)?'★ 已收藏':'☆ 收藏'}`; }
function openModal(id){ $(`#${id}`).classList.remove('hidden'); document.body.style.overflow='hidden'; }
function closeModal(id){ $(`#${id}`).classList.add('hidden'); document.body.style.overflow=''; }

$$('[data-view]').forEach(b=>b.addEventListener('click',()=>showView(b.dataset.view)));
$$('.school-pin').forEach(b=>b.addEventListener('click',()=>{filters.school=b.dataset.school; filters.place='全部'; syncFilterUI(); showView('recommend');}));
$$('.place-pin').forEach(b=>b.addEventListener('click',()=>{filters.school='全部'; filters.place=b.dataset.place; syncFilterUI(); showView('recommend');}));
$$('[data-school-filter]').forEach(b=>b.addEventListener('click',()=>{filters.school=b.dataset.schoolFilter; syncFilterUI(); renderFoods();}));
$('#categoryFilters').addEventListener('click',e=>{if(e.target.dataset.category){filters.category=e.target.dataset.category;syncFilterUI();renderFoods();}});
$('#priceFilters').addEventListener('click',e=>{if(e.target.dataset.price){filters.price=e.target.dataset.price;syncFilterUI();renderFoods();}});
$('#placeFilters').addEventListener('click',e=>{if(e.target.dataset.place){filters.place=e.target.dataset.place;syncFilterUI();renderFoods();}});
function syncFilterUI(){
  $$('[data-school-filter]').forEach(b=>b.classList.toggle('active',b.dataset.schoolFilter===filters.school));
  $$('[data-category]').forEach(b=>b.classList.toggle('active',b.dataset.category===filters.category));
  $$('[data-price]').forEach(b=>b.classList.toggle('active',b.dataset.price===filters.price));
  $$('[data-place]').forEach(b=>b.classList.toggle('active',b.dataset.place===filters.place));
}
$('#foodSearch').addEventListener('input',e=>{filters.query=e.target.value;renderFoods();});
$('#sortSelect').addEventListener('change',renderFoods);
$('#resetFilters').addEventListener('click',()=>{filters={school:'全部',category:'全部',price:'不限',place:'全部',query:''};$('#foodSearch').value='';syncFilterUI();renderFoods();});
$('#searchToggle').addEventListener('click',()=>{showView('recommend');setTimeout(()=>$('#foodSearch').focus(),200);});
function openPublish(food=null){
  const form=$('#publishForm'); editingFoodId=food?.id||null; form.reset();
  form.elements.image.required=!food?.image;
  $('#publishTitle').textContent=food?'编辑美食推荐':'发布美食推荐';
  $('#publishSubmit').textContent=food?'保存修改':'立即发布';
  const preview=$('#uploadPreview'); preview.classList.add('hidden'); preview.removeAttribute('src');
  if(food){
    ['name','school','place','category','price','dish','reason'].forEach(key=>form.elements[key].value=food[key]);
    if(food.image){preview.src=food.image;preview.classList.remove('hidden');}
  }
  openModal('publishModal');
}
function imageFileToDataUrl(file){
  return new Promise((resolve,reject)=>{
    const reader=new FileReader();
    reader.onerror=()=>reject(new Error('图片读取失败'));
    reader.onload=()=>{
      const image=new Image();
      image.onerror=()=>reject(new Error('图片格式无法识别'));
      image.onload=()=>{
        const scale=Math.min(1,1000/Math.max(image.width,image.height));
        const canvas=document.createElement('canvas'); canvas.width=Math.round(image.width*scale); canvas.height=Math.round(image.height*scale);
        canvas.getContext('2d').drawImage(image,0,0,canvas.width,canvas.height);
        resolve(canvas.toDataURL('image/jpeg',.78));
      };
      image.src=reader.result;
    };
    reader.readAsDataURL(file);
  });
}
$('#publishOpen').addEventListener('click',()=>openPublish());
$('#profileOpen').addEventListener('click',()=>showView('profile'));
$('#editProfile').addEventListener('click',()=>openModal('loginModal'));
$$('[data-close]').forEach(b=>b.addEventListener('click',()=>closeModal(b.dataset.close)));
$$('.modal-backdrop').forEach(m=>m.addEventListener('click',e=>{if(e.target===m)closeModal(m.id);}));
document.addEventListener('keydown',e=>{if(e.key==='Escape')$$('.modal-backdrop:not(.hidden)').forEach(m=>closeModal(m.id));});
$('#detailLike').addEventListener('click',()=>toggleLike(activeFood.id));
$('#detailFavorite').addEventListener('click',()=>toggleFavorite(activeFood.id));
$('#detailEdit').addEventListener('click',()=>{const food=activeFood;closeModal('detailModal');openPublish(food);});
$('#detailDelete').addEventListener('click',()=>{
  if(!activeFood?.mine||!confirm('确定删除这条美食分享吗？'))return;
  const id=activeFood.id; foods=foods.filter(food=>food.id!==id); favorites.delete(id); liked.delete(id); saveState(); activeFood=null; closeModal('detailModal'); renderFoods(); renderFavorites(); renderProfile(); showView('profile'); showToast('分享已删除');
});
$('#commentForm').addEventListener('submit',e=>{e.preventDefault();const input=$('#commentInput');const p=document.createElement('p');p.innerHTML=`<strong>同学小觅：</strong>${input.value.replace(/[<>]/g,'')}`;$('#commentList').appendChild(p);input.value='';showToast('评论已发布');});
$('#loginForm').addEventListener('submit',e=>{e.preventDefault();closeModal('loginModal');showToast('登录成功，欢迎回来');});
$('#imageInput').addEventListener('change',e=>{
  const file=e.target.files[0],preview=$('#uploadPreview');
  if(!file){preview.classList.add('hidden');return;}
  const url=URL.createObjectURL(file); preview.src=url; preview.classList.remove('hidden'); preview.onload=()=>URL.revokeObjectURL(url);
});
$('#publishForm').addEventListener('submit',async e=>{
  e.preventDefault(); const form=e.target,data=new FormData(form),existing=foods.find(food=>food.id===editingFoodId),previous=foods.map(food=>({...food}));
  const submit=$('#publishSubmit'); submit.disabled=true; submit.textContent='正在保存…';
  try {
    const file=data.get('image'); let image=existing?.image||'';
    if(file instanceof File&&file.size) image=await imageFileToDataUrl(file);
    const values={name:data.get('name'),school:data.get('school'),place:data.get('place'),category:data.get('category'),price:Number(data.get('price')),dish:data.get('dish'),reason:data.get('reason'),image};
    if(existing) Object.assign(existing,values); else foods.unshift({...values,id:Date.now(),likes:0,mine:true});
    if(!saveState()){foods=previous;return;}
    form.reset(); closeModal('publishModal'); filters={school:'全部',category:'全部',price:'不限',place:'全部',query:''}; syncFilterUI(); showView(existing?'profile':'recommend'); showToast(existing?'修改已保存':'发布成功，已经出现在推荐列表中'); editingFoodId=null;
  } catch(error) {
    showToast(error.message||'图片上传失败，请重试');
  } finally {
    submit.disabled=false; submit.textContent=editingFoodId?'保存修改':'立即发布';
  }
});

renderFoods(); renderFavorites(); renderProfile();

function registerAgentTools(){
  const context=document.modelContext;
  if(!context?.registerTool) return;
  const allowedSchools=['全部','中南大学','湖南大学','湖南师范大学'];
  void Promise.resolve(context.registerTool({
    name:'search_food_recommendations',
    title:'搜索校园美食推荐',
    description:'按关键词、学校、类别或地点筛选课间觅食中的推荐，并打开推荐列表。',
    inputSchema:{type:'object',properties:{query:{type:'string'},school:{type:'string',enum:allowedSchools},category:{type:'string',enum:categories},place:{type:'string',enum:places}},additionalProperties:false},
    annotations:{readOnlyHint:true,untrustedContentHint:false},
    execute(input={}){
      if(input.school&&!allowedSchools.includes(input.school)) throw new Error('不支持该学校');
      if(input.category&&!categories.includes(input.category)) throw new Error('不支持该类别');
      if(input.place&&!places.includes(input.place)) throw new Error('不支持该地点');
      filters={...filters,school:input.school||'全部',category:input.category||'全部',place:input.place||'全部',query:input.query||''};
      $('#foodSearch').value=filters.query; syncFilterUI(); showView('recommend');
      return {count:getFilteredFoods().length,filters};
    }
  })).catch(()=>{});
  void Promise.resolve(context.registerTool({
    name:'publish_food_recommendation',
    title:'发布校园美食推荐',
    description:'发布一条新的学生美食推荐，并立即显示在推荐列表中。',
    inputSchema:{type:'object',properties:{name:{type:'string'},school:{type:'string',enum:allowedSchools.slice(1)},place:{type:'string'},category:{type:'string',enum:categories.slice(1)},price:{type:'number',minimum:1},dish:{type:'string'},reason:{type:'string'}},required:['name','school','place','category','price','dish','reason'],additionalProperties:false},
    annotations:{readOnlyHint:false,untrustedContentHint:true},
    execute(input){
      for(const key of ['name','school','place','category','dish','reason']) if(typeof input?.[key]!=='string'||!input[key].trim()) throw new Error(`${key}不能为空`);
      if(!allowedSchools.slice(1).includes(input.school)||!categories.slice(1).includes(input.category)||!Number.isFinite(input.price)||input.price<1) throw new Error('推荐信息不合法');
      const item={...input,id:Date.now(),likes:0,mine:true}; foods.unshift(item); saveState(); filters={school:'全部',category:'全部',price:'不限',place:'全部',query:''}; syncFilterUI(); showView('recommend'); showToast('发布成功，已经出现在推荐列表中');
      return {id:item.id,name:item.name,status:'published'};
    }
  })).catch(()=>{});
}
registerAgentTools();
