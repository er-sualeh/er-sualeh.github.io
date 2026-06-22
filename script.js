
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(75,innerWidth/innerHeight,0.1,1000);
const renderer=new THREE.WebGLRenderer({canvas:document.getElementById('bg'),alpha:true});
renderer.setSize(innerWidth,innerHeight);
const geometry=new THREE.BufferGeometry();
const verts=[];
for(let i=0;i<6000;i++){verts.push((Math.random()-0.5)*80,(Math.random()-0.5)*80,(Math.random()-0.5)*80);}
geometry.setAttribute('position',new THREE.Float32BufferAttribute(verts,3));
const stars=new THREE.Points(geometry,new THREE.PointsMaterial({size:0.08}));
scene.add(stars);
camera.position.z=20;
function animate(){
requestAnimationFrame(animate);
stars.rotation.y+=0.0007;
stars.rotation.x+=0.0002;
renderer.render(scene,camera);
}
animate();
window.addEventListener('resize',()=>{
camera.aspect=innerWidth/innerHeight;
camera.updateProjectionMatrix();
renderer.setSize(innerWidth,innerHeight);
});
