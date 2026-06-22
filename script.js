const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
const renderer=new THREE.WebGLRenderer({canvas:document.getElementById('bg'),alpha:true});
renderer.setSize(window.innerWidth,window.innerHeight);
const geometry=new THREE.BufferGeometry();
const verts=[];
for(let i=0;i<3000;i++){verts.push((Math.random()-0.5)*50,(Math.random()-0.5)*50,(Math.random()-0.5)*50);}
geometry.setAttribute('position',new THREE.Float32BufferAttribute(verts,3));
const points=new THREE.Points(geometry,new THREE.PointsMaterial({size:0.05}));
scene.add(points);
camera.position.z=10;
function animate(){requestAnimationFrame(animate);points.rotation.y+=0.0008;points.rotation.x+=0.0003;renderer.render(scene,camera);}
animate();
