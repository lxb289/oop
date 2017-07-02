function getNodes(parent){
	console.log(parent.nodeType!=3?parent.nodeName:parent.nodeValue);
	var children=parent.childNodes;
	for(var i=0,len=children.length;i<len;i++){
		getNodes(children[i]);
	}
}
getNodes(document.body);