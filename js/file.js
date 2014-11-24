// JavaScript Document
var dom ={
	tag:'div',
	content:'',
	children:[
				{
					tag:'div',
					content:'abc',
					children:[
						{
							tag:'div',
							children:[
								{
									tag:'div',
									content:'google',
									children:[
										{
											tag:'p',
											content:'final'
											}
									]
								},
								{
									tag:'div',
									content:'google1',
									children:[
										{
											tag:'p',
											content:'final1'
											}
									]
								},
								{
									tag:'button',
									content:'Submit'
									}
							]
							}
					]
				},
				{
					tag:'input'
				},
				{
					tag:'div',
					content:'abc',
					children:[
						{
							tag:'div',
							children:[
								{
									tag:'p',
									content:'google'
								},
								{
									tag:'button',
									content:'Submit'
									}
							]
							}
					]
				},
				{
					tag:'p',
					content:'Submit'
				},
				{
					tag:'p',
					content:'Submit'
				},
				{
					tag:'p',
					content:'Submit'
				}
			]
	};

var mainTagArray = document.getElementsByTagName('body');
var mainTag = mainTagArray[0];
createTag(dom,mainTag);

function createTag(element,parent){
	var tagName = element.tag;
	var newTag = document.createElement(tagName);
		if(element.content){
			newTag.innerHTML=element.content;			
		}		
	parent.appendChild(newTag);
		if(element.children){
			for(var i=0; i<element.children.length;i++){
				createTag(element.children[i],newTag);
			}
		}
	}
