# Welcome to Dietjs.com repository

This is the source code for [dietjs.com](http://dietjs.com/)

#### **Contributions are very welcome!**

---

## **Building**
```
cd ~/path/to/dietjs.com/
npm install
```

## **Running**
```
node index.js
open http://localhost:8000/
```

## **Project Structure**

### **Startup file**
The app starts at **index.js** . This is the only node.js file that matters all routes are configured here.

### **Static Files**
All static files can be found in the **/static** folder within their respective folders. 

 - html files under **/static/html/** 
 - css under **/static/styles/**
 - regular javascripts under **/static/scripts/**  
 - pretty javascripts under **/static/prettify/**

### **Configuration File**
- Environmental configurations can be found in **config.js**

### **meta.json**
- This is a json file containing meta informations for each page for SEO purposes.



