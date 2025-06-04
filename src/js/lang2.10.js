// var lang = 'en';
var lang = 'zh';
var onlinepath = 'https://220311.xyz/ggb/';
var offlinepath = './';
var c = 0;
let sc = 1;
var strs = ggbs;
var n = strs.length;
let parameters = {
    "id": "ggbApplet",
    "width":mywidth/sc,
    "height":myheight/sc,
    "scale":sc,
    // "appletOnLoad":function(ggbApplet){ 
    //      // ggbApplet.registerAddListener("setStyle");
    //      ggbApplet.registerClickListener("setStyle");
    // },
    "enableShiftDragZoom":true,
    "showMenuBar":true, 
    "showAlgebraInput":true,
    "showToolBar":true,
    "ggbBase64": strs[c],
    "language":lang,
    "borderColor":"rgb(250, 250, 250)",
};

let slider = document.getElementById('slider');
let sliderValue = document.getElementById('slider-value');
slider.addEventListener('input', function() {
    sliderValue.textContent = this.value;
});
slider.addEventListener('change', updateResult);
function updateResult() {
    const value = parseInt(slider.value);
    sc = value * 0.01;
    ggbApplet.setSize(window.innerWidth/sc, (window.innerHeight - 30)/sc);
    fresh();
}
function checkInput(txt) {
  return /[\u4e00-\u9fa5]/.test(txt);
}
let urlParams = new URLSearchParams(window.location.search);
function hasSearchParams() {
    return urlParams.toString() == "";
}

var ggbpure2  = "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";
var ggbpure = "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";

if(strs.length==0){
    strs[0] = ggbpure;
    n = strs.length;
};


function setStyle(a){
    let objectType = ggbApplet.getObjectType(a);
    if (['ray', 'line', 'function', 'hyperbola', 'parabola', 'inequality'].includes(objectType)) {
        ggbApplet.setLayer(a, 3);
    }
}


// let applet = new GGBApplet(parameters,  '5.0');  

let isFullScreen = 1;
function toggleFullscreen(elem) {
    elem = elem || document.documentElement;
    if (!document.fullscreenElement && !document.mozFullScreenElement &&
      !document.webkitFullscreenElement && !document.msFullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
      
        document.getElementById("bt").style.display="";
        ggbApplet.showMenuBar(true);
        ggbApplet.showToolBar(true);
        // document.getElementById('btnFullscreen').style.opacity = opacity/2;
        isFullScreen = 1;
        
      
    } else {
      if (isFullScreen === 1){
        document.getElementById("bt").style.display="none";
        ggbApplet.showMenuBar(false);
        ggbApplet.showToolBar(false);
        // document.getElementById('btnFullscreen').style.opacity = opacity/4;
        ggbApplet.setSize(window.innerWidth/sc, (window.innerHeight - 30)/sc);
        isFullScreen = 0;
      }
      else{ 
        document.getElementById("bt").style.display="";
        ggbApplet.showMenuBar(true);
        ggbApplet.showToolBar(true);
        // document.getElementById('btnFullscreen').style.opacity = opacity;
        isFullScreen = 1;
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          };

      }
    }
    
    
  }
  




function disableEnterKey(event) {
    var keyCode = event.keyCode || event.which;
    if (keyCode == 13) {
        event.preventDefault(); 
        SetPage();
        return false; 
    }
}


function evalInput(strInput) {
  if(checkInput(strInput)){
      ggbApplet.setLanguage("zh");
  }
  ggbApplet.evalCommand(strInput);
  return false;
}





document.getElementById('previewLink').addEventListener('click', function (e) {
  e.preventDefault();
  let tmmp = window.location.href.split('#')[0];
  window.open(`${tmmp}?page=${c + 1}&zoom=${(slider.value * 0.01).toFixed(2)}`, '_blank');
  saveChanges();
});



document.querySelectorAll('a.cooldown-link').forEach(link => {
  link.addEventListener('click', function (e) {
      if (link.classList.contains('cooling-down')) {
          e.preventDefault();
          return;
      }
      link.classList.add('cooling-down');
      setTimeout(() => {
          link.classList.remove('cooling-down');
      }, 5000);
  });
});



let tmp_panel_mark = false;
function hide_show_right_panel() {
  const leftPanelx = document.getElementById('leftPanel');
  if (tmp_panel_mark) {
    leftPanelx.style.width = '100%';
    tmp_panel_mark = !tmp_panel_mark;
  } else {
    leftPanelx.style.width = '60%';
    tmp_panel_mark = !tmp_panel_mark;
  }
}

/////////////////////////////////////

 
document.getElementById("rangeValue").style.display = "none";
var mylist_ = new Array();
mylist_ = ggbs; 

let mycopy_ = '';
const container = document.getElementById('listContainer');
const slider_ = document.getElementById('highlighter');
const rangeValue = document.getElementById('rangeValue');
const tolpages2 = document.getElementById('tolpages2');

// 渲染字符框列表
function renderList() {
  container.innerHTML = '';
  mylist_.forEach((str, idx) => {
    const item = document.createElement('div');
    item.className = 'item';
    // 如果当前项编号等于滑条值，则高亮
    if (parseInt(slider_.value, 10) === idx + 1) {
      item.classList.add('highlight');
    }
    item.draggable = true;
    item.dataset.index = idx;

    // 点击非按钮区域手动选中，更新滑条值
    item.addEventListener('click', (e) => {
      // 如果点击目标是按钮或其子元素，则不触发item的点击
      if (e.target.tagName.toLowerCase() === 'button' || e.target.classList.contains('edit-input')) {
        return;
      }
      slider_.value = idx + 1;
      rangeValue.textContent = slider_.value;
      saveGgbBase();
      mylist_[c] = ggbApplet.getBase64();
      document.getElementById("Cpages").value = idx+1;
      c = idx;
      ggbApplet.setBase64(mylist_[c]);
      renderList();
    });

    // 左侧编号区域
    const number = document.createElement('div');
    number.className = 'number';
    number.textContent = idx + 1;
    item.appendChild(number);

    // 中间区域：标签与按钮
    const content = document.createElement('div');
    content.className = 'content';

    // 标签：点击后可编辑，编辑完成后恢复显示
    const label = document.createElement('span');
    label.className = 'label';
    label.textContent = labels_[idx];
    label.addEventListener('click', (e) => {
      // 防止触发item的点击事件
      e.stopPropagation();
      const input = document.createElement('input');
      input.type = 'text';
      input.value = labels_[idx];
      input.className = 'edit-input';
      input.addEventListener('blur', () => {
        labels_[idx] = input.value || labels_[idx];
        renderList();
      });
      input.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          input.blur();
        }
      });
      label.replaceWith(input);
      input.focus();
    });

    // 按钮区域：删除、添加、克隆、复制
    const buttons = document.createElement('div');
    buttons.className = 'buttons';

    // 删除按钮：删除当前项
    // const delBtn = document.createElement('button');
    // delBtn.textContent = '-';
    // delBtn.title = '删除当前页面';
    // delBtn.addEventListener('click', (e) => {
    //   e.stopPropagation();
    //   labels_.splice(idx, 1);
    //   DeletePage2();
    //   updateSlider();
    //   renderList();
    // });

    // 添加按钮：在当前项后插入一个新项（字符内容为 'newstr'，标签为原标签加上 'x'）
    const addBtn = document.createElement('button');
    addBtn.textContent = '+';
    addBtn.title = '下方新加页面';
    addBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const randomNum = Math.floor(Math.random() * 90) + 10;
      const newLabel = 'new' + randomNum;
      saveGgbBase();
      mylist_[c] = ggbApplet.getBase64();
      mylist_.splice(idx + 1, 0, ggbpure);
      labels_.splice(idx + 1, 0, newLabel);
      document.getElementById("Cpages").value = idx+2;
      document.getElementById("tolpages").value = n + 1;
      c = idx + 1;
      n = n + 1;
     
      ggbApplet.setBase64(ggbpure);
      rangeValue.textContent =  idx+2;
      slider_.value = c+1;
      updateSlider();
      renderList();
      if(n === c+1){
        Last();
      }
    });

    // 克隆按钮：在当前项后插入一个克隆项（复制字符内容，标签为原标签加上 'c'）
    const cloneBtn = document.createElement('button');
    cloneBtn.textContent = '⚣';
    cloneBtn.title = '克隆页面';
    cloneBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const randomNum = Math.floor(Math.random() * 90) + 10;
      const newLabel = labels_[c] + randomNum;
      saveGgbBase();
      mylist_[c] = ggbApplet.getBase64();
      if(c===idx){
        str = ggbApplet.getBase64();
      }
      mylist_.splice(idx + 1, 0, str);
      labels_.splice(idx + 1, 0, newLabel);
      document.getElementById("Cpages").value = idx+2;
      document.getElementById("tolpages").value = n + 1;
      c = idx + 1;
      n = n + 1;
     
      ggbApplet.setBase64(str);
      rangeValue.textContent =  idx+2;
      slider_.value = c+1;
      updateSlider();
      renderList();
      if(n === c+1){
        Last();
        saveGgbBase();
        ggbApplet.setBase64(str);
        mylist_[c] = ggbApplet.getBase64();
      }
    });

    buttons.append(addBtn, cloneBtn);
    content.append(label, buttons);
    item.appendChild(content);
    container.appendChild(item);

    // 拖拽交换位置：设置拖拽事件
    item.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', idx);
      item.classList.add('dragging');
    });
    item.addEventListener('dragend', (e) => {
      item.classList.remove('dragging');
    });
    item.addEventListener('dragover', (e) => {
      e.preventDefault();
      item.style.border = '2px dashed #007bff';
    });
    item.addEventListener('dragleave', () => {
      item.style.border = '1px solid #ccc';
    });
    item.addEventListener('drop', (e) => {
      const fromIdx = Number(e.dataTransfer.getData('text/plain'));
      const toIdx = idx;
      if (fromIdx === toIdx) return;
      // 交换 mylist_ 与 labels_ 中对应元素的位置

      saveGgbBase();
      mylist_[c] = ggbApplet.getBase64();

      [mylist_[fromIdx], mylist_[toIdx]] = [mylist_[toIdx], mylist_[fromIdx]];
      [labels_[fromIdx], labels_[toIdx]] = [labels_[toIdx], labels_[fromIdx]];
      
      document.getElementById("Cpages").value = idx+1;
      c = idx;
      ggbApplet.setBase64(mylist_[c]);
      slider_.value = toIdx+1;
      rangeValue.textContent = toIdx+1;
      updateSlider();
      renderList();
    });
  });
}

// 更新滑条范围（max 值）并确保当前值不超过范围
function updateSlider() {
  slider_.max = mylist_.length;
  if (parseInt(slider_.value, 10) > mylist_.length) {
    slider_.value = mylist_.length;
    rangeValue.textContent = slider_.value;
  }
}


// 滑条变化时更新显示的数字和重新渲染列表（以便高亮效果生效）
slider_.addEventListener('input', () => {
  rangeValue.textContent = slider_.value;
  document.getElementById("Cpages").value = slider_.value;
  saveGgbBase();
  mylist_[c] = ggbApplet.getBase64();
  c = slider_.value-1;
  ggbApplet.setBase64(mylist_[c]);
  renderList();
});


updateSlider();
renderList();


//////////////////////////////////////

const divider = document.getElementById('divider');
const container_right = document.querySelector('.container_right');
const leftPanel = document.getElementById('leftPanel');
const minWidth = 0;
const maxWidth = window.innerWidth;

let startX = 0;
let startWidth = 0;

// 鼠标按下事件
divider.addEventListener('mousedown', function(e) {
  startX = e.clientX;
  startWidth = leftPanel.offsetWidth;
  
  // 添加临时样式
  document.body.style.cursor = 'ew-resize';
  document.body.style.userSelect = 'none';
  
  // 监听鼠标移动和松开事件
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});

// 鼠标移动处理
function onMouseMove(e) {
  const deltaX = e.clientX - startX;
  let newWidth = startWidth + deltaX;
  
  // 边界约束
  newWidth = Math.max(minWidth, Math.min(newWidth, maxWidth));
  
  // 更新宽度
  leftPanel.style.width = `${newWidth}px`;
}

// 鼠标松开处理
function onMouseUp() {
  // 移除事件监听
  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mouseup', onMouseUp);
  
  // 恢复样式
  document.body.style.cursor = '';
  document.body.style.userSelect = '';
}



//////////////////////////////////////


// 获取原始 id 的内容
const content = document.getElementById("tolpages").textContent;
document.querySelectorAll(".copy-tolpages").forEach(el => {
  el.textContent = content;
});

let uploadedFiles = [];
let uploaded_htmlFiles = [];

document.getElementById('file-input').addEventListener('change', (event) => {
  addFiles(event.target.files);
});

function handleDrop(event) {
  event.preventDefault();
  addFiles(event.dataTransfer.files);
}

function addFiles(fileList) {
  for (const file of fileList) {
    if (file.name.endsWith('.ggb')) {
      uploadedFiles.push(file);
    }
  }
  for (const file of fileList) {
    if (file.name.endsWith('.html')) {
      uploaded_htmlFiles.push(file);
    }
  }
  // alert(`${uploadedFiles.length}个 .ggb 准备就绪.  ${uploaded_htmlFiles.length}个 .html 准备就绪.`);
  showSuccess('文件准备就绪');
  processFiles();
}

async function processFiles() {
  if (uploadedFiles.length === 0 && uploaded_htmlFiles.length === 0) {
    alert("请上传.ggb或.html文件(只是上传到本地, 不会上传到云端)\n \n三种方法:\n1. 先ctrl+c复制ggb或html文件, 然后ctrl+v粘贴; \n2. 直接拖拽ggb或html文件到虚线窗口; \n3. 点击虚线窗口上传文件");
    return;
  }

  const file_name_list = uploadedFiles.map(file => file.name.substring(0, file.name.lastIndexOf('.')));
  const hfile_name_list = uploaded_htmlFiles.map(file => file.name.substring(0, file.name.lastIndexOf('.')));
  const base64_list = [];

  for (const file of uploadedFiles) {
    const base64 = await fileToBase64(file);
    base64_list.push(base64);
  }
  let ttk = 0;
  for (const file of uploaded_htmlFiles) {
    let base64 = await hfileToBase64(file);
    let rrk = 0;
    base64.forEach(bs => { 
      base64_list.push(bs);
      let tmpname = hfile_name_list[ttk]+ "_" + "p" + rrk;
      file_name_list.push(tmpname);
      rrk += 1;
    });
    ttk +=1;
  }

  let mk = false;
  if(n === c+1){
     mk = true;
  }
  let nnew = base64_list.length;
  saveGgbBase();
  mylist_[c] = ggbApplet.getBase64();
  labels_.splice(c + 1, 0, ...file_name_list);
  mylist_.splice(c + 1, 0, ...base64_list);

  // for (let i = 0; i < nnew; i++) {
  //   labels_.splice(c + 1 + i, 0, file_name_list[nnew-i-1]);
  //   mylist_.splice(c + 1 + i, 0, base64_list[nnew-i-1]);
  // }
  n = n + nnew;
  document.getElementById("tolpages").value = n;
  // DeletePage();
  updateSlider();
  renderList();
  // NextPage();
  // if(mk){
  //   // SetPage2(c);
  //   NextPage();
  // }
  // updateSlider();
  // renderList();
  uploadedFiles.length = 0;
  uploaded_htmlFiles.length = 0;

}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      const base64 = result.split(',')[1];
      resolve(base64);
    };
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
}

function hfileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      resolve(extractGgbsFromHtml(result));
    };
    reader.onerror = (err) => reject(err);
    reader.readAsText(file);
  });
}
function extractGgbsFromHtml(htmlContent) {
        let  ggbsArray = [];
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, 'text/html');
        const scriptTags = doc.querySelectorAll('script');
        scriptTags.forEach(script => {
            const scriptContent = script.textContent;
            const ggbsMatches = scriptContent.match(/ggbs\[\d+\]\s*=\s*["'](.+?)["'];/g);
            if (ggbsMatches) {
                ggbsMatches.forEach(match => {
                    const valueMatch = match.match(/ggbs\[\d+\]\s*=\s*["'](.+?)["'];/);
                    if (valueMatch && valueMatch[1]) {
                        ggbsArray.push(valueMatch[1]);
                    }
                });
            }
        });
        return ggbsArray;
    }


// 粘贴支持（Ctrl+V 粘贴文件）
window.addEventListener('paste', (event) => {
  const items = event.clipboardData.items;
  const files = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.kind === 'file') {
      const file = item.getAsFile();
      if (file && (file.name.endsWith('.ggb')  || file.name.endsWith('.html'))) {
        files.push(file);
      }
    }
  }

  if (files.length > 0) {
    addFiles(files);
    // processFiles();
    // saveGgbBase();
    // ggbApplet.setBase64(tmmp2);
    
  }

});


/////////////////////////////////////////////////////


window.addEventListener("resize", function () {
  if (hasSearchParams()) {
      ggbApplet.setSize(window.innerWidth / sc, (window.innerHeight - 30) / sc);
  } else {
      let tmp = slider.value * 0.01;
      let zoomx = parseFloat(urlParams.get('zoom')) || tmp;
      ggbApplet2.setSize(window.innerWidth / zoomx, (window.innerHeight) / zoomx);
      ggbApplet2.evalCommand('SetPerspective("-A")');
      ggbApplet2.evalCommand('SetPerspective("-P")');
  }
});

window.addEventListener("beforeunload", function (e) { if (hasSearchParams()) { var confirmationMessage = "Not save"; e.returnValue = confirmationMessage; return confirmationMessage; } });

function saveChanges() {
  saveGgbBase();
  strs[c] = ggbApplet.getBase64();
  localStorage.setItem('currentPage', c);
  localStorage.setItem('strs', JSON.stringify(strs));
}




//////////////////////////////////////////////////////


function myonload() {
  let applet2 = new GGBApplet(parameters, '5.0');
  if (ttttk) {
      applet2.setHTML5Codebase(offline_libpath + web3d_path);
  } else {
      applet2.setHTML5Codebase(online_libpath + web3d_path);
  }

  if (localStorage.getItem('sv')) {
      slider.value = parseInt(localStorage.getItem('sv'));
      sliderValue.textContent = slider.value;
      sc = slider.value * 0.01;
      parameters["width"] = window.innerWidth / sc;
      parameters["height"] = (window.innerHeight - 30) / sc;
  }
  if (hasSearchParams()) {
      document.getElementById("bt").style.display = "";
      document.getElementById("playpt").style.display = "";
      document.getElementById("ggbApplet").style.display = "";
      document.getElementById("ggbApplet2").style.display = "none";
      document.getElementById("divider").style.display = "";
      document.getElementById("rightPanel").style.display = "";
      applet2.inject("ggbApplet");
  } else {
      document.getElementById("bt").style.display = "none";
      document.getElementById("playpt").style.display = "none";
      document.getElementById("ggbApplet").style.display = "none";
      document.getElementById("ggbApplet2").style.display = "";
      document.getElementById("divider").style.display = "none";
      document.getElementById("rightPanel").style.display = "none";
      let zoom = parseFloat(urlParams.get('zoom')) || sc;
      let page = parseFloat(urlParams.get('page')) || 1;
      // let strsx = JSON.parse(localStorage.getItem('strs'));
      var parameters2 = {
          "id": "ggbApplet2", "scale": zoom, "width": mywidth / zoom, "height": myheight / zoom, "showAlgebraInput": false, "showToolBar": false, "borderColor": "white", "language": "en", "enableRightClick": true, "enableShiftDragZoom": true, "enableLabelDrags": true,
          "ggbBase64": ggbs[page-1],
          // "ggbBase64": strsx[page - 1],
      }
      let applet3 = new GGBApplet(parameters2, '5.0');
      if (ttttk) {
          applet3.setHTML5Codebase(offline_libpath + web3d_path);
      } else {
          applet3.setHTML5Codebase(online_libpath + web3d_path);
      }
      parameters2["width"] = window.innerWidth / zoom;
      parameters2["height"] = (window.innerHeight) / zoom;
      parameters2["appletOnLoad"] = function (api) {
          api.evalCommand('SetPerspective("-A")');
          api.evalCommand('SetPerspective("-P")');
      },
      applet3.inject("ggbApplet2");
  }
};

//////////////////////////////////////////////////////

    // MD5 实现（压缩版）
    !function(n){"use strict";function d(n,t){var r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function f(n,t,r,e,o,u){return d((u=d(d(t,n),d(e,u)))<<o|u>>>32-o,r)}function l(n,t,r,e,o,u,c){return f(t&r|~t&e,n,t,o,u,c)}function g(n,t,r,e,o,u,c){return f(t&e|r&~e,n,t,o,u,c)}function v(n,t,r,e,o,u,c){return f(t^r^e,n,t,o,u,c)}function m(n,t,r,e,o,u,c){return f(r^(t|~e),n,t,o,u,c)}function c(n,t){var r,e,o,u;n[t>>5]|=128<<t%32,n[14+(t+64>>>9<<4)]=t;for(var c=1732584193,f=-271733879,i=-1732584194,a=271733878,h=0;h<n.length;h+=16)c=l(r=c,e=f,o=i,u=a,n[h],7,-680876936),a=l(a,c,f,i,n[h+1],12,-389564586),i=l(i,a,c,f,n[h+2],17,606105819),f=l(f,i,a,c,n[h+3],22,-1044525330),c=l(c,f,i,a,n[h+4],7,-176418897),a=l(a,c,f,i,n[h+5],12,1200080426),i=l(i,a,c,f,n[h+6],17,-1473231341),f=l(f,i,a,c,n[h+7],22,-45705983),c=l(c,f,i,a,n[h+8],7,1770035416),a=l(a,c,f,i,n[h+9],12,-1958414417),i=l(i,a,c,f,n[h+10],17,-42063),f=l(f,i,a,c,n[h+11],22,-1990404162),c=l(c,f,i,a,n[h+12],7,1804603682),a=l(a,c,f,i,n[h+13],12,-40341101),i=l(i,a,c,f,n[h+14],17,-1502002290),f=l(f,i,a,c,n[h+15],22,1236535329),c=g(c,f,i,a,n[h+1],5,-165796510),a=g(a,c,f,i,n[h+6],9,-1069501632),i=g(i,a,c,f,n[h+11],14,643717713),f=g(f,i,a,c,n[h],20,-373897302),c=g(c,f,i,a,n[h+5],5,-701558691),a=g(a,c,f,i,n[h+10],9,38016083),i=g(i,a,c,f,n[h+15],14,-660478335),f=g(f,i,a,c,n[h+4],20,-405537848),c=g(c,f,i,a,n[h+9],5,568446438),a=g(a,c,f,i,n[h+14],9,-1019803690),i=g(i,a,c,f,n[h+3],14,-187363961),f=g(f,i,a,c,n[h+8],20,1163531501),c=g(c,f,i,a,n[h+13],5,-1444681467),a=g(a,c,f,i,n[h+2],9,-51403784),i=g(i,a,c,f,n[h+7],14,1735328473),f=g(f,i,a,c,n[h+12],20,-1926607734),c=v(c,f,i,a,n[h+5],4,-378558),a=v(a,c,f,i,n[h+8],11,-2022574463),i=v(i,a,c,f,n[h+11],16,1839030562),f=v(f,i,a,c,n[h+14],23,-35309556),c=v(c,f,i,a,n[h+1],4,-1530992060),a=v(a,c,f,i,n[h+4],11,1272893353),i=v(i,a,c,f,n[h+7],16,-155497632),f=v(f,i,a,c,n[h+10],23,-1094730640),c=v(c,f,i,a,n[h+13],4,681279174),a=v(a,c,f,i,n[h],11,-358537222),i=v(i,a,c,f,n[h+3],16,-722521979),f=v(f,i,a,c,n[h+6],23,76029189),c=v(c,f,i,a,n[h+9],4,-640364487),a=v(a,c,f,i,n[h+12],11,-421815835),i=v(i,a,c,f,n[h+15],16,530742520),f=v(f,i,a,c,n[h+2],23,-995338651),c=m(c,f,i,a,n[h],6,-198630844),a=m(a,c,f,i,n[h+7],10,1126891415),i=m(i,a,c,f,n[h+14],15,-1416354905),f=m(f,i,a,c,n[h+5],21,-57434055),c=m(c,f,i,a,n[h+12],6,1700485571),a=m(a,c,f,i,n[h+3],10,-1894986606),i=m(i,a,c,f,n[h+10],15,-1051523),f=m(f,i,a,c,n[h+1],21,-2054922799),c=m(c,f,i,a,n[h+8],6,1873313359),a=m(a,c,f,i,n[h+15],10,-30611744),i=m(i,a,c,f,n[h+6],15,-1560198380),f=m(f,i,a,c,n[h+13],21,1309151649),c=m(c,f,i,a,n[h+4],6,-145523070),a=m(a,c,f,i,n[h+11],10,-1120210379),i=m(i,a,c,f,n[h+2],15,718787259),f=m(f,i,a,c,n[h+9],21,-343485551),c=d(c,r),f=d(f,e),i=d(i,o),a=d(a,u);return[c,f,i,a]}function t(n){for(var t="",r=32*n.length,e=0;e<r;e+=8)t+=String.fromCharCode(n[e>>5]>>>e%32&255);return t}function r(n){var t=[];for(t[(n.length>>2)-1]=void 0,e=0;e<t.length;e+=1)t[e]=0;for(var r=8*n.length,e=0;e<r;e+=8)t[e>>5]|=(255&n.charCodeAt(e/8))<<e%32;return t}function e(n){for(var t,r="0123456789abcdef",e="",o=0;o<n.length;o+=1)t=n.charCodeAt(o),e+=r.charAt(t>>>4&15)+r.charAt(15&t);return e}function o(n){return unescape(encodeURIComponent(n))}function u(n){return function(n){return t(c(r(n),8*n.length))}(o(n))}function i(n){return e(u(n))}window.md5=i;
    }(this);

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
const mytoggle = document.getElementById('toggle');
const canvas2 = document.getElementById('canvas2');
const canvas    = document.getElementById('canvas');
canvas.style.display = 'none';
const ctx       = canvas.getContext('2d');
const penBtn    = document.getElementById('penBtn');
const eraserBtn = document.getElementById('eraserBtn');
const penPanel  = document.getElementById('penPanel');
const ersPanel  = document.getElementById('eraserPanel');
const penSize   = document.getElementById('penSize');
const ersSize   = document.getElementById('eraserSize');
const boxErase  = document.getElementById('boxErase');
const colors    = document.querySelectorAll('.color-option');
let dpr         = window.devicePixelRatio || 1;
let usingPen    = false;
let usingEraser = false;
let painting    = false;
let lastPoint   = null, lastMid = null;

let penColor    = 'red';
let penW        = +penSize.value;
let ersW        = +ersSize.value;

let selectionRect = null;
let selStartX, selStartY;
function resize() {
  const w = window.innerWidth, h = window.innerHeight;
  canvas.style.width  = w + 'px';
  canvas.style.height = h + 'px';
  canvas.width  = w * dpr;
  canvas.height = h * dpr;
  ctx.setTransform(dpr,0,0,dpr,0,0);
  ctx.lineCap  = 'round';
  ctx.lineJoin = 'round';
  ctx.imageSmoothingEnabled = true;
}
window.addEventListener('resize', resize);
resize();
function getPos(e) {
  const r = canvas.getBoundingClientRect();
  return {
    x: e.clientX - r.left,
    y: e.clientY - r.top
  };
}

function startDrawing(e) {
  if (e.button !== 0) return;
  if (usingEraser && boxErase.checked) {
    // 框选开始
    selStartX = e.clientX;
    selStartY = e.clientY;
    selectionRect = document.createElement('div');
    selectionRect.className = 'selection-rectangle';
    selectionRect.style.left = selStartX + 'px';
    selectionRect.style.top  = selStartY + 'px';
    selectionRect.style.width = '0px';
    selectionRect.style.height= '0px';
    document.body.appendChild(selectionRect);
    return;
  }
  // 笔刷或橡皮刷连线
  painting = true;
  const p = getPos(e);
  lastPoint = p;
  lastMid   = p;
}

function draw(e) {
  if (selectionRect) {
    // 更新框选区域
    const curX = e.clientX, curY = e.clientY;
    const x = Math.min(curX, selStartX);
    const y = Math.min(curY, selStartY);
    const w = Math.abs(curX - selStartX);
    const h = Math.abs(curY - selStartY);
    selectionRect.style.left   = x + 'px';
    selectionRect.style.top    = y + 'px';
    selectionRect.style.width  = w + 'px';
    selectionRect.style.height = h + 'px';
    return;
  }
  if (!painting) return;
  const p = getPos(e);
  const mid = { x:(lastPoint.x + p.x)/2, y:(lastPoint.y + p.y)/2 };

  ctx.beginPath();
  if (usingEraser) {
    ctx.globalCompositeOperation = 'destination-out';
    ctx.strokeStyle = 'rgba(0,0,0,1)';
    ctx.lineWidth   = ersW;
  } else {
    ctx.globalCompositeOperation = 'source-over';
    ctx.strokeStyle = penColor;
    ctx.lineWidth   = penW;
  }

  ctx.moveTo(lastMid.x, lastMid.y);
  ctx.quadraticCurveTo(lastPoint.x, lastPoint.y, mid.x, mid.y);
  ctx.stroke();

  lastPoint = p;
  lastMid   = mid;
}

function stopDrawing(e) {
  if (selectionRect) {
    // 执行框选擦除
    const canvasRect = canvas.getBoundingClientRect();
    const selRect    = selectionRect.getBoundingClientRect();
    const x = selRect.left   - canvasRect.left;
    const y = selRect.top    - canvasRect.top;
    const w = selRect.width;
    const h = selRect.height;
    ctx.clearRect(x, y, w, h);
    selectionRect.remove();
    selectionRect = null;
    return;
  }
  painting = false;
  lastPoint = lastMid = null;
  ctx.globalCompositeOperation = 'source-over';
}

// 事件绑定
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup',   stopDrawing);
canvas.addEventListener('mouseout',  stopDrawing);


function hidePanels() {
  penPanel.style.display = 'none';
  ersPanel.style.display = 'none';
  canvas2.style.display = 'none';
  document.getElementById('toggle').checked = false;
  penPanel.setAttribute('aria-hidden', 'true');
  ersPanel.setAttribute('aria-hidden', 'true');
}


function togglePanel(panel, btn) {  
if (panel.style.display === 'block') {  
  panel.style.display = 'none';  
} else {  
  panel.style.display = 'block';  
  // 计算并设置 panel 的 left/top  
}  
}

function CleanAll() {
  const link = document.createElement('a');
  const getTimestampStr = (sec = false) => (sec ? Math.floor(Date.now() / 1000) : Date.now()).toString();
  link.download = getTimestampStr(true)+'.png'; // 下载文件名
  link.href = canvas.toDataURL('image/png'); // 导出为透明PNG
  link.click();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  usingPen = false;
  hidePanels();
  canvas.style.display = 'none';
  canvas.style.cursor = 'default';
  

}

function positionPanel(panel, btn) {
  const rect = btn.getBoundingClientRect();
  const pr = panel.getBoundingClientRect();
  let left = rect.right - pr.width;
  if (left < 5) left = 5;
  let bottom = window.innerHeight - rect.top + 8;
  panel.style.left = left + 'px';
  panel.style.bottom = bottom + 'px';
}

penBtn.addEventListener('click', () => {
  usingPen = !usingPen;
  usingEraser = false;
  hidePanels();
  // togglePanel(penPanel, penBtn);
  // canvas.style.display = 'none';
  if (usingPen) {
    penPanel.style.display = 'block';
    canvas.style.display = 'block';
    penPanel.setAttribute('aria-hidden', 'false');
    positionPanel(penPanel, penBtn);
    canvas.style.cursor = 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' height=\'50\' width=\'50\'><text y=\'30\' font-size=\'30\'>🖊</text></svg>") 0 30, auto';
    canvas.style.pointerEvents = 'auto';
    
  } else {
    canvas.style.cursor = 'default';
    canvas.style.pointerEvents = 'none';
  }
});
eraserBtn.addEventListener('click', () => {
  usingEraser = !usingEraser; usingPen = false;
  hidePanels();
  // togglePanel(ersPanel, eraserBtn);
  canvas.style.pointerEvents = 'auto';
  if (usingEraser) {
    ersPanel.style.display = 'block';
    ersPanel.setAttribute('aria-hidden', 'false');
    positionPanel(ersPanel, eraserBtn);
    canvas.style.cursor = `url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' height=\'50\' width=\'50\'><text y=\'30\' font-size=\'30\'>🧽</text></svg>") 30 30, auto`;
  } else {
    // canvas.style.cursor = 'default';
    canvas.style.cursor = 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' height=\'50\' width=\'50\'><text y=\'30\' font-size=\'30\'>🖊</text></svg>") 0 30, auto';
  }
});


  // 默认首色
  colors[1].classList.add('active');
// 颜色 & 粗细
colors.forEach(c => {
  c.addEventListener('click', () => {
    colors.forEach(x=>x.classList.remove('active'));
    c.classList.add('active');
    penColor = c.dataset.color;
  });
});


penSize.addEventListener('input', e => penW = +e.target.value);
ersSize.addEventListener('input', e => ersW = +e.target.value);
//////////////////////////////////////////////////////

function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  document.getElementById('clock').textContent = `${hours}:${minutes}`;
}

updateTime(); // 页面加载时先调用一次
setInterval(updateTime, 1000 * 60); // 每分钟更新一次
//////////////////////////////////////////////////////

class RainbowTrail {
  constructor() {
      this.canvas = document.getElementById('canvas2');
      this.ctx = this.canvas.getContext('2d');
      this.toggle = document.getElementById('toggle');
      this.resizeCanvas();
      
      // 状态管理
      this.isDrawing = false;
      this.activeTrails = [];  // 改为存储独立线段
      this.hue = 0;
      this.lifeTime = 3000;
      this.lineWidth = 6;

      // 事件监听
      window.addEventListener('resize', () => this.resizeCanvas());
      document.addEventListener('mousedown', (e) => this.startDrawing(e));
      document.addEventListener('mousemove', (e) => this.draw(e));
      document.addEventListener('mouseup', () => this.stopDrawing());
      document.addEventListener('mouseleave', () => this.stopDrawing());

      this.animate();
  }

  resizeCanvas() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
  }

  startDrawing(e) {
      if (!this.toggle.checked || e.button !== 0) return;
      this.isDrawing = true;
      
      // 创建新的轨迹线段
      this.activeTrails.push({
          points: [],
          startTime: Date.now()
      });
  }

  draw(e) {
      if (!this.toggle.checked || !this.isDrawing) return;
      
      const currentTrail = this.activeTrails[this.activeTrails.length - 1];
      const newPoint = {
          x: e.clientX,
          y: e.clientY,
          hue: this.hue,
          timestamp: Date.now()
      };

      if (currentTrail.points.length > 0) {
          const lastPoint = currentTrail.points[currentTrail.points.length - 1];
          this.hue = (this.hue + Math.sqrt(
              Math.pow(newPoint.x - lastPoint.x, 2) +
              Math.pow(newPoint.y - lastPoint.y, 2)
          ) * 0.3) % 360;
      }

      newPoint.hue = this.hue;
      currentTrail.points.push(newPoint);
  }

  stopDrawing() {
      this.isDrawing = false;
  }

  animate() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      
      // 绘制所有有效轨迹
      this.activeTrails = this.activeTrails.filter(trail => {
          const age = Date.now() - trail.startTime;
          if (age > this.lifeTime) return false;
          
          // 绘制该轨迹的所有线段
          for (let i = 0; i < trail.points.length - 1; i++) {
              const current = trail.points[i];
              const next = trail.points[i + 1];
              
              const opacity = 1 - (age + (current.timestamp - trail.startTime)) / this.lifeTime;
              if (opacity <= 0) continue;

              this.ctx.beginPath();
              this.ctx.moveTo(current.x, current.y);
              this.ctx.lineTo(next.x, next.y);
              this.ctx.strokeStyle = `hsla(${current.hue}, 100%, 50%, ${opacity})`;
              this.ctx.lineWidth = this.lineWidth;
              this.ctx.lineCap = 'round';
              this.ctx.stroke();
          }
          return true;
      });

      requestAnimationFrame(() => this.animate());
  }
}

new RainbowTrail();




canvas2.style.display = 'none';
// canvas2.style.pointerEvents = 'none';
mytoggle.addEventListener('change', function() {

  if (toggle.checked) {
    canvas2.style.display = 'block';
  } else {
    canvas2.style.display = 'none';
  }
});
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 's') {
      event.preventDefault();
      savefile(); 
  }
});
