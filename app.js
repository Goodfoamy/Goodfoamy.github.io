webpackJsonp([1],{/***/
119:/***/
function(e,t,n){"use strict";var i=n(204),o=n(203),r=function(){function e(e){this._rootNode=e}
// Pre-order traversal
return Object.defineProperty(e.prototype,"rootNode",{get:function(){return this._rootNode},enumerable:!0,configurable:!0}),e.prototype.traverseNodes=function(e){if(!e)throw new o.default("callback not defined");this.traverseNodesInternal(e,this.rootNode)},e.prototype.traverseNodesInternal=function(e,t){if(e(t),t.children)for(var n=0;n<t.children.length;n++)this.traverseNodesInternal(e,t.children[n])},e.prototype.clone=function(){return new e(this.cloneNode(this.rootNode))},e.prototype.cloneNode=function(e){var t=new i.InternalNode;if(t.text=e.text,t.type=e.type,t.group=e.group,t.parent=void 0,!e.children)return t;for(var n=[],o=0;o<e.children.length;o++){var r=this.cloneNode(e.children[o]);r.parent=t,n.push(r)}return t.children=n,t},e}();t.InternalData=r,Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},/***/
1228:/***/
function(e,t,n){var i=n(499);e.exports="string"==typeof i?i:i.toString()},/***/
1229:/***/
function(e,t,n){var i=n(500);e.exports="string"==typeof i?i:i.toString()},/***/
1230:/***/
function(e,t,n){var i=n(501);e.exports="string"==typeof i?i:i.toString()},/***/
1231:/***/
function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},o=n(1),r=function(){function e(){}return e}();r=i([o.Component({selector:"app",template:"<router-outlet></router-outlet>",styles:[n(1230),n(1229),n(1228)],encapsulation:o.ViewEncapsulation.None})],r),t.AppComponent=r},/***/
1232:/***/
function(e,t,n){"use strict";var i=function(){function e(e,t){this._name=e,this._message=t,this._stack=(new Error).stack}return Object.defineProperty(e.prototype,"name",{get:function(){return this._name},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"message",{get:function(){return this._message},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"stack",{get:function(){return this._stack},enumerable:!0,configurable:!0}),e}();t.Exception=i,Object.defineProperty(t,"__esModule",{value:!0}),t.default=i},/***/
1233:/***/
function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},r=n(1),a=n(33),u=n(202),s=function(){function e(e,t){this.encode=e,this.router=t,this.types=[],this.types.push({label:"Sandbox",value:{id:1,name:"Sandbox"}}),this.types.push({label:"Problem Solving",value:{id:2,name:"ProblemSolving"}}),this.types.push({label:"Guide",value:{id:3,name:"Guide"}}),this.chosenType=1}return e.prototype.onDropdownChange=function(e,t){this.chosenType=t.id},e.prototype.onGenerateURL=function(){var e=[];switch(e.push(window.location.href),e.push("sandbox;"),this.chosenType){case 1:e.push("ex="),e.push(this.encode.encodeURL(this.expression)),this.urlOutput=e.join("");break;case 2:e.push("sp=ps;"),e.push("ex="),e.push(this.encode.encodeURL(this.expression)),e.push(";x="),e.push(this.encode.encodeURL(this.correctSolution)),e.push(";y="),e.push(this.encode.encodeURL(this.wrongSolution)),this.urlOutput=e.join("");break;case 3:e.push("sp=gd;"),e.push("tree="),e.push(this.encode.encodeURL(this.tree)),e.push(";desc="),e.push(this.encode.encodeURL(this.description)),this.urlOutput=e.join("")}},e.prototype.onCopy=function(){document.querySelector("#frontpage_output_area").select(),document.execCommand("copy")},e.prototype.onGoToSandbox=function(){this.router.navigateByUrl("/sandbox")},e}();s=i([r.Component({selector:"frontpage",template:n(517),styles:[n(959)],providers:[u.EncodeService]}),o("design:paramtypes",[u.EncodeService,a.Router])],s),t.FrontpageComponent=s;!function(){function e(){}Object.defineProperty(e.prototype,"id",{get:function(){return this._id},set:function(e){this._id=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this._name},set:function(e){this._name=e},enumerable:!0,configurable:!0})}()},/***/
1234:/***/
function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},o=n(18),r=n(1),a=function(){function e(){this.visualizationSelectNodeSource=new o.Subject,this.visualizationSelectNode$=this.visualizationSelectNodeSource.asObservable()}return e.prototype.selectNode=function(e){this.visualizationSelectNodeSource.next(e)},e}();a=i([r.Injectable()],a),Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},/***/
1235:/***/
function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},r=this&&this.__param||function(e,t){return function(n,i){t(n,i,e)}},a=n(1),u=n(204),s=n(119),l=n(205),c=n(344),d=function(){function e(e,t){this.mis=e,this.eots=t,this.onApplied=new a.EventEmitter,this.onCanceled=new a.EventEmitter,this.TIMEOUT_LIMIT_MS=200,this.operationState=0,this.updated=!1}return e.prototype.ngOnInit=function(){this.updateInfoText()},e.prototype.ngOnChanges=function(e){var t=e.selectedNode;t&&(t.currentValue&&(this.currentData=new s.default(this.selectedNode)),this.newData=null,this.input=""),e.operationState&&this.updateInfoText()},e.prototype.onInputChange=function(e){this.updated=!1,this.startInputTimeout()},e.prototype.startInputTimeout=function(){clearTimeout(this.timeout),this.timeout=setTimeout(this.onTimeOut.bind(this),this.TIMEOUT_LIMIT_MS)},e.prototype.onTimeOut=function(){this.newData=this.mis.convert(this.input),this.updated=!0},e.prototype.applyOperation=function(){this.onApplied.emit(this.newData.rootNode)},e.prototype.cancelOperation=function(){this.onCanceled.emit()},e.prototype.updateInfoText=function(){this.infoText=this.getInfoText()},e.prototype.isApplyBtnDisabled=function(){return""===this.input||(!this.newData||!this.updated)},e.prototype.getInfoText=function(){switch(this.operationState){case 0:return this.eots.getVisualizeExpressionText();case 1:return this.eots.getSelectNodeText();case 2:return this.eots.getReplacementOperationText();default:return this.eots.getUnexpectedProblemText()}},e}();i([a.Input(),o("design:type",Number)],d.prototype,"operationState",void 0),i([a.Input(),o("design:type",u.InternalNode)],d.prototype,"selectedNode",void 0),i([a.Output(),o("design:type",Object)],d.prototype,"onApplied",void 0),i([a.Output(),o("design:type",Object)],d.prototype,"onCanceled",void 0),i([a.ViewChild("applyBtn"),o("design:type",HTMLButtonElement)],d.prototype,"applyBtn",void 0),d=i([a.Component({selector:"expression-operation",template:n(518),styles:[n(960)]}),r(0,a.Inject(l.default)),o("design:paramtypes",[Object,c.ExpressionOperationTextService])],d),t.ExpressionOperationComponent=d},/***/
1236:/***/
function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},r=this&&this.__param||function(e,t){return function(n,i){t(n,i,e)}},a=n(1),u=n(349),s=n(119),l=n(203);a.Injectable();var c=function(){function e(e){this.mus=e}
// Optimize away containers
return e.prototype.applyChange=function(e,t,n){if(!e)throw new l.default("data is undefined!");if(!t)throw new l.default("selectedNode is undefined!");if(!n)throw new l.default("newNode is undefined!");var i,o=this.optimizeTargetNode(t,n);if(o){var r=o.parent.children,a=r.indexOf(o);r.splice(a,1);r.splice(a,0,n),n.parent=o.parent,i=this.mus.convert(e),
// Reverse changes in the data
r.splice(a,1),r.splice(a,0,t)}else i=this.mus.convert(new s.default(n));return i},e.prototype.optimizeTargetNode=function(e,t){if(!e||!e.parent)return null;var n=e;if(0===t.group&&2===n.parent.group)for(;n.parent&&2===n.parent.group;)if(n=n.parent,!n.parent)return null;return n},e}();c=i([r(0,a.Inject(u.default)),o("design:paramtypes",[Object])],c),t.ExpressionService=c,Object.defineProperty(t,"__esModule",{value:!0}),t.default=c},/***/
1237:/***/
function(e,t,n){"use strict";var i=function(){function e(){}return e}();t.GuideTree=i;var o=function(){function e(){}return e}();t.GuideNode=o},/***/
1238:/***/
function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},o=n(1),r=n(203),a=function(){function e(){}return e.prototype.checkGuide=function(e,t){if(!t)throw new r.UndefinedArgumentException("tree is undefined");var n=e.replace(" ",""),i=n.split("=");if(!t.paths||0===t.paths.length)return!1;if(this.checkNode(t.rootNode,i))return!0;if(t.activePath&&t.activePath>=0&&this.traverseNodes(t.paths[t.activePath],i,t.activePath,t))return!0;for(var o=0;o<t.paths.length;o++)if(!t.activePath||o!=t.activePath){var a=this.traverseNodes(t.paths[o],i,o,t);if(a)return!0}return!1},e.prototype.traverseNodes=function(e,t,n,i){if(!e)return!1;if(this.checkNode(e,t))return i.paths[n]=e,!0;if(!e.children)return!1;for(var o=0;o<e.children.length;o++){if(this.traverseNodes(e.children[o],t,n,i))return!0}},e.prototype.checkNode=function(e,t){var n=e.expression.replace(" ",""),i=n.split("=");return t[0]===i[0]&&!t[1]&&!i[1]||(t[0]===i[0]&&t[1]===i[1]||t[0]===i[1]&&t[1]===i[0])},e}();a=i([o.Injectable()],a),t.GuideProgressService=a},/***/
1239:/***/
function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},o=n(1),r=n(151),a=function(){function e(){}return e.prototype.checkExpression=function(e,t,n){var i,o=e.split("="),a=o[0],u=o[1];t=r.parse(t).eval(),n=r.parse(n).eval();try{r.parse(e.replace("=","==")).traverse(function(e,t,n){if(e.isSymbolNode){if(i&&i!==e.name)return void(i=void 0);i=e.name}})}catch(e){return!1}if(!i)return!1;var s={},l={};s[i]=t,l[i]=n;try{var c=r.parse(a),d=c.compile().eval(s),f=c.compile().eval(l),p=r.parse(u),b=p.compile().eval(s),h=p.compile().eval(l)}catch(e){return!1}if(d==b){if(f!=b)return!0;if(h!=d)return!0}return!1},e}();a=i([o.Injectable()],a),t.ProblemSolvingService=a},/***/
1240:/***/
function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},o=n(1),r=function(){function e(){this.TEXT_STANDARD_DESCRIPTION="The standard sandbox mode allows you to visualize any expression at your own leisure.",this.TEXT_STANDARD_EMPTY="An empty expression has already been added to get you started. Try typing '1+2=3' in the input field of the expression to visualize the expression.",this.TEXT_PROBLEM_SOLVING_DESCRIPTION="The problem solving mode allows you to solve problems through visualized expressions.",this.TEXT_GUIDE_DESCRIPTION="The guide mode allows you to follow the trail of predefined expressions through visualisations.",this.TEXT_INITIAL_EXPRESSION="The initial expression of the problem has been inserted as the first expression to get you started. Input new expressions to solve the problem step by step as you see fit.",this.TEXT_HINT_OPERATIONS="Hint: Operations help you break down expressions into more manageable pieces.",this.TEXT_MODE_STANDARD="Standard Mode",this.TEXT_MODE_PROBLEM_SOLVING="Problem Solving Mode",this.TEXT_MODE_GUIDE="Guide Mode",this.TEXT_MODE_NOT_FOUND="Mode not found"}return e.prototype.getStandardDescriptionText=function(){return this.TEXT_STANDARD_DESCRIPTION},e.prototype.getStandardEmptyText=function(){return this.TEXT_STANDARD_EMPTY},e.prototype.getProblemSolvingDescriptionText=function(){return this.TEXT_PROBLEM_SOLVING_DESCRIPTION},e.prototype.getGuideDescriptionText=function(){return this.TEXT_GUIDE_DESCRIPTION},e.prototype.getInitialExpressionText=function(){return this.TEXT_INITIAL_EXPRESSION},e.prototype.getOperationsHintText=function(){return this.TEXT_HINT_OPERATIONS},e.prototype.getModeNotFoundText=function(){return this.TEXT_MODE_NOT_FOUND},e.prototype.getModeStandardText=function(){return this.TEXT_MODE_STANDARD},e.prototype.getModeProblemSolvingText=function(){return this.TEXT_MODE_PROBLEM_SOLVING},e.prototype.getModeGuideText=function(){return this.TEXT_MODE_GUIDE},e}();r=i([o.Injectable()],r),t.SandboxTextService=r,Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},/***/
1241:/***/
function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},r=this&&this.__param||function(e,t){return function(n,i){t(n,i,e)}},a=n(1),u=n(345),s=n(343),l=n(347),c=n(348),d=n(205),f=n(349),p=n(1242),b=n(1243),h=n(346),g=n(1245),m=n(350),v=n(1240),y=n(344),w=n(202),x=function(){function e(e,t,n,i,o){this.resolver=e,this.ees=t,this.imp=n,this.sts=i,this.mis=o,this.subscription=t.expressionAddNew$.subscribe(this.onAddNewExpression.bind(this)),this.subscription=t.expressionAdd$.subscribe(this.onAddExpression.bind(this)),this.subscription=t.expresionRemove$.subscribe(this.onRemoveExpression.bind(this)),this.subscription=t.expressionClone$.subscribe(this.onCloneExpression.bind(this)),this.subscription=t.expressionMoveUp.subscribe(this.onMoveUpExpression.bind(this)),this.subscription=t.expressionMoveDown.subscribe(this.onMoveDownExpression.bind(this)),this.subscription=t.expressionGuideSuccess$.subscribe(this.onGuideSuccess.bind(this)),this.expressionComponents=[],this.mode=0,this.importedExpressionData=this.getImportedExpressionData(),this.textService=i}return e.prototype.ngOnInit=function(){this.imp.importedExpression?this.addExpression(this.imp.importedExpression):this.imp.importedGuideTree?this.addExpression(this.imp.importedGuideTree.rootNode.expression):this.addEmptyExpression(),"ps"===this.imp.importedSpecifier?this.mode=1:"gd"===this.imp.importedSpecifier?this.mode=2:this.mode=0},e.prototype.onAddNewExpression=function(){this.addEmptyExpression()},e.prototype.onAddExpression=function(e){this.addExpression(e)},e.prototype.onRemoveExpression=function(e){this.removeExpression(e)},e.prototype.onCloneExpression=function(e){this.addExpression(e)},e.prototype.onMoveUpExpression=function(e){e>0&&this.swapExpressions(e,e-1)},e.prototype.onMoveDownExpression=function(e){e<this.expressionComponents.length-1&&this.swapExpressions(e,e+1)},e.prototype.onGuideSuccess=function(){this.successModal.showDialog()},e.prototype.addEmptyExpression=function(){this.createExpressionComponent()},e.prototype.addExpression=function(e){var t=this.createExpressionComponent();this.getExpressionInstance(t).input=e},e.prototype.removeExpression=function(e){if(e>=0&&e<=this.container.length-1){this.container.remove(e),this.expressionComponents.splice(e,1);for(var t=e;t<this.container.length;t++){var n=this.expressionComponents[t];this.getExpressionInstance(n).counter=t+1}0==this.container.length&&this.addEmptyExpression()}},e.prototype.swapExpressions=function(e,t){var n=this.expressionComponents[e];if(n){var i=this.expressionComponents[t];if(i){this.expressionComponents[e]=i,this.expressionComponents[t]=n,this.container.move(this.container.get(e),t);var o=this.getExpressionInstance(n),r=this.getExpressionInstance(i),a=o.counter;o.counter=r.counter,r.counter=a}}},e.prototype.createExpressionComponent=function(){var e=this.resolver.resolveComponentFactory(u.ExpressionComponent),t=this.container.createComponent(e);return this.expressionComponents.push(t),this.getExpressionInstance(t).counter=this.expressionComponents.length,t},e.prototype.getExpressionInstance=function(e){return e.instance},e.prototype.getImportedExpression=function(){var e=this.getImportedTreeExpression();return e||this.imp.importedExpression},e.prototype.getImportedExpressionData=function(){var e=this.getImportedExpression();return e&&""!==e?this.mis.convert(e):null},e.prototype.getImportedTreeExpression=function(){return this.imp.importedGuideTree?this.imp.importedGuideTree.rootNode.expression:null},e.prototype.getModeTitle=function(){switch(this.mode){case 2:return this.sts.getModeGuideText();case 1:return this.sts.getModeProblemSolvingText();case 0:return this.sts.getModeStandardText();default:return this.sts.getModeNotFoundText()}},e.prototype.getModeDescription=function(){switch(this.mode){case 2:return this.sts.getGuideDescriptionText();case 1:return this.sts.getProblemSolvingDescriptionText();case 0:return this.sts.getStandardDescriptionText();default:return this.sts.getModeNotFoundText()}},e.prototype.getImportedDescription=function(){return this.imp.importedDescription},e}();i([a.ViewChild("expression_box",{read:a.ViewContainerRef}),o("design:type",a.ViewContainerRef)],x.prototype,"container",void 0),i([a.ViewChild(c.ModalSuccessComponent),o("design:type",c.ModalSuccessComponent)],x.prototype,"successModal",void 0),x=i([a.Component({selector:"sandbox",template:n(521),styles:[n(962)],providers:[s.ExpressionEventService,{provide:d.default,useClass:p.default},{provide:f.default,useClass:b.default},l.ImportExpressionService,h.GuideTreeService,v.SandboxTextService,{provide:m.VISUALIZATION_SERVICE,useClass:g.MirrorMountainService},y.ExpressionOperationTextService,w.EncodeService]}),r(4,a.Inject(d.default)),o("design:paramtypes",[a.ComponentFactoryResolver,s.ExpressionEventService,l.ImportExpressionService,v.SandboxTextService,Object])],x),t.SandboxComponent=x},/***/
1242:/***/
function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},o=n(151),r=n(204),a=n(119),u=n(1),s=function(){function e(){}return e.prototype.convert=function(e){var t=this.preprocess(e);if(""===e)return null;var n,i=new Map;try{n=o.parse(t)}catch(e){return null}var r=this.createNode(n);i.set(n,r);var u=new a.default(r);return n.traverse(function(e,t,n){var o=i.get(e);void 0===o&&(o=this.createNode(e),i.set(e,o));var r=i.get(n);o.parent=r,void 0!==r&&(void 0===r.children&&(r.children=[]),r.children.push(o))}.bind(this)),u},e.prototype.preprocess=function(e){return e.replace("=","==").replace("/(\r\n|\r|\n)/g","")},e.prototype.postprocessOperator=function(e){return e.replace("==","=")},e.prototype.createNode=function(e){var t=new r.InternalNode;switch(e.type){case"ConstantNode":t.text=e.value,t.type=Number.isInteger(+e.value)?4:1,t.group=0;break;case"OperatorNode":t.text=e.op=this.postprocessOperator(e.op),t.type=this.getOperatorType(e),t.group=1;break;case"ParenthesisNode":t.text="()",t.type=6,t.group=2;break;case"SymbolNode":t.text=e.name,t.type=8,t.group=3;break;default:t.text="?",t.type=9,t.group=4}return t},e.prototype.getOperatorType=function(e){switch(e.op){case"+":return 0;case"-":return 7;case"=":return 3;case"*":return 5;case"/":return 2;default:return 9}},e}();s=i([u.Injectable()],s),t.MathTextInputService=s,Object.defineProperty(t,"__esModule",{value:!0}),t.default=s},/***/
1243:/***/
function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},o=n(1),r=function(){function e(){}return e.prototype.convert=function(e){var t=[];return this.processNode(e.rootNode,t),t.join("")},e.prototype.processNode=function(e,t){switch(e.group){case 2:this.processContainerGroupNode(e,t);break;case 0:this.processNumberGroupNode(e,t);break;case 1:this.processOperatorGroupNode(e,t);break;case 3:this.processSymbolGroupNode(e,t);break;default:this.processUnknownGroupNode(e,t)}},e.prototype.processContainerGroupNode=function(e,t){if(6===e.type){if(t.push("("),e.children)for(var n=0;n<e.children.length;n++)this.processNode(e.children[n],t);t.push(")")}},e.prototype.processNumberGroupNode=function(e,t){t.push(e.text)},e.prototype.processOperatorGroupNode=function(e,t){!e.children||e.children.length>2||0===e.children.length||(1===e.children.length?(t.push(e.text),this.processNode(e.children[0],t)):(this.processNode(e.children[0],t),t.push(e.text),this.processNode(e.children[1],t)))},e.prototype.processSymbolGroupNode=function(e,t){t.push(e.text)},e.prototype.processUnknownGroupNode=function(e,t){t.push(e.text)},e}();r=i([o.Injectable()],r),t.MathTextOutputService=r,Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},/***/
1244:/***/
function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},r=this&&this.__param||function(e,t){return function(n,i){t(n,i,e)}},a=n(1),u=n(119),s=n(350),l=function(){function e(e){this.visualizationService=e}return e.prototype.ngOnChanges=function(e){this.visualizationService.configure(this.config),this.visualizationService.construct(this.mirrorMountainBox,this.data,this.eventHandler)},e}();i([a.Input(),o("design:type",u.InternalData)],l.prototype,"data",void 0),i([a.Input(),o("design:type",Object)],l.prototype,"config",void 0),i([a.Input(),o("design:type",Object)],l.prototype,"eventHandler",void 0),i([a.ViewChild("mirrorMountainBox"),o("design:type",a.ElementRef)],l.prototype,"mirrorMountainBox",void 0),l=i([a.Component({selector:"visualization-mirror-mountain",template:'<div class="mirror-mountain-box" #mirrorMountainBox></div>',styles:[n(963)],encapsulation:a.ViewEncapsulation.None}),r(0,a.Inject(s.VISUALIZATION_SERVICE)),o("design:paramtypes",[Object])],l),t.MirrorMountainComponent=l},/***/
1245:/***/
function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},r=n(1),a=n(206),u=function(){function e(){this.width=750,this.height=350,this.nodeWidth=40,this.nodeHeight=40,this.nodeHorizontalSpacing=10,this.nodeVerticalSpacing=20,this.textHorizontalMargin=5;var e=a.select("body").append("svg").attr("id","svg-hidden").attr("visibility","hidden").style("height","0").style("display","none");e.append("text"),e.append("rect").attr("class","mirror-mountain-rect")}return e.prototype.configure=function(e){e&&(e.hasOwnProperty("width")&&(this.width=e.width),e.hasOwnProperty("height")&&(this.width=e.height),e.hasOwnProperty("nodeWidth")&&(this.width=e.nodeWidth),e.hasOwnProperty("nodeHeight")&&(this.width=e.nodeHeight))},e.prototype.construct=function(e,t,n){if(e&&(this.clearNodes(e),t)){var i=a.hierarchy(t.rootNode);i=this.preprocessRootNode(i);var o=this.layoutHierarchy(i);this.postprocessRootNode(i,o);var r=a.select(e.nativeElement).append("svg"),u=a.select("#svg-hidden rect").node(),s=window.getComputedStyle(u),l=parseInt(s.strokeWidth);l||(l=0);var c=r.append("g").attr("transform","translate("+l+","+l+")"),d=this,f=i.links();c.selectAll("line").data(f).enter().each(function(e){d.processLink(e,this)});var p=i.descendants();c.selectAll("g").data(p).enter().each(function(e){d.processNode(e,this,n)});var b=c.node();if(b){var h=b.getBBox();r.attr("width",h.width+2*l).attr("height",h.height+2*l)}}},e.prototype.clearNodes=function(e){a.select(e.nativeElement).selectAll("*").remove()},e.prototype.preprocessRootNode=function(e){for(var t=[];6===e.data.type&&e.children;)e=e.children[0];for(t.push(e);t.length>0;){var n=t.pop();this.preprocessNode(n,t)}return e},e.prototype.preprocessNode=function(e,t){var n=this.getTextWidth(e);if(e.width=n>this.nodeWidth?n:this.nodeWidth,e.children)if(6===e.data.type){var i=e.children[0];i.parent=e.parent,t.push(i);var o=e.parent.children.indexOf(e);e.parent.children.splice(o,1),e.parent.children.splice(o,0,i),e.parent=void 0}else for(var r=0;r<e.children.length;r++)t.push(e.children[r])},e.prototype.layoutHierarchy=function(e){e.x=-e.width/2,e.y=0;var t=this.calculateHeight(e);if(e.children)for(var n=0;n<e.children.length;n++){var i=this.calculateHeight(e.children[n]),o=t-i;1!==o&&(e.children[n].offsetHeight=o-1)}var r=new s(t);r.currentLevel=1;var a=new l;return a.maxWidth=e.width,this.layoutAdjacentNodes(e.children,r,a),a},e.prototype.layoutAdjacentNodes=function(e,t,n){if(e&&0!==e.length){var i=this.calculateTotalWidth(e)+(e.length-1)*this.nodeHorizontalSpacing;n.maxWidth=Math.max(n.maxWidth,i);for(var o=0,r=[],a=0;a<e.length;a++)if(e[a].x=-i/2+o+a*this.nodeHorizontalSpacing,e[a].y=t.currentLevel*(this.nodeHeight+this.nodeVerticalSpacing),o+=e[a].width,e[a].children){var u=e[a].offsetHeight;u?(r.push(e[a]),u-=1,u<=0?delete e[a].offsetHeight:e[a].offsetHeight=u):r.push.apply(r,e[a].children)}else
// Re-include nodes that are leaf nodes, but are not at the lowest level. 
// This will force all leaf nodes to the same level.
t.currentLevel!==t.maxLevel&&r.push(e[a]);t.currentLevel+=1,this.layoutAdjacentNodes(r,t,n)}},e.prototype.calculateHeight=function(e){if(!e.children)return 0;for(var t=0,n=0;n<e.children.length;n++)t=Math.max(t,this.calculateHeight(e.children[n]));return t+1},e.prototype.calculateTotalWidth=function(e){for(var t=0,n=0;n<e.length;n++)t+=e[n].width;return t},e.prototype.postprocessRootNode=function(e,t){var n,i=this;if(e.children&&e.children.length>0){var o=this.findEdgeLeaf(e.children[0],!0);o.x,n=o.y}else-e.width/2,n=0;e.descendants().forEach(function(e){if(3===e.data.type){var o=i.findEdgeLeaf(e.children[0],!1);o&&(e.x=o.x+o.width+i.nodeHorizontalSpacing,e.y-=o.y),e.children[1].each(function(t){t.x+=e.width+i.nodeHorizontalSpacing})}else e.y=-e.y;if(1===e.data.group&&3!==e.data.type){var r=e.leaves(),a=i.calculateNodesWidth(r);e.x=r[0].x+a/2-e.width/2}e.x+=t.maxWidth/2,n&&n>0&&(e.y+=n)})},e.prototype.calculateNodesWidth=function(e){if(!e)return 0;var t=e[0],n=e[e.length-1];return n.x+n.width-t.x},e.prototype.processNode=function(e,t,n){switch(e.data.group){case 0:this.processNumberNode(e,t,n);break;case 1:this.processOperatorNode(e,t,n);break;case 2:this.processContainerNode(e,t,n);break;case 3:this.processSymbolNode(e,t,n);break;default:this.processStandardNode(e,t,n)}},e.prototype.processNumberNode=function(e,t,n){this.processStandardNode(e,t,n)},e.prototype.processOperatorNode=function(e,t,n){this.processStandardNode(e,t,n)},e.prototype.processContainerNode=function(e,t,n){},e.prototype.processSymbolNode=function(e,t,n){this.processStandardNode(e,t,n)},e.prototype.processStandardNode=function(e,t,n){var i=this,o=a.select(t).append("g").attr("transform",function(e){return"translate("+e.x+","+e.y+")"}),r=o.append("rect").attr("x","0").attr("y","0").attr("width",function(e){return e.width}).attr("height",this.nodeHeight).attr("class",this.getRectClassName),u=o.append("svg").attr("width",function(e){return e.width}).attr("height",this.nodeHeight).append("text").attr("font-size",this.getFontSize()).attr("x","50%").attr("y","50%").attr("class",this.getTextClassName).attr("dy",this.getTextDY).text(function(e){return e.data.text});n&&(r.style("cursor","pointer").on("click",function(e){i.onClick(e,n)}),u.style("cursor","pointer").on("click",function(e){i.onClick(e,n)}))},e.prototype.processLink=function(e,t){if(!e.source||3!==e.source.data.type){var n=[];
// Move to start position (parent node)
n.push("M"),n.push(e.source.x+e.source.width/2),n.push(e.source.y),
// First line (vertical)
n.push("V"),n.push((e.source.y-this.nodeVerticalSpacing/2).toString()),
// Second line (horizontal)
n.push("H"),n.push(e.target.x+e.target.width/2),
// Third line (vertical)
n.push("V"),n.push(e.target.y+this.nodeHeight),a.select(t).append("path").attr("d",function(){return n.join(" ")}).attr("fill","transparent").attr("class","mirror-mountain-line")}},e.prototype.onClick=function(e,t){t&&t.selectNode(e.data)},e.prototype.getRectClassName=function(e){return 3===e.data.type?"mirror-mountain-rect mirror-mountain-rect-equality":"mirror-mountain-rect"},e.prototype.getTextDY=function(e){return 5===e.data.type?"0.5em":2===e.data.type||7===e.data.type?"0.25em":"0.3em"},e.prototype.getTextClassName=function(e){return"mirror-mountain-text"},e.prototype.getTextWidth=function(e){var t=this,n=a.select("#svg-hidden text").text(function(){return e.data.text}).attr("class",function(){return t.getTextClassName(e)}).attr("font-size",this.getFontSize()).node();return n?n.getComputedTextLength()+this.textHorizontalMargin:0},e.prototype.findEdgeLeaf=function(e,t){for(var n=e;n&&n.children;)n=t||1==n.children.length?n.children[0]:n.children[1];return n},e.prototype.getFontSize=function(){return.75*this.nodeHeight},e}();u=i([r.Injectable(),o("design:paramtypes",[])],u),t.MirrorMountainService=u;var s=function(){function e(e){this._maxLevel=e}return Object.defineProperty(e.prototype,"currentLevel",{get:function(){return this._currentLevel},set:function(e){this._currentLevel=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"maxLevel",{get:function(){return this._maxLevel},enumerable:!0,configurable:!0}),e}(),l=function(){function e(){}return Object.defineProperty(e.prototype,"maxWidth",{get:function(){return this._maxWidth},set:function(e){this._maxWidth=e},enumerable:!0,configurable:!0}),e}()},/***/
1246:/***/
function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},r=n(1),a=n(119),u=function(){function e(){}return e}();i([r.Input(),o("design:type",a.InternalData)],u.prototype,"data",void 0),i([r.Input(),o("design:type",Object)],u.prototype,"config",void 0),i([r.Input(),o("design:type",Object)],u.prototype,"eventHandler",void 0),u=i([r.Component({selector:"visualization",template:'<visualization-mirror-mountain [data]="data" [config]="config" [eventHandler]="eventHandler"></visualization-mirror-mountain>'})],u),t.VisualizationComponent=u},/***/
1247:/***/
function(e,t,n){"use strict";
// Needed as it otherwise leads to error
// See: https://github.com/angular/angular-cli/issues/2008
n(208);var i=n(152),o=n(369);i.platformBrowserDynamic().bootstrapModule(o.AppModule)},/***/
171:/***/
function(e,t,n){/* WEBPACK VAR INJECTION */
(function(t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t){var r=i(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([r]).join("\n")}return[n].join("\n")}
// Adapted from convert-source-map (MIT)
function i(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+new t(JSON.stringify(e)).toString("base64")+" */"}/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
e.exports=function(e){var t=[];
// return the list of modules as css string
// import a list of modules into the list
return t.toString=function(){return this.map(function(t){var i=n(t,e);return t[2]?"@media "+t[2]+"{"+i+"}":i}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<e.length;o++){var a=e[o];
// skip already imported module
// this implementation is not 100% perfect for weird media query combinations
//  when a module is imported multiple times with different media queries.
//  I hope this will never occur (Hey this way we have smaller bundles)
"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}}).call(t,n(375).Buffer)},/***/
202:/***/
function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},o=n(1),r=function(){function e(){}return e.prototype.encodeURL=function(e){return e?encodeURIComponent(e).replace(/\-/g,"$0").replace(/\_/g,"$1").replace(/\./g,"$2").replace(/\!/g,"$3").replace(/\~/g,"$4").replace(/\*/g,"$5").replace(/\'/g,"$6").replace(/\(/g,"$7").replace(/\)/g,"$8"):null},e.prototype.decodeURL=function(e){return e?decodeURIComponent(e).replace(/\$0/g,"-").replace(/\$1/g,"_").replace(/\$2/g,".").replace(/\$3/g,"!").replace(/\$4/g,"~").replace(/\$5/g,"*").replace(/\$6/g,"'").replace(/\$7/g,"(").replace(/\$8/g,")"):null},e}();r=i([o.Injectable()],r),t.EncodeService=r},/***/
203:/***/
function(e,t,n){"use strict";var i=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},o=n(1232),r=function(e){function t(t){return e.call(this,"Undefined Parameter Exception",t)||this}return i(t,e),t}(o.Exception);t.UndefinedArgumentException=r,Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},/***/
204:/***/
function(e,t,n){"use strict";var i=function(){function e(){}return e}();t.InternalNode=i},/***/
205:/***/
function(e,t,n){"use strict";var i=n(1);t.MATH_INPUT_SERVICE=new i.InjectionToken("MathInputServiceToken"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.MATH_INPUT_SERVICE},/***/
245:/***/
function(e,t,n){e.exports=n.p+"9f916e330c478bbfa2a0dd6614042046.eot"},/***/
246:/***/
function(e,t,n){e.exports=n.p+"./assets/images/line.gif"},/***/
343:/***/
function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},o=n(1),r=n(18),a=function(){function e(){this.expressionAddNewSource=new r.Subject,this.expressionAddSource=new r.Subject,this.expressionRemoveSource=new r.Subject,this.expressionCloneSource=new r.Subject,this.expressionMoveUpSource=new r.Subject,this.expressionMoveDownSource=new r.Subject,this.expressionGuideSuccessSource=new r.Subject,this.expressionAddNew$=this.expressionAddNewSource.asObservable(),this.expressionAdd$=this.expressionAddSource.asObservable(),this.expresionRemove$=this.expressionRemoveSource.asObservable(),this.expressionClone$=this.expressionCloneSource.asObservable(),this.expressionMoveUp=this.expressionMoveUpSource.asObservable(),this.expressionMoveDown=this.expressionMoveDownSource.asObservable(),this.expressionGuideSuccess$=this.expressionGuideSuccessSource.asObservable()}return e.prototype.addNewExpression=function(){this.expressionAddNewSource.next()},e.prototype.addExpression=function(e){this.expressionAddSource.next(e)},e.prototype.removeExpression=function(e){this.expressionRemoveSource.next(e)},e.prototype.cloneExpression=function(e){this.expressionCloneSource.next(e)},e.prototype.moveExpressionUp=function(e){this.expressionMoveUpSource.next(e)},e.prototype.moveExpressionDown=function(e){this.expressionMoveDownSource.next(e)},e.prototype.guideSuccess=function(){this.expressionGuideSuccessSource.next()},e}();a=i([o.Injectable()],a),t.ExpressionEventService=a},/***/
344:/***/
function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},o=n(1),r=function(){function e(){this.TEXT_VISUALIZE_EXPRESSION="Visualize an expression to add operations",this.TEXT_SELECT_NODE="Select a node in the visualization to add an operation",this.TEXT_REPLACEMENT_OPERATION="Replacement operation added to node. Input the replacement expression and click apply, or click cancel to remove the operation",this.TEXT_UNEXPECTED_PROBLEM="An unexpected problem has occurred"}return e.prototype.getVisualizeExpressionText=function(){return this.TEXT_VISUALIZE_EXPRESSION},e.prototype.getSelectNodeText=function(){return this.TEXT_SELECT_NODE},e.prototype.getReplacementOperationText=function(){return this.TEXT_REPLACEMENT_OPERATION},e.prototype.getUnexpectedProblemText=function(){return this.TEXT_UNEXPECTED_PROBLEM},e}();r=i([o.Injectable()],r),t.ExpressionOperationTextService=r,Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},/***/
345:/***/
function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},r=this&&this.__param||function(e,t){return function(n,i){t(n,i,e)}},a=n(1),u=n(343),s=n(1234),l=n(205),c=n(1236),d=n(1239),f=n(347),p=n(1238),b=function(){function e(e,t,n,i,o,r,a,u){this.ees=e,this.mis=t,this.es=n,this.eh=i,this.pss=o,this.renderer=r,this.imp=a,this.gps=u,this.TIMEOUT_LIMIT_MS=200,this.TIMEOUT_LIMIT_MS_CHECK=1e3,this.input="",this.operationState=0,this.expressionEventHandler=i}return e.prototype.ngOnInit=function(){this.subscription=this.eh.visualizationSelectNode$.subscribe(this.onNodeSelected.bind(this)),this.updateOperationState(),this.input&&this.startInputTimeout()},e.prototype.ngOnDestroy=function(){this.subscription.unsubscribe()},e.prototype.ngOnChanges=function(e){var t=e.input;t&&""!==t.currentValue&&(this.startInputTimeout(),this.selectedNode=null)},e.prototype.onInputChange=function(e){this.startInputTimeout(),this.selectedNode=null},e.prototype.startInputTimeout=function(){clearTimeout(this.timeout),clearTimeout(this.timeoutCheck),this.timeout=setTimeout(this.onTimeOut.bind(this),this.TIMEOUT_LIMIT_MS),this.timeoutCheck=setTimeout(this.onTimeOutCheck.bind(this),this.TIMEOUT_LIMIT_MS_CHECK)},e.prototype.onTimeOut=function(){this.data=this.mis.convert(this.input),this.updateOperationState()},e.prototype.onTimeOutCheck=function(){if("ps"==this.imp.importedSpecifier){if(1==this.pss.checkExpression(this.input,this.imp.importedCorrectSolution,this.imp.importedWrongSolution)){this.renderer.setElementStyle(this.banner.nativeElement,"backgroundColor","green");var e=this.input.split("="),t=e[0],n=e[1];t!=this.imp.importedCorrectSolution.toString()&&n!=this.imp.importedCorrectSolution.toString()||this.guideSuccess()}else this.renderer.setElementStyle(this.banner.nativeElement,"backgroundColor","red")}else if("gd"==this.imp.importedSpecifier){var i=!1;try{i=this.gps.checkGuide(this.input,this.imp.importedGuideTree)}catch(e){}1==i?this.renderer.setElementStyle(this.banner.nativeElement,"backgroundColor","green"):this.renderer.setElementStyle(this.banner.nativeElement,"backgroundColor","lightblue")}},e.prototype.addExpression=function(){this.ees.addNewExpression()},e.prototype.removeExpression=function(){this.ees.removeExpression(this.counter-1)},e.prototype.cloneExpression=function(){this.ees.cloneExpression(this.input)},e.prototype.moveExpressionUp=function(){this.ees.moveExpressionUp(this.counter-1)},e.prototype.moveExpressionDown=function(){this.ees.moveExpressionDown(this.counter-1)},e.prototype.guideSuccess=function(){this.ees.guideSuccess()},e.prototype.onNodeSelected=function(e){this.selectedNode=this.selectedNode===e?null:e,this.updateOperationState()},e.prototype.onOperationApplied=function(e){var t=this.es.applyChange(this.data,this.selectedNode,e);this.ees.addExpression(t),this.onOperationCanceled()},e.prototype.onOperationCanceled=function(){this.selectedNode=null,this.updateOperationState()},e.prototype.updateOperationState=function(){""!==this.input?this.selectedNode?this.operationState=2:this.operationState=1:this.operationState=0},e}();i([a.Input(),o("design:type",Number)],b.prototype,"counter",void 0),i([a.Input(),o("design:type",String)],b.prototype,"input",void 0),i([a.ViewChild("banner"),o("design:type",a.ElementRef)],b.prototype,"banner",void 0),b=i([a.Component({selector:"expression",template:n(519),styles:[n(961)],providers:[s.default,c.ExpressionService,d.ProblemSolvingService,p.GuideProgressService]}),r(1,a.Inject(l.default)),o("design:paramtypes",[u.ExpressionEventService,Object,c.ExpressionService,s.default,d.ProblemSolvingService,a.Renderer,f.ImportExpressionService,p.GuideProgressService])],b),t.ExpressionComponent=b},/***/
346:/***/
function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},o=n(1),r=n(1237),a=function(){function e(){}return e.prototype.generateGuideTree=function(e){var t;try{t=JSON.parse(e)}catch(e){return null}if(!t.tree)return null;for(var n=new r.GuideTree,i=[],o=0;o<t.tree.length;o++){var a=new r.GuideNode;a.expression=t.tree[o].ex,i.push(a)}for(var o=0;o<i.length;o++){var u=t.tree[o].tid;if(u)for(var s=u.split("/"),l=0;l<s.length;l++){var c=i[s[l]];c&&(c.children||(c.children=[]),c.children.push(i[o]))}else n.rootNode=i[o]}if(n.paths=[],n.rootNode&&n.rootNode.children)for(var o=0;o<n.rootNode.children.length;o++)n.paths.push(n.rootNode.children[o]);return n},e}();a=i([o.Injectable()],a),t.GuideTreeService=a},/***/
347:/***/
function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},r=n(1),a=n(33);n(307);var u=n(346),s=n(202),l=function(){function e(e,t,n){this.route=e,this.gts=t,this.encodeService=n,this._decodedExpression=n.decodeURL(this.route.snapshot.params.ex),this._decodedTree=n.decodeURL(this.route.snapshot.params.tree),this._decodedCorrectSolution=n.decodeURL(this.route.snapshot.params.x),this._decodedWrongSolution=n.decodeURL(this.route.snapshot.params.y),this._decodedDescription=n.decodeURL(this.route.snapshot.params.desc),"gd"===this.importedSpecifier&&this.importedTree&&(this._importedGuideTree=this.gts.generateGuideTree(this.importedTree))}return Object.defineProperty(e.prototype,"importedSpecifier",{get:function(){return this.route.snapshot.params.sp},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"importedExpression",{get:function(){return this._decodedExpression},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"importedTree",{get:function(){return this._decodedTree},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"importedCorrectSolution",{get:function(){return this._decodedCorrectSolution},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"importedWrongSolution",{get:function(){return this._decodedWrongSolution},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"importedDescription",{get:function(){return this._decodedDescription},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"importedGuideTree",{get:function(){return this._importedGuideTree},enumerable:!0,configurable:!0}),e}();l=i([r.Injectable(),o("design:paramtypes",[a.ActivatedRoute,u.GuideTreeService,s.EncodeService])],l),t.ImportExpressionService=l,Object.defineProperty(t,"__esModule",{value:!0}),t.default=l},/***/
348:/***/
function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},o=n(1),r=function(){function e(){this.display=!1}return e.prototype.showDialog=function(){this.display=!0},e}();r=i([o.Component({selector:"modal-success",template:n(520),encapsulation:o.ViewEncapsulation.None})],r),t.ModalSuccessComponent=r},/***/
349:/***/
function(e,t,n){"use strict";var i=n(1);t.MATH_OUTPUT_SERVICE=new i.InjectionToken("MathOutputServiceToken"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.MATH_OUTPUT_SERVICE},/***/
350:/***/
function(e,t,n){"use strict";var i=n(1);t.VISUALIZATION_SERVICE=new i.InjectionToken("VisualizationServiceToken")},/***/
369:/***/
function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},o=n(1),r=n(66),a=n(33),u=n(19),s=n(207),l=n(373),c=n(1231),d=n(1241),f=n(345),p=n(1235),b=n(1246),h=n(1244),g=n(348),m=n(1233),v=function(){function e(){}return e}();v=i([o.NgModule({imports:[r.BrowserModule,u.FormsModule,a.RouterModule.forRoot([{path:"sandbox",component:d.SandboxComponent},{path:"",component:m.FrontpageComponent}]),s.DialogModule,s.ButtonModule,l.BrowserAnimationsModule,s.DropdownModule,s.InputTextModule,s.InputTextModule],declarations:[c.AppComponent,d.SandboxComponent,m.FrontpageComponent,f.ExpressionComponent,p.ExpressionOperationComponent,b.VisualizationComponent,h.MirrorMountainComponent,g.ModalSuccessComponent],bootstrap:[c.AppComponent],entryComponents:[f.ExpressionComponent]})],v),t.AppModule=v},/***/
371:/***/
function(e,t,n){"use strict";/**
 * @param {?} exp
 * @param {?} errors
 * @return {?}
 */
function i(e,t){var/** @type {?} */n,/** @type {?} */i=0,/** @type {?} */o=null;if("string"==typeof e){var/** @type {?} */r=e.match(/^([\.\d]+)(m?s)(?:\s+([\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i);if(null===r)return t.push('The provided timing value "'+e+'" is invalid.'),{duration:0,delay:0,easing:null};var/** @type {?} */a=parseFloat(r[1]);"s"==r[2]&&(a*=U),n=Math.floor(a);var/** @type {?} */u=r[3],/** @type {?} */s=r[4];if(null!=u){var/** @type {?} */l=parseFloat(u);null!=s&&"s"==s&&(l*=U),i=Math.floor(l)}var/** @type {?} */c=r[5];c&&(o=c)}else n=e;return{duration:n,delay:i,easing:o}}/**
 * @param {?} styles
 * @return {?}
 */
function o(e){var/** @type {?} */t={};return Array.isArray(e)?e.forEach(function(e){return r(e,!1,t)}):r(e,!1,t),t}/**
 * @param {?} styles
 * @param {?} readPrototype
 * @param {?=} destination
 * @return {?}
 */
function r(e,t,n){if(void 0===n&&(n={}),t)
// we make use of a for-in loop so that the
// prototypically inherited properties are
// revealed from the backFill map
for(var/** @type {?} */i in e)n[i]=e[i];else Object.keys(e).forEach(function(t){return n[t]=e[t]});return n}/**
 * @param {?} element
 * @param {?} styles
 * @return {?}
 */
function a(e,t){e.style&&Object.keys(t).forEach(function(n){return e.style[n]=t[n]})}/**
 * @param {?} element
 * @param {?} styles
 * @return {?}
 */
function u(e,t){e.style&&Object.keys(t).forEach(function(t){
// IE requires '' instead of null
// see https://github.com/angular/angular/issues/7916
e.style[t]=""})}/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} visitor
 * @param {?} node
 * @param {?} context
 * @return {?}
 */
function s(e,t,n){switch(t.type){case 0:/** @type {?} */
return e.visitState(t,n);case 1:/** @type {?} */
return e.visitTransition(t,n);case 2:/** @type {?} */
return e.visitSequence(t,n);case 3:/** @type {?} */
return e.visitGroup(t,n);case 4:/** @type {?} */
return e.visitAnimate(t,n);case 5:/** @type {?} */
return e.visitKeyframeSequence(t,n);case 6:/** @type {?} */
return e.visitStyle(t,n);default:throw new Error("Unable to resolve animation metadata node #"+t.type)}}/**
 * @param {?} transitionValue
 * @param {?} errors
 * @return {?}
 */
function l(e,t){var/** @type {?} */n=[];/** @type {?} */
return"string"==typeof e?e.split(/\s*,\s*/).forEach(function(e){return c(e,n,t)}):n.push(e),n}/**
 * @param {?} eventStr
 * @param {?} expressions
 * @param {?} errors
 * @return {?}
 */
function c(e,t,n){":"==e[0]&&(e=d(e,n));var/** @type {?} */i=e.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(null==i||i.length<4)return n.push('The provided transition expression "'+e+'" is not supported'),t;var/** @type {?} */o=i[1],/** @type {?} */r=i[2],/** @type {?} */a=i[3];t.push(f(o,a));var/** @type {?} */u=o==L&&a==L;"<"!=r[0]||u||t.push(f(a,o))}/**
 * @param {?} alias
 * @param {?} errors
 * @return {?}
 */
function d(e,t){switch(e){case":enter":return"void => *";case":leave":return"* => void";default:return t.push('The transition alias value "'+e+'" is not supported'),"* => *"}}/**
 * @param {?} lhs
 * @param {?} rhs
 * @return {?}
 */
function f(e,t){return function(n,i){var/** @type {?} */o=e==L||e==n,/** @type {?} */r=t==L||t==i;return o&&r}}/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} keyframes
 * @param {?} duration
 * @param {?} delay
 * @param {?} easing
 * @return {?}
 */
function p(e,t,n,i){return{type:1,keyframes:e,duration:t,delay:n,totalTime:t+n,easing:i}}/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} ast
 * @param {?=} startingStyles
 * @param {?=} finalStyles
 * @return {?}
 */
function b(e,t,i){void 0===t&&(t={}),void 0===i&&(i={});var/** @type {?} */o=Array.isArray(e)?n.i(N.sequence)(/** @type {?} */e):e;return(new G).buildKeyframes(o,t,i)}/**
 * @param {?} ast
 * @return {?}
 */
function h(e){var/** @type {?} */t=e.offset;if(null==t){var/** @type {?} */n=e.styles;if(Array.isArray(n))for(var/** @type {?} */i=0;i<n.length;i++){var/** @type {?} */o=n[i].offset;if(null!=o){t=o;break}}else t=n.offset}return t}/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} triggerName
 * @param {?} fromState
 * @param {?} toState
 * @param {?} isRemovalTransition
 * @param {?} fromStyles
 * @param {?} toStyles
 * @param {?} timelines
 * @return {?}
 */
function g(e,t,n,i,o,r,a){return{type:0,triggerName:e,isRemovalTransition:i,fromState:t,fromStyles:o,toState:n,toStyles:r,timelines:a}}/**
 * @param {?} matchFns
 * @param {?} currentState
 * @param {?} nextState
 * @return {?}
 */
function m(e,t,n){return e.some(function(e){return e(t,n)})}/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} ast
 * @return {?}
 */
function v(e){var/** @type {?} */t=Array.isArray(e)?n.i(N.sequence)(/** @type {?} */e):e;return(new H).validate(t)}/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@experimental Animation support is experimental.
 * @param {?} name
 * @param {?} definitions
 * @return {?}
 */
function y(e,t){return(new W).buildTrigger(e,t)}/**
 * @param {?} map
 * @param {?} key
 * @param {?} defaultValue
 * @return {?}
 */
function w(e,t,n){var/** @type {?} */i=e.get(t);return i||e.set(t,i=n),i}/**
 * @param {?} map
 * @param {?} key
 * @param {?} value
 * @return {?}
 */
function x(e,t,n){var/** @type {?} */i=e.get(t);if(i){var/** @type {?} */o=i.indexOf(n);o>=0&&(i.splice(o,1),0==i.length&&e.delete(t))}}/**
 * @param {?} players
 * @return {?}
 */
function k(e){switch(e.length){case 0:return new N.NoopAnimationPlayer;case 1:return e[0];default:return new N["ɵAnimationGroupPlayer"](e)}}/**
 * @param {?} source
 * @return {?}
 */
function F(e){return e?e.splice(0):[]}/**
 * @param {?} triggerName
 * @param {?} eventName
 * @return {?}
 */
function _(e,t){switch(t){case"start":case"done":return;default:throw new Error('The provided animation trigger event "'+t+'" for the animation trigger "'+e+'" is not supported!')}}/**
 * @param {?} player
 * @param {?} eventName
 * @param {?} baseEvent
 * @param {?} callback
 * @return {?}
 */
function E(e,t,n,i){switch(t){case"start":e.onStart(function(){var/** @type {?} */e=T(n);e.phaseName="start",i(e)});break;case"done":e.onDone(function(){var/** @type {?} */e=T(n);e.phaseName="done",i(e)})}}/**
 * @param {?} e
 * @return {?}
 */
function T(e){return S(e.element,e.triggerName,e.fromState,e.toState,e.phaseName,e.totalTime)}/**
 * @param {?} element
 * @param {?} triggerName
 * @param {?} fromState
 * @param {?} toState
 * @param {?} phaseName
 * @param {?} totalTime
 * @return {?}
 */
function S(e,t,n,i,o,r){return{element:e,triggerName:t,fromState:n,toState:i,phaseName:o,totalTime:r}}/**
 * @param {?} value
 * @return {?}
 */
function A(e){switch(typeof e){case"boolean":return e?"1":"0";default:return e?e.toString():null}}/**
 * @param {?} input
 * @return {?}
 */
function z(e){return e.replace(te,function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e[1].toUpperCase()})}/**
 * @param {?} element
 * @param {?} triggerName
 * @param {?} fromState
 * @param {?} toState
 * @param {?} phaseName
 * @param {?} totalTime
 * @return {?}
 */
function O(e,t,n,i,o,r){return{element:e,triggerName:t,fromState:n,toState:i,phaseName:o,totalTime:r}}/**
 * @param {?} property
 * @return {?}
 */
function C(e){return"_@_"+e}/**
 * @param {?} element
 * @param {?} prop
 * @return {?}
 */
function R(e,t){return window.getComputedStyle(e)[t]}/**
 * @param {?} styles
 * @return {?}
 */
function I(e){var/** @type {?} */t={};return Object.keys(e).forEach(function(n){"offset"!=n&&(t[n]=e[n])}),t}/**
 * @return {?}
 */
function P(){return"undefined"!=typeof Element&&"function"==typeof Element.prototype.animate}/* harmony import */
var N=n(58);/* harmony export (binding) */
n.d(t,"c",function(){return M}),/* harmony export (binding) */
n.d(t,"a",function(){return B}),/* unused harmony export ɵAnimation */
/* harmony export (binding) */
n.d(t,"d",function(){return J}),/* unused harmony export ɵNoopAnimationStyleNormalizer */
/* harmony export (binding) */
n.d(t,"h",function(){return Q}),/* harmony export (binding) */
n.d(t,"g",function(){return j}),/* harmony export (binding) */
n.d(t,"b",function(){return Z}),/* harmony export (binding) */
n.d(t,"i",function(){return ne}),/* harmony export (binding) */
n.d(t,"f",function(){return oe}),/* harmony export (binding) */
n.d(t,"e",function(){return P});/* unused harmony export ɵWebAnimationsPlayer */
var D=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},j=function(){function e(){}return e.prototype.animate=function(e,t,n,i,o,r){return void 0===r&&(r=[]),new N.NoopAnimationPlayer},e}(),M=function(){function e(){}return e}();M.NOOP=new j;/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @abstract
 */
var B=function(){function e(){}/**
     * @abstract
     * @param {?} trigger
     * @param {?=} name
     * @return {?}
     */
/**
     * @abstract
     * @param {?} element
     * @param {?} domFn
     * @return {?}
     */
/**
     * @abstract
     * @param {?} element
     * @param {?} domFn
     * @return {?}
     */
/**
     * @abstract
     * @param {?} element
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
/**
     * @abstract
     * @param {?} element
     * @param {?} eventName
     * @param {?} eventPhase
     * @param {?} callback
     * @return {?}
     */
/**
     * @abstract
     * @return {?}
     */
return e.prototype.registerTrigger=function(e,t){},e.prototype.onInsert=function(e,t){},e.prototype.onRemove=function(e,t){},e.prototype.setProperty=function(e,t,n){},e.prototype.listen=function(e,t,n,i){},e.prototype.flush=function(){},Object.defineProperty(e.prototype,"activePlayers",{/**
         * @return {?}
         */
get:function(){throw new Error("...")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"queuedPlayers",{/**
         * @return {?}
         */
get:function(){throw new Error("...")},enumerable:!0,configurable:!0}),e}(),U=1e3,L="*",q=function(){/**
     * @param {?} errors
     * @param {?} timelines
     * @param {?=} initialTimeline
     */
function e(e,t,n){void 0===n&&(n=null),this.errors=e,this.timelines=t,this.previousNode={},this.subContextCount=0,this.currentTimeline=n||new V(0),t.push(this.currentTimeline)}/**
     * @return {?}
     */
/**
     * @param {?=} newTime
     * @return {?}
     */
/**
     * @param {?} time
     * @return {?}
     */
return e.prototype.createSubContext=function(){var/** @type {?} */t=new e(this.errors,this.timelines,this.currentTimeline.fork());return t.previousNode=this.previousNode,t.currentAnimateTimings=this.currentAnimateTimings,this.subContextCount++,t},e.prototype.transformIntoNewTimeline=function(e){return void 0===e&&(e=0),this.currentTimeline=this.currentTimeline.fork(e),this.timelines.push(this.currentTimeline),this.currentTimeline},e.prototype.incrementTime=function(e){this.currentTimeline.forwardTime(this.currentTimeline.duration+e)},e}(),G=function(){function e(){}/**
     * @param {?} ast
     * @param {?} startingStyles
     * @param {?} finalStyles
     * @return {?}
     */
/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
/**
     * @param {?} styles
     * @param {?} easing
     * @param {?} treatAsEmptyStep
     * @param {?} context
     * @return {?}
     */
/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
return e.prototype.buildKeyframes=function(e,t,n){var/** @type {?} */i=new q([],[]);i.currentTimeline.setStyles(t),s(this,e,i);
// this checks to see if an actual animation happened
var/** @type {?} */o=i.timelines.filter(function(e){return e.hasStyling()});if(o.length&&Object.keys(n).length){var/** @type {?} */r=o[o.length-1];r.allowOnlyTimelineStyles()||r.setStyles(n)}return o.length?o.map(function(e){return e.buildKeyframes()}):[p([],0,0,"")]},e.prototype.visitState=function(e,t){},e.prototype.visitTransition=function(e,t){},e.prototype.visitSequence=function(e,t){var n=this,/** @type {?} */i=t.subContextCount;6==t.previousNode.type&&(t.currentTimeline.forwardFrame(),t.currentTimeline.snapshotCurrentStyles()),e.steps.forEach(function(e){return s(n,e,t)}),
// this means that some animation function within the sequence
// ended up creating a sub timeline (which means the current
// timeline cannot overlap with the contents of the sequence)
t.subContextCount>i&&t.transformIntoNewTimeline(),t.previousNode=e},e.prototype.visitGroup=function(e,t){var n=this,/** @type {?} */i=[],/** @type {?} */o=t.currentTimeline.currentTime;e.steps.forEach(function(e){var/** @type {?} */r=t.createSubContext();s(n,e,r),o=Math.max(o,r.currentTimeline.currentTime),i.push(r.currentTimeline)}),
// this operation is run after the AST loop because otherwise
// if the parent timeline's collected styles were updated then
// it would pass in invalid data into the new-to-be forked items
i.forEach(function(e){return t.currentTimeline.mergeTimelineCollectedStyles(e)}),t.transformIntoNewTimeline(o),t.previousNode=e},e.prototype.visitAnimate=function(e,t){var/** @type {?} */o=e.timings.hasOwnProperty("duration")?e.timings:i(/** @type {?} */e.timings,t.errors);if(t.currentAnimateTimings=o,o.delay&&(t.incrementTime(o.delay),t.currentTimeline.snapshotCurrentStyles()),5==(e.styles?e.styles.type:-1))this.visitKeyframeSequence(/** @type {?} */e.styles,t);else{var/** @type {?} */r=e.styles;if(!r){var/** @type {?} */a={};o.easing&&(a.easing=o.easing),r=n.i(N.style)(a),r.treatAsEmptyStep=!0}t.incrementTime(o.duration),r&&this.visitStyle(r,t)}t.currentAnimateTimings=null,t.previousNode=e},e.prototype.visitStyle=function(e,t){
// this is a special case when a style() call is issued directly after
// a call to animate(). If the clock is not forwarded by one frame then
// the style() calls will be merged into the previous animate() call
// which is incorrect.
t.currentAnimateTimings||4!=t.previousNode.type||t.currentTimeline.forwardFrame();var/** @type {?} */n=o(e.styles),/** @type {?} */i=t.currentAnimateTimings&&t.currentAnimateTimings.easing;this._applyStyles(n,i,!!e.treatAsEmptyStep,t),t.previousNode=e},e.prototype._applyStyles=function(e,t,n,i){e.hasOwnProperty("easing")&&(t=t||e.easing,delete e.easing),i.currentTimeline.setStyles(e,t,n)},e.prototype.visitKeyframeSequence=function(e,t){var n=this,/** @type {?} */i=e.steps.length-1,/** @type {?} */r=e.steps[0],/** @type {?} */a=0,/** @type {?} */u=null!=h(r);u||(a=1/i);var/** @type {?} */s=t.currentTimeline.duration,/** @type {?} */l=t.currentAnimateTimings.duration,/** @type {?} */c=t.createSubContext(),/** @type {?} */d=c.currentTimeline;d.easing=t.currentAnimateTimings.easing,e.steps.forEach(function(e,t){var/** @type {?} */r=o(e.styles),/** @type {?} */s=u?null!=e.offset?e.offset:parseFloat(/** @type {?} */r.offset):t==i?1:t*a;d.forwardTime(s*l),n._applyStyles(r,null,!1,c)}),
// this will ensure that the parent timeline gets all the styles from
// the child even if the new timeline below is not used
t.currentTimeline.mergeTimelineCollectedStyles(d),
// we do this because the window between this timeline and the sub timeline
// should ensure that the styles within are exactly the same as they were before
t.transformIntoNewTimeline(s+l),t.previousNode=e},e}(),V=function(){/**
     * @param {?} startTime
     * @param {?=} _globalTimelineStyles
     */
function e(e,t){void 0===t&&(t=null),this.startTime=e,this._globalTimelineStyles=t,this.duration=0,this.easing="",this._previousKeyframe={},this._keyframes=new Map,this._styleSummary={},this._backFill={},this._currentEmptyStepKeyframe=null,this._localTimelineStyles=Object.create(this._backFill,{}),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles),this._loadKeyframe()}/**
     * @return {?}
     */
/**
     * @param {?=} currentTime
     * @return {?}
     */
/**
     * @return {?}
     */
/**
     * @return {?}
     */
/**
     * @param {?} time
     * @return {?}
     */
/**
     * @param {?} prop
     * @param {?} value
     * @return {?}
     */
/**
     * @return {?}
     */
/**
     * @param {?} styles
     * @param {?=} easing
     * @param {?=} treatAsEmptyStep
     * @return {?}
     */
/**
     * @return {?}
     */
/**
     * @return {?}
     */
/**
     * @param {?} timeline
     * @return {?}
     */
/**
     * @return {?}
     */
return e.prototype.hasStyling=function(){return this._keyframes.size>1},Object.defineProperty(e.prototype,"currentTime",{/**
         * @return {?}
         */
get:function(){return this.startTime+this.duration},enumerable:!0,configurable:!0}),e.prototype.fork=function(t){return void 0===t&&(t=0),new e(t||this.currentTime,this._globalTimelineStyles)},e.prototype._loadKeyframe=function(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=Object.create(this._backFill,{}),this._keyframes.set(this.duration,this._currentKeyframe))},e.prototype.forwardFrame=function(){this.duration++,this._loadKeyframe()},e.prototype.forwardTime=function(e){this.duration=e,this._loadKeyframe()},e.prototype._updateStyle=function(e,t){this._localTimelineStyles[e]=t,this._globalTimelineStyles[e]=t,this._styleSummary[e]={time:this.currentTime,value:t}},e.prototype.allowOnlyTimelineStyles=function(){return this._currentEmptyStepKeyframe!==this._currentKeyframe},e.prototype.setStyles=function(e,t,n){var i=this;void 0===t&&(t=null),void 0===n&&(n=!1),t&&(this._previousKeyframe.easing=t),n?(
// special case for animate(duration):
// all missing styles are filled with a `*` value then
// if any destination styles are filled in later on the same
// keyframe then they will override the overridden styles
// We use `_globalTimelineStyles` here because there may be
// styles in previous keyframes that are not present in this timeline
Object.keys(this._globalTimelineStyles).forEach(function(e){i._backFill[e]=i._globalTimelineStyles[e]||N.AUTO_STYLE,i._currentKeyframe[e]=N.AUTO_STYLE}),this._currentEmptyStepKeyframe=this._currentKeyframe):(Object.keys(e).forEach(function(t){if("offset"!==t){var/** @type {?} */n=e[t];i._currentKeyframe[t]=n,i._localTimelineStyles[t]||(i._backFill[t]=i._globalTimelineStyles[t]||N.AUTO_STYLE),i._updateStyle(t,n)}}),Object.keys(this._localTimelineStyles).forEach(function(e){i._currentKeyframe.hasOwnProperty(e)||(i._currentKeyframe[e]=i._localTimelineStyles[e])}))},e.prototype.snapshotCurrentStyles=function(){r(this._localTimelineStyles,!1,this._currentKeyframe)},e.prototype.getFinalKeyframe=function(){return this._keyframes.get(this.duration)},Object.defineProperty(e.prototype,"properties",{/**
         * @return {?}
         */
get:function(){var/** @type {?} */e=[];for(var/** @type {?} */t in this._currentKeyframe)e.push(t);return e},enumerable:!0,configurable:!0}),e.prototype.mergeTimelineCollectedStyles=function(e){var t=this;Object.keys(e._styleSummary).forEach(function(n){var/** @type {?} */i=t._styleSummary[n],/** @type {?} */o=e._styleSummary[n];(!i||o.time>i.time)&&t._updateStyle(n,o.value)})},e.prototype.buildKeyframes=function(){var e=this,/** @type {?} */t=[];
// special case for when there are only start/destination
// styles but no actual animation animate steps...
if(0==this.duration){var/** @type {?} */n=this.getFinalKeyframe(),/** @type {?} */i=r(n,!0);i.offset=0,t.push(i);var/** @type {?} */o=r(n,!0);o.offset=1,t.push(o)}else this._keyframes.forEach(function(n,i){var/** @type {?} */o=r(n,!0);o.offset=i/e.duration,t.push(o)});return p(t,this.duration,this.startTime,this.easing)},e}(),Y=function(){/**
     * @param {?} _triggerName
     * @param {?} ast
     * @param {?} matchFns
     * @param {?} _stateStyles
     */
function e(e,t,i,o){this._triggerName=e,this.matchFns=i,this._stateStyles=o;var r=Array.isArray(t.animation)?n.i(N.sequence)(t.animation):t.animation;this._animationAst=r}/**
     * @param {?} currentState
     * @param {?} nextState
     * @return {?}
     */
return e.prototype.match=function(e,t){if(m(this.matchFns,e,t)){var/** @type {?} */n=this._stateStyles["*"]||{},/** @type {?} */i=this._stateStyles[e]||n,/** @type {?} */o=this._stateStyles[t]||n,/** @type {?} */r=b(this._animationAst,i,o);return g(this._triggerName,e,t,"void"===t,i,o,r)}},e}(),H=function(){function e(){}/**
     * @param {?} ast
     * @return {?}
     */
/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
return e.prototype.validate=function(e){var/** @type {?} */t=new $;return s(this,e,t),t.errors},e.prototype.visitState=function(e,t){},e.prototype.visitTransition=function(e,t){},e.prototype.visitSequence=function(e,t){var n=this;e.steps.forEach(function(e){return s(n,e,t)})},e.prototype.visitGroup=function(e,t){var n=this,/** @type {?} */i=t.currentTime,/** @type {?} */o=0;e.steps.forEach(function(e){t.currentTime=i,s(n,e,t),o=Math.max(o,t.currentTime)}),t.currentTime=o},e.prototype.visitAnimate=function(e,t){
// we reassign the timings here so that they are not reparsed each
// time an animation occurs
t.currentAnimateTimings=e.timings=i(/** @type {?} */e.timings,t.errors);var/** @type {?} */n=e.styles&&e.styles.type;5==n?this.visitKeyframeSequence(/** @type {?} */e.styles,t):(t.currentTime+=t.currentAnimateTimings.duration+t.currentAnimateTimings.delay,6==n&&this.visitStyle(/** @type {?} */e.styles,t)),t.currentAnimateTimings=null},e.prototype.visitStyle=function(e,t){var/** @type {?} */n=o(e.styles),/** @type {?} */i=t.currentAnimateTimings,/** @type {?} */r=t.currentTime,/** @type {?} */a=t.currentTime;i&&a>0&&(a-=i.duration+i.delay),Object.keys(n).forEach(function(e){var/** @type {?} */n=t.collectedStyles[e],/** @type {?} */i=!0;n&&(a!=r&&a>=n.startTime&&r<=n.endTime&&(t.errors.push('The CSS property "'+e+'" that exists between the times of "'+n.startTime+'ms" and "'+n.endTime+'ms" is also being animated in a parallel animation between the times of "'+a+'ms" and "'+r+'ms"'),i=!1),
// we always choose the smaller start time value since we
// want to have a record of the entire animation window where
// the style property is being animated in between
a=n.startTime),i&&(t.collectedStyles[e]={startTime:a,endTime:r})})},e.prototype.visitKeyframeSequence=function(e,t){var n=this,/** @type {?} */i=0,/** @type {?} */r=[],/** @type {?} */a=!1,/** @type {?} */u=!1,/** @type {?} */s=0;e.steps.forEach(function(e){var/** @type {?} */t=o(e.styles),/** @type {?} */n=0;t.hasOwnProperty("offset")&&(i++,n=t.offset),u=u||n<0||n>1,a=a||n<s,s=n,r.push(n)}),u&&t.errors.push("Please ensure that all keyframe offsets are between 0 and 1"),a&&t.errors.push("Please ensure that all keyframe offsets are in order");var/** @type {?} */l=e.steps.length,/** @type {?} */c=0;i>0&&i<l?t.errors.push("Not all style() steps within the declared keyframes() contain offsets"):0==i&&(c=1/l);var/** @type {?} */d=l-1,/** @type {?} */f=t.currentTime,/** @type {?} */p=t.currentAnimateTimings.duration;e.steps.forEach(function(e,i){var/** @type {?} */o=c>0?i==d?1:c*i:r[i],/** @type {?} */a=o*p;t.currentTime=f+t.currentAnimateTimings.delay+a,t.currentAnimateTimings.duration=a,n.visitStyle(e,t)})},e}(),$=function(){function e(){this.errors=[],this.currentTime=0,this.collectedStyles={}}return e}(),K=function(){/**
     * @param {?} name
     * @param {?} states
     * @param {?} _transitionAsts
     */
function e(e,t,n){var i=this;this.name=e,this._transitionAsts=n,this.transitionFactories=[],this.states={},Object.keys(t).forEach(function(e){i.states[e]=r(t[e],!1)});var o=[];if(n.forEach(function(e){var n=l(e.expr,o),r=v(e);r.length?o.push.apply(o,r):i.transitionFactories.push(new Y(i.name,e,n,t))}),o.length){throw new Error("Animation parsing for the "+e+" trigger have failed:\n - "+o.join("\n - "))}}/**
     * @param {?} currentState
     * @param {?} nextState
     * @return {?}
     */
/**
     * @param {?} currentState
     * @param {?} nextState
     * @return {?}
     */
return e.prototype.createFallbackInstruction=function(e,t){var/** @type {?} */n=this.states["*"]||{},/** @type {?} */i=this.states[e]||n,/** @type {?} */o=this.states[t]||n;return g(this.name,e,t,"void"==t,i,o,[])},e.prototype.matchTransition=function(e,t){for(var/** @type {?} */n=0;n<this.transitionFactories.length;n++){var/** @type {?} */i=this.transitionFactories[n].match(e,t);if(i)return i}},e}(),X=function(){function e(){this.errors=[],this.states={},this.transitions=[]}return e}(),W=function(){function e(){}/**
     * @param {?} name
     * @param {?} definitions
     * @return {?}
     */
/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
/**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
return e.prototype.buildTrigger=function(e,t){var n=this,/** @type {?} */i=new X;return t.forEach(function(e){return s(n,e,i)}),new K(e,i.states,i.transitions)},e.prototype.visitState=function(e,t){var/** @type {?} */n=o(e.styles.styles);e.name.split(/\s*,\s*/).forEach(function(e){t.states[e]=n})},e.prototype.visitTransition=function(e,t){t.transitions.push(e)},e.prototype.visitSequence=function(e,t){},e.prototype.visitGroup=function(e,t){},e.prototype.visitAnimate=function(e,t){},e.prototype.visitStyle=function(e,t){},e.prototype.visitKeyframeSequence=function(e,t){},e}(),Z=function(){/**
     * @param {?} _driver
     * @param {?} _normalizer
     */
function e(e,t){this._driver=e,this._normalizer=t,this._flaggedInserts=new Set,this._queuedRemovals=new Map,this._queuedTransitionAnimations=[],this._activeTransitionAnimations=new Map,this._activeElementAnimations=new Map,this._elementTriggerStates=new Map,this._triggers=Object.create(null),this._triggerListeners=new Map,this._pendingListenerRemovals=new Map}/**
     * @param {?} trigger
     * @param {?=} name
     * @return {?}
     */
/**
     * @param {?} element
     * @param {?} domFn
     * @return {?}
     */
/**
     * @param {?} element
     * @param {?} domFn
     * @return {?}
     */
/**
     * @param {?} element
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
/**
     * @param {?} element
     * @param {?} eventName
     * @param {?} eventPhase
     * @param {?} callback
     * @return {?}
     */
/**
     * @return {?}
     */
/**
     * @param {?} element
     * @return {?}
     */
/**
     * @param {?} element
     * @param {?} instruction
     * @return {?}
     */
/**
     * @param {?} element
     * @param {?} instructions
     * @param {?=} previousPlayers
     * @return {?}
     */
/**
     * @param {?} element
     * @param {?} instruction
     * @param {?} previousPlayers
     * @param {?=} index
     * @return {?}
     */
/**
     * @param {?} keyframes
     * @return {?}
     */
/**
     * @param {?} element
     * @param {?} player
     * @return {?}
     */
/**
     * @param {?} element
     * @param {?} triggerName
     * @param {?} player
     * @param {?} event
     * @return {?}
     */
/**
     * @return {?}
     */
/**
     * @return {?}
     */
return Object.defineProperty(e.prototype,"queuedPlayers",{/**
         * @return {?}
         */
get:function(){return this._queuedTransitionAnimations.map(function(e){return e.player})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"activePlayers",{/**
         * @return {?}
         */
get:function(){var/** @type {?} */e=[];return this._activeElementAnimations.forEach(function(t){return e.push.apply(e,t)}),e},enumerable:!0,configurable:!0}),e.prototype.registerTrigger=function(e,t){void 0===t&&(t=null),t=t||e.name,this._triggers[t]||(this._triggers[t]=y(t,e.definitions))},e.prototype.onInsert=function(e,t){1==e.nodeType&&this._flaggedInserts.add(e),t()},e.prototype.onRemove=function(e,t){var n=this;if(1!=e.nodeType)return void t();var/** @type {?} */i=this._elementTriggerStates.get(e);if(i){if(Object.keys(i).some(function(e){var/** @type {?} */t=i[e];return!!n._triggers[e].matchTransition(t,"void")}))return e.$$ngRemove=!0,void this._queuedRemovals.set(e,t)}
// this means that there are no animations to take on this
// leave operation therefore we should fire the done|start callbacks
this._triggerListeners.has(e)&&(e.$$ngRemove=!0,this._queuedRemovals.set(e,function(){})),this._onRemovalTransition(e).forEach(function(e){return e.destroy()}),t()},e.prototype.setProperty=function(e,t,n){var/** @type {?} */i=this._triggers[t];if(!i)throw new Error('The provided animation trigger "'+t+'" has not been registered!');var/** @type {?} */o=this._elementTriggerStates.get(e);o||this._elementTriggerStates.set(e,o={});var/** @type {?} */r=o.hasOwnProperty(t)?o[t]:"void";if(r!==n){n=A(n);var/** @type {?} */a=i.matchTransition(r,n);a||(
// we do this to make sure we always have an animation player so
// that callback operations are properly called
a=i.createFallbackInstruction(r,n)),this.animateTransition(e,a),o[t]=n}},e.prototype.listen=function(e,t,n,i){var o=this;if(!n)throw new Error('Unable to listen on the animation trigger "'+t+'" because the provided event is undefined!');if(!this._triggers[t])throw new Error('Unable to listen on the animation trigger event "'+n+'" because the animation trigger "'+t+"\" doesn't exist!");var/** @type {?} */r=this._triggerListeners.get(e);r||this._triggerListeners.set(e,r=[]),_(t,n);var/** @type {?} */a={triggerName:t,phase:n,callback:i};return r.push(a),function(){
// this is queued up in the event that a removal animation is set
// to fire on the element (the listeners need to be set during flush)
w(o._pendingListenerRemovals,e,[]).push(a)}},e.prototype._clearPendingListenerRemovals=function(){var e=this;this._pendingListenerRemovals.forEach(function(t,n){var/** @type {?} */i=e._triggerListeners.get(n);i&&t.forEach(function(e){var/** @type {?} */t=i.indexOf(e);t>=0&&i.splice(t,1)})}),this._pendingListenerRemovals.clear()},e.prototype._onRemovalTransition=function(e){for(var/** @type {?} */t=e.querySelectorAll(".ng-animating"),n=this,/** @type {?} */i=0;i<t.length;i++)!function(e){var/** @type {?} */i=t[e],/** @type {?} */o=n._activeElementAnimations.get(i);o&&o.forEach(function(e){return e.destroy()});var/** @type {?} */r=n._activeTransitionAnimations.get(i);r&&Object.keys(r).forEach(function(e){var/** @type {?} */t=r[e];t&&t.destroy()})}(/** @type {?} */i);
// we make a copy of the array because the actual source array is modified
// each time a player is finished/destroyed (the forEach loop would fail otherwise)
return F(this._activeElementAnimations.get(e))},e.prototype.animateTransition=function(e,t){var/** @type {?} */n,i=this,/** @type {?} */o=t.triggerName;if(t.isRemovalTransition)n=this._onRemovalTransition(e);else{n=[];var/** @type {?} */r=this._activeTransitionAnimations.get(e),/** @type {?} */s=r?r[o]:null;s&&n.push(s)}
// it's important to do this step before destroying the players
// so that the onDone callback below won't fire before this
u(e,t.fromStyles);
// we first run this so that the previous animation player
// data can be passed into the successive animation players
var/** @type {?} */l=0,/** @type {?} */c=t.timelines.map(function(t,o){return l=Math.max(l,t.totalTime),i._buildPlayer(e,t,n,o)});n.forEach(function(e){return e.destroy()});var/** @type {?} */d=k(c);// this will be filled in during event creation
return d.onDone(function(){d.destroy();var/** @type {?} */n=i._activeTransitionAnimations.get(e);n&&(delete n[o],0==Object.keys(n).length&&i._activeTransitionAnimations.delete(e)),x(i._activeElementAnimations,e,d),a(e,t.toStyles)}),w(this._activeTransitionAnimations,e,{})[o]=d,this._queuePlayer(e,o,d,S(e,o,t.fromState,t.toState,null,l)),d},e.prototype.animateTimeline=function(e,t,n){var i=this;return void 0===n&&(n=[]),k(t.map(function(t,o){var/** @type {?} */r=i._buildPlayer(e,t,n,o);return r.onDestroy(function(){x(i._activeElementAnimations,e,r)}),i._markPlayerAsActive(e,r),r}))},e.prototype._buildPlayer=function(e,t,n,i){
// only the very first animation can absorb the previous styles. This
// is here to prevent the an overlap situation where a group animation
// absorbs previous styles multiple times for the same element.
return void 0===i&&(i=0),i&&n.length&&(n=[]),this._driver.animate(e,this._normalizeKeyframes(t.keyframes),t.duration,t.delay,t.easing,n)},e.prototype._normalizeKeyframes=function(e){var t=this,/** @type {?} */n=[],/** @type {?} */i=[];if(e.forEach(function(e){var/** @type {?} */o={};Object.keys(e).forEach(function(i){var/** @type {?} */r=i,/** @type {?} */a=e[i];"offset"!=i&&(r=t._normalizer.normalizePropertyName(i,n),a=t._normalizer.normalizeStyleValue(i,r,e[i],n)),o[r]=a}),i.push(o)}),n.length){throw new Error("Unable to animate due to the following errors:\n - "+n.join("\n - "))}return i},e.prototype._markPlayerAsActive=function(e,t){w(this._activeElementAnimations,e,[]).push(t)},e.prototype._queuePlayer=function(e,t,n,i){var/** @type {?} */o={element:e,player:n,triggerName:t,event:i};this._queuedTransitionAnimations.push(o),n.init(),e.classList.add("ng-animating"),n.onDone(function(){e.classList.remove("ng-animating")})},e.prototype._flushQueuedAnimations=function(){var e=this;e:for(;this._queuedTransitionAnimations.length;){var t=function(){for(var t=e._queuedTransitionAnimations.shift(),n=t.player,i=t.element,o=t.triggerName,r=t.event,/** @type {?} */a=i;a=a.parentNode;)
// this means that a parent element will or will not
// have its own animation operation which in this case
// there's no point in even trying to do an animation
if(a.$$ngRemove)return"continue-parentLoop";var/** @type {?} */u=e._triggerListeners.get(i);
// if a removal exists for the given element then we need cancel
// all the queued players so that a proper removal animation can go
if(u&&u.forEach(function(e){e.triggerName==o&&E(n,e.phase,r,e.callback)}),e._queuedRemovals.has(i))return n.destroy(),"continue";e._markPlayerAsActive(i,n),
// in the event that an animation throws an error then we do
// not want to re-run animations on any previous animations
// if they have already been kicked off beforehand
n.init(),n.hasStarted()||n.play()}();switch(t){case"continue-parentLoop":continue e}}},e.prototype.flush=function(){var e=this,/** @type {?} */t=new Map;this._queuedRemovals.forEach(function(n,i){var/** @type {?} */o=e._pendingListenerRemovals.get(i);o&&(t.set(i,o),e._pendingListenerRemovals.delete(i))}),this._clearPendingListenerRemovals(),this._pendingListenerRemovals=t,this._flushQueuedAnimations();var/** @type {?} */n=!1;this._queuedRemovals.forEach(function(t,i){
// an item that was inserted/removed in the same flush means
// that an animation should not happen anyway
if(!e._flaggedInserts.has(i)){for(var/** @type {?} */o=i,/** @type {?} */r=[];o=o.parentNode;){
// there is no reason to even try to
if(o.$$ngRemove)return void t();var/** @type {?} */a=e._activeElementAnimations.get(o);if(a){r.push.apply(r,a);break}}
// the loop was unable to find an parent that is animating even
// though this element has set to be removed, so the algorithm
// should check to see if there are any triggers on the element
// that are present to handle a leave animation and then setup
// those players to facilitate the callback after done
if(0==r.length){
// this means that the element has valid state triggers
var/** @type {?} */u=e._elementTriggerStates.get(i);u&&Object.keys(u).forEach(function(t){n=!0;var/** @type {?} */o=u[t],/** @type {?} */a=e._triggers[t].matchTransition(o,"void");if(a)r.push(e.animateTransition(i,a));else{var/** @type {?} */s=S(i,t,o,"void","",0),/** @type {?} */l=new N.NoopAnimationPlayer;e._queuePlayer(i,t,l,s)}})}r.length?k(r).onDone(t):t()}}),this._queuedRemovals.clear(),this._flaggedInserts.clear(),
// this means that one or more leave animations were detected
n&&(this._flushQueuedAnimations(),this._clearPendingListenerRemovals())},e}(),J=function(){function e(){}/**
     * @abstract
     * @param {?} propertyName
     * @param {?} errors
     * @return {?}
     */
/**
     * @abstract
     * @param {?} userProvidedProperty
     * @param {?} normalizedProperty
     * @param {?} value
     * @param {?} errors
     * @return {?}
     */
return e.prototype.normalizePropertyName=function(e,t){},e.prototype.normalizeStyleValue=function(e,t,n,i){},e}(),Q=(function(){function e(){}/**
     * @param {?} propertyName
     * @param {?} errors
     * @return {?}
     */
e.prototype.normalizePropertyName=function(e,t){return e},/**
     * @param {?} userProvidedProperty
     * @param {?} normalizedProperty
     * @param {?} value
     * @param {?} errors
     * @return {?}
     */
e.prototype.normalizeStyleValue=function(e,t,n,i){return n}}(),function(){/**
     * @param {?} input
     */
function e(e){var t=Array.isArray(e)?n.i(N.sequence)(e):e,i=v(t);if(i.length){var o="animation validation failed:\n"+i.join("\n");throw new Error(o)}this._animationAst=t}/**
     * @param {?} startingStyles
     * @param {?} destinationStyles
     * @return {?}
     */
e.prototype.buildTimelines=function(e,t){var/** @type {?} */n=Array.isArray(e)?o(e):e,/** @type {?} */i=Array.isArray(t)?o(t):t;return b(this._animationAst,n,i)},/**
     * @param {?} injector
     * @param {?} element
     * @param {?=} startingStyles
     * @param {?=} destinationStyles
     * @return {?}
     */
e.prototype.create=function(e,t,n,i){void 0===n&&(n={}),void 0===i&&(i={});var/** @type {?} */o=this.buildTimelines(n,i),/** @type {?} */r=e.get(M),/** @type {?} */a=e.get(J);return new Z(r,a).animateTimeline(t,o)}}(),function(e){function t(){return null!==e&&e.apply(this,arguments)||this}/**
     * @param {?} propertyName
     * @param {?} errors
     * @return {?}
     */
/**
     * @param {?} userProvidedProperty
     * @param {?} normalizedProperty
     * @param {?} value
     * @param {?} errors
     * @return {?}
     */
return D(t,e),t.prototype.normalizePropertyName=function(e,t){return z(e)},t.prototype.normalizeStyleValue=function(e,t,n,i){var/** @type {?} */o="",/** @type {?} */r=n.toString().trim();if(ee[t]&&0!==n&&"0"!==n)if("number"==typeof n)o="px";else{var/** @type {?} */a=n.match(/^[+-]?[\d\.]+([a-z]*)$/);a&&0==a[1].length&&i.push("Please provide a CSS unit value for "+e+":"+n)}return r+o},t}(J)),ee=/**
 * @param {?} keys
 * @return {?}
 */
function(e){var/** @type {?} */t={};return e.forEach(function(e){return t[e]=!0}),t}("width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent".split(",")),te=/-+([a-z0-9])/g,ne=function(e){function t(){var t=e.apply(this,arguments)||this;return t._listeners=new Map,t._changes=[],t._flaggedRemovals=new Set,t._onDoneFns=[],t._triggerStyles=Object.create(null),t}/**
     * @param {?} trigger
     * @param {?=} name
     * @return {?}
     */
/**
     * @param {?} element
     * @param {?} domFn
     * @return {?}
     */
/**
     * @param {?} element
     * @param {?} domFn
     * @return {?}
     */
/**
     * @param {?} element
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
/**
     * @param {?} element
     * @param {?} eventName
     * @param {?} eventPhase
     * @param {?} callback
     * @return {?}
     */
/**
     * @return {?}
     */
return D(t,e),t.prototype.registerTrigger=function(e,t){if(void 0===t&&(t=null),t=t||e.name,!this._triggerStyles[t]){var/** @type {?} */n={};e.definitions.forEach(function(e){if(0===e.type){var/** @type {?} */t=e;n[t.name]=o(t.styles.styles)}}),this._triggerStyles[t]=n}},t.prototype.onInsert=function(e,t){t()},t.prototype.onRemove=function(e,t){t(),1==e.nodeType&&this._flaggedRemovals.add(e)},t.prototype.setProperty=function(e,t,n){var/** @type {?} */i=C(t),/** @type {?} */o=e[i]||"void";this._changes.push(/** @type {?} */{element:e,oldValue:o,newValue:n,triggerName:t});var/** @type {?} */r=this._triggerStyles[t]||{},/** @type {?} */s=r[o]||r["*"];s&&u(e,s),e[i]=n,this._onDoneFns.push(function(){var/** @type {?} */t=r[n]||r["*"];t&&a(e,t)})},t.prototype.listen=function(e,t,n,i){var/** @type {?} */o=this._listeners.get(e);o||this._listeners.set(e,o=[]);var/** @type {?} */r={triggerName:t,eventPhase:n,callback:i};return o.push(r),function(){return r.doRemove=!0}},t.prototype.flush=function(){/**
         * @param {?} listener
         * @param {?} data
         * @return {?}
         */
function e(e,t){var/** @type {?} */o=e.eventPhase,/** @type {?} */r=O(t.element,t.triggerName,t.oldValue,t.newValue,o,0);"start"==o?n.push(function(){return e.callback(r)}):"done"==o&&i.push(function(){return e.callback(r)})}var t=this,/** @type {?} */n=[],/** @type {?} */i=[];this._changes.forEach(function(n){var/** @type {?} */i=n.element,/** @type {?} */o=t._listeners.get(i);o&&o.forEach(function(t){t.triggerName==n.triggerName&&e(t,n)})}),
// upon removal ALL the animation triggers need to get fired
this._flaggedRemovals.forEach(function(n){var/** @type {?} */i=t._listeners.get(n);i&&i.forEach(function(t){var/** @type {?} */i=t.triggerName,/** @type {?} */o=C(i);e(t,/** @type {?} */{element:n,triggerName:i,oldValue:n[o]||"void",newValue:"void"})})}),
// remove all the listeners after everything is complete
Array.from(this._listeners.keys()).forEach(function(e){var/** @type {?} */n=t._listeners.get(e).filter(function(e){return!e.doRemove});n.length?t._listeners.set(e,n):t._listeners.delete(e)}),n.forEach(function(e){return e()}),i.forEach(function(e){return e()}),this._flaggedRemovals.clear(),this._changes=[],this._onDoneFns.forEach(function(e){return e()}),this._onDoneFns=[]},Object.defineProperty(t.prototype,"activePlayers",{/**
         * @return {?}
         */
get:function(){return[]},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"queuedPlayers",{/**
         * @return {?}
         */
get:function(){return[]},enumerable:!0,configurable:!0}),t}(B),ie=function(){/**
     * @param {?} element
     * @param {?} keyframes
     * @param {?} options
     * @param {?=} previousPlayers
     */
function e(e,t,n,i){void 0===i&&(i=[]);var o=this;this.element=e,this.keyframes=t,this.options=n,this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._initialized=!1,this._finished=!1,this._started=!1,this._destroyed=!1,this.time=0,this.parentPlayer=null,this._duration=n.duration,this._delay=n.delay||0,this.time=this._duration+this._delay,this.previousStyles={},i.forEach(function(e){var t=e._captureStyles();Object.keys(t).forEach(function(e){return o.previousStyles[e]=t[e]})})}/**
     * @return {?}
     */
/**
     * @return {?}
     */
/**
     * \@internal
     * @param {?} element
     * @param {?} keyframes
     * @param {?} options
     * @return {?}
     */
/**
     * @param {?} fn
     * @return {?}
     */
/**
     * @param {?} fn
     * @return {?}
     */
/**
     * @param {?} fn
     * @return {?}
     */
/**
     * @return {?}
     */
/**
     * @return {?}
     */
/**
     * @return {?}
     */
/**
     * @return {?}
     */
/**
     * @return {?}
     */
/**
     * @return {?}
     */
/**
     * @return {?}
     */
/**
     * @return {?}
     */
/**
     * @param {?} p
     * @return {?}
     */
/**
     * @return {?}
     */
/**
     * @return {?}
     */
return e.prototype._onFinish=function(){this._finished||(this._finished=!0,this._onDoneFns.forEach(function(e){return e()}),this._onDoneFns=[])},e.prototype.init=function(){var e=this;if(!this._initialized){this._initialized=!0;var/** @type {?} */t=this.keyframes.map(function(t){var/** @type {?} */n={};return Object.keys(t).forEach(function(i,o){var/** @type {?} */r=t[i];r==N.AUTO_STYLE&&(r=R(e.element,i)),void 0!=r&&(n[i]=r)}),n}),/** @type {?} */n=Object.keys(this.previousStyles);if(n.length){var/** @type {?} */i=t[0],/** @type {?} */o=[];if(n.forEach(function(t){i.hasOwnProperty(t)||o.push(t),i[t]=e.previousStyles[t]}),o.length)
// tslint:disable-next-line
for(var/** @type {?} */r=this,/** @type {?} */a=1;a<t.length;a++)!function(){var/** @type {?} */e=t[a];o.forEach(function(t){e[t]=R(r.element,t)})}()}this._player=this._triggerWebAnimation(this.element,t,this.options),this._finalKeyframe=t.length?I(t[t.length-1]):{},
// this is required so that the player doesn't start to animate right away
this._resetDomPlayerState(),this._player.addEventListener("finish",function(){return e._onFinish()})}},e.prototype._triggerWebAnimation=function(e,t,n){
// jscompiler doesn't seem to know animate is a native property because it's not fully
// supported yet across common browsers (we polyfill it for Edge/Safari) [CL #143630929]
return e.animate(t,n)},Object.defineProperty(e.prototype,"domPlayer",{/**
         * @return {?}
         */
get:function(){return this._player},enumerable:!0,configurable:!0}),e.prototype.onStart=function(e){this._onStartFns.push(e)},e.prototype.onDone=function(e){this._onDoneFns.push(e)},e.prototype.onDestroy=function(e){this._onDestroyFns.push(e)},e.prototype.play=function(){this.init(),this.hasStarted()||(this._onStartFns.forEach(function(e){return e()}),this._onStartFns=[],this._started=!0),this._player.play()},e.prototype.pause=function(){this.init(),this._player.pause()},e.prototype.finish=function(){this.init(),this._onFinish(),this._player.finish()},e.prototype.reset=function(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1},e.prototype._resetDomPlayerState=function(){this._player&&this._player.cancel()},e.prototype.restart=function(){this.reset(),this.play()},e.prototype.hasStarted=function(){return this._started},e.prototype.destroy=function(){this._destroyed||(this._resetDomPlayerState(),this._onFinish(),this._destroyed=!0,this._onDestroyFns.forEach(function(e){return e()}),this._onDestroyFns=[])},e.prototype.setPosition=function(e){this._player.currentTime=e*this.time},e.prototype.getPosition=function(){return this._player.currentTime/this.time},e.prototype._captureStyles=function(){var e=this,/** @type {?} */t={};return this.hasStarted()&&Object.keys(this._finalKeyframe).forEach(function(n){"offset"!=n&&(t[n]=e._finished?e._finalKeyframe[n]:R(e.element,n))}),t},e}(),oe=function(){function e(){}/**
     * @param {?} element
     * @param {?} keyframes
     * @param {?} duration
     * @param {?} delay
     * @param {?} easing
     * @param {?=} previousPlayers
     * @return {?}
     */
return e.prototype.animate=function(e,t,n,i,o,r){void 0===r&&(r=[]);var/** @type {?} */a={duration:n,delay:i,fill:"forwards"};
// we check for this to avoid having a null|undefined value be present
// for the easing (which results in an error for certain browsers #9752)
o&&(a.easing=o);var/** @type {?} */u=r.filter(function(e){return e instanceof ie});return new ie(e,t,a,u)},e}()},/***/
373:/***/
function(e,t,n){"use strict";/**
 * @param {?} target
 * @return {?}
 */
function i(e){switch(e){case"body":return document.body;case"document":return document;case"window":return window;default:return e}}/**
 * @param {?} triggerName
 * @return {?}
 */
function o(e){var/** @type {?} */t=e.indexOf(".");return[e.substring(0,t),e.substr(t+1)]}/**
 * @param {?} namespaceId
 * @param {?} value
 * @return {?}
 */
function r(e,t){return e+"#"+t}/**
 * @param {?} namespaceId
 * @param {?} value
 * @return {?}
 */
function a(e,t){return t.replace(e+"#","")}/**
 * @return {?}
 */
function u(){return n.i(f.e)()?new f.f:new f.g}/**
 * @return {?}
 */
function s(){return new f.h}/**
 * @param {?} renderer
 * @param {?} engine
 * @param {?} zone
 * @return {?}
 */
function l(e,t,n){return new b(e,t,n)}Object.defineProperty(t,"__esModule",{value:!0});/* harmony import */
var c=n(1),d=n(66),f=n(371);/* harmony export (binding) */
n.d(t,"BrowserAnimationsModule",function(){return y}),/* harmony export (binding) */
n.d(t,"NoopAnimationsModule",function(){return w}),/* harmony export (binding) */
n.d(t,"ɵAnimationRenderer",function(){return h}),/* harmony export (binding) */
n.d(t,"ɵAnimationRendererFactory",function(){return b}),/* harmony export (binding) */
n.d(t,"ɵe",function(){return m}),/* harmony export (binding) */
n.d(t,"ɵf",function(){return v}),/* harmony export (binding) */
n.d(t,"ɵa",function(){return g}),/* harmony export (binding) */
n.d(t,"ɵc",function(){return s}),/* harmony export (binding) */
n.d(t,"ɵd",function(){return l}),/* harmony export (binding) */
n.d(t,"ɵb",function(){return u});var p=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},b=function(){/**
     * @param {?} delegate
     * @param {?} _engine
     * @param {?} _zone
     */
function e(e,t,n){this.delegate=e,this._engine=t,this._zone=n}/**
     * @param {?} hostElement
     * @param {?} type
     * @return {?}
     */
return e.prototype.createRenderer=function(e,t){var n=this,/** @type {?} */i=this.delegate.createRenderer(e,t);if(!(e&&t&&t.data&&t.data.animation))return i;var/** @type {?} */o=t.id;return t.data.animation.forEach(function(e){return n._engine.registerTrigger(e,r(o,e.name))}),new h(i,this._engine,this._zone,o)},e}();b.decorators=[{type:c.Injectable}],/**
 * @nocollapse
 */
b.ctorParameters=function(){return[{type:c.RendererFactory2},{type:f.a},{type:c.NgZone}]};var h=function(){/**
     * @param {?} delegate
     * @param {?} _engine
     * @param {?} _zone
     * @param {?} _namespaceId
     */
function e(e,t,n,i){this.delegate=e,this._engine=t,this._zone=n,this._namespaceId=i,this.destroyNode=null,this._flushPromise=null,this.destroyNode=this.delegate.destroyNode?function(t){return e.destroyNode(t)}:null}/**
     * @return {?}
     */
/**
     * @param {?} name
     * @param {?=} namespace
     * @return {?}
     */
/**
     * @param {?} value
     * @return {?}
     */
/**
     * @param {?} value
     * @return {?}
     */
/**
     * @param {?} selectorOrNode
     * @return {?}
     */
/**
     * @param {?} node
     * @return {?}
     */
/**
     * @param {?} node
     * @return {?}
     */
/**
     * @param {?} el
     * @param {?} name
     * @param {?} value
     * @param {?=} namespace
     * @return {?}
     */
/**
     * @param {?} el
     * @param {?} name
     * @param {?=} namespace
     * @return {?}
     */
/**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
/**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
/**
     * @param {?} el
     * @param {?} style
     * @param {?} value
     * @param {?} flags
     * @return {?}
     */
/**
     * @param {?} el
     * @param {?} style
     * @param {?} flags
     * @return {?}
     */
/**
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
/**
     * @param {?} parent
     * @param {?} newChild
     * @return {?}
     */
/**
     * @param {?} parent
     * @param {?} newChild
     * @param {?} refChild
     * @return {?}
     */
/**
     * @param {?} parent
     * @param {?} oldChild
     * @return {?}
     */
/**
     * @param {?} el
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
/**
     * @param {?} target
     * @param {?} eventName
     * @param {?} callback
     * @return {?}
     */
/**
     * @return {?}
     */
return Object.defineProperty(e.prototype,"data",{/**
         * @return {?}
         */
get:function(){return this.delegate.data},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){this.delegate.destroy()},e.prototype.createElement=function(e,t){return this.delegate.createElement(e,t)},e.prototype.createComment=function(e){return this.delegate.createComment(e)},e.prototype.createText=function(e){return this.delegate.createText(e)},e.prototype.selectRootElement=function(e){return this.delegate.selectRootElement(e)},e.prototype.parentNode=function(e){return this.delegate.parentNode(e)},e.prototype.nextSibling=function(e){return this.delegate.nextSibling(e)},e.prototype.setAttribute=function(e,t,n,i){this.delegate.setAttribute(e,t,n,i)},e.prototype.removeAttribute=function(e,t,n){this.delegate.removeAttribute(e,t,n)},e.prototype.addClass=function(e,t){this.delegate.addClass(e,t)},e.prototype.removeClass=function(e,t){this.delegate.removeClass(e,t)},e.prototype.setStyle=function(e,t,n,i){this.delegate.setStyle(e,t,n,i)},e.prototype.removeStyle=function(e,t,n){this.delegate.removeStyle(e,t,n)},e.prototype.setValue=function(e,t){this.delegate.setValue(e,t)},e.prototype.appendChild=function(e,t){var n=this;this._engine.onInsert(t,function(){return n.delegate.appendChild(e,t)}),this._queueFlush()},e.prototype.insertBefore=function(e,t,n){var i=this;this._engine.onInsert(t,function(){return i.delegate.insertBefore(e,t,n)}),this._queueFlush()},e.prototype.removeChild=function(e,t){var n=this;this._engine.onRemove(t,function(){
// Note: if an component element has a leave animation, and the component
// a host leave animation, the view engine will call `removeChild` for the parent
// component renderer as well as for the child component renderer.
// Therefore, we need to check if we already removed the element.
n.delegate.parentNode(t)&&n.delegate.removeChild(e,t)}),this._queueFlush()},e.prototype.setProperty=function(e,t,n){"@"==t.charAt(0)?(this._engine.setProperty(e,r(this._namespaceId,t.substr(1)),n),this._queueFlush()):this.delegate.setProperty(e,t,n)},e.prototype.listen=function(e,t,n){var u=this;if("@"==t.charAt(0)){var/** @type {?} */s=i(e),l=o(t.substr(1)),c=l[0],d=l[1];return this._engine.listen(s,r(this._namespaceId,c),d,function(e){var/** @type {?} */t=e;t.triggerName&&(t.triggerName=a(u._namespaceId,t.triggerName)),u._zone.run(function(){return n(e)})})}return this.delegate.listen(e,t,n)},e.prototype._queueFlush=function(){var e=this;this._flushPromise||this._zone.runOutsideAngular(function(){e._flushPromise=Promise.resolve(null).then(function(){e._flushPromise=null,e._engine.flush()})})},e}(),g=function(e){/**
     * @param {?} driver
     * @param {?} normalizer
     */
function t(t,n){return e.call(this,t,n)||this}return p(t,e),t}(f.b);g.decorators=[{type:c.Injectable}],/**
 * @nocollapse
 */
g.ctorParameters=function(){return[{type:f.c},{type:f.d}]};/**
 * Separate providers from the actual module so that we can do a local modification in Google3 to
 * include them in the BrowserModule.
 */
var m=[{provide:f.c,useFactory:u},{provide:f.d,useFactory:s},{provide:f.a,useClass:g},{provide:c.RendererFactory2,useFactory:l,deps:[d["ɵDomRendererFactory2"],f.a,c.NgZone]}],v=[{provide:f.a,useClass:f.i},{provide:c.RendererFactory2,useFactory:l,deps:[d["ɵDomRendererFactory2"],f.a,c.NgZone]}],y=function(){function e(){}return e}();y.decorators=[{type:c.NgModule,args:[{imports:[d.BrowserModule],providers:m}]}],/**
 * @nocollapse
 */
y.ctorParameters=function(){return[]};/**
 * \@experimental Animation support is experimental.
 */
var w=function(){function e(){}return e}();w.decorators=[{type:c.NgModule,args:[{imports:[d.BrowserModule],providers:v}]}],/**
 * @nocollapse
 */
w.ctorParameters=function(){return[]}},/***/
374:/***/
function(e,t,n){"use strict";function i(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");
// the number of equal signs (place holders)
// if there are two placeholders, than the two characters before it
// represent one byte
// if there is only one, then the three characters before it represent 2 bytes
// this is just a cheap hack to not do indexOf twice
return"="===e[t-2]?2:"="===e[t-1]?1:0}function o(e){
// base64 is 4/3 + up to two characters of the original data
return 3*e.length/4-i(e)}function r(e){var t,n,o,r,a,u,s=e.length;a=i(e),u=new d(3*s/4-a),
// if there are placeholders, only get up to the last complete 4 chars
o=a>0?s-4:s;var l=0;for(t=0,n=0;t<o;t+=4,n+=3)r=c[e.charCodeAt(t)]<<18|c[e.charCodeAt(t+1)]<<12|c[e.charCodeAt(t+2)]<<6|c[e.charCodeAt(t+3)],u[l++]=r>>16&255,u[l++]=r>>8&255,u[l++]=255&r;return 2===a?(r=c[e.charCodeAt(t)]<<2|c[e.charCodeAt(t+1)]>>4,u[l++]=255&r):1===a&&(r=c[e.charCodeAt(t)]<<10|c[e.charCodeAt(t+1)]<<4|c[e.charCodeAt(t+2)]>>2,u[l++]=r>>8&255,u[l++]=255&r),u}function a(e){return l[e>>18&63]+l[e>>12&63]+l[e>>6&63]+l[63&e]}function u(e,t,n){for(var i,o=[],r=t;r<n;r+=3)i=(e[r]<<16)+(e[r+1]<<8)+e[r+2],o.push(a(i));return o.join("")}function s(e){// must be multiple of 3
// go through the array every three bytes, we'll deal with trailing stuff later
for(var t,n=e.length,i=n%3,o="",r=[],a=0,s=n-i;a<s;a+=16383)r.push(u(e,a,a+16383>s?s:a+16383));
// pad the end with zeros, but make sure to not forget the extra bytes
return 1===i?(t=e[n-1],o+=l[t>>2],o+=l[t<<4&63],o+="=="):2===i&&(t=(e[n-2]<<8)+e[n-1],o+=l[t>>10],o+=l[t>>4&63],o+=l[t<<2&63],o+="="),r.push(o),r.join("")}t.byteLength=o,t.toByteArray=r,t.fromByteArray=s;for(var l=[],c=[],d="undefined"!=typeof Uint8Array?Uint8Array:Array,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",p=0,b=f.length;p<b;++p)l[p]=f[p],c[f.charCodeAt(p)]=p;c["-".charCodeAt(0)]=62,c["_".charCodeAt(0)]=63},/***/
375:/***/
function(e,t,n){"use strict";/* WEBPACK VAR INJECTION */
(function(e){function i(){return r.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function o(e,t){if(i()<t)throw new RangeError("Invalid typed array length");
// Return an augmented `Uint8Array` instance, for best performance
// Fallback: Return an object instance of the Buffer class
return r.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(t),e.__proto__=r.prototype):(null===e&&(e=new r(t)),e.length=t),e}/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */
function r(e,t,n){if(!(r.TYPED_ARRAY_SUPPORT||this instanceof r))return new r(e,t,n);
// Common case.
if("number"==typeof e){if("string"==typeof t)throw new Error("If encoding is specified then the first argument must be a string");return l(this,e)}return a(this,e,t,n)}function a(e,t,n,i){if("number"==typeof t)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?f(e,t,n,i):"string"==typeof t?c(e,t,n):p(e,t)}function u(e){if("number"!=typeof e)throw new TypeError('"size" argument must be a number');if(e<0)throw new RangeError('"size" argument must not be negative')}function s(e,t,n,i){return u(t),t<=0?o(e,t):void 0!==n?"string"==typeof i?o(e,t).fill(n,i):o(e,t).fill(n):o(e,t)}function l(e,t){if(u(t),e=o(e,t<0?0:0|b(t)),!r.TYPED_ARRAY_SUPPORT)for(var n=0;n<t;++n)e[n]=0;return e}function c(e,t,n){if("string"==typeof n&&""!==n||(n="utf8"),!r.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding');var i=0|g(t,n);e=o(e,i);var a=e.write(t,n);
// Writing a hex string, for example, that contains invalid characters will
// cause everything after the first invalid character to be ignored. (e.g.
// 'abxxcd' will be treated as 'ab')
return a!==i&&(e=e.slice(0,a)),e}function d(e,t){var n=t.length<0?0:0|b(t.length);e=o(e,n);for(var i=0;i<n;i+=1)e[i]=255&t[i];return e}function f(e,t,n,i){// this throws if `array` is not a valid ArrayBuffer
if(t.byteLength,n<0||t.byteLength<n)throw new RangeError("'offset' is out of bounds");if(t.byteLength<n+(i||0))throw new RangeError("'length' is out of bounds");
// Return an augmented `Uint8Array` instance, for best performance
// Fallback: Return an object instance of the Buffer class
return t=void 0===n&&void 0===i?new Uint8Array(t):void 0===i?new Uint8Array(t,n):new Uint8Array(t,n,i),r.TYPED_ARRAY_SUPPORT?(e=t,e.__proto__=r.prototype):e=d(e,t),e}function p(e,t){if(r.isBuffer(t)){var n=0|b(t.length);return e=o(e,n),0===e.length?e:(t.copy(e,0,0,n),e)}if(t){if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!=typeof t.length||X(t.length)?o(e,0):d(e,t);if("Buffer"===t.type&&J(t.data))return d(e,t.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function b(e){
// Note: cannot use `length < kMaxLength()` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(e>=i())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i().toString(16)+" bytes");return 0|e}function h(e){// eslint-disable-line eqeqeq
return+e!=e&&(e=0),r.alloc(+e)}function g(e,t){if(r.isBuffer(e))return e.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;"string"!=typeof e&&(e=""+e);var n=e.length;if(0===n)return 0;for(
// Use a for loop to avoid recursion
var i=!1;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":case void 0:return V(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return $(e).length;default:if(i)return V(e).length;// assume utf8
t=(""+t).toLowerCase(),i=!0}}function m(e,t,n){var i=!1;
// Return early if start > this.length. Done here to prevent potential uint32
// coercion fail below.
if(
// No need to verify that "this.length <= MAX_UINT32" since it's a read-only
// property of a typed array.
// This behaves neither like String nor Uint8Array in that we set start/end
// to their upper/lower bounds if the value passed is out of range.
// undefined is handled specially as per ECMA-262 6th Edition,
// Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
(void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if(
// Force coersion to uint32. This will also coerce falsey/NaN values to 0.
n>>>=0,t>>>=0,n<=t)return"";for(e||(e="utf8");;)switch(e){case"hex":return R(this,t,n);case"utf8":case"utf-8":return A(this,t,n);case"ascii":return O(this,t,n);case"latin1":case"binary":return C(this,t,n);case"base64":return S(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return I(this,t,n);default:if(i)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),i=!0}}function v(e,t,n){var i=e[t];e[t]=e[n],e[n]=i}
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function y(e,t,n,i,o){
// Empty buffer means no match
if(0===e.length)return-1;if(
// Normalize byteOffset
"string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,// Coerce to Number.
isNaN(n)&&(
// byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
n=o?0:e.length-1),
// Normalize byteOffset: negative offsets start from the end of the buffer
n<0&&(n=e.length+n),n>=e.length){if(o)return-1;n=e.length-1}else if(n<0){if(!o)return-1;n=0}
// Finally, search either indexOf (if dir is true) or lastIndexOf
if(
// Normalize val
"string"==typeof t&&(t=r.from(t,i)),r.isBuffer(t))
// Special case: looking for empty string/buffer always fails
// Special case: looking for empty string/buffer always fails
return 0===t.length?-1:w(e,t,n,i,o);if("number"==typeof t)// Search for a byte value [0-255]
// Search for a byte value [0-255]
return t&=255,r.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):w(e,[t],n,i,o);throw new TypeError("val must be string, number or Buffer")}function w(e,t,n,i,o){function r(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}var a=1,u=e.length,s=t.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(e.length<2||t.length<2)return-1;a=2,u/=2,s/=2,n/=2}var l;if(o){var c=-1;for(l=n;l<u;l++)if(r(e,l)===r(t,-1===c?0:l-c)){if(-1===c&&(c=l),l-c+1===s)return c*a}else-1!==c&&(l-=l-c),c=-1}else for(n+s>u&&(n=u-s),l=n;l>=0;l--){for(var d=!0,f=0;f<s;f++)if(r(e,l+f)!==r(t,f)){d=!1;break}if(d)return l}return-1}function x(e,t,n,i){n=Number(n)||0;var o=e.length-n;i?(i=Number(i))>o&&(i=o):i=o;
// must be an even number of digits
var r=t.length;if(r%2!=0)throw new TypeError("Invalid hex string");i>r/2&&(i=r/2);for(var a=0;a<i;++a){var u=parseInt(t.substr(2*a,2),16);if(isNaN(u))return a;e[n+a]=u}return a}function k(e,t,n,i){return K(V(t,e.length-n),e,n,i)}function F(e,t,n,i){return K(Y(t),e,n,i)}function _(e,t,n,i){return F(e,t,n,i)}function E(e,t,n,i){return K($(t),e,n,i)}function T(e,t,n,i){return K(H(t,e.length-n),e,n,i)}function S(e,t,n){return 0===t&&n===e.length?W.fromByteArray(e):W.fromByteArray(e.slice(t,n))}function A(e,t,n){n=Math.min(e.length,n);for(var i=[],o=t;o<n;){var r=e[o],a=null,u=r>239?4:r>223?3:r>191?2:1;if(o+u<=n){var s,l,c,d;switch(u){case 1:r<128&&(a=r);break;case 2:s=e[o+1],128==(192&s)&&(d=(31&r)<<6|63&s)>127&&(a=d);break;case 3:s=e[o+1],l=e[o+2],128==(192&s)&&128==(192&l)&&(d=(15&r)<<12|(63&s)<<6|63&l)>2047&&(d<55296||d>57343)&&(a=d);break;case 4:s=e[o+1],l=e[o+2],c=e[o+3],128==(192&s)&&128==(192&l)&&128==(192&c)&&(d=(15&r)<<18|(63&s)<<12|(63&l)<<6|63&c)>65535&&d<1114112&&(a=d)}}null===a?(
// we did not generate a valid codePoint so insert a
// replacement char (U+FFFD) and advance only 1 byte
a=65533,u=1):a>65535&&(
// encode to utf16 (surrogate pair dance)
a-=65536,i.push(a>>>10&1023|55296),a=56320|1023&a),i.push(a),o+=u}return z(i)}function z(e){var t=e.length;if(t<=Q)return String.fromCharCode.apply(String,e);for(
// Decode in chunks to avoid "call stack size exceeded".
var n="",i=0;i<t;)n+=String.fromCharCode.apply(String,e.slice(i,i+=Q));return n}function O(e,t,n){var i="";n=Math.min(e.length,n);for(var o=t;o<n;++o)i+=String.fromCharCode(127&e[o]);return i}function C(e,t,n){var i="";n=Math.min(e.length,n);for(var o=t;o<n;++o)i+=String.fromCharCode(e[o]);return i}function R(e,t,n){var i=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>i)&&(n=i);for(var o="",r=t;r<n;++r)o+=G(e[r]);return o}function I(e,t,n){for(var i=e.slice(t,n),o="",r=0;r<i.length;r+=2)o+=String.fromCharCode(i[r]+256*i[r+1]);return o}/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function P(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function N(e,t,n,i,o,a){if(!r.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>o||t<a)throw new RangeError('"value" argument is out of bounds');if(n+i>e.length)throw new RangeError("Index out of range")}function D(e,t,n,i){t<0&&(t=65535+t+1);for(var o=0,r=Math.min(e.length-n,2);o<r;++o)e[n+o]=(t&255<<8*(i?o:1-o))>>>8*(i?o:1-o)}function j(e,t,n,i){t<0&&(t=4294967295+t+1);for(var o=0,r=Math.min(e.length-n,4);o<r;++o)e[n+o]=t>>>8*(i?o:3-o)&255}function M(e,t,n,i,o,r){if(n+i>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function B(e,t,n,i,o){return o||M(e,t,n,4,3.4028234663852886e38,-3.4028234663852886e38),Z.write(e,t,n,i,23,4),n+4}function U(e,t,n,i,o){return o||M(e,t,n,8,1.7976931348623157e308,-1.7976931348623157e308),Z.write(e,t,n,i,52,8),n+8}function L(e){
// Node converts strings with length < 2 to ''
if(
// Node strips out invalid characters like \n and \t from the string, base64-js does not
e=q(e).replace(ee,""),e.length<2)return"";
// Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
for(;e.length%4!=0;)e+="=";return e}function q(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function G(e){return e<16?"0"+e.toString(16):e.toString(16)}function V(e,t){t=t||1/0;for(var n,i=e.length,o=null,r=[],a=0;a<i;++a){
// is surrogate component
if((n=e.charCodeAt(a))>55295&&n<57344){
// last char was a lead
if(!o){
// no lead yet
if(n>56319){
// unexpected trail
(t-=3)>-1&&r.push(239,191,189);continue}if(a+1===i){
// unpaired lead
(t-=3)>-1&&r.push(239,191,189);continue}
// valid lead
o=n;continue}
// 2 leads in a row
if(n<56320){(t-=3)>-1&&r.push(239,191,189),o=n;continue}
// valid surrogate pair
n=65536+(o-55296<<10|n-56320)}else o&&(t-=3)>-1&&r.push(239,191,189);
// encode utf8
if(o=null,n<128){if((t-=1)<0)break;r.push(n)}else if(n<2048){if((t-=2)<0)break;r.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;r.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;r.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return r}function Y(e){for(var t=[],n=0;n<e.length;++n)
// Node's code seems to be doing this and not & 0x7F..
t.push(255&e.charCodeAt(n));return t}function H(e,t){for(var n,i,o,r=[],a=0;a<e.length&&!((t-=2)<0);++a)n=e.charCodeAt(a),i=n>>8,o=n%256,r.push(o),r.push(i);return r}function $(e){return W.toByteArray(L(e))}function K(e,t,n,i){for(var o=0;o<i&&!(o+n>=t.length||o>=e.length);++o)t[o+n]=e[o];return o}function X(e){return e!==e}/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */
var W=n(374),Z=n(522),J=n(523);t.Buffer=r,t.SlowBuffer=h,t.INSPECT_MAX_BYTES=50,/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
r.TYPED_ARRAY_SUPPORT=void 0!==e.TYPED_ARRAY_SUPPORT?e.TYPED_ARRAY_SUPPORT:function(){try{var e=new Uint8Array(1);// typed array instances can be augmented
// chrome 9-10 lack `subarray`
return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()&&"function"==typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(e){return!1}}(),/*
 * Export kMaxLength after typed array support is determined.
 */
t.kMaxLength=i(),r.poolSize=8192,// not used by this implementation
// TODO: Legacy, not needed anymore. Remove in next major version.
r._augment=function(e){return e.__proto__=r.prototype,e},/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
r.from=function(e,t,n){return a(null,e,t,n)},r.TYPED_ARRAY_SUPPORT&&(r.prototype.__proto__=Uint8Array.prototype,r.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&r[Symbol.species]===r&&
// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
Object.defineProperty(r,Symbol.species,{value:null,configurable:!0})),/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
r.alloc=function(e,t,n){return s(null,e,t,n)},/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
r.allocUnsafe=function(e){return l(null,e)},/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
r.allocUnsafeSlow=function(e){return l(null,e)},r.isBuffer=function(e){return!(null==e||!e._isBuffer)},r.compare=function(e,t){if(!r.isBuffer(e)||!r.isBuffer(t))throw new TypeError("Arguments must be Buffers");if(e===t)return 0;for(var n=e.length,i=t.length,o=0,a=Math.min(n,i);o<a;++o)if(e[o]!==t[o]){n=e[o],i=t[o];break}return n<i?-1:i<n?1:0},r.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},r.concat=function(e,t){if(!J(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return r.alloc(0);var n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;var i=r.allocUnsafe(t),o=0;for(n=0;n<e.length;++n){var a=e[n];if(!r.isBuffer(a))throw new TypeError('"list" argument must be an Array of Buffers');a.copy(i,o),o+=a.length}return i},r.byteLength=g,
// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
r.prototype._isBuffer=!0,r.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)v(this,t,t+1);return this},r.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)v(this,t,t+3),v(this,t+1,t+2);return this},r.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)v(this,t,t+7),v(this,t+1,t+6),v(this,t+2,t+5),v(this,t+3,t+4);return this},r.prototype.toString=function(){var e=0|this.length;return 0===e?"":0===arguments.length?A(this,0,e):m.apply(this,arguments)},r.prototype.equals=function(e){if(!r.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===r.compare(this,e)},r.prototype.inspect=function(){var e="",n=t.INSPECT_MAX_BYTES;return this.length>0&&(e=this.toString("hex",0,n).match(/.{2}/g).join(" "),this.length>n&&(e+=" ... ")),"<Buffer "+e+">"},r.prototype.compare=function(e,t,n,i,o){if(!r.isBuffer(e))throw new TypeError("Argument must be a Buffer");if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===i&&(i=0),void 0===o&&(o=this.length),t<0||n>e.length||i<0||o>this.length)throw new RangeError("out of range index");if(i>=o&&t>=n)return 0;if(i>=o)return-1;if(t>=n)return 1;if(t>>>=0,n>>>=0,i>>>=0,o>>>=0,this===e)return 0;for(var a=o-i,u=n-t,s=Math.min(a,u),l=this.slice(i,o),c=e.slice(t,n),d=0;d<s;++d)if(l[d]!==c[d]){a=l[d],u=c[d];break}return a<u?-1:u<a?1:0},r.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},r.prototype.indexOf=function(e,t,n){return y(this,e,t,n,!0)},r.prototype.lastIndexOf=function(e,t,n){return y(this,e,t,n,!1)},r.prototype.write=function(e,t,n,i){
// Buffer#write(string)
if(void 0===t)i="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)i=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t|=0,isFinite(n)?(n|=0,void 0===i&&(i="utf8")):(i=n,n=void 0)}var o=this.length-t;if((void 0===n||n>o)&&(n=o),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");for(var r=!1;;)switch(i){case"hex":return x(this,e,t,n);case"utf8":case"utf-8":return k(this,e,t,n);case"ascii":return F(this,e,t,n);case"latin1":case"binary":return _(this,e,t,n);case"base64":
// Warning: maxLength not taken into account in base64Write
return E(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return T(this,e,t,n);default:if(r)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),r=!0}},r.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var Q=4096;r.prototype.slice=function(e,t){var n=this.length;e=~~e,t=void 0===t?n:~~t,e<0?(e+=n)<0&&(e=0):e>n&&(e=n),t<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);var i;if(r.TYPED_ARRAY_SUPPORT)i=this.subarray(e,t),i.__proto__=r.prototype;else{var o=t-e;i=new r(o,void 0);for(var a=0;a<o;++a)i[a]=this[a+e]}return i},r.prototype.readUIntLE=function(e,t,n){e|=0,t|=0,n||P(e,t,this.length);for(var i=this[e],o=1,r=0;++r<t&&(o*=256);)i+=this[e+r]*o;return i},r.prototype.readUIntBE=function(e,t,n){e|=0,t|=0,n||P(e,t,this.length);for(var i=this[e+--t],o=1;t>0&&(o*=256);)i+=this[e+--t]*o;return i},r.prototype.readUInt8=function(e,t){return t||P(e,1,this.length),this[e]},r.prototype.readUInt16LE=function(e,t){return t||P(e,2,this.length),this[e]|this[e+1]<<8},r.prototype.readUInt16BE=function(e,t){return t||P(e,2,this.length),this[e]<<8|this[e+1]},r.prototype.readUInt32LE=function(e,t){return t||P(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},r.prototype.readUInt32BE=function(e,t){return t||P(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},r.prototype.readIntLE=function(e,t,n){e|=0,t|=0,n||P(e,t,this.length);for(var i=this[e],o=1,r=0;++r<t&&(o*=256);)i+=this[e+r]*o;return o*=128,i>=o&&(i-=Math.pow(2,8*t)),i},r.prototype.readIntBE=function(e,t,n){e|=0,t|=0,n||P(e,t,this.length);for(var i=t,o=1,r=this[e+--i];i>0&&(o*=256);)r+=this[e+--i]*o;return o*=128,r>=o&&(r-=Math.pow(2,8*t)),r},r.prototype.readInt8=function(e,t){return t||P(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},r.prototype.readInt16LE=function(e,t){t||P(e,2,this.length);var n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},r.prototype.readInt16BE=function(e,t){t||P(e,2,this.length);var n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},r.prototype.readInt32LE=function(e,t){return t||P(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},r.prototype.readInt32BE=function(e,t){return t||P(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},r.prototype.readFloatLE=function(e,t){return t||P(e,4,this.length),Z.read(this,e,!0,23,4)},r.prototype.readFloatBE=function(e,t){return t||P(e,4,this.length),Z.read(this,e,!1,23,4)},r.prototype.readDoubleLE=function(e,t){return t||P(e,8,this.length),Z.read(this,e,!0,52,8)},r.prototype.readDoubleBE=function(e,t){return t||P(e,8,this.length),Z.read(this,e,!1,52,8)},r.prototype.writeUIntLE=function(e,t,n,i){if(e=+e,t|=0,n|=0,!i){N(this,e,t,n,Math.pow(2,8*n)-1,0)}var o=1,r=0;for(this[t]=255&e;++r<n&&(o*=256);)this[t+r]=e/o&255;return t+n},r.prototype.writeUIntBE=function(e,t,n,i){if(e=+e,t|=0,n|=0,!i){N(this,e,t,n,Math.pow(2,8*n)-1,0)}var o=n-1,r=1;for(this[t+o]=255&e;--o>=0&&(r*=256);)this[t+o]=e/r&255;return t+n},r.prototype.writeUInt8=function(e,t,n){return e=+e,t|=0,n||N(this,e,t,1,255,0),r.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[t]=255&e,t+1},r.prototype.writeUInt16LE=function(e,t,n){return e=+e,t|=0,n||N(this,e,t,2,65535,0),r.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):D(this,e,t,!0),t+2},r.prototype.writeUInt16BE=function(e,t,n){return e=+e,t|=0,n||N(this,e,t,2,65535,0),r.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):D(this,e,t,!1),t+2},r.prototype.writeUInt32LE=function(e,t,n){return e=+e,t|=0,n||N(this,e,t,4,4294967295,0),r.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e):j(this,e,t,!0),t+4},r.prototype.writeUInt32BE=function(e,t,n){return e=+e,t|=0,n||N(this,e,t,4,4294967295,0),r.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):j(this,e,t,!1),t+4},r.prototype.writeIntLE=function(e,t,n,i){if(e=+e,t|=0,!i){var o=Math.pow(2,8*n-1);N(this,e,t,n,o-1,-o)}var r=0,a=1,u=0;for(this[t]=255&e;++r<n&&(a*=256);)e<0&&0===u&&0!==this[t+r-1]&&(u=1),this[t+r]=(e/a>>0)-u&255;return t+n},r.prototype.writeIntBE=function(e,t,n,i){if(e=+e,t|=0,!i){var o=Math.pow(2,8*n-1);N(this,e,t,n,o-1,-o)}var r=n-1,a=1,u=0;for(this[t+r]=255&e;--r>=0&&(a*=256);)e<0&&0===u&&0!==this[t+r+1]&&(u=1),this[t+r]=(e/a>>0)-u&255;return t+n},r.prototype.writeInt8=function(e,t,n){return e=+e,t|=0,n||N(this,e,t,1,127,-128),r.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),e<0&&(e=255+e+1),this[t]=255&e,t+1},r.prototype.writeInt16LE=function(e,t,n){return e=+e,t|=0,n||N(this,e,t,2,32767,-32768),r.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):D(this,e,t,!0),t+2},r.prototype.writeInt16BE=function(e,t,n){return e=+e,t|=0,n||N(this,e,t,2,32767,-32768),r.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):D(this,e,t,!1),t+2},r.prototype.writeInt32LE=function(e,t,n){return e=+e,t|=0,n||N(this,e,t,4,2147483647,-2147483648),r.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24):j(this,e,t,!0),t+4},r.prototype.writeInt32BE=function(e,t,n){return e=+e,t|=0,n||N(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),r.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):j(this,e,t,!1),t+4},r.prototype.writeFloatLE=function(e,t,n){return B(this,e,t,!0,n)},r.prototype.writeFloatBE=function(e,t,n){return B(this,e,t,!1,n)},r.prototype.writeDoubleLE=function(e,t,n){return U(this,e,t,!0,n)},r.prototype.writeDoubleBE=function(e,t,n){return U(this,e,t,!1,n)},
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
r.prototype.copy=function(e,t,n,i){
// Copy 0 bytes; we're done
if(n||(n=0),i||0===i||(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===e.length||0===this.length)return 0;
// Fatal error conditions
if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds");if(i<0)throw new RangeError("sourceEnd out of bounds");
// Are we oob?
i>this.length&&(i=this.length),e.length-t<i-n&&(i=e.length-t+n);var o,a=i-n;if(this===e&&n<t&&t<i)
// descending copy from end
for(o=a-1;o>=0;--o)e[o+t]=this[o+n];else if(a<1e3||!r.TYPED_ARRAY_SUPPORT)
// ascending copy from start
for(o=0;o<a;++o)e[o+t]=this[o+n];else Uint8Array.prototype.set.call(e,this.subarray(n,n+a),t);return a},
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
r.prototype.fill=function(e,t,n,i){
// Handle string cases:
if("string"==typeof e){if("string"==typeof t?(i=t,t=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),1===e.length){var o=e.charCodeAt(0);o<256&&(e=o)}if(void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!r.isEncoding(i))throw new TypeError("Unknown encoding: "+i)}else"number"==typeof e&&(e&=255);
// Invalid ranges are not set to a default, so can range check early.
if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0);var a;if("number"==typeof e)for(a=t;a<n;++a)this[a]=e;else{var u=r.isBuffer(e)?e:V(new r(e,i).toString()),s=u.length;for(a=0;a<n-t;++a)this[a+t]=u[a%s]}return this};
// HELPER FUNCTIONS
// ================
var ee=/[^+\/0-9A-Za-z-_]/g}).call(t,n(95))},/***/
499:/***/
function(e,t,n){t=e.exports=n(171)(void 0),
// imports
// module
t.push([e.i,"/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:'FontAwesome';src:url("+n(504)+");src:url("+n(503)+"?#iefix&v=4.7.0) format('embedded-opentype'),url("+n(506)+") format('woff2'),url("+n(507)+") format('woff'),url("+n(505)+") format('truetype'),url("+n(511)+'#fontawesomeregular) format(\'svg\');font-weight:normal;font-style:normal}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.33333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.28571429em;text-align:center}.fa-ul{padding-left:0;margin-left:2.14285714em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.14285714em;width:2.14285714em;top:.14285714em;text-align:center}.fa-li.fa-lg{left:-1.85714286em}.fa-border{padding:.2em .25em .15em;border:solid .08em #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";-webkit-transform:scale(-1, 1);-ms-transform:scale(-1, 1);transform:scale(-1, 1)}.fa-flip-vertical{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";-webkit-transform:scale(1, -1);-ms-transform:scale(1, -1);transform:scale(1, -1)}:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-flip-horizontal,:root .fa-flip-vertical{filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:"\\F000"}.fa-music:before{content:"\\F001"}.fa-search:before{content:"\\F002"}.fa-envelope-o:before{content:"\\F003"}.fa-heart:before{content:"\\F004"}.fa-star:before{content:"\\F005"}.fa-star-o:before{content:"\\F006"}.fa-user:before{content:"\\F007"}.fa-film:before{content:"\\F008"}.fa-th-large:before{content:"\\F009"}.fa-th:before{content:"\\F00A"}.fa-th-list:before{content:"\\F00B"}.fa-check:before{content:"\\F00C"}.fa-remove:before,.fa-close:before,.fa-times:before{content:"\\F00D"}.fa-search-plus:before{content:"\\F00E"}.fa-search-minus:before{content:"\\F010"}.fa-power-off:before{content:"\\F011"}.fa-signal:before{content:"\\F012"}.fa-gear:before,.fa-cog:before{content:"\\F013"}.fa-trash-o:before{content:"\\F014"}.fa-home:before{content:"\\F015"}.fa-file-o:before{content:"\\F016"}.fa-clock-o:before{content:"\\F017"}.fa-road:before{content:"\\F018"}.fa-download:before{content:"\\F019"}.fa-arrow-circle-o-down:before{content:"\\F01A"}.fa-arrow-circle-o-up:before{content:"\\F01B"}.fa-inbox:before{content:"\\F01C"}.fa-play-circle-o:before{content:"\\F01D"}.fa-rotate-right:before,.fa-repeat:before{content:"\\F01E"}.fa-refresh:before{content:"\\F021"}.fa-list-alt:before{content:"\\F022"}.fa-lock:before{content:"\\F023"}.fa-flag:before{content:"\\F024"}.fa-headphones:before{content:"\\F025"}.fa-volume-off:before{content:"\\F026"}.fa-volume-down:before{content:"\\F027"}.fa-volume-up:before{content:"\\F028"}.fa-qrcode:before{content:"\\F029"}.fa-barcode:before{content:"\\F02A"}.fa-tag:before{content:"\\F02B"}.fa-tags:before{content:"\\F02C"}.fa-book:before{content:"\\F02D"}.fa-bookmark:before{content:"\\F02E"}.fa-print:before{content:"\\F02F"}.fa-camera:before{content:"\\F030"}.fa-font:before{content:"\\F031"}.fa-bold:before{content:"\\F032"}.fa-italic:before{content:"\\F033"}.fa-text-height:before{content:"\\F034"}.fa-text-width:before{content:"\\F035"}.fa-align-left:before{content:"\\F036"}.fa-align-center:before{content:"\\F037"}.fa-align-right:before{content:"\\F038"}.fa-align-justify:before{content:"\\F039"}.fa-list:before{content:"\\F03A"}.fa-dedent:before,.fa-outdent:before{content:"\\F03B"}.fa-indent:before{content:"\\F03C"}.fa-video-camera:before{content:"\\F03D"}.fa-photo:before,.fa-image:before,.fa-picture-o:before{content:"\\F03E"}.fa-pencil:before{content:"\\F040"}.fa-map-marker:before{content:"\\F041"}.fa-adjust:before{content:"\\F042"}.fa-tint:before{content:"\\F043"}.fa-edit:before,.fa-pencil-square-o:before{content:"\\F044"}.fa-share-square-o:before{content:"\\F045"}.fa-check-square-o:before{content:"\\F046"}.fa-arrows:before{content:"\\F047"}.fa-step-backward:before{content:"\\F048"}.fa-fast-backward:before{content:"\\F049"}.fa-backward:before{content:"\\F04A"}.fa-play:before{content:"\\F04B"}.fa-pause:before{content:"\\F04C"}.fa-stop:before{content:"\\F04D"}.fa-forward:before{content:"\\F04E"}.fa-fast-forward:before{content:"\\F050"}.fa-step-forward:before{content:"\\F051"}.fa-eject:before{content:"\\F052"}.fa-chevron-left:before{content:"\\F053"}.fa-chevron-right:before{content:"\\F054"}.fa-plus-circle:before{content:"\\F055"}.fa-minus-circle:before{content:"\\F056"}.fa-times-circle:before{content:"\\F057"}.fa-check-circle:before{content:"\\F058"}.fa-question-circle:before{content:"\\F059"}.fa-info-circle:before{content:"\\F05A"}.fa-crosshairs:before{content:"\\F05B"}.fa-times-circle-o:before{content:"\\F05C"}.fa-check-circle-o:before{content:"\\F05D"}.fa-ban:before{content:"\\F05E"}.fa-arrow-left:before{content:"\\F060"}.fa-arrow-right:before{content:"\\F061"}.fa-arrow-up:before{content:"\\F062"}.fa-arrow-down:before{content:"\\F063"}.fa-mail-forward:before,.fa-share:before{content:"\\F064"}.fa-expand:before{content:"\\F065"}.fa-compress:before{content:"\\F066"}.fa-plus:before{content:"\\F067"}.fa-minus:before{content:"\\F068"}.fa-asterisk:before{content:"\\F069"}.fa-exclamation-circle:before{content:"\\F06A"}.fa-gift:before{content:"\\F06B"}.fa-leaf:before{content:"\\F06C"}.fa-fire:before{content:"\\F06D"}.fa-eye:before{content:"\\F06E"}.fa-eye-slash:before{content:"\\F070"}.fa-warning:before,.fa-exclamation-triangle:before{content:"\\F071"}.fa-plane:before{content:"\\F072"}.fa-calendar:before{content:"\\F073"}.fa-random:before{content:"\\F074"}.fa-comment:before{content:"\\F075"}.fa-magnet:before{content:"\\F076"}.fa-chevron-up:before{content:"\\F077"}.fa-chevron-down:before{content:"\\F078"}.fa-retweet:before{content:"\\F079"}.fa-shopping-cart:before{content:"\\F07A"}.fa-folder:before{content:"\\F07B"}.fa-folder-open:before{content:"\\F07C"}.fa-arrows-v:before{content:"\\F07D"}.fa-arrows-h:before{content:"\\F07E"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:"\\F080"}.fa-twitter-square:before{content:"\\F081"}.fa-facebook-square:before{content:"\\F082"}.fa-camera-retro:before{content:"\\F083"}.fa-key:before{content:"\\F084"}.fa-gears:before,.fa-cogs:before{content:"\\F085"}.fa-comments:before{content:"\\F086"}.fa-thumbs-o-up:before{content:"\\F087"}.fa-thumbs-o-down:before{content:"\\F088"}.fa-star-half:before{content:"\\F089"}.fa-heart-o:before{content:"\\F08A"}.fa-sign-out:before{content:"\\F08B"}.fa-linkedin-square:before{content:"\\F08C"}.fa-thumb-tack:before{content:"\\F08D"}.fa-external-link:before{content:"\\F08E"}.fa-sign-in:before{content:"\\F090"}.fa-trophy:before{content:"\\F091"}.fa-github-square:before{content:"\\F092"}.fa-upload:before{content:"\\F093"}.fa-lemon-o:before{content:"\\F094"}.fa-phone:before{content:"\\F095"}.fa-square-o:before{content:"\\F096"}.fa-bookmark-o:before{content:"\\F097"}.fa-phone-square:before{content:"\\F098"}.fa-twitter:before{content:"\\F099"}.fa-facebook-f:before,.fa-facebook:before{content:"\\F09A"}.fa-github:before{content:"\\F09B"}.fa-unlock:before{content:"\\F09C"}.fa-credit-card:before{content:"\\F09D"}.fa-feed:before,.fa-rss:before{content:"\\F09E"}.fa-hdd-o:before{content:"\\F0A0"}.fa-bullhorn:before{content:"\\F0A1"}.fa-bell:before{content:"\\F0F3"}.fa-certificate:before{content:"\\F0A3"}.fa-hand-o-right:before{content:"\\F0A4"}.fa-hand-o-left:before{content:"\\F0A5"}.fa-hand-o-up:before{content:"\\F0A6"}.fa-hand-o-down:before{content:"\\F0A7"}.fa-arrow-circle-left:before{content:"\\F0A8"}.fa-arrow-circle-right:before{content:"\\F0A9"}.fa-arrow-circle-up:before{content:"\\F0AA"}.fa-arrow-circle-down:before{content:"\\F0AB"}.fa-globe:before{content:"\\F0AC"}.fa-wrench:before{content:"\\F0AD"}.fa-tasks:before{content:"\\F0AE"}.fa-filter:before{content:"\\F0B0"}.fa-briefcase:before{content:"\\F0B1"}.fa-arrows-alt:before{content:"\\F0B2"}.fa-group:before,.fa-users:before{content:"\\F0C0"}.fa-chain:before,.fa-link:before{content:"\\F0C1"}.fa-cloud:before{content:"\\F0C2"}.fa-flask:before{content:"\\F0C3"}.fa-cut:before,.fa-scissors:before{content:"\\F0C4"}.fa-copy:before,.fa-files-o:before{content:"\\F0C5"}.fa-paperclip:before{content:"\\F0C6"}.fa-save:before,.fa-floppy-o:before{content:"\\F0C7"}.fa-square:before{content:"\\F0C8"}.fa-navicon:before,.fa-reorder:before,.fa-bars:before{content:"\\F0C9"}.fa-list-ul:before{content:"\\F0CA"}.fa-list-ol:before{content:"\\F0CB"}.fa-strikethrough:before{content:"\\F0CC"}.fa-underline:before{content:"\\F0CD"}.fa-table:before{content:"\\F0CE"}.fa-magic:before{content:"\\F0D0"}.fa-truck:before{content:"\\F0D1"}.fa-pinterest:before{content:"\\F0D2"}.fa-pinterest-square:before{content:"\\F0D3"}.fa-google-plus-square:before{content:"\\F0D4"}.fa-google-plus:before{content:"\\F0D5"}.fa-money:before{content:"\\F0D6"}.fa-caret-down:before{content:"\\F0D7"}.fa-caret-up:before{content:"\\F0D8"}.fa-caret-left:before{content:"\\F0D9"}.fa-caret-right:before{content:"\\F0DA"}.fa-columns:before{content:"\\F0DB"}.fa-unsorted:before,.fa-sort:before{content:"\\F0DC"}.fa-sort-down:before,.fa-sort-desc:before{content:"\\F0DD"}.fa-sort-up:before,.fa-sort-asc:before{content:"\\F0DE"}.fa-envelope:before{content:"\\F0E0"}.fa-linkedin:before{content:"\\F0E1"}.fa-rotate-left:before,.fa-undo:before{content:"\\F0E2"}.fa-legal:before,.fa-gavel:before{content:"\\F0E3"}.fa-dashboard:before,.fa-tachometer:before{content:"\\F0E4"}.fa-comment-o:before{content:"\\F0E5"}.fa-comments-o:before{content:"\\F0E6"}.fa-flash:before,.fa-bolt:before{content:"\\F0E7"}.fa-sitemap:before{content:"\\F0E8"}.fa-umbrella:before{content:"\\F0E9"}.fa-paste:before,.fa-clipboard:before{content:"\\F0EA"}.fa-lightbulb-o:before{content:"\\F0EB"}.fa-exchange:before{content:"\\F0EC"}.fa-cloud-download:before{content:"\\F0ED"}.fa-cloud-upload:before{content:"\\F0EE"}.fa-user-md:before{content:"\\F0F0"}.fa-stethoscope:before{content:"\\F0F1"}.fa-suitcase:before{content:"\\F0F2"}.fa-bell-o:before{content:"\\F0A2"}.fa-coffee:before{content:"\\F0F4"}.fa-cutlery:before{content:"\\F0F5"}.fa-file-text-o:before{content:"\\F0F6"}.fa-building-o:before{content:"\\F0F7"}.fa-hospital-o:before{content:"\\F0F8"}.fa-ambulance:before{content:"\\F0F9"}.fa-medkit:before{content:"\\F0FA"}.fa-fighter-jet:before{content:"\\F0FB"}.fa-beer:before{content:"\\F0FC"}.fa-h-square:before{content:"\\F0FD"}.fa-plus-square:before{content:"\\F0FE"}.fa-angle-double-left:before{content:"\\F100"}.fa-angle-double-right:before{content:"\\F101"}.fa-angle-double-up:before{content:"\\F102"}.fa-angle-double-down:before{content:"\\F103"}.fa-angle-left:before{content:"\\F104"}.fa-angle-right:before{content:"\\F105"}.fa-angle-up:before{content:"\\F106"}.fa-angle-down:before{content:"\\F107"}.fa-desktop:before{content:"\\F108"}.fa-laptop:before{content:"\\F109"}.fa-tablet:before{content:"\\F10A"}.fa-mobile-phone:before,.fa-mobile:before{content:"\\F10B"}.fa-circle-o:before{content:"\\F10C"}.fa-quote-left:before{content:"\\F10D"}.fa-quote-right:before{content:"\\F10E"}.fa-spinner:before{content:"\\F110"}.fa-circle:before{content:"\\F111"}.fa-mail-reply:before,.fa-reply:before{content:"\\F112"}.fa-github-alt:before{content:"\\F113"}.fa-folder-o:before{content:"\\F114"}.fa-folder-open-o:before{content:"\\F115"}.fa-smile-o:before{content:"\\F118"}.fa-frown-o:before{content:"\\F119"}.fa-meh-o:before{content:"\\F11A"}.fa-gamepad:before{content:"\\F11B"}.fa-keyboard-o:before{content:"\\F11C"}.fa-flag-o:before{content:"\\F11D"}.fa-flag-checkered:before{content:"\\F11E"}.fa-terminal:before{content:"\\F120"}.fa-code:before{content:"\\F121"}.fa-mail-reply-all:before,.fa-reply-all:before{content:"\\F122"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:"\\F123"}.fa-location-arrow:before{content:"\\F124"}.fa-crop:before{content:"\\F125"}.fa-code-fork:before{content:"\\F126"}.fa-unlink:before,.fa-chain-broken:before{content:"\\F127"}.fa-question:before{content:"\\F128"}.fa-info:before{content:"\\F129"}.fa-exclamation:before{content:"\\F12A"}.fa-superscript:before{content:"\\F12B"}.fa-subscript:before{content:"\\F12C"}.fa-eraser:before{content:"\\F12D"}.fa-puzzle-piece:before{content:"\\F12E"}.fa-microphone:before{content:"\\F130"}.fa-microphone-slash:before{content:"\\F131"}.fa-shield:before{content:"\\F132"}.fa-calendar-o:before{content:"\\F133"}.fa-fire-extinguisher:before{content:"\\F134"}.fa-rocket:before{content:"\\F135"}.fa-maxcdn:before{content:"\\F136"}.fa-chevron-circle-left:before{content:"\\F137"}.fa-chevron-circle-right:before{content:"\\F138"}.fa-chevron-circle-up:before{content:"\\F139"}.fa-chevron-circle-down:before{content:"\\F13A"}.fa-html5:before{content:"\\F13B"}.fa-css3:before{content:"\\F13C"}.fa-anchor:before{content:"\\F13D"}.fa-unlock-alt:before{content:"\\F13E"}.fa-bullseye:before{content:"\\F140"}.fa-ellipsis-h:before{content:"\\F141"}.fa-ellipsis-v:before{content:"\\F142"}.fa-rss-square:before{content:"\\F143"}.fa-play-circle:before{content:"\\F144"}.fa-ticket:before{content:"\\F145"}.fa-minus-square:before{content:"\\F146"}.fa-minus-square-o:before{content:"\\F147"}.fa-level-up:before{content:"\\F148"}.fa-level-down:before{content:"\\F149"}.fa-check-square:before{content:"\\F14A"}.fa-pencil-square:before{content:"\\F14B"}.fa-external-link-square:before{content:"\\F14C"}.fa-share-square:before{content:"\\F14D"}.fa-compass:before{content:"\\F14E"}.fa-toggle-down:before,.fa-caret-square-o-down:before{content:"\\F150"}.fa-toggle-up:before,.fa-caret-square-o-up:before{content:"\\F151"}.fa-toggle-right:before,.fa-caret-square-o-right:before{content:"\\F152"}.fa-euro:before,.fa-eur:before{content:"\\F153"}.fa-gbp:before{content:"\\F154"}.fa-dollar:before,.fa-usd:before{content:"\\F155"}.fa-rupee:before,.fa-inr:before{content:"\\F156"}.fa-cny:before,.fa-rmb:before,.fa-yen:before,.fa-jpy:before{content:"\\F157"}.fa-ruble:before,.fa-rouble:before,.fa-rub:before{content:"\\F158"}.fa-won:before,.fa-krw:before{content:"\\F159"}.fa-bitcoin:before,.fa-btc:before{content:"\\F15A"}.fa-file:before{content:"\\F15B"}.fa-file-text:before{content:"\\F15C"}.fa-sort-alpha-asc:before{content:"\\F15D"}.fa-sort-alpha-desc:before{content:"\\F15E"}.fa-sort-amount-asc:before{content:"\\F160"}.fa-sort-amount-desc:before{content:"\\F161"}.fa-sort-numeric-asc:before{content:"\\F162"}.fa-sort-numeric-desc:before{content:"\\F163"}.fa-thumbs-up:before{content:"\\F164"}.fa-thumbs-down:before{content:"\\F165"}.fa-youtube-square:before{content:"\\F166"}.fa-youtube:before{content:"\\F167"}.fa-xing:before{content:"\\F168"}.fa-xing-square:before{content:"\\F169"}.fa-youtube-play:before{content:"\\F16A"}.fa-dropbox:before{content:"\\F16B"}.fa-stack-overflow:before{content:"\\F16C"}.fa-instagram:before{content:"\\F16D"}.fa-flickr:before{content:"\\F16E"}.fa-adn:before{content:"\\F170"}.fa-bitbucket:before{content:"\\F171"}.fa-bitbucket-square:before{content:"\\F172"}.fa-tumblr:before{content:"\\F173"}.fa-tumblr-square:before{content:"\\F174"}.fa-long-arrow-down:before{content:"\\F175"}.fa-long-arrow-up:before{content:"\\F176"}.fa-long-arrow-left:before{content:"\\F177"}.fa-long-arrow-right:before{content:"\\F178"}.fa-apple:before{content:"\\F179"}.fa-windows:before{content:"\\F17A"}.fa-android:before{content:"\\F17B"}.fa-linux:before{content:"\\F17C"}.fa-dribbble:before{content:"\\F17D"}.fa-skype:before{content:"\\F17E"}.fa-foursquare:before{content:"\\F180"}.fa-trello:before{content:"\\F181"}.fa-female:before{content:"\\F182"}.fa-male:before{content:"\\F183"}.fa-gittip:before,.fa-gratipay:before{content:"\\F184"}.fa-sun-o:before{content:"\\F185"}.fa-moon-o:before{content:"\\F186"}.fa-archive:before{content:"\\F187"}.fa-bug:before{content:"\\F188"}.fa-vk:before{content:"\\F189"}.fa-weibo:before{content:"\\F18A"}.fa-renren:before{content:"\\F18B"}.fa-pagelines:before{content:"\\F18C"}.fa-stack-exchange:before{content:"\\F18D"}.fa-arrow-circle-o-right:before{content:"\\F18E"}.fa-arrow-circle-o-left:before{content:"\\F190"}.fa-toggle-left:before,.fa-caret-square-o-left:before{content:"\\F191"}.fa-dot-circle-o:before{content:"\\F192"}.fa-wheelchair:before{content:"\\F193"}.fa-vimeo-square:before{content:"\\F194"}.fa-turkish-lira:before,.fa-try:before{content:"\\F195"}.fa-plus-square-o:before{content:"\\F196"}.fa-space-shuttle:before{content:"\\F197"}.fa-slack:before{content:"\\F198"}.fa-envelope-square:before{content:"\\F199"}.fa-wordpress:before{content:"\\F19A"}.fa-openid:before{content:"\\F19B"}.fa-institution:before,.fa-bank:before,.fa-university:before{content:"\\F19C"}.fa-mortar-board:before,.fa-graduation-cap:before{content:"\\F19D"}.fa-yahoo:before{content:"\\F19E"}.fa-google:before{content:"\\F1A0"}.fa-reddit:before{content:"\\F1A1"}.fa-reddit-square:before{content:"\\F1A2"}.fa-stumbleupon-circle:before{content:"\\F1A3"}.fa-stumbleupon:before{content:"\\F1A4"}.fa-delicious:before{content:"\\F1A5"}.fa-digg:before{content:"\\F1A6"}.fa-pied-piper-pp:before{content:"\\F1A7"}.fa-pied-piper-alt:before{content:"\\F1A8"}.fa-drupal:before{content:"\\F1A9"}.fa-joomla:before{content:"\\F1AA"}.fa-language:before{content:"\\F1AB"}.fa-fax:before{content:"\\F1AC"}.fa-building:before{content:"\\F1AD"}.fa-child:before{content:"\\F1AE"}.fa-paw:before{content:"\\F1B0"}.fa-spoon:before{content:"\\F1B1"}.fa-cube:before{content:"\\F1B2"}.fa-cubes:before{content:"\\F1B3"}.fa-behance:before{content:"\\F1B4"}.fa-behance-square:before{content:"\\F1B5"}.fa-steam:before{content:"\\F1B6"}.fa-steam-square:before{content:"\\F1B7"}.fa-recycle:before{content:"\\F1B8"}.fa-automobile:before,.fa-car:before{content:"\\F1B9"}.fa-cab:before,.fa-taxi:before{content:"\\F1BA"}.fa-tree:before{content:"\\F1BB"}.fa-spotify:before{content:"\\F1BC"}.fa-deviantart:before{content:"\\F1BD"}.fa-soundcloud:before{content:"\\F1BE"}.fa-database:before{content:"\\F1C0"}.fa-file-pdf-o:before{content:"\\F1C1"}.fa-file-word-o:before{content:"\\F1C2"}.fa-file-excel-o:before{content:"\\F1C3"}.fa-file-powerpoint-o:before{content:"\\F1C4"}.fa-file-photo-o:before,.fa-file-picture-o:before,.fa-file-image-o:before{content:"\\F1C5"}.fa-file-zip-o:before,.fa-file-archive-o:before{content:"\\F1C6"}.fa-file-sound-o:before,.fa-file-audio-o:before{content:"\\F1C7"}.fa-file-movie-o:before,.fa-file-video-o:before{content:"\\F1C8"}.fa-file-code-o:before{content:"\\F1C9"}.fa-vine:before{content:"\\F1CA"}.fa-codepen:before{content:"\\F1CB"}.fa-jsfiddle:before{content:"\\F1CC"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-saver:before,.fa-support:before,.fa-life-ring:before{content:"\\F1CD"}.fa-circle-o-notch:before{content:"\\F1CE"}.fa-ra:before,.fa-resistance:before,.fa-rebel:before{content:"\\F1D0"}.fa-ge:before,.fa-empire:before{content:"\\F1D1"}.fa-git-square:before{content:"\\F1D2"}.fa-git:before{content:"\\F1D3"}.fa-y-combinator-square:before,.fa-yc-square:before,.fa-hacker-news:before{content:"\\F1D4"}.fa-tencent-weibo:before{content:"\\F1D5"}.fa-qq:before{content:"\\F1D6"}.fa-wechat:before,.fa-weixin:before{content:"\\F1D7"}.fa-send:before,.fa-paper-plane:before{content:"\\F1D8"}.fa-send-o:before,.fa-paper-plane-o:before{content:"\\F1D9"}.fa-history:before{content:"\\F1DA"}.fa-circle-thin:before{content:"\\F1DB"}.fa-header:before{content:"\\F1DC"}.fa-paragraph:before{content:"\\F1DD"}.fa-sliders:before{content:"\\F1DE"}.fa-share-alt:before{content:"\\F1E0"}.fa-share-alt-square:before{content:"\\F1E1"}.fa-bomb:before{content:"\\F1E2"}.fa-soccer-ball-o:before,.fa-futbol-o:before{content:"\\F1E3"}.fa-tty:before{content:"\\F1E4"}.fa-binoculars:before{content:"\\F1E5"}.fa-plug:before{content:"\\F1E6"}.fa-slideshare:before{content:"\\F1E7"}.fa-twitch:before{content:"\\F1E8"}.fa-yelp:before{content:"\\F1E9"}.fa-newspaper-o:before{content:"\\F1EA"}.fa-wifi:before{content:"\\F1EB"}.fa-calculator:before{content:"\\F1EC"}.fa-paypal:before{content:"\\F1ED"}.fa-google-wallet:before{content:"\\F1EE"}.fa-cc-visa:before{content:"\\F1F0"}.fa-cc-mastercard:before{content:"\\F1F1"}.fa-cc-discover:before{content:"\\F1F2"}.fa-cc-amex:before{content:"\\F1F3"}.fa-cc-paypal:before{content:"\\F1F4"}.fa-cc-stripe:before{content:"\\F1F5"}.fa-bell-slash:before{content:"\\F1F6"}.fa-bell-slash-o:before{content:"\\F1F7"}.fa-trash:before{content:"\\F1F8"}.fa-copyright:before{content:"\\F1F9"}.fa-at:before{content:"\\F1FA"}.fa-eyedropper:before{content:"\\F1FB"}.fa-paint-brush:before{content:"\\F1FC"}.fa-birthday-cake:before{content:"\\F1FD"}.fa-area-chart:before{content:"\\F1FE"}.fa-pie-chart:before{content:"\\F200"}.fa-line-chart:before{content:"\\F201"}.fa-lastfm:before{content:"\\F202"}.fa-lastfm-square:before{content:"\\F203"}.fa-toggle-off:before{content:"\\F204"}.fa-toggle-on:before{content:"\\F205"}.fa-bicycle:before{content:"\\F206"}.fa-bus:before{content:"\\F207"}.fa-ioxhost:before{content:"\\F208"}.fa-angellist:before{content:"\\F209"}.fa-cc:before{content:"\\F20A"}.fa-shekel:before,.fa-sheqel:before,.fa-ils:before{content:"\\F20B"}.fa-meanpath:before{content:"\\F20C"}.fa-buysellads:before{content:"\\F20D"}.fa-connectdevelop:before{content:"\\F20E"}.fa-dashcube:before{content:"\\F210"}.fa-forumbee:before{content:"\\F211"}.fa-leanpub:before{content:"\\F212"}.fa-sellsy:before{content:"\\F213"}.fa-shirtsinbulk:before{content:"\\F214"}.fa-simplybuilt:before{content:"\\F215"}.fa-skyatlas:before{content:"\\F216"}.fa-cart-plus:before{content:"\\F217"}.fa-cart-arrow-down:before{content:"\\F218"}.fa-diamond:before{content:"\\F219"}.fa-ship:before{content:"\\F21A"}.fa-user-secret:before{content:"\\F21B"}.fa-motorcycle:before{content:"\\F21C"}.fa-street-view:before{content:"\\F21D"}.fa-heartbeat:before{content:"\\F21E"}.fa-venus:before{content:"\\F221"}.fa-mars:before{content:"\\F222"}.fa-mercury:before{content:"\\F223"}.fa-intersex:before,.fa-transgender:before{content:"\\F224"}.fa-transgender-alt:before{content:"\\F225"}.fa-venus-double:before{content:"\\F226"}.fa-mars-double:before{content:"\\F227"}.fa-venus-mars:before{content:"\\F228"}.fa-mars-stroke:before{content:"\\F229"}.fa-mars-stroke-v:before{content:"\\F22A"}.fa-mars-stroke-h:before{content:"\\F22B"}.fa-neuter:before{content:"\\F22C"}.fa-genderless:before{content:"\\F22D"}.fa-facebook-official:before{content:"\\F230"}.fa-pinterest-p:before{content:"\\F231"}.fa-whatsapp:before{content:"\\F232"}.fa-server:before{content:"\\F233"}.fa-user-plus:before{content:"\\F234"}.fa-user-times:before{content:"\\F235"}.fa-hotel:before,.fa-bed:before{content:"\\F236"}.fa-viacoin:before{content:"\\F237"}.fa-train:before{content:"\\F238"}.fa-subway:before{content:"\\F239"}.fa-medium:before{content:"\\F23A"}.fa-yc:before,.fa-y-combinator:before{content:"\\F23B"}.fa-optin-monster:before{content:"\\F23C"}.fa-opencart:before{content:"\\F23D"}.fa-expeditedssl:before{content:"\\F23E"}.fa-battery-4:before,.fa-battery:before,.fa-battery-full:before{content:"\\F240"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:"\\F241"}.fa-battery-2:before,.fa-battery-half:before{content:"\\F242"}.fa-battery-1:before,.fa-battery-quarter:before{content:"\\F243"}.fa-battery-0:before,.fa-battery-empty:before{content:"\\F244"}.fa-mouse-pointer:before{content:"\\F245"}.fa-i-cursor:before{content:"\\F246"}.fa-object-group:before{content:"\\F247"}.fa-object-ungroup:before{content:"\\F248"}.fa-sticky-note:before{content:"\\F249"}.fa-sticky-note-o:before{content:"\\F24A"}.fa-cc-jcb:before{content:"\\F24B"}.fa-cc-diners-club:before{content:"\\F24C"}.fa-clone:before{content:"\\F24D"}.fa-balance-scale:before{content:"\\F24E"}.fa-hourglass-o:before{content:"\\F250"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:"\\F251"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:"\\F252"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:"\\F253"}.fa-hourglass:before{content:"\\F254"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:"\\F255"}.fa-hand-stop-o:before,.fa-hand-paper-o:before{content:"\\F256"}.fa-hand-scissors-o:before{content:"\\F257"}.fa-hand-lizard-o:before{content:"\\F258"}.fa-hand-spock-o:before{content:"\\F259"}.fa-hand-pointer-o:before{content:"\\F25A"}.fa-hand-peace-o:before{content:"\\F25B"}.fa-trademark:before{content:"\\F25C"}.fa-registered:before{content:"\\F25D"}.fa-creative-commons:before{content:"\\F25E"}.fa-gg:before{content:"\\F260"}.fa-gg-circle:before{content:"\\F261"}.fa-tripadvisor:before{content:"\\F262"}.fa-odnoklassniki:before{content:"\\F263"}.fa-odnoklassniki-square:before{content:"\\F264"}.fa-get-pocket:before{content:"\\F265"}.fa-wikipedia-w:before{content:"\\F266"}.fa-safari:before{content:"\\F267"}.fa-chrome:before{content:"\\F268"}.fa-firefox:before{content:"\\F269"}.fa-opera:before{content:"\\F26A"}.fa-internet-explorer:before{content:"\\F26B"}.fa-tv:before,.fa-television:before{content:"\\F26C"}.fa-contao:before{content:"\\F26D"}.fa-500px:before{content:"\\F26E"}.fa-amazon:before{content:"\\F270"}.fa-calendar-plus-o:before{content:"\\F271"}.fa-calendar-minus-o:before{content:"\\F272"}.fa-calendar-times-o:before{content:"\\F273"}.fa-calendar-check-o:before{content:"\\F274"}.fa-industry:before{content:"\\F275"}.fa-map-pin:before{content:"\\F276"}.fa-map-signs:before{content:"\\F277"}.fa-map-o:before{content:"\\F278"}.fa-map:before{content:"\\F279"}.fa-commenting:before{content:"\\F27A"}.fa-commenting-o:before{content:"\\F27B"}.fa-houzz:before{content:"\\F27C"}.fa-vimeo:before{content:"\\F27D"}.fa-black-tie:before{content:"\\F27E"}.fa-fonticons:before{content:"\\F280"}.fa-reddit-alien:before{content:"\\F281"}.fa-edge:before{content:"\\F282"}.fa-credit-card-alt:before{content:"\\F283"}.fa-codiepie:before{content:"\\F284"}.fa-modx:before{content:"\\F285"}.fa-fort-awesome:before{content:"\\F286"}.fa-usb:before{content:"\\F287"}.fa-product-hunt:before{content:"\\F288"}.fa-mixcloud:before{content:"\\F289"}.fa-scribd:before{content:"\\F28A"}.fa-pause-circle:before{content:"\\F28B"}.fa-pause-circle-o:before{content:"\\F28C"}.fa-stop-circle:before{content:"\\F28D"}.fa-stop-circle-o:before{content:"\\F28E"}.fa-shopping-bag:before{content:"\\F290"}.fa-shopping-basket:before{content:"\\F291"}.fa-hashtag:before{content:"\\F292"}.fa-bluetooth:before{content:"\\F293"}.fa-bluetooth-b:before{content:"\\F294"}.fa-percent:before{content:"\\F295"}.fa-gitlab:before{content:"\\F296"}.fa-wpbeginner:before{content:"\\F297"}.fa-wpforms:before{content:"\\F298"}.fa-envira:before{content:"\\F299"}.fa-universal-access:before{content:"\\F29A"}.fa-wheelchair-alt:before{content:"\\F29B"}.fa-question-circle-o:before{content:"\\F29C"}.fa-blind:before{content:"\\F29D"}.fa-audio-description:before{content:"\\F29E"}.fa-volume-control-phone:before{content:"\\F2A0"}.fa-braille:before{content:"\\F2A1"}.fa-assistive-listening-systems:before{content:"\\F2A2"}.fa-asl-interpreting:before,.fa-american-sign-language-interpreting:before{content:"\\F2A3"}.fa-deafness:before,.fa-hard-of-hearing:before,.fa-deaf:before{content:"\\F2A4"}.fa-glide:before{content:"\\F2A5"}.fa-glide-g:before{content:"\\F2A6"}.fa-signing:before,.fa-sign-language:before{content:"\\F2A7"}.fa-low-vision:before{content:"\\F2A8"}.fa-viadeo:before{content:"\\F2A9"}.fa-viadeo-square:before{content:"\\F2AA"}.fa-snapchat:before{content:"\\F2AB"}.fa-snapchat-ghost:before{content:"\\F2AC"}.fa-snapchat-square:before{content:"\\F2AD"}.fa-pied-piper:before{content:"\\F2AE"}.fa-first-order:before{content:"\\F2B0"}.fa-yoast:before{content:"\\F2B1"}.fa-themeisle:before{content:"\\F2B2"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:"\\F2B3"}.fa-fa:before,.fa-font-awesome:before{content:"\\F2B4"}.fa-handshake-o:before{content:"\\F2B5"}.fa-envelope-open:before{content:"\\F2B6"}.fa-envelope-open-o:before{content:"\\F2B7"}.fa-linode:before{content:"\\F2B8"}.fa-address-book:before{content:"\\F2B9"}.fa-address-book-o:before{content:"\\F2BA"}.fa-vcard:before,.fa-address-card:before{content:"\\F2BB"}.fa-vcard-o:before,.fa-address-card-o:before{content:"\\F2BC"}.fa-user-circle:before{content:"\\F2BD"}.fa-user-circle-o:before{content:"\\F2BE"}.fa-user-o:before{content:"\\F2C0"}.fa-id-badge:before{content:"\\F2C1"}.fa-drivers-license:before,.fa-id-card:before{content:"\\F2C2"}.fa-drivers-license-o:before,.fa-id-card-o:before{content:"\\F2C3"}.fa-quora:before{content:"\\F2C4"}.fa-free-code-camp:before{content:"\\F2C5"}.fa-telegram:before{content:"\\F2C6"}.fa-thermometer-4:before,.fa-thermometer:before,.fa-thermometer-full:before{content:"\\F2C7"}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:"\\F2C8"}.fa-thermometer-2:before,.fa-thermometer-half:before{content:"\\F2C9"}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:"\\F2CA"}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:"\\F2CB"}.fa-shower:before{content:"\\F2CC"}.fa-bathtub:before,.fa-s15:before,.fa-bath:before{content:"\\F2CD"}.fa-podcast:before{content:"\\F2CE"}.fa-window-maximize:before{content:"\\F2D0"}.fa-window-minimize:before{content:"\\F2D1"}.fa-window-restore:before{content:"\\F2D2"}.fa-times-rectangle:before,.fa-window-close:before{content:"\\F2D3"}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:"\\F2D4"}.fa-bandcamp:before{content:"\\F2D5"}.fa-grav:before{content:"\\F2D6"}.fa-etsy:before{content:"\\F2D7"}.fa-imdb:before{content:"\\F2D8"}.fa-ravelry:before{content:"\\F2D9"}.fa-eercast:before{content:"\\F2DA"}.fa-microchip:before{content:"\\F2DB"}.fa-snowflake-o:before{content:"\\F2DC"}.fa-superpowers:before{content:"\\F2DD"}.fa-wpexplorer:before{content:"\\F2DE"}.fa-meetup:before{content:"\\F2E0"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}\n',""])},/***/
500:/***/
function(e,t,n){t=e.exports=n(171)(void 0),
// imports
// module
t.push([e.i,'.ui-widget *{box-sizing:border-box}.ui-helper-hidden{display:none}.ui-helper-hidden-accessible{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.ui-helper-reset{margin:0;padding:0;border:0;outline:0;line-height:1.3;text-decoration:none;font-size:100%;list-style:none}.ui-helper-clearfix:before,.ui-helper-clearfix:after{content:"";display:table}.ui-helper-clearfix:after{clear:both}.ui-helper-clearfix{zoom:1}.ui-helper-zfix{width:100%;height:100%;top:0;left:0;position:absolute;opacity:0;filter:Alpha(Opacity=0)}.ui-state-disabled{cursor:default !important}.ui-state-disabled a{cursor:default !important}.ui-icon{display:block;text-indent:-99999px;overflow:hidden;background-repeat:no-repeat}.ui-widget-overlay{position:absolute;top:0;left:0;width:100%;height:100%}.ui-resizable{position:relative}.ui-resizable-handle{position:absolute;font-size:.1px;display:block}.ui-resizable-disabled .ui-resizable-handle,.ui-resizable-autohide .ui-resizable-handle{display:none}.ui-resizable-n{cursor:n-resize;height:7px;width:100%;top:-5px;left:0}.ui-resizable-s{cursor:s-resize;height:7px;width:100%;bottom:-5px;left:0}.ui-resizable-e{cursor:e-resize;width:7px;right:-5px;top:0;height:100%}.ui-resizable-w{cursor:w-resize;width:7px;left:-5px;top:0;height:100%}.ui-resizable-se{cursor:se-resize;width:12px;height:12px;right:1px;bottom:1px}.ui-resizable-sw{cursor:sw-resize;width:9px;height:9px;left:-5px;bottom:-5px}.ui-resizable-nw{cursor:nw-resize;width:9px;height:9px;left:-5px;top:-5px}.ui-resizable-ne{cursor:ne-resize;width:9px;height:9px;right:-5px;top:-5px}.ui-shadow{-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,0.3);-moz-box-shadow:0 1px 3px 0 rgba(0,0,0,0.3);box-shadow:0 1px 3px 0 rgba(0,0,0,0.3)}.ui-unselectable-text{-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;user-select:none}.ui-scrollbar-measure{width:100px;height:100px;overflow:scroll;position:absolute;top:-9999px}.ui-accordion{width:100%}.ui-accordion .ui-accordion-header{cursor:pointer;position:relative;margin-top:1px;zoom:1}.ui-accordion .ui-accordion-header a{display:block;padding:.5em .5em .5em 2em}.ui-accordion .ui-accordion-header .fa{position:absolute;left:.5em;top:50%;margin-top:-.5em}.ui-accordion .ui-accordion-content{padding:1em;border-top:0;overflow:visible;zoom:1}.ui-accordion .ui-accordion-header.ui-state-disabled,.ui-accordion .ui-accordion-header.ui-state-disabled a{cursor:default}.ui-accordion-content-wrapper-overflown{overflow:hidden}.ui-blockui{position:absolute;top:0;left:0;width:100%;height:100%}.ui-blockui-document{position:fixed}.ui-autocomplete{width:auto;zoom:1;cursor:pointer;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;position:relative;display:inline-block}.ui-autocomplete .ui-autocomplete-dropdown{height:100%;width:2em;margin-right:0;vertical-align:top}.ui-autocomplete-query{font-weight:bold}.ui-autocomplete-panel{position:absolute;overflow:auto}.ui-autocomplete-panel .ui-autocomplete-list{padding:.4em;border:0 none}.ui-autocomplete-panel .ui-autocomplete-list-item{border:0 none;cursor:pointer;font-weight:normal;margin:1px 0;padding:.186em .313em;text-align:left}.ui-autocomplete .ui-button-icon-only,.ui-autocomplete .ui-button-icon-only:hover,.ui-autocomplete .ui-button-icon-only:focus,.ui-autocomplete .ui-button-icon-only:active{border-left:0 none}.ui-autocomplete-multiple-container{display:inline-block}.ui-autocomplete-multiple-container.ui-inputtext{clear:left;cursor:text;list-style-type:none;margin:0;overflow:hidden;padding:0 .25em}.ui-autocomplete-token{cursor:default;display:inline-block;vertical-align:middle;overflow:hidden;padding:.125em .5em;white-space:nowrap;position:relative;margin-right:.125em;border:0 none;font-size:.9em}.ui-autocomplete-token-label{display:block;margin-right:2em}.ui-autocomplete-token-icon{margin-top:-.5em;position:absolute;right:.2em;top:50%;cursor:pointer}.ui-autocomplete-input-token{display:inline-block;vertical-align:middle;list-style-type:none;margin:0 0 0 .125em;padding:.25em .25em .25em 0}.ui-autocomplete-input-token input{border:0 none;width:10em;outline:medium none;background-color:transparent;margin:0;padding:0;box-shadow:none;-moz-border-radius:0;-webkit-border-radius:0;border-radius:0}.ui-autocomplete-dd input.ui-corner-all,.ui-autocomplete-dd .ui-autocomplete-multiple-container.ui-corner-all{-moz-border-radius-topright:0;-webkit-border-top-right-radius:0;border-top-right-radius:0;-moz-border-radius-bottomright:0;-webkit-border-bottom-right-radius:0;border-bottom-right-radius:0}.ui-autocomplete-dd .ui-autocomplete-dropdown.ui-corner-all{-moz-border-radius-topleft:0;-webkit-border-top-left-radius:0;border-top-left-radius:0;-moz-border-radius-bottomleft:0;-webkit-border-bottom-left-radius:0;border-bottom-left-radius:0}.ui-fluid .ui-autocomplete,.ui-fluid .ui-autocomplete-input{width:100%}.ui-fluid .ui-autocomplete.ui-autocomplete-dd .ui-autocomplete-input,.ui-fluid .ui-autocomplete.ui-autocomplete-dd .ui-autocomplete-multiple-container{width:calc(100% - 2em)}.ui-fluid .ui-autocomplete .ui-autocomplete-dropdown.ui-button{width:2em}.ui-breadcrumb{margin:0;padding:0;padding:.3em}.ui-breadcrumb ul{margin:0;padding:0}.ui-breadcrumb ul li{display:inline-block;vertical-align:middle}.ui-breadcrumb ul li .ui-menuitem-link{text-decoration:none}.ui-button{display:inline-block;position:relative;padding:0;margin-right:.1em;text-decoration:none !important;cursor:pointer;text-align:center;zoom:1;overflow:visible}.ui-button-icon-only{width:2em}.ui-button .ui-button-text{display:block;line-height:normal}.ui-button-text-only .ui-button-text{padding:.25em 1em}.ui-button-icon-only .ui-button-text{padding:.25em;text-indent:-9999999px}.ui-button-text-icon-left .ui-button-text{padding:.25em 1em .25em 2.1em}.ui-button-text-icon-right .ui-button-text{padding:.25em 2.1em .25em 1em}.ui-button-icon-only .fa,.ui-button-text-icon-left .fa,.ui-button-text-icon-right .fa{position:absolute;top:50%;margin-top:-.5em}.ui-button-icon-only .fa{top:50%;left:50%;margin-top:-.5em;margin-left:-.6em}.ui-button-icon-left{left:.5em}.ui-button-icon-right{right:.5em}.ui-buttonset .ui-button{margin-left:0;margin-right:0}button.ui-button::-moz-focus-inner{border:0;padding:0}.ui-fluid .ui-button{width:100%;box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box}.ui-fluid .ui-button-text-icon-left .ui-button-text,.ui-fluid .ui-button-text-icon-right .ui-button-text{padding-left:1em;padding-right:1em}.ui-fluid .ui-buttonset{width:100%}.ui-fluid .ui-buttonset.ui-buttonset-1 .ui-button{width:100%}.ui-fluid .ui-buttonset.ui-buttonset-2 .ui-button{width:50%}.ui-fluid .ui-buttonset.ui-buttonset-3 .ui-button{width:33.3%}.ui-fluid .ui-buttonset.ui-buttonset-4 .ui-button{width:25%}.ui-fluid .ui-buttonset.ui-buttonset-5 .ui-button{width:20%}.ui-fluid .ui-buttonset.ui-buttonset-6 .ui-button{width:16.6%}@media(max-width:640px){.ui-fluid .ui-buttonset.ui-buttonset-1 .ui-button,.ui-fluid .ui-buttonset.ui-buttonset-2 .ui-button,.ui-fluid .ui-buttonset.ui-buttonset-3 .ui-button,.ui-fluid .ui-buttonset.ui-buttonset-4 .ui-button,.ui-fluid .ui-buttonset.ui-buttonset-5 .ui-button,.ui-fluid .ui-buttonset.ui-buttonset-6 .ui-button{width:100%}}.ui-button.ui-button-secondary.ui-state-default{background-color:#fff;border-color:#ccc;color:#373a3c}.ui-button.ui-button-secondary:enabled:hover,.ui-button.ui-button-secondary:focus{background-color:#f2f2f2}.ui-button.ui-button-secondary:enabled:active{background-color:#e6e6e6}.ui-button.ui-button-success.ui-state-default{background-color:#5cb85c;border-color:#5cb85c;color:#fff}.ui-button.ui-button-success:enabled:hover,.ui-button.ui-button-success:focus{background-color:#4cae4c}.ui-button.ui-button-success:enabled:active{background-color:#449d44}.ui-button.ui-button-info.ui-state-default{background-color:#5bc0de;border-color:#5bc0de;color:#fff}.ui-button.ui-button-info:enabled:hover,.ui-button.ui-button-info:focus{background-color:#46b8da}.ui-button.ui-button-info:enabled:active{background-color:#31b0d5}.ui-button.ui-button-warning.ui-state-default{background-color:#f0ad4e;border-color:#f0ad4e;color:#fff}.ui-button.ui-button-warning:enabled:hover,.ui-button.ui-button-warning:focus{background-color:#eea236}.ui-button.ui-button-warning:enabled:active{background-color:#ec971f}.ui-button.ui-button-danger.ui-state-default{background-color:#d9534f;border-color:#d9534f;color:#fff}.ui-button.ui-button-danger:enabled:hover,.ui-button.ui-button-danger:focus{background-color:#d43f3a}.ui-button.ui-button-danger:enabled:active{background-color:#c9302c}.ui-calendar{position:relative;display:inline-block}.ui-calendar button{position:absolute;height:100%;border-top-left-radius:0;border-bottom-left-radius:0;position:absolute;width:2em;border-left:0 none}.ui-fluid .ui-calendar{width:100%}.ui-fluid .ui-calendar button{width:2em}.ui-fluid .ui-calendar.ui-calendar-w-btn .ui-inputtext{width:calc(100% - 2em)}.ui-datepicker{width:17em;padding:.2em;display:none;position:absolute}.ui-datepicker.ui-datepicker-inline{display:block;position:static}.ui-datepicker .ui-datepicker-header{position:relative;padding:.2em 0}.ui-datepicker .ui-datepicker-prev,.ui-datepicker .ui-datepicker-next{position:absolute;top:.125em;width:1.8em;height:1.8em}.ui-datepicker .ui-datepicker-prev{left:.125em}.ui-datepicker .ui-datepicker-next{right:.125em}.ui-datepicker .ui-datepicker-prev span,.ui-datepicker .ui-datepicker-next span{display:block;position:absolute;left:50%;top:50%;margin-top:-.5em}.ui-datepicker .ui-datepicker-prev span{margin-left:-.25em}.ui-datepicker .ui-datepicker-next span{margin-left:-.125em}.ui-datepicker .ui-datepicker-title{margin:0 2.3em;line-height:1.8em;text-align:center}.ui-datepicker .ui-datepicker-title select{font-size:1em;margin:.125em 0}.ui-datepicker select.ui-datepicker-month{width:55%}.ui-datepicker select.ui-datepicker-year{width:35%}.ui-datepicker select.ui-datepicker-month{margin-right:.25em}.ui-datepicker table{width:100%;font-size:.9em;border-collapse:collapse;margin:0 0 .4em}.ui-datepicker th{padding:.7em .3em;text-align:center;font-weight:bold;border:0}.ui-datepicker td{border:0;padding:.125em}.ui-datepicker td span,.ui-datepicker td a{display:block;padding:.2em;text-align:right;text-decoration:none}.ui-datepicker .ui-datepicker-buttonpane{background-image:none;margin:.7em 0 0 0;padding:0 .2em;border-left:0;border-right:0;border-bottom:0}.ui-datepicker .ui-datepicker-buttonpane button{float:right;margin:.5em .2em .4em;cursor:pointer;padding:.2em .6em .3em .6em;width:auto;overflow:visible}.ui-datepicker .ui-datepicker-buttonpane button.ui-datepicker-current{float:left}.ui-datepicker.ui-datepicker-multi{width:auto}.ui-datepicker-multi .ui-datepicker-group{float:left}.ui-datepicker-multi .ui-datepicker-group table{width:95%;margin:0 auto .4em}.ui-datepicker-multi-2 .ui-datepicker-group{width:50%}.ui-datepicker-multi-3 .ui-datepicker-group{width:33.3%}.ui-datepicker-multi-4 .ui-datepicker-group{width:25%}.ui-datepicker-multi .ui-datepicker-group-last .ui-datepicker-header,.ui-datepicker-multi .ui-datepicker-group-middle .ui-datepicker-header{border-left-width:0}.ui-datepicker-multi .ui-datepicker-buttonpane{clear:left}.ui-datepicker-row-break{clear:both;width:100%;font-size:0}.ui-calendar.ui-calendar-w-btn input{-moz-border-radius-topright:0;-webkit-border-top-right-radius:0;-khtml-border-top-right-radius:0;border-top-right-radius:0;-moz-border-radius-bottomright:0;-webkit-border-bottom-right-radius:0;-khtml-border-bottom-right-radius:0;border-bottom-right-radius:0}.ui-timepicker{text-align:center;padding:.5em 0}.ui-timepicker>div{display:inline-block;margin-left:.5em;min-width:1.5em}.ui-timepicker>.ui-minute-picker,.ui-timepicker>.ui-second-picker{margin-left:0}.ui-timepicker>.ui-separator{margin-left:0;min-width:.75em}.ui-timepicker>.ui-separator a{visibility:hidden}.ui-timepicker>div a{display:block;opacity:.7;filter:Alpha(Opacity=70)}.ui-timepicker>div a:hover{display:block;opacity:1;filter:Alpha(Opacity=100)}.ui-carousel{position:relative;padding:.063em}.ui-carousel .ui-carousel-viewport .ui-carousel-items{list-style:none outside none;margin:0;padding:0;position:relative;width:32000px;left:0}.ui-carousel .ui-carousel-viewport .ui-carousel-items .ui-carousel-item{margin:1px;padding:0;float:left;box-sizing:border-box}.ui-carousel .ui-carousel-viewport{overflow:hidden;position:relative;border:0}.ui-carousel .ui-carousel-footer{margin:1px 1px 0 1px;padding:.5em;overflow:hidden}.ui-carousel .ui-carousel-header{margin:0 1px;overflow:hidden;padding:.625em}.ui-carousel .ui-carousel-header .ui-carousel-header-title{display:inline-block;overflow:hidden}.ui-carousel .ui-carousel-dropdown,.ui-carousel .ui-carousel-mobiledropdown{float:right;margin:0 .625em;background-image:none}.ui-carousel .ui-carousel-dropdown option,.ui-carousel .ui-carousel-mobiledropdown option{background-image:none;border:0 none;box-shadow:none;-moz-box-shadow:none;-webkit-box-shadow:none}.ui-carousel .ui-carousel-button{float:right;margin:.125em}.ui-carousel .ui-carousel-page-link{float:left;margin:0 .125em;text-decoration:none}.ui-carousel .ui-carousel-page-link,.ui-carousel .ui-carousel-button{cursor:pointer}.ui-carousel .ui-carousel-page-links{margin:0 .5em;margin-top:.125em;float:right}.ui-carousel .ui-carousel-mobiledropdown{display:none}.ui-chkbox{display:inline-block;cursor:pointer;vertical-align:middle;margin-right:.25em}.ui-chkbox .ui-chkbox-box{width:1.125em;height:1.125em;line-height:1.125em;-moz-border-radius:2px;-webkit-border-radius:2px;border-radius:2px;text-align:center}.ui-chkbox .ui-chkbox-icon{line-height:inherit;display:block}.ui-chkbox-label{vertical-align:middle}.ui-chips>ul.ui-inputtext{clear:left;cursor:text;list-style-type:none;margin:0;overflow:hidden;padding:0 .25em}.ui-chips-token{cursor:default;display:inline-block;vertical-align:middle;overflow:hidden;padding:.125em .5em;white-space:nowrap;position:relative;margin-right:.125em;border:0 none;font-size:.9em}.ui-chips-token .ui-chips-token-label{display:block;margin-right:2em}.ui-chips>.ui-state-disabled .ui-chips-token-label{margin-right:0}.ui-chips-token .ui-chips-token-icon{margin-top:-.5em;position:absolute;right:.2em;top:50%;cursor:pointer}.ui-chips-input-token{display:inline-block;vertical-align:middle;list-style-type:none;margin:0 0 0 .125em;padding:.25em .25em .25em 0}.ui-chips-input-token input{border:0 none;width:10em;outline:medium none;background-color:transparent;margin:0;padding:0;box-shadow:none;-moz-border-radius:0;-webkit-border-radius:0;border-radius:0}.ui-datagrid .ui-paginator{text-align:center;border-top:0 none}.ui-datagrid-column{padding:.25em}.ui-datagrid-content-empty{padding:.25em .625em}.ui-datagrid .ui-datagrid-header,.ui-datagrid .ui-datagrid-footer{text-align:center;padding:.5em .75em}.ui-datagrid .ui-datagrid-header{border-bottom:0 none}.ui-datagrid .ui-datagrid-footer{border-top:0 none}.ui-datagrid .ui-paginator-top{border-bottom:0 none}.ui-datagrid .ui-paginator-bottom{border-top:0 none}.ui-datalist .ui-datalist-header,.ui-datalist .ui-datalist-footer{text-align:center;padding:.5em .75em}.ui-datalist .ui-datalist-header{border-bottom:0 none}.ui-datalist .ui-datalist-footer{border-top:0 none}.ui-datalist .ui-paginator{border-top:0 none}.ui-datalist .ui-datalist-data{margin:0;padding:0}.ui-datalist .ui-datalist-data>li{list-style-type:none}.ui-datalist .ui-datalist-emptymessage{padding:.5em .75em}.ui-datascroller .ui-datascroller-header{text-align:center;padding:.5em .75em;border-bottom:0 none}.ui-datascroller .ui-datascroller-footer{text-align:center;padding:.25em .625em;border-top:0 none}.ui-datascroller .ui-datascroller-content{padding:.25em .625em}.ui-datascroller-inline .ui-datascroller-content{overflow:auto}.ui-datascroller .ui-datascroller-list{list-style-type:none;margin:0;padding:0}.ui-datatable{position:relative}.ui-datatable table{border-collapse:collapse;width:100%;table-layout:fixed}.ui-datatable .ui-datatable-header,.ui-datatable .ui-datatable-caption,.ui-datatable .ui-datatable-footer{text-align:center;padding:.5em .75em;box-sizing:border-box}.ui-datatable .ui-datatable-caption,.ui-datatable .ui-datatable-header{border-bottom:0 none}.ui-datatable .ui-datatable-footer{border-top:0 none}.ui-datatable thead th,.ui-datatable tfoot td{text-align:center}.ui-datatable thead tr{border-width:0}.ui-datatable .ui-datatable-thead>tr>th,.ui-datatable .ui-datatable-tfoot>tr>td,.ui-datatable .ui-datatable-data>tr>td{border-color:inherit;box-sizing:border-box;padding:.25em .5em;overflow:hidden;border-width:1px;border-style:solid}.ui-datatable .ui-datatable-thead>tr>th,.ui-datatable .ui-datatable-tfoot>tr>td{font-weight:normal}.ui-datatable tbody{outline:0}.ui-datatable .ui-sortable-column{cursor:pointer}.ui-datatable .ui-sortable-column-icon{display:inline-block;margin-left:.125em}.ui-datatable tr.ui-state-highlight{cursor:pointer}.ui-datatable-scrollable-body{overflow:auto}.ui-datatable-scrollable-header{overflow:hidden}.ui-datatable-scrollable .ui-datatable-scrollable-header,.ui-datatable-scrollable .ui-datatable-scrollable-footer{position:relative;border:0 none}.ui-datatable-scrollable .ui-datatable-scrollable-header td{font-weight:normal}.ui-datatable .ui-datatable-scrollable-body{min-height:0}.ui-datatable .ui-datatable-data tr.ui-state-hover,.ui-datatable .ui-datatable-data tr.ui-state-highlight{border-color:inherit;font-weight:inherit;cursor:pointer}.ui-datatable .ui-datatable-data tr.ui-rowgroup-header td a,.ui-datatable .ui-datatable-data tr.ui-rowgroup-header td span.ui-rowgroup-header-name{display:inline-block;vertical-align:middle}.ui-datatable-scrollable-theadclone{height:0}.ui-datatable-scrollable-theadclone tr{height:0}.ui-datatable-scrollable-theadclone th.ui-state-default{height:0;border-bottom-width:0;border-top-width:0;padding-top:0;padding-bottom:0;outline:0 none}.ui-datatable-scrollable-theadclone th span.ui-column-title{display:block;height:0}.ui-datatable .ui-paginator{padding:.125em;border-top:0 none}.ui-datatable-rtl{direction:rtl}.ui-datatable-rtl.ui-datatable thead th,.ui-datatable-rtl.ui-datatable tfoot td{text-align:right}.ui-row-toggler{cursor:pointer}.ui-datatable .ui-column-resizer{display:block;position:absolute !important;top:0;right:0;margin:0;width:.5em;height:100%;padding:0;cursor:col-resize;border:1px solid transparent}.ui-datatable .ui-column-resizer-helper{width:1px;position:absolute;z-index:10;display:none}.ui-datatable-resizable{padding-bottom:1px;overflow:auto}.ui-datatable-resizable thead th,.ui-datatable-resizable tbody td,.ui-datatable-resizable tfoot td{white-space:nowrap}.ui-datatable-resizable th.ui-resizable-column{background-clip:padding-box;position:relative}.ui-datatable-reflow .ui-datatable-data td .ui-column-title{display:none}.ui-datatable .ui-column-filter{display:block;width:100%;box-sizing:border-box;margin-top:.25em}.ui-datatable .ui-editable-column input{width:100%;outline:0}.ui-datatable .ui-datatable-data>tr>td.ui-editable-column{padding:.5em}.ui-datatable .ui-editable-column .ui-cell-editor{display:none}.ui-datatable .ui-datatable-data>tr>td.ui-editable-column.ui-cell-editing{padding:1px}.ui-datatable .ui-editable-column.ui-cell-editing .ui-cell-editor{display:block}.ui-datatable .ui-editable-column.ui-cell-editing .ui-cell-data{display:none}.ui-datatable-stacked thead th,.ui-datatable-stacked tfoot td{display:none !important}.ui-datatable.ui-datatable-stacked .ui-datatable-data>tr>td{text-align:left;display:block;border:0 none;width:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;float:left;clear:left}.ui-datatable.ui-datatable-stacked .ui-datatable-data.ui-widget-content{border:0 none}.ui-datatable-stacked .ui-datatable-data tr.ui-widget-content{border-left:0 none;border-right:0 none}.ui-datatable-stacked .ui-datatable-data td .ui-column-title{padding:.4em;min-width:30%;display:inline-block;margin:-.4em 1em -.4em -.4em;font-weight:bold}.ui-datatable .ui-selection-column .ui-chkbox,.ui-datatable .ui-selection-column .ui-radiobutton{margin:0;display:block}.ui-datatable .ui-selection-column .ui-chkbox-box,.ui-datatable .ui-selection-column .ui-radiobutton-box{display:block;box-sizing:border-box;margin:0}.ui-datatable-scrollable-wrapper{position:relative}.ui-datatable-frozen-view .ui-datatable-scrollable-body{overflow:hidden}.ui-datatable-unfrozen-view{position:absolute;top:0}.ui-datatable .ui-datatable-load-status{width:100%;height:100%;top:0;left:0}.ui-datatable .ui-datatable-virtual-table{position:absolute;top:0;left:0}.ui-datatable .ui-datatable-loading{position:absolute;width:100%;height:100%;-ms-filter:"alpha(opacity=20)";opacity:.2;z-index:1}.ui-datatable .ui-datatable-loading-content{position:absolute;left:50%;top:25%;z-index:2}@media(max-width:35em){.ui-datatable-reflow thead th,.ui-datatable-reflow tfoot td{display:none !important}.ui-datatable-reflow .ui-datatable-data>tr>td{text-align:left;display:block;border:0 none;width:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;float:left;clear:left}.ui-datatable-reflow .ui-datatable-data.ui-widget-content{border:0 none}.ui-datatable-reflow .ui-datatable-data tr.ui-widget-content{border-left:0 none;border-right:0 none}.ui-datatable-reflow .ui-datatable-data td .ui-column-title{padding:.4em;min-width:30%;display:inline-block;margin:-.4em 1em -.4em -.4em;font-weight:bold}}.ui-dialog{position:fixed;padding:0}.ui-dialog .ui-dialog-titlebar{padding:.5em .75em;position:relative;border:0}.ui-dialog .ui-dialog-content{position:relative;border:0;padding:.5em .75em;background:0;overflow:auto;zoom:1}.ui-dialog .ui-dialog-buttonpane{text-align:left;border-width:1px 0 0 0;background-image:none;margin:.5em 0 0 0;padding:.3em 1em .5em .4em}.ui-dialog .ui-dialog-buttonpane .ui-dialog-buttonset{float:right}.ui-dialog .ui-dialog-buttonpane button{margin:.5em .4em .5em 0;cursor:pointer;float:right}.ui-dialog .ui-resizable-se{width:14px;height:14px;right:3px;bottom:3px}.ui-draggable .ui-dialog-titlebar{cursor:move}.ui-dialog .ui-dialog-titlebar-icon{text-decoration:none}.ui-dialog .ui-dialog-titlebar-close{float:right;padding:.125em;cursor:pointer;border:1px solid transparent}.ui-dialog .ui-dialog-titlebar-close span{display:block;margin:0}.ui-dialog-footer{padding:.4em 1em;border-width:1px 0 0 0;text-align:left}.ui-dialog-mask{position:fixed;width:100%;height:100%}.ui-confirmdialog.ui-dialog .ui-dialog-content{padding:1em 2em}.ui-confirmdialog .ui-dialog-content .fa{font-size:1.5em;vertical-align:middle;margin-right:.5em}.ui-confirmdialog .ui-dialog-content .ui-confirmdialog-message{vertical-align:middle}.ui-fluid .ui-dialog-buttonpane .ui-button{width:auto}.ui-dropdown{display:inline-block;position:relative;cursor:pointer;vertical-align:middle}.ui-dropdown .ui-dropdown-trigger{border-right:0;border-top:0;border-bottom:0;cursor:pointer;width:1.5em;height:100%;position:absolute;right:0;top:0;padding:0 .25em}.ui-dropdown .ui-dropdown-trigger .fa{margin-top:.4em;margin-left:-.125em}.ui-dropdown .ui-dropdown-label{display:block;border:0;white-space:nowrap;overflow:hidden;font-weight:normal;width:100%;padding-right:1.5em}.ui-dropdown .ui-dropdown-item-empty,.ui-dropdown .ui-dropdown-label-empty{text-indent:-9999px}.ui-dropdown.ui-state-disabled .ui-dropdown-trigger,.ui-dropdown.ui-state-disabled .ui-dropdown-label{cursor:default}.ui-dropdown label.ui-dropdown-label{cursor:pointer}.ui-dropdown input.ui-dropdown-label{cursor:default}.ui-dropdown .ui-dropdown-panel{min-width:100%}.ui-dropdown-panel{position:absolute;height:auto}.ui-dropdown-panel .ui-dropdown-items-wrapper{overflow:auto}.ui-dropdown-panel .ui-dropdown-item{font-weight:normal;border:0 none;cursor:pointer;margin:1px 0;padding:.125em .25em;text-align:left}.ui-dropdown-panel .ui-dropdown-item-group{font-weight:bold}.ui-dropdown-panel .ui-dropdown-list{padding:.4em;border:0 none}.ui-dropdown-panel .ui-dropdown-filter{width:100%;padding-right:1.5em}.ui-dropdown-panel .ui-dropdown-filter-container{position:relative;margin:0;padding:.4em;display:inline-block}.ui-dropdown-panel .ui-dropdown-filter-container .fa{position:absolute;top:.8em;right:1em}.ui-fluid .ui-dropdown{width:100%}.ui-fieldset,.ui-fieldset .ui-fieldset-legend{padding:.6em 1em}.ui-fieldset-toggleable .ui-fieldset-legend{padding:.5em 1em .5em .5em;cursor:pointer;white-space:nowrap}.ui-fieldset .ui-fieldset-toggler{margin-right:.1em;display:inline-block;vertical-align:middle}.ui-fieldset .ui-fieldset-content-wrapper-overflown{overflow:hidden}.ui-fileupload-buttonbar .ui-fileupload-choose input{display:none}.ui-fileupload-buttonbar .ui-fileupload-choose.ui-state-disabled input{cursor:default}.ui-fileupload-choose{position:relative;overflow:hidden}.ui-fileupload-buttonbar{padding:.5em;border-bottom:0 none}.ui-fileupload-buttonbar .ui-button{vertical-align:middle;margin-right:.25em}.ui-fileupload-content{padding:1em;position:relative;transition:border-color .3s}.ui-fileupload-content.ui-fileupload-highlight{border-color:#156090}.ui-fileupload-files img{border:0}.ui-fileupload-files{display:table}.ui-fileupload-row{display:table-row}.ui-fileupload-row>div{display:table-cell;padding:.5em 1em;vertical-align:middle}.ui-fileupload-content .ui-progressbar{width:100%;position:absolute;top:1px;left:0;height:.25em;border:0 none}.ui-fileupload-content .ui-progressbar-value{-moz-border-radius:0;-webkit-border-radius:0;border-radius:0;border:0 none}.ui-fluid .ui-fileupload .ui-button{width:auto}.ui-fluid .ui-fileupload-content .ui-button-icon-only{width:2em}.ui-galleria{overflow:hidden;visibility:hidden;position:relative}.ui-galleria-panel-wrapper{position:relative;padding:0;margin:0}.ui-galleria-panel{filter:inherit;position:absolute;top:0;left:0;list-style-type:none}.ui-galleria-filmstrip-wrapper{overflow:hidden;margin:.25em auto;position:relative}.ui-galleria-filmstrip{list-style:none outside none;margin:0;padding:0;width:2340px;z-index:900;position:absolute;top:0;left:0}.ui-galleria-frame{float:left;margin-right:5px;opacity:.3;cursor:pointer}.ui-galleria-frame-active{opacity:1}.ui-galleria-frame-content{overflow:hidden}.ui-galleria-nav-next,.ui-galleria-nav-prev{cursor:pointer;position:absolute}.ui-galleria-nav-prev{left:5px}.ui-galleria-nav-next{right:5px}.ui-galleria-caption{position:absolute;left:1px;background-color:rgba(0,0,0,0.5);display:none;color:#ededed;padding:.2em 1em}.ui-galleria-caption h4{color:#ededed}.ui-galleria-panel-content{padding:1em 1.4em}.ui-grid{clear:both;padding:0;margin:0}.ui-grid:before,.ui-grid:after{content:"";display:table}.ui-grid:after{clear:both}.ui-grid .ui-grid-row{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;clear:both}.ui-grid-row:after{clear:both;content:"";display:table}.ui-grid-col-1,.ui-grid-col-2,.ui-grid-col-3,.ui-grid-col-4,.ui-grid-col-5,.ui-grid-col-6,.ui-grid-col-7,.ui-grid-col-8,.ui-grid-col-9,.ui-grid-col-10,.ui-grid-col-11,.ui-grid-col-12{float:left;box-sizing:border-box}.ui-grid-col-1{width:8.33333%}.ui-grid-col-2{width:16.66666%}.ui-grid-col-3{width:25%}.ui-grid-col-4{width:33.33333%}.ui-grid-col-5{width:41.66666%}.ui-grid-col-6{width:50%}.ui-grid-col-7{width:58.33333%}.ui-grid-col-8{width:66.66666%}.ui-grid-col-9{width:75%}.ui-grid-col-10{width:83.33333%}.ui-grid-col-11{width:91.66666%}.ui-grid-col-12{width:100%}@media(min-width:480px){.ui-grid-fixed{width:480px}}@media(min-width:768px){.ui-grid-fixed{width:768px}}@media(min-width:960px){.ui-grid-fixed{width:960px}}@media(min-width:1024px){.ui-grid-fixed{width:1024px}}@media(max-width:640px){.ui-grid-responsive .ui-grid-row{display:block}.ui-grid-responsive .ui-grid-col-1,.ui-grid-responsive .ui-grid-col-2,.ui-grid-responsive .ui-grid-col-3,.ui-grid-responsive .ui-grid-col-4,.ui-grid-responsive .ui-grid-col-5,.ui-grid-responsive .ui-grid-col-6,.ui-grid-responsive .ui-grid-col-7,.ui-grid-responsive .ui-grid-col-8,.ui-grid-responsive .ui-grid-col-9,.ui-grid-responsive .ui-grid-col-10,.ui-grid-responsive .ui-grid-col-11,.ui-grid-responsive .ui-grid-col-12{width:100%;float:none}}.ui-grid.ui-grid-pad>.ui-grid-row>div{padding:.25em .5em}@media(max-width:640px){.ui-grid-responsive .ui-grid-row{display:block}.ui-grid-responsive .ui-grid-col-1,.ui-grid-responsive .ui-grid-col-2,.ui-grid-responsive .ui-grid-col-3,.ui-grid-responsive .ui-grid-col-4,.ui-grid-responsive .ui-grid-col-5,.ui-grid-responsive .ui-grid-col-6,.ui-grid-responsive .ui-grid-col-7,.ui-grid-responsive .ui-grid-col-8,.ui-grid-responsive .ui-grid-col-9,.ui-grid-responsive .ui-grid-col-10,.ui-grid-responsive .ui-grid-col-11,.ui-grid-responsive .ui-grid-col-12{width:100%;float:none}}.ui-g{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;flex-wrap:wrap}.ui-g:after{clear:both;content:"";display:table}.ui-g-1,.ui-g-2,.ui-g-3,.ui-g-4,.ui-g-5,.ui-g-6,.ui-g-7,.ui-g-8,.ui-g-9,.ui-g-10,.ui-g-11,.ui-g-12{float:left;box-sizing:border-box;padding:.5em}.ui-g-1{width:8.3333%}.ui-g-2{width:16.6667%}.ui-g-3{width:25%}.ui-g-4{width:33.3333%}.ui-g-5{width:41.6667%}.ui-g-6{width:50%}.ui-g-7{width:58.3333%}.ui-g-8{width:66.6667%}.ui-g-9{width:75%}.ui-g-10{width:83.3333%}.ui-g-11{width:91.6667%}.ui-g-12{width:100%}@media screen and (max-width:40em){.ui-sm-1,.ui-sm-2,.ui-sm-3,.ui-sm-4,.ui-sm-5,.ui-sm-6,.ui-sm-7,.ui-sm-8,.ui-sm-9,.ui-sm-10,.ui-sm-11,.ui-sm-12{padding:.5em}.ui-sm-1{width:8.3333%}.ui-sm-2{width:16.6667%}.ui-sm-3{width:25%}.ui-sm-4{width:33.3333%}.ui-sm-5{width:41.6667%}.ui-sm-6{width:50%}.ui-sm-7{width:58.3333%}.ui-sm-8{width:66.6667%}.ui-sm-9{width:75%}.ui-sm-10{width:83.3333%}.ui-sm-11{width:91.6667%}.ui-sm-12{width:100%}}@media screen and (min-width:40.063em){.ui-md-1,.ui-md-2,.ui-md-3,.ui-md-4,.ui-md-5,.ui-md-6,.ui-md-7,.ui-md-8,.ui-md-9,.ui-md-10,.ui-md-11,.ui-md-12{padding:.5em}.ui-md-1{width:8.3333%}.ui-md-2{width:16.6667%}.ui-md-3{width:25%}.ui-md-4{width:33.3333%}.ui-md-5{width:41.6667%}.ui-md-6{width:50%}.ui-md-7{width:58.3333%}.ui-md-8{width:66.6667%}.ui-md-9{width:75%}.ui-md-10{width:83.3333%}.ui-md-11{width:91.6667%}.ui-md-12{width:100%}}@media screen and (min-width:64.063em){.ui-lg-1,.ui-lg-2,.ui-lg-3,.ui-lg-4,.ui-lg-5,.ui-lg-6,.ui-lg-7,.ui-lg-8,.ui-lg-9,.ui-lg-10,.ui-lg-11,.ui-lg-12{padding:.5em}.ui-lg-1{width:8.3333%}.ui-lg-2{width:16.6667%}.ui-lg-3{width:25%}.ui-lg-4{width:33.3333%}.ui-lg-5{width:41.6667%}.ui-lg-6{width:50%}.ui-lg-7{width:58.3333%}.ui-lg-8{width:66.6667%}.ui-lg-9{width:75%}.ui-lg-10{width:83.3333%}.ui-lg-11{width:91.6667%}.ui-lg-12{width:100%}}@media screen and (min-width:90.063em){.ui-xl-1,.ui-xl-2,.ui-xl-3,.ui-xl-4,.ui-xl-5,.ui-xl-6,.ui-xl-7,.ui-xl-8,.ui-xl-9,.ui-xl-10,.ui-xl-11,.ui-xl-12{padding:.5em}.ui-xl-1{width:8.3333%}.ui-xl-2{width:16.6667%}.ui-xl-3{width:25%}.ui-xl-4{width:33.3333%}.ui-xl-5{width:41.6667%}.ui-xl-6{width:50%}.ui-xl-7{width:58.3333%}.ui-xl-8{width:66.6667%}.ui-xl-9{width:75%}.ui-xl-10{width:83.3333%}.ui-xl-11{width:91.6667%}.ui-xl-12{width:100%}}.ui-g-nopad{padding:0}.ui-growl{position:fixed;top:20px;right:20px;width:20em}.ui-growl-item-container{position:relative;margin:0 0 10px 0;opacity:.95;filter:alpha(opacity=95)}.ui-growl-item{position:relative;display:block;padding:.5em 1em}.ui-growl-item p{padding:0;margin:0}.ui-growl-icon-close{position:absolute;top:4px;right:4px;cursor:pointer}.ui-growl-title{font-weight:bold;padding:0 0 .5em 0;display:block}.ui-growl-image{position:absolute;display:inline-block;left:.5em;top:.25em;padding:0}.ui-growl-message{padding:0 0 .25em 0;margin-left:2.5em}.ui-growl-message p{font-weight:normal}.ui-inplace .ui-inplace-display{display:inline;cursor:pointer;border:0 none;padding:.25em;font-weight:normal}.ui-inplace .ui-inplace-content{display:inline}.ui-inputswitch{display:inline-block;padding:0;position:relative;overflow:hidden;cursor:pointer;user-select:none;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;height:1.5em}.ui-inputswitch .ui-inputswitch-on,.ui-inputswitch .ui-inputswitch-off{white-space:nowrap;display:inline-block;position:absolute;top:0;width:auto;overflow:hidden;user-select:none;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;font-weight:bold;height:100%;line-height:1.5em}.ui-inputswitch .ui-inputswitch-on{left:0;border:0 none}.ui-inputswitch .ui-inputswitch-off{right:0;text-align:right}.ui-inputswitch .ui-inputswitch-on span,.ui-inputswitch .ui-inputswitch-off span{display:inline-block;text-align:center;height:100%;line-height:inherit}.ui-inputswitch .ui-inputswitch-handle{display:block;width:0;position:absolute;top:0;left:0;height:100%;border-top:0 none;border-bottom:0 none}.ui-inputtext{margin:0;outline:medium none;padding:.25em;font-weight:normal}.ui-widget-header .ui-inputtext,.ui-widget-content .ui-inputtext{font-weight:normal}.ui-fluid .ui-inputtext{width:100%;box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box}.ui-inputtextarea-resizable{overflow:hidden;resize:none}.ui-fluid .ui-inputtextarea{width:100%}.ui-lightbox{position:fixed}.ui-lightbox-content-wrapper{position:relative}.ui-lightbox-content{position:relative;margin:0;padding:0;background-color:#000}.ui-lightbox-nav-right,.ui-lightbox-nav-left{position:absolute;top:50%;cursor:pointer}.ui-lightbox-nav-left{left:0}.ui-lightbox-nav-right{right:0}.ui-lightbox-loading{background:url('+n(513)+") #000 center center no-repeat}.ui-lightbox-caption{padding:.2em .4em;display:none}.ui-lightbox-caption-text{margin:.3em 0 .1em 0;float:left}.ui-lightbox-close{float:right;margin:0;padding:.125em}.ui-lightbox-close.ui-state-hover{padding:0}.ui-lightbox-nav-left,.ui-lightbox-nav-right{opacity:.5}.ui-lightbox-nav-left:hover,.ui-lightbox-nav-right:hover{opacity:1}.ui-listbox{overflow:auto;padding:.25em;width:10em}.ui-listbox .ui-listbox-list{list-style-type:none;margin:0;padding:0}.ui-listbox .ui-listbox-item{padding:.25em;border:0 none;cursor:pointer;font-weight:normal;margin-bottom:1px}.ui-listbox .ui-listbox-item>span{vertical-align:middle}.ui-listbox .ui-listbox-item:last-child{margin-bottom:0}.ui-listbox.ui-state-disabled .ui-listbox-item{cursor:default}.ui-listbox-header{margin-bottom:.3em;padding:.125em .2em;position:relative}.ui-listbox-header .ui-chkbox{display:inline-block;vertical-align:middle;cursor:pointer}.ui-listbox-header .ui-listbox-filter-container{display:inline-block;vertical-align:middle;position:relative;width:7em}.ui-listbox-header .ui-listbox-filter-container .fa{position:absolute;top:.25em;left:.25em}.ui-listbox-header .ui-inputtext{padding:.125em .125em .125em 1.25em;width:100%}.ui-fluid .ui-listbox .ui-listbox-filter-container,.ui-fluid .ui-listbox .ui-listbox-filter-container input{width:calc(100% - 32px)}.ui-menu{width:12.5em;padding:.25em;position:relative}.ui-menu.ui-menu-dynamic{position:absolute;display:none;z-index:100000}.ui-menu-list{position:static}.ui-menu .ui-menu-list .ui-menuitem{border:0}.ui-menu .ui-menu-list .ui-widget-header{clear:both;float:left;width:100%;margin:.125em 0;padding:.25em .5em}.ui-menu .ui-menuitem-parent,.ui-menu .ui-menuitem{width:100%;clear:both;margin:.125em 0;padding:0}.ui-menu .ui-menuitem-link{display:block;width:100%;outline:0;text-decoration:none;font-weight:normal;border:1px solid transparent;line-height:1em;padding:.25em;cursor:pointer}.ui-menu .ui-menuitem-link .ui-menuitem-icon{display:inline-block;vertical-align:middle}.ui-menu .ui-menuitem-text{vertical-align:middle}.ui-menu .ui-widget-header h1,.ui-menu .ui-widget-header h2,.ui-menu .ui-widget-header h3,.ui-menu .ui-widget-header h4,.ui-menu .ui-widget-header h5,.ui-menu .ui-widget-header h6{font-size:1em;margin:0 auto}.ui-menu .ui-menu-parent .ui-menu-child{display:none;width:12.5em;padding:.25em;position:absolute;margin:0;outline:0;text-decoration:none;list-style:none}.ui-menu .ui-menu-parent{position:relative}.ui-menu .ui-menu-parent .ui-submenu-icon{float:right;margin-right:-.25em}.ui-menubutton{padding:0}.ui-menubutton .ui-button{margin:0}.ui-menu.ui-menubar .ui-menubar-root-list>li>a>.ui-submenu-icon{float:none}.ui-menubar{width:auto}.ui-menubar .ui-menubar-root-list{list-style:none;padding:0;margin:0}.ui-menubar .ui-menubar-root-list>.ui-menuitem{display:inline-block;width:auto}.ui-menubar .ui-menu-child .ui-menuitem{width:100%}.ui-menubar .ui-menubar-options{float:right}.ui-slidemenu .ui-slidemenu-wrapper{position:relative}.ui-slidemenu .ui-slidemenu-content{overflow-x:hidden;overflow-y:auto;position:relative}.ui-slidemenu .ui-menu-list{position:absolute;top:0}.ui-slidemenu .ui-menu-parent{position:static}.ui-slidemenu .ui-menu-child{box-shadow:none;border:0 none;background:none repeat scroll 0 0 transparent}.ui-slidemenu-backward{position:absolute;bottom:0;width:100%;padding:.2em;cursor:pointer;display:none}.ui-slidemenu-backward .fa{vertical-align:middle}.ui-slidemenu-backward span{vertical-align:middle}.ui-slidemenu .ui-slidemenuitem-active>.ui-submenu>ul{display:block !important}.ui-megamenu .ui-g{flex-wrap:nowrap}.ui-megamenu .ui-megamenu-panel.ui-menu-child{width:auto}.ui-megamenu .ui-megamenu-panel .ui-menu-list{width:12.5em}.ui-megamenu-vertical{width:12.5em}.ui-megamenu-vertical .ui-menuitem-link,.ui-megamenu-vertical .ui-menu-list .ui-menuitem{width:100%;box-sizing:border-box}.ui-megamenu-vertical>.ui-menubar-root-list>.ui-menuitem>.ui-menuitem-link>.ui-submenu-icon{float:right}.ui-panelmenu{width:auto}.ui-panelmenu .ui-panelmenu-panel{padding:0;margin:0}.ui-panelmenu .ui-panelmenu-header{cursor:pointer;position:relative;margin:-1px 0 0 0;zoom:1}.ui-panelmenu .ui-panelmenu-header a{display:block;padding:.25em .5em}.ui-panelmenu span{vertical-align:middle}.ui-panelmenu .fa{width:1em;text-align:center;vertical-align:middle;margin-right:.25em}.ui-panelmenu .ui-menuitem-text{margin-left:.125em}.ui-panelmenu span{vertical-align:middle}.ui-panelmenu .ui-panelmenu-content{padding:.2em 0;border-top:0;overflow:auto;zoom:1;outline:0;margin-bottom:1px}.ui-panelmenu .ui-panelmenu-content-wrapper{box-sizing:border-box}.ui-panelmenu .ui-panelmenu-content-wrapper-overflown{overflow:hidden}.ui-panelmenu .ui-panelmenu-header.ui-state-disabled,.ui-panelmenu .ui-panelmenu-header.ui-state-disabled a{cursor:default}.ui-panelmenu .ui-menu-list{position:static}.ui-panelmenu .ui-menuitem{margin:1px 0;padding:0}.ui-panelmenu .ui-menuitem-link{display:block;outline:0;text-decoration:none;font-weight:normal;border:1px solid transparent;line-height:1em;cursor:pointer;position:relative;padding:.25em .5em}.ui-panelmenu .ui-menu-parent .ui-menu-list{margin-left:1.5em}.ui-menuitem-active>.ui-submenu>ul,.ui-menuitem-active>.ui-megamenu-panel{display:block !important}.ui-menuitem-outline{outline:1px dotted;z-index:1}.ui-fluid .ui-menu{width:100%}.ui-messages{border:1px solid;margin:.5em 0;padding:1em 1em 1em .5em;display:none;position:relative}.ui-messages-icon{display:inline-block;padding:0;vertical-align:middle}.ui-messages-summary{font-weight:bold;margin-left:.25em}.ui-messages-detail{margin-left:.25em}.ui-messages-success{color:#fff;background-color:#4caf50;border-color:#4caf50}.ui-messages-info{color:#fff;background-color:#2196f3;border-color:#2196f3}.ui-messages-warn{color:#fff;background-color:#ffb300;border-color:#ffb300}.ui-messages-error{color:#fff;background-color:#f44336;border-color:#f44336}.ui-messages ul{margin:0;padding:0;list-style-type:none;display:inline-block;vertical-align:middle}.ui-messages.ui-messages-noicon ul{margin:0 1.5em 0 0}.ui-messages .ui-messages-close{color:#fff;cursor:pointer;position:absolute;top:5px;right:5px}.ui-message{border:1px solid;margin:0 .25em;padding:.125em .25em}.ui-multiselect{display:inline-block;position:relative;width:auto;cursor:pointer}.ui-multiselect .ui-multiselect-trigger{border-right:0;border-top:0;border-bottom:0;cursor:pointer;width:1.5em;height:100%;position:absolute;right:0;top:0;padding:0 .25em}.ui-multiselect .ui-multiselect-trigger .fa{margin-top:.4em;margin-left:-.125em}.ui-multiselect .ui-multiselect-label-container{overflow:hidden}.ui-multiselect .ui-multiselect-label{display:block;padding:.25em 2em .25em .25em;width:auto;border:0;cursor:pointer;text-overflow:ellipsis;overflow:hidden}.ui-multiselect.ui-state-disabled .ui-multiselect-trigger,.ui-multiselect.ui-state-disabled .ui-multiselect-label{cursor:auto}.ui-multiselect-panel{padding:.2em;position:absolute;min-width:10em}.ui-multiselect-panel .ui-multiselect-items-wrapper{overflow:auto;position:relative;padding:.2em 0}.ui-multiselect-panel .ui-multiselect-list{border:0 none}.ui-multiselect-panel .ui-multiselect-item{border:0 none;cursor:pointer;font-weight:normal;margin:1px 0;padding:.125em .25em;text-align:left;white-space:nowrap;display:block;position:relative}.ui-multiselect-panel .ui-multiselect-item .ui-chkbox{display:inline-block;vertical-align:middle}.ui-multiselect-panel .ui-multiselect-item label{display:inline-block;vertical-align:middle}.ui-multiselect-header{margin-bottom:.3em;padding:.25em;position:relative;text-align:left}.ui-multiselect-header .ui-chkbox{display:inline-block;vertical-align:middle;cursor:pointer}.ui-multiselect-header .ui-multiselect-filter-container{position:relative;display:inline-block;vertical-align:middle;width:65%}.ui-multiselect-header .ui-multiselect-filter-container .fa{position:absolute;top:.25em;left:.125em}.ui-multiselect-header .ui-inputtext{padding:.125em .125em .125em 1.25em;width:100%}.ui-multiselect-header .ui-multiselect-close{position:absolute;right:.375em;top:.375em;display:block;font-size:1em;border:0 none}.ui-multiselect-header a.ui-multiselect-all,.ui-multiselect-header a.ui-multiselect-none{float:left;margin-right:10px;display:block}.ui-multiselect-header .ui-multiselect-close.ui-state-hover{padding:0}.ui-fluid .ui-multiselect{width:100%;box-sizing:border-box}.ui-orderlist{display:table}.ui-orderlist .ui-orderlist-caption{width:12.5em}.ui-orderlist .ui-orderlist-list{list-style-type:none;margin:0;padding:0;overflow:auto;height:12.5em;width:12.5em}.ui-orderlist .ui-orderlist-list li{margin:1px;padding:.125em}.ui-orderlist .ui-button{display:block;margin-bottom:.3em}.ui-orderlist .ui-orderlist-button.ui-button-text-icon-primary{width:100%}.ui-orderlist .ui-orderlist-item{cursor:pointer;border:0 none;font-weight:inherit}.ui-orderlist .ui-orderlist-caption{text-align:center;padding:.5em .75em;border-bottom:0 none}.ui-orderlist table{width:100%;border-collapse:collapse}.ui-orderlist.ui-state-disabled .ui-orderlist-item,.ui-orderlist.ui-state-disabled .ui-button{cursor:default}.ui-orderlist.ui-state-disabled .ui-orderlist-list{overflow:hidden}.ui-orderlist.ui-grid-responsive{display:block;width:100%}.ui-orderlist.ui-grid-responsive .ui-orderlist-controls{margin-right:.5em}.ui-orderlist.ui-grid-responsive .ui-orderlist-list,.ui-orderlist.ui-grid-responsive .ui-orderlist-caption{width:100%}.ui-orderlist.ui-grid-responsive .ui-orderlist-controls .ui-button{width:100%}@media(max-width:40em){.ui-orderlist.ui-grid-responsive .ui-orderlist-controls{text-align:center}.ui-orderlist.ui-grid-responsive .ui-orderlist-controls .ui-button{display:inline;width:20%}}.ui-overlaypanel{padding:0;margin:0;position:absolute}.ui-overlaypanel-content{padding:.5em 1em}.ui-overlaypanel-close{position:absolute;top:-.5em;right:-.5em;-moz-border-radius:100%;-webkit-border-radius:100%;border-radius:100%}.ui-paginator{margin:0;text-align:center;padding:.125em}.ui-paginator .ui-paginator-top{border-bottom:0 none}.ui-paginator .ui-paginator-bottom{border-top:0 none}.ui-paginator .ui-paginator-page,.ui-paginator .ui-paginator-pages,.ui-paginator .ui-paginator-next,.ui-paginator .ui-paginator-last,.ui-paginator .ui-paginator-first,.ui-paginator .ui-paginator-prev,.ui-paginator .ui-paginator-current{display:inline-block;padding:.125em .375em;zoom:1;margin-left:.063em;margin-right:.063em;text-decoration:none}.ui-paginator .ui-paginator-page,.ui-paginator .ui-paginator-next,.ui-paginator .ui-paginator-last,.ui-paginator .ui-paginator-first,.ui-paginator .ui-paginator-prev{cursor:pointer}.ui-paginator .ui-paginator-current,.ui-paginator .ui-paginator-rpp-options{margin-left:1em;margin-right:1em;background-image:none}.ui-paginator .ui-paginator-jtp-select option,.ui-paginator .ui-paginator-rpp-options option{background-image:none;border:0 none;box-shadow:none;-moz-box-shadow:none;-webkit-box-shadow:none}.ui-paginator a.ui-state-disabled{outline:0 none}.ui-panel{padding:.2em}.ui-panel .ui-panel-titlebar{padding:.5em .75em}.ui-panel .ui-panel-titlebar-icon{float:right;cursor:pointer}.ui-panel .ui-panel-titlebar-icon{margin-left:.2em;margin-top:-0.1em}.ui-panel .ui-panel-content{border:0;background:0;padding:.5em .75em}.ui-panel .ui-panel-footer{border-width:1px 0 0;padding:.25em .5em;text-align:left}.ui-panel-content-wrapper-overflown{overflow:hidden}.ui-password-panel{padding:.25em .5em;width:10em;margin-top:2px}.ui-password-panel .ui-password-meter{height:10px;background:transparent url("+n(514)+') no-repeat left top;padding:0;margin:0}.ui-password-info{margin-top:.25em}.ui-password-panel-overlay{position:absolute}.ui-picklist>div{float:left}.ui-picklist .ui-picklist-buttons{height:12.5em;padding:0 .25em}.ui-picklist .ui-picklist-list{list-style-type:none;margin:0;padding:0;overflow:auto;height:12.5em;width:12.5em}.ui-picklist .ui-picklist-list li{margin:1px;padding:.125em}.ui-picklist .ui-button{display:block;margin-bottom:.25em}.ui-picklist .ui-button-text-icon-left{width:100%}.ui-picklist .ui-picklist-item{cursor:pointer;border:0 none;font-weight:inherit}.ui-picklist .ui-picklist-caption{text-align:center;padding:.5em .75em;border-bottom:0 none}.ui-picklist table{width:100%;border-collapse:collapse}.ui-picklist .ui-picklist-filter{padding-right:1em;width:100%;box-sizing:border-box}.ui-picklist .ui-picklist-filter-container{position:relative;margin:0;padding:0}.ui-picklist .ui-picklist-filter-container .fa{position:absolute;top:.25em;right:.125em}.ui-picklist{display:table}.ui-picklist>div{float:none;display:table-cell;vertical-align:top}.ui-picklist .ui-picklist-buttons{vertical-align:middle}.ui-picklist.ui-picklist-vertical{display:table}.ui-picklist.ui-picklist-vertical>div{float:none;display:table-row;vertical-align:top}.ui-picklist.ui-picklist-vertical .ui-picklist-buttons{text-align:center;height:auto}.ui-picklist.ui-picklist-vertical .ui-picklist-buttons .ui-button{display:inline-block}.ui-picklist.ui-picklist-vertical .ui-button{margin-top:.25em}.ui-picklist-outline{outline:1px dotted black;z-index:1}.ui-picklist-list.ui-picklist-source,.ui-picklist-list.ui-picklist-target{outline:0}.ui-picklist.ui-picklist-responsive *{box-sizing:border-box}.ui-picklist.ui-picklist-responsive{width:100%}.ui-picklist.ui-picklist-responsive .ui-picklist-listwrapper{width:35%}.ui-picklist.ui-picklist-responsive .ui-picklist-listwrapper.ui-picklist-listwrapper-nocontrols{width:45%}.ui-picklist.ui-picklist-responsive .ui-picklist-buttons{width:10%}.ui-picklist.ui-picklist-responsive .ui-picklist-buttons button{width:100%}.ui-picklist.ui-picklist-responsive .ui-picklist-list{width:auto}@media(max-width:40em){.ui-picklist.ui-picklist-responsive{display:block}.ui-picklist.ui-picklist-responsive>div{display:block;width:100% !important}.ui-picklist.ui-picklist-responsive .ui-picklist-buttons{text-align:center;height:auto;padding:.4em 0}.ui-picklist.ui-picklist-responsive .ui-picklist-buttons button{display:inline;width:20%;margin-bottom:0}.ui-picklist.ui-picklist-responsive .ui-picklist-source-controls.ui-picklist-buttons{padding-bottom:.4em}.ui-picklist.ui-picklist-responsive .ui-picklist-target-controls.ui-picklist-buttons{padding-top:.4em}.ui-picklist.ui-picklist-responsive .ui-picklist-buttons .fa-angle-right:before{content:"\\F107"}.ui-picklist.ui-picklist-responsive .ui-picklist-buttons .fa-angle-double-right:before{content:"\\F103"}.ui-picklist.ui-picklist-responsive .ui-picklist-buttons .fa-angle-left:before{content:"\\F106"}.ui-picklist.ui-picklist-responsive .ui-picklist-buttons .fa-angle-double-left:before{content:"\\F102"}}.ui-progressbar{height:1.2em;text-align:left;position:relative}.ui-progressbar .ui-progressbar-value{height:100%;width:0;position:absolute;display:none;border:0 none}.ui-progressbar .ui-progressbar-value-animate{-webkit-transition:width 1s ease-in-out;-moz-transition:width 1s ease-in-out;-o-transition:width 1s ease-in-out;transition:width 1s ease-in-out}.ui-progressbar .ui-progressbar-label{text-align:center;height:100%;width:100%;position:absolute;display:none;font-weight:bold}.ui-radiobutton{display:inline-block;cursor:pointer;vertical-align:middle;margin-right:.25em}.ui-radiobutton-box{width:1.125em;height:1.125em;line-height:1.125em;-moz-border-radius:100%;-webkit-border-radius:100%;border-radius:100%;text-align:center}.ui-radiobutton-icon{display:block;font-size:.6em;line-height:inherit}.ui-radiobutton,.ui-radiobutton-label{vertical-align:middle;display:inline-block}.ui-fluid .fc .ui-button{width:auto}.ui-selectbutton{display:inline-block}.ui-selectbutton.ui-state-error{padding:0}.ui-selectbutton .ui-button.ui-state-focus{outline:0}.ui-slider{position:relative;text-align:left}.ui-slider .ui-slider-handle{position:absolute;width:1.2em;height:1.2em;cursor:default;-ms-touch-action:none;touch-action:none;z-index:1}.ui-slider .ui-slider-handle.ui-slider-handle-active{z-index:2}.ui-slider .ui-slider-range{position:absolute;font-size:.7em;display:block;border:0;background-position:0 0}.ui-slider-horizontal{height:.8em}.ui-slider-horizontal .ui-slider-handle{top:-.3em;margin-left:-.6em}.ui-slider-horizontal .ui-slider-range{top:0;height:100%}.ui-slider-horizontal .ui-slider-range-min{left:0}.ui-slider-horizontal .ui-slider-range-max{right:0}.ui-slider-vertical{width:.8em;height:100px}.ui-slider-vertical .ui-slider-handle{left:-.3em;margin-left:0;margin-bottom:-.6em}.ui-slider-vertical .ui-slider-range{left:0;width:100%}.ui-slider-vertical .ui-slider-range-min{bottom:0}.ui-slider-vertical .ui-slider-range-max{top:0}.ui-slider-animate .ui-slider-handle{transition:left .3s}.ui-spinner{display:inline-block;overflow:visible;padding:0;position:relative;vertical-align:middle}.ui-spinner-input{vertical-align:middle;padding-right:1.5em}.ui-spinner-button{cursor:default;display:block;height:50%;margin:0;overflow:hidden;padding:0;position:absolute;right:0;text-align:center;vertical-align:middle;width:1.5em}.ui-spinner .fa{position:absolute;top:50%;left:50%;margin-top:-.5em;margin-left:-.5em;width:1em}.ui-spinner-up{top:0}.ui-spinner-down{bottom:0}.ui-fluid .ui-spinner{width:100%}.ui-fluid .ui-spinner .ui-spinner-input{padding-right:2em;width:100%}.ui-fluid .ui-spinner .ui-spinner-button{width:1.5em}.ui-fluid .ui-spinner .ui-spinner-button .fa{left:.7em}.ui-splitbutton{position:relative;display:inline-block;zoom:1}.ui-splitbutton .ui-button.ui-splitbutton-menubutton{width:2em}.ui-splitbutton.ui-state-disabled button{cursor:default}.ui-fluid .ui-splitbutton{width:100%;box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box}.ui-fluid .ui-splitbutton .ui-button:first-child{width:calc(100% - 2em)}.ui-fluid .ui-splitbutton .ui-button.ui-splitbutton-menubutton{width:2em;box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box}.ui-steps ul{list-style-type:none;padding:0;margin:0}.ui-steps .ui-steps-item{float:left;box-sizing:border-box;cursor:pointer}.ui-steps.ui-steps-readonly .ui-steps-item{cursor:auto}.ui-steps .ui-steps-item .ui-menuitem-link{text-decoration:none;display:block;padding:1em;position:relative;text-align:center}.ui-steps .ui-steps-item.ui-state-highlight .ui-menuitem-link,.ui-steps .ui-steps-item.ui-state-disabled .ui-menuitem-link{cursor:default}.ui-steps .ui-steps-number{font-size:200%;display:block}.ui-steps .ui-steps-title{display:block;white-space:nowrap}@media(max-width:40em){.ui-steps .ui-steps-item .ui-menuitem-link{padding:.5em}.ui-steps .ui-steps-item .ui-steps-title{display:none}}.ui-tabmenu .ui-tabmenu-nav{margin:0;padding:.25em .5em 0 .25em}.ui-tabmenu .ui-tabmenu-nav .ui-tabmenuitem{list-style:none;float:left;position:relative;margin:0 .2em 1px 0;padding:0;white-space:nowrap;display:block;border-bottom:0;top:1px}.ui-tabmenu .ui-tabmenu-nav .ui-tabmenuitem a{float:left;padding:.5em 1em;text-decoration:none}.ui-tabmenu .ui-tabmenu-nav a{padding:.5em 1em}.ui-tabmenu .ui-tabmenu-nav .ui-tabmenuitem .ui-icon{float:left}.ui-tabmenu .ui-tabmenu-nav .ui-tabmenuitem.ui-state-disabled a{cursor:default}.ui-tabview{padding:.25em}.ui-tabview .ui-tabview-nav{margin:0}.ui-tabview .ui-tabview-nav li{list-style:none;float:left;position:relative;margin:0 .125em 1px 0;padding:0;white-space:nowrap}.ui-tabview .ui-tabview-nav li a{float:left;padding:.5em 1em;text-decoration:none}.ui-tabview .ui-tabview-nav li.ui-tabview-selected a,.ui-tabview .ui-tabview-nav li.ui-state-disabled a,.ui-tabview .ui-tabview-nav li.ui-state-processing a{cursor:text}.ui-tabview .ui-tabview-nav li a,.ui-tabview.ui-tabview-collapsible .ui-tabview-nav li.ui-tabview-selected a{cursor:pointer}.ui-tabview .ui-tabview-panel{border-width:0;padding:1em;background:0}.ui-tabview .ui-tabview-nav li{display:block}.ui-tabview .ui-tabview-nav li .ui-tabview-left-icon,.ui-tabview .ui-tabview-nav li .ui-tabview-right-icon,.ui-tabview .ui-tabview-nav li .ui-tabview-title{vertical-align:middle}.ui-tabview .ui-tabview-nav li .ui-tabview-close{margin:.5em .3em 0 0;cursor:pointer}.ui-tabview.ui-tabview-top>.ui-tabview-nav li{border-bottom:0;top:1px}.ui-tabview.ui-tabview-top>.ui-tabview-nav{padding:.2em .2em 0}.ui-tabview.ui-tabview-bottom>.ui-tabview-nav{padding:0 .2em .2em}.ui-tabview.ui-tabview-bottom>.ui-tabview-nav li{border-top:0}.ui-tabview-left:after,.ui-tabview-right:after{clear:both;content:".";display:block;height:0;visibility:hidden}.ui-tabview-left>.ui-tabview-nav{float:left;width:25%;height:300px;background-image:none;padding-top:1px}.ui-tabview-left>.ui-tabview-panels{float:right;width:75%}.ui-tabview.ui-tabview-left>.ui-tabview-nav li,.ui-tabview.ui-tabview-right>.ui-tabview-nav li{display:block;float:right;white-space:normal;width:99%}.ui-tabview.ui-tabview-left>.ui-tabview-nav li{margin:0 0 1px 0;border-right:0 none}.ui-tabview.ui-tabview-right>.ui-tabview-nav{float:right;width:25%;height:300px;background-image:none;padding-top:1px}.ui-tabview.ui-tabview-right>.ui-tabview-panels{float:left;width:75%}.ui-tabview.ui-tabview-right>.ui-tabview-nav li{margin:0 0 1px 0;border-left:0 none}.ui-terminal{height:18em;overflow:auto;padding:.25em}.ui-terminal-input{border:0 none;background-color:transparent;color:inherit;padding:0;margin:0 0 0 .125em;width:75%;outline:0;vertical-align:baseline}.ui-terminal-command{margin-left:.125em;-moz-margin-start:.125em}.ui-terminal-input::-ms-clear{display:none}.ui-toolbar{padding:.25em .5em}.ui-toolbar-group-left{float:left}.ui-toolbar-group-right{float:right}.ui-tooltip{position:absolute;display:none;padding:.25em .5em}.ui-tooltip.ui-tooltip-right,.ui-tooltip.ui-tooltip-left{padding:0 .25em}.ui-tooltip.ui-tooltip-top,.ui-tooltip.ui-tooltip-bottom{padding:.25em 0}.ui-tooltip .ui-tooltip-text{padding:.125em .5em;background-color:#4c4c4c;color:#fff;white-space:nowrap}.ui-tooltip-arrow{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.ui-tooltip-right .ui-tooltip-arrow{top:50%;left:0;margin-top:-.25em;border-width:.25em .25em .25em 0;border-right-color:#4c4c4c}.ui-tooltip-left .ui-tooltip-arrow{top:50%;right:0;margin-top:-.25em;border-width:.25em 0 .25em .25em;border-left-color:#4c4c4c}.ui-tooltip.ui-tooltip-top{padding:.25em 0}.ui-tooltip-top .ui-tooltip-arrow{bottom:0;left:50%;margin-left:-.25em;border-width:.25em .25em 0;border-top-color:#4c4c4c}.ui-tooltip-bottom .ui-tooltip-arrow{top:0;left:50%;margin-left:-.25em;border-width:0 .25em .25em;border-bottom-color:#4c4c4c}.ui-tree{width:18em}.ui-tree .ui-treenode-selectable.ui-treenode-content{cursor:pointer}.ui-tree .ui-tree-container{height:100%;margin:0;overflow:auto;padding:.25em;white-space:nowrap}.ui-tree .ui-treenode-children{margin:0;padding:0 0 0 1em}.ui-tree .ui-treenode{background-attachment:scroll;background-color:transparent;background-image:none;background-position:0 0;background-repeat:repeat-y;list-style:none outside none;margin:0;padding:.125em 0 0 0}.ui-tree .ui-treenode-droppoint{height:4px;list-style-type:none}.ui-tree .ui-treenode-droppoint-active{border:0 none}.ui-tree .ui-tree-toggler{cursor:pointer;display:inline-block;vertical-align:middle}.ui-tree .ui-treenode-icon{display:inline-block;vertical-align:middle}.ui-tree .ui-treenode-label{display:inline-block;padding:0 .25em;vertical-align:middle}.ui-tree .ui-treenode-label.ui-state-hover,.ui-tree .ui-treenode-label.ui-state-highlight{font-weight:normal;border:0 none}.ui-tree .ui-treenode.ui-treenode-leaf>.ui-treenode-content>.ui-tree-toggler{visibility:hidden}.ui-tree .ui-chkbox-box{cursor:pointer}.ui-tree .ui-chkbox{display:inline-block;vertical-align:middle}.ui-tree .ui-chkbox .ui-chkbox-icon{margin-left:1px}.ui-fluid .ui-tree{width:100%}.ui-tree-horizontal{width:auto;padding:.5em 0;overflow:auto}.ui-tree.ui-tree-horizontal table,.ui-tree.ui-tree-horizontal tr,.ui-tree.ui-tree-horizontal td{border-collapse:collapse;margin:0;padding:0;vertical-align:middle}.ui-tree.ui-tree-horizontal .ui-tree-toggler{vertical-align:middle;margin:0}.ui-tree-horizontal .ui-treenode-content{font-weight:normal;padding:.4em 1em .4em .2em}.ui-tree.ui-tree-horizontal .ui-tree-node-label{margin:0}.ui-tree-horizontal .ui-treenode-parent .ui-treenode-content{font-weight:normal;white-space:nowrap}.ui-tree.ui-tree-horizontal .ui-treenode{background:url('+n(246)+") repeat-x scroll center center transparent;padding:.25em 2.5em}.ui-tree.ui-tree-horizontal .ui-treenode.ui-treenode-leaf,.ui-tree.ui-tree-horizontal .ui-treenode.ui-treenode-collapsed{padding-right:0}.ui-tree.ui-tree-horizontal .ui-treenode-children{padding:0;margin:0}.ui-tree.ui-tree-horizontal .ui-treenode-connector{width:1px}.ui-tree.ui-tree-horizontal .ui-treenode-connector-table{height:100%;width:1px}.ui-tree.ui-tree-horizontal .ui-treenode-connector-line{background:url("+n(246)+") repeat-y scroll 0 0 transparent;width:1px}.ui-tree.ui-tree-horizontal table{height:0}.ui-tree.ui-tree-horizontal .ui-chkbox{vertical-align:bottom;margin-right:.25em}.ui-treetable table{border-collapse:collapse;width:100%;table-layout:fixed}.ui-treetable .ui-treetable-header,.ui-treetable .ui-treetable-footer{text-align:center;padding:.5em .75em}.ui-treetable .ui-treetable-header{border-bottom:0 none}.ui-treetable .ui-treetable-footer{border-top:0 none}.ui-treetable th,.ui-treetable tfoot td{text-align:center}.ui-treetable thead th,.ui-treetable tbody td,.ui-treetable tfoot td{padding:.25em .5em;overflow:hidden;white-space:nowrap;border-width:1px;border-style:solid}.ui-treetable tbody td{border-color:inherit}.ui-treetable tbody td:first-child span{vertical-align:middle}.ui-treetable .ui-treetable-toggler{vertical-align:middle;cursor:pointer;text-decoration:none}.ui-treetable .ui-treetable-checkbox{margin-right:.5em}.ui-treetable .ui-treetable-checkbox .ui-chkbox-icon{margin-left:1px}.ui-treetable .ui-treetable-row.ui-treetable-row-selectable{cursor:pointer}.ui-treetable .ui-treetable-row.ui-state-highlight{border:0 none}.ui-treetable tr.ui-state-hover{border-color:inherit;font-weight:inherit}.ui-treetable .ui-treetable-indent{width:1em;height:1em;float:left}.ui-treetable td.ui-treetable-child-table-container{padding:0;border:0 none}.ui-treetable .ui-treetable-row{display:table-row;border-bottom:0 transparent}.ui-treetable tbody .ui-treetable-row td{border:0 none}.ui-treetable tbody .ui-treetable-row td input{outline:0 none}",""])},/***/
501:/***/
function(e,t,n){t=e.exports=n(171)(void 0),
// imports
// module
t.push([e.i,'@charset "UTF-8";\n.ui-widget {\n  font-family: "Roboto", "Trebuchet MS", Arial, Helvetica, sans-serif;\n  font-size: 1em; }\n  .ui-widget input, .ui-widget select, .ui-widget textarea, .ui-widget button {\n    font-family: "Roboto", "Trebuchet MS", Arial, Helvetica, sans-serif;\n    font-size: 1em; }\n  .ui-widget :active {\n    outline: none; }\n\n.ui-widget-content {\n  border: 1px solid #D5D5D5;\n  background: #ffffff;\n  color: #222222; }\n  .ui-widget-content a {\n    color: #222222; }\n\n.ui-widget-header {\n  border: 1px solid #d9d9d9;\n  background: #f6f7f9;\n  color: #1b1d1f;\n  font-weight: normal; }\n  .ui-widget-header a {\n    color: #1b1d1f; }\n\n.ui-widget-overlay {\n  background: #666666;\n  opacity: .50;\n  filter: Alpha(Opacity=50); }\n\n.ui-widget-header .ui-state-default,\n.ui-widget-content .ui-state-default,\n.ui-state-default {\n  border: 1px solid #d6d6d6;\n  background: #ffffff;\n  color: #555555; }\n  .ui-widget-header .ui-state-default a,\n  .ui-widget-content .ui-state-default a,\n  .ui-state-default a {\n    color: #555555; }\n\n.ui-widget-header .ui-state-active,\n.ui-widget-content .ui-state-active,\n.ui-state-active {\n  border-color: #bebebe;\n  background: #d6d6d6;\n  color: #212121; }\n  .ui-widget-header .ui-state-active a,\n  .ui-widget-content .ui-state-active a,\n  .ui-state-active a {\n    color: #212121; }\n\n.ui-widget-header .ui-state-highlight,\n.ui-widget-content .ui-state-highlight,\n.ui-state-highlight {\n  border-color: #156090;\n  background: #186ba0;\n  color: #FFFFFF; }\n  .ui-widget-header .ui-state-highlight a,\n  .ui-widget-content .ui-state-highlight a,\n  .ui-state-highlight a {\n    color: #FFFFFF; }\n\n.ui-widget-header .ui-state-focus,\n.ui-widget-content .ui-state-focus,\n.ui-state-focus {\n  border-color: #c0c0c0;\n  background: #eeeeee;\n  color: #212121; }\n  .ui-widget-header .ui-state-focus a,\n  .ui-widget-content .ui-state-focus a,\n  .ui-state-focus a {\n    color: #212121; }\n\n.ui-widget-header .ui-state-error,\n.ui-widget-content .ui-state-error,\n.ui-state-error {\n  border-color: #f44336;\n  background: #f5554a;\n  color: #cd0a0a; }\n  .ui-widget-header .ui-state-error a,\n  .ui-widget-content .ui-state-error a,\n  .ui-state-error a {\n    color: #cd0a0a; }\n\n.ui-state-disabled,\n.ui-widget:disabled {\n  opacity: 0.35;\n  filter: Alpha(Opacity=35);\n  background-image: none;\n  cursor: default !important; }\n  .ui-state-disabled *,\n  .ui-widget:disabled * {\n    cursor: default !important; }\n\n/* Forms */\n.ui-inputtext {\n  background: #ffffff;\n  color: #222222; }\n\n.ui-inputtext:enabled:hover {\n  border-color: #c0c0c0; }\n\n.ui-inputtext.ui-state-focus,\n.ui-inputtext:focus {\n  outline: 0 none;\n  border-color: #c0c0c0;\n  -moz-box-shadow: 0px 0px 5px #c0c0c0;\n  -webkit-box-shadow: 0px 0px 5px #c0c0c0;\n  box-shadow: 0px 0px 5px #c0c0c0; }\n\n.ui-autocomplete .ui-autocomplete-multiple-container:not(.ui-state-disabled):hover {\n  border-color: #c0c0c0; }\n.ui-autocomplete .ui-autocomplete-multiple-container:not(.ui-state-disabled).ui-state-focus {\n  border-color: #c0c0c0; }\n\n.ui-chips > ul:not(.ui-state-disabled):hover {\n  border-color: #c0c0c0; }\n.ui-chips > ul:not(.ui-state-disabled).ui-state-focus {\n  border-color: #c0c0c0; }\n\n.ui-button:focus,\n.ui-button:enabled:hover {\n  outline: 0 none;\n  border-color: #c0c0c0;\n  background: #eeeeee;\n  color: #212121; }\n  .ui-button:focus a,\n  .ui-button:enabled:hover a {\n    color: #212121; }\n\n.ui-button:enabled:active {\n  border-color: #bebebe;\n  background: #d6d6d6;\n  color: #212121; }\n\n.ui-chkbox-box:not(.ui-state-disabled):not(.ui-state-active):hover {\n  border-color: #c0c0c0;\n  background: #eeeeee;\n  color: #212121; }\n  .ui-chkbox-box:not(.ui-state-disabled):not(.ui-state-active):hover a {\n    color: #212121; }\n\n.ui-radiobutton-box:not(.ui-state-disabled):not(.ui-state-active):hover {\n  border-color: #c0c0c0;\n  background: #eeeeee;\n  color: #212121; }\n  .ui-radiobutton-box:not(.ui-state-disabled):not(.ui-state-active):hover a {\n    color: #212121; }\n\n.ui-dropdown:not(.ui-state-disabled):hover {\n  border-color: #c0c0c0;\n  background: #eeeeee;\n  color: #212121; }\n  .ui-dropdown:not(.ui-state-disabled):hover a {\n    color: #212121; }\n\n.ui-dropdown-panel .ui-dropdown-item:not(.ui-state-highlight):hover {\n  border-color: #c0c0c0;\n  background: #eeeeee;\n  color: #212121; }\n  .ui-dropdown-panel .ui-dropdown-item:not(.ui-state-highlight):hover a {\n    color: #212121; }\n\n.ui-listbox .ui-listbox-header .ui-listbox-filter-container .fa {\n  color: #222222; }\n.ui-listbox:not(.ui-state-disabled) .ui-listbox-item:not(.ui-state-highlight):hover {\n  border-color: #c0c0c0;\n  background: #eeeeee;\n  color: #212121; }\n  .ui-listbox:not(.ui-state-disabled) .ui-listbox-item:not(.ui-state-highlight):hover a {\n    color: #212121; }\n.ui-listbox.ui-state-disabled .ui-chkbox-box:not(.ui-state-active):hover {\n  border-color: #d6d6d6;\n  background: #ffffff;\n  color: #555555; }\n\n.ui-multiselect:not(.ui-state-disabled):hover {\n  border-color: #c0c0c0;\n  background: #eeeeee;\n  color: #212121; }\n  .ui-multiselect:not(.ui-state-disabled):hover a {\n    color: #212121; }\n\n.ui-multiselect-panel .ui-multiselect-item:not(.ui-state-highlight):hover {\n  border-color: #c0c0c0;\n  background: #eeeeee;\n  color: #212121; }\n  .ui-multiselect-panel .ui-multiselect-item:not(.ui-state-highlight):hover a {\n    color: #212121; }\n\n.ui-multiselect-panel .ui-multiselect-close {\n  color: #1b1d1f; }\n\n.ui-multiselect-panel .ui-multiselect-filter-container .fa {\n  color: #222222; }\n\n.ui-spinner:not(.ui-state-disabled) .ui-spinner-button:enabled:hover {\n  border-color: #c0c0c0;\n  background: #eeeeee;\n  color: #212121; }\n  .ui-spinner:not(.ui-state-disabled) .ui-spinner-button:enabled:hover a {\n    color: #212121; }\n\n.ui-spinner:not(.ui-state-disabled) .ui-spinner-button:enabled:active {\n  border-color: #bebebe;\n  background: #d6d6d6;\n  color: #212121; }\n\n.ui-selectbutton .ui-button:not(.ui-state-disabled):not(.ui-state-active):hover {\n  border-color: #c0c0c0;\n  background: #eeeeee;\n  color: #212121; }\n  .ui-selectbutton .ui-button:not(.ui-state-disabled):not(.ui-state-active):hover a {\n    color: #212121; }\n\n.ui-togglebutton:not(.ui-state-disabled):not(.ui-state-active):hover {\n  border-color: #c0c0c0;\n  background: #eeeeee;\n  color: #212121; }\n  .ui-togglebutton:not(.ui-state-disabled):not(.ui-state-active):hover a {\n    color: #212121; }\n\n.ui-paginator a:not(.ui-state-disabled):not(.ui-state-active):hover {\n  border-color: #c0c0c0;\n  background: #eeeeee;\n  color: #212121; }\n  .ui-paginator a:not(.ui-state-disabled):not(.ui-state-active):hover a {\n    color: #212121; }\n\n.ui-datatable .ui-rowgroup-header a {\n  color: #1b1d1f; }\n.ui-datatable .ui-sortable-column:not(.ui-state-active):hover {\n  background: #eeeeee;\n  color: #212121; }\n.ui-datatable .ui-row-toggler {\n  color: #222222; }\n.ui-datatable tbody.ui-datatable-hoverable-rows > tr.ui-widget-content:not(.ui-state-highlight):hover {\n  cursor: pointer;\n  background: #eeeeee;\n  color: #212121; }\n\n.ui-orderlist .ui-orderlist-item:not(.ui-state-highlight):hover {\n  border-color: #c0c0c0;\n  background: #eeeeee;\n  color: #212121; }\n  .ui-orderlist .ui-orderlist-item:not(.ui-state-highlight):hover a {\n    color: #212121; }\n\n.ui-picklist .ui-picklist-item:not(.ui-state-highlight):hover {\n  border-color: #c0c0c0;\n  background: #eeeeee;\n  color: #212121; }\n  .ui-picklist .ui-picklist-item:not(.ui-state-highlight):hover a {\n    color: #212121; }\n\n.ui-tree.ui-treenode-dragover {\n  border-color: #156090; }\n.ui-tree .ui-treenode-content.ui-treenode-selectable .ui-treenode-label:not(.ui-state-highlight):hover {\n  border-color: #c0c0c0;\n  background: #eeeeee;\n  color: #212121; }\n  .ui-tree .ui-treenode-content.ui-treenode-selectable .ui-treenode-label:not(.ui-state-highlight):hover a {\n    color: #212121; }\n.ui-tree .ui-treenode-content.ui-treenode-dragover {\n  background: #d6d6d6;\n  color: #212121; }\n.ui-tree.ui-tree-horizontal .ui-treenode-content.ui-treenode-selectable .ui-treenode-label:not(.ui-state-highlight):hover {\n  background-color: inherit;\n  color: inherit; }\n.ui-tree.ui-tree-horizontal .ui-treenode-content.ui-treenode-selectable:not(.ui-state-highlight):hover {\n  border-color: #c0c0c0;\n  background: #eeeeee;\n  color: #212121; }\n  .ui-tree.ui-tree-horizontal .ui-treenode-content.ui-treenode-selectable:not(.ui-state-highlight):hover a {\n    color: #212121; }\n\n.ui-treetable .ui-treetable-row.ui-treetable-row-selectable:not(.ui-state-highlight):hover {\n  background: #eeeeee;\n  color: #212121; }\n\n.ui-accordion .ui-accordion-header:not(.ui-state-active):not(.ui-state-disabled):hover {\n  border-color: #c0c0c0;\n  background: #eeeeee;\n  color: #212121; }\n  .ui-accordion .ui-accordion-header:not(.ui-state-active):not(.ui-state-disabled):hover a {\n    color: #212121; }\n\n.ui-fieldset.ui-fieldset-toggleable .ui-fieldset-legend:hover {\n  border-color: #c0c0c0;\n  background: #eeeeee;\n  color: #212121; }\n  .ui-fieldset.ui-fieldset-toggleable .ui-fieldset-legend:hover a {\n    color: #212121; }\n\n.ui-panel .ui-panel-titlebar .ui-panel-titlebar-icon:hover {\n  border-color: #c0c0c0;\n  background: #eeeeee;\n  color: #212121; }\n  .ui-panel .ui-panel-titlebar .ui-panel-titlebar-icon:hover a {\n    color: #212121; }\n\n.ui-tabview .ui-tabview-nav li:not(.ui-state-active):not(.ui-state-disabled):hover {\n  border-color: #c0c0c0;\n  background: #eeeeee;\n  color: #212121; }\n  .ui-tabview .ui-tabview-nav li:not(.ui-state-active):not(.ui-state-disabled):hover a {\n    color: #212121; }\n\n.ui-dialog .ui-dialog-titlebar-icon {\n  color: #1b1d1f; }\n  .ui-dialog .ui-dialog-titlebar-icon:hover {\n    border-color: #c0c0c0;\n    background: #eeeeee;\n    color: #212121; }\n    .ui-dialog .ui-dialog-titlebar-icon:hover a {\n      color: #212121; }\n\n.ui-overlaypanel .ui-overlaypanel-close:hover {\n  border-color: #c0c0c0;\n  background: #eeeeee;\n  color: #212121; }\n  .ui-overlaypanel .ui-overlaypanel-close:hover a {\n    color: #212121; }\n\n.ui-inplace .ui-inplace-display:hover {\n  border-color: #c0c0c0;\n  background: #eeeeee;\n  color: #212121; }\n  .ui-inplace .ui-inplace-display:hover a {\n    color: #212121; }\n\n.ui-breadcrumb a {\n  color: #1b1d1f; }\n\n.ui-menu .ui-menuitem .ui-menuitem-link {\n  color: #222222; }\n  .ui-menu .ui-menuitem .ui-menuitem-link:hover {\n    border-color: #c0c0c0;\n    background: #eeeeee;\n    color: #212121;\n    border-color: transparent; }\n    .ui-menu .ui-menuitem .ui-menuitem-link:hover a {\n      color: #212121; }\n.ui-menu .ui-menuitem.ui-menuitem-active > .ui-menuitem-link {\n  border-color: #c0c0c0;\n  background: #eeeeee;\n  color: #212121;\n  border-color: transparent; }\n  .ui-menu .ui-menuitem.ui-menuitem-active > .ui-menuitem-link a {\n    color: #212121; }\n\n.ui-tabmenu .ui-tabmenu-nav li:not(.ui-state-active):hover {\n  border-color: #c0c0c0;\n  background: #eeeeee;\n  color: #212121; }\n  .ui-tabmenu .ui-tabmenu-nav li:not(.ui-state-active):hover a {\n    color: #212121; }\n\n.ui-steps .ui-steps-item:not(.ui-state-highlight):not(.ui-state-disabled):hover {\n  border-color: #c0c0c0;\n  background: #eeeeee;\n  color: #212121; }\n  .ui-steps .ui-steps-item:not(.ui-state-highlight):not(.ui-state-disabled):hover a {\n    color: #212121; }\n\n.ui-panelmenu .ui-panelmenu-header:not(.ui-state-active):hover {\n  border-color: #c0c0c0;\n  background: #eeeeee;\n  color: #212121; }\n  .ui-panelmenu .ui-panelmenu-header:not(.ui-state-active):hover a {\n    color: #212121; }\n  .ui-panelmenu .ui-panelmenu-header:not(.ui-state-active):hover a {\n    color: #212121; }\n.ui-panelmenu .ui-panelmenu-header.ui-state-active a {\n  color: #212121; }\n.ui-panelmenu .ui-panelmenu-content .ui-menuitem-link {\n  color: #222222; }\n  .ui-panelmenu .ui-panelmenu-content .ui-menuitem-link:hover {\n    border-color: #c0c0c0;\n    background: #eeeeee;\n    color: #212121;\n    border-color: transparent; }\n    .ui-panelmenu .ui-panelmenu-content .ui-menuitem-link:hover a {\n      color: #212121; }\n\n.ui-datepicker .ui-datepicker-header a {\n  color: #1b1d1f; }\n  .ui-datepicker .ui-datepicker-header a:hover {\n    border-color: #c0c0c0;\n    background: #eeeeee;\n    color: #212121; }\n    .ui-datepicker .ui-datepicker-header a:hover a {\n      color: #212121; }\n.ui-datepicker .ui-datepicker-calendar td:not(.ui-state-disabled) a:hover {\n  border-color: #c0c0c0;\n  background: #eeeeee;\n  color: #212121; }\n  .ui-datepicker .ui-datepicker-calendar td:not(.ui-state-disabled) a:hover a {\n    color: #212121; }\n\n.fc .fc-toolbar .fc-prev-button .ui-icon-circle-triangle-w {\n  margin-top: .3em;\n  background: none !important;\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-indent: 0px !important;\n  text-align: center; }\n  .fc .fc-toolbar .fc-prev-button .ui-icon-circle-triangle-w:before {\n    content: "\\F053"; }\n.fc .fc-toolbar .fc-next-button .ui-icon-circle-triangle-e {\n  margin-top: .3em;\n  background: none !important;\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-indent: 0px !important;\n  text-align: center; }\n  .fc .fc-toolbar .fc-next-button .ui-icon-circle-triangle-e:before {\n    content: "\\F054"; }\n\n.ui-rating a {\n  color: #222222; }\n\n/* Validation */\n.ui-inputtext.ng-dirty.ng-invalid,\np-dropdown.ng-dirty.ng-invalid > .ui-dropdown,\np-autocomplete.ng-dirty.ng-invalid > .ui-autocomplete > .ui-inputtext,\np-calendar.ng-dirty.ng-invalid > .ui-inputtext,\np-chips.ng-dirty.ng-invalid > .ui-inputtext,\np-inputmask.ng-dirty.ng-invalid > .ui-inputtext,\np-checkbox.ng-dirty.ng-invalid .ui-chkbox-box,\np-radiobutton.ng-dirty.ng-invalid .ui-radiobutton-box,\np-inputswitch.ng-dirty.ng-invalid .ui-inputswitch,\np-listbox.ng-dirty.ng-invalid .ui-inputtext,\np-multiselect.ng-dirty.ng-invalid > .ui-multiselect,\np-spinner.ng-dirty.ng-invalid > .ui-inputtext,\np-selectbutton.ng-dirty.ng-invalid .ui-button,\np-togglebutton.ng-dirty.ng-invalid .ui-button {\n  border-bottom-color: #f44336; }\n\n/* Cornering */\n.ui-corner-tl {\n  -moz-border-radius-topleft: 3px;\n  -webkit-border-top-left-radius: 3px;\n  border-top-left-radius: 3px; }\n\n.ui-corner-tr {\n  -moz-border-radius-topright: 3px;\n  -webkit-border-top-right-radius: 3px;\n  border-top-right-radius: 3px; }\n\n.ui-corner-bl {\n  -moz-border-radius-bottomleft: 3px;\n  -webkit-border-bottom-left-radius: 3px;\n  border-bottom-left-radius: 3px; }\n\n.ui-corner-br {\n  -moz-border-radius-bottomright: 3px;\n  -webkit-border-bottom-right-radius: 3px;\n  border-bottom-right-radius: 3px; }\n\n.ui-corner-top {\n  -moz-border-radius-topleft: 3px;\n  -webkit-border-top-left-radius: 3px;\n  border-top-left-radius: 3px;\n  -moz-border-radius-topright: 3px;\n  -webkit-border-top-right-radius: 3px;\n  border-top-right-radius: 3px; }\n\n.ui-corner-bottom {\n  -moz-border-radius-bottomleft: 3px;\n  -webkit-border-bottom-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n  -moz-border-radius-bottomright: 3px;\n  -webkit-border-bottom-right-radius: 3px;\n  border-bottom-right-radius: 3px; }\n\n.ui-corner-right {\n  -moz-border-radius-topright: 3px;\n  -webkit-border-top-right-radius: 3px;\n  border-top-right-radius: 3px;\n  -moz-border-radius-bottomright: 3px;\n  -webkit-border-bottom-right-radius: 3px;\n  border-bottom-right-radius: 3px; }\n\n.ui-corner-left {\n  -moz-border-radius-topleft: 3px;\n  -webkit-border-top-left-radius: 3px;\n  border-top-left-radius: 3px;\n  -moz-border-radius-bottomleft: 3px;\n  -webkit-border-bottom-left-radius: 3px;\n  border-bottom-left-radius: 3px; }\n\n.ui-corner-all {\n  -moz-border-radius: 3px;\n  -webkit-border-radius: 3px;\n  border-radius: 3px; }\n\n/* roboto-regular - latin */\n@font-face {\n  font-family: \'Roboto\';\n  font-style: normal;\n  font-weight: 400;\n  src: url('+n(245)+');\n  /* IE9 Compat Modes */\n  src: local("Roboto"), local("Roboto-Regular"), url('+n(245)+'?#iefix) format("embedded-opentype"), url('+n(510)+') format("woff2"), url('+n(509)+') format("woff"), url('+n(508)+') format("truetype"), url('+n(512)+'#Roboto) format("svg");\n  /* Legacy iOS */ }\n.ui-widget-header {\n  background: #f6f7f9 0 0 repeat-x;\n  /* Old browsers */\n  background: -moz-linear-gradient(top, #f6f7f9 0%, #ebedf0 100%);\n  /* FF3.6+ */\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #f6f7f9), color-stop(100%, #ebedf0));\n  /* Chrome,Safari4+ */\n  background: -webkit-linear-gradient(top, #f6f7f9 0%, #ebedf0 100%);\n  /* Chrome10+,Safari5.1+ */\n  background: -o-linear-gradient(top, #f6f7f9 0%, #ebedf0 100%);\n  /* Opera11.10+ */\n  background: -ms-linear-gradient(top, #f6f7f9 0%, #ebedf0 100%);\n  /* IE10+ */\n  background: linear-gradient(to bottom, #f6f7f9 0%, #ebedf0 100%);\n  /* W3C */ }\n\n.ui-accordion .ui-accordion-header {\n  background: #f6f7f9;\n  border-top: 1px solid #d9d9d9; }\n  .ui-accordion .ui-accordion-header a {\n    color: #1b1d1f; }\n  .ui-accordion .ui-accordion-header:not(.ui-state-active):not(.ui-state-disabled):hover {\n    background: #ededf0; }\n  .ui-accordion .ui-accordion-header.ui-state-active {\n    background: #ffffff;\n    border-left-color: transparent;\n    border-right-color: transparent;\n    border-bottom-color: transparent;\n    -webkit-border-radius: 0;\n    -moz-border-radius: 0;\n    border-radius: 0; }\n.ui-accordion .ui-accordion-content {\n  border: 0 none; }\n\n/* Tabview */\n.ui-tabview.ui-widget-content {\n  border: 0 none; }\n.ui-tabview .ui-tabview-nav {\n  background: transparent; }\n  .ui-tabview .ui-tabview-nav > li.ui-state-default {\n    background: #f6f7f9; }\n  .ui-tabview .ui-tabview-nav > li.ui-state-active {\n    background: #ffffff;\n    font-weight: normal;\n    color: #555555; }\n  .ui-tabview .ui-tabview-nav > li:not(.ui-state-active):not(.ui-state-disabled):hover {\n    background: #ededf0; }\n\n/* Spinner */\n.ui-spinner:not(.ui-state-disabled) .ui-spinner-button:enabled:hover {\n  border: 1px solid #1f89ce;\n  background: #1f89ce;\n  outline: 0 none;\n  color: #ffffff; }\n\n.ui-spinner:not(.ui-state-disabled) .ui-spinner-button:enabled:active {\n  border: 1px solid #156090;\n  background: #186ba0;\n  color: #ffffff; }\n\n.ui-slider {\n  position: relative;\n  text-align: left;\n  background: #838688;\n  border: none;\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6) inset;\n  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6) inset;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6) inset; }\n\n.ui-slider .ui-slider-handle {\n  position: absolute;\n  z-index: 2;\n  width: 17px !important;\n  height: 21px  !important;\n  cursor: default;\n  background: url('+n(515)+") 0 0 no-repeat;\n  outline: none;\n  -webkit-border-radius: 0;\n  -moz-border-radius: 0;\n  border-radius: 0;\n  border: none; }\n\n.ui-slider .ui-slider-range {\n  position: absolute;\n  z-index: 1;\n  font-size: .7em;\n  display: block;\n  border: 0;\n  background: #14a4ff;\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6) inset;\n  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6) inset;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6) inset;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  border-radius: 3px; }\n\n.ui-slider .ui-slider-handle.ui-state-active {\n  background-position: -17px 0; }\n\n.ui-slider-horizontal {\n  height: 6px; }\n\n.ui-slider-horizontal .ui-slider-handle {\n  top: -3px !important;\n  margin-left: -.6em; }\n\n.ui-slider-horizontal .ui-slider-range {\n  top: 0;\n  height: 100%; }\n\n.ui-slider-horizontal .ui-slider-range-min {\n  left: 0; }\n\n.ui-slider-horizontal .ui-slider-range-max {\n  right: 0; }\n\n.ui-slider-vertical {\n  width: .8em;\n  height: 100px; }\n\n.ui-slider-vertical .ui-slider-handle {\n  left: -.2em !important;\n  margin-left: 0;\n  margin-bottom: -.6em; }\n\n.ui-slider-vertical .ui-slider-range {\n  left: 0;\n  width: 100%; }\n\n.ui-slider-vertical .ui-slider-range-min {\n  bottom: 0; }\n\n.ui-slider-vertical .ui-slider-range-max {\n  top: 0; }\n\n.ui-progressbar .ui-progressbar-value {\n  border: 1px solid #3f94e9;\n  background: #8ec5fc; }\n\n.ui-progressbar .ui-progressbar-label {\n  color: #222222; }\n\n.ui-widget-header .ui-button,\n.ui-widget-content .ui-button,\n.ui-button {\n  border: 1px solid #2399e5;\n  color: #FFFFFF;\n  background: #2399e5;\n  -webkit-transition: background-color .2s;\n  -moz-transition: background-color .2s;\n  transition: background-color .2s; }\n  .ui-widget-header .ui-button:enabled:hover, .ui-widget-header .ui-button:focus,\n  .ui-widget-content .ui-button:enabled:hover,\n  .ui-widget-content .ui-button:focus,\n  .ui-button:enabled:hover,\n  .ui-button:focus {\n    border: 1px solid #1f89ce;\n    background: #1f89ce;\n    outline: 0 none;\n    color: #ffffff; }\n  .ui-widget-header .ui-button:enabled:active,\n  .ui-widget-content .ui-button:enabled:active,\n  .ui-button:enabled:active {\n    border: 1px solid #156090;\n    background: #186ba0;\n    color: #ffffff; }\n\n/* Checkbox and Radio */\n.ui-chkbox-box.ui-state-active,\n.ui-radiobutton-box.ui-state-active {\n  border: 1px solid #156090;\n  background: #186ba0;\n  color: #FFFFFF; }\n\n.ui-chkbox-box.ui-state-focus,\n.ui-radiobutton-box.ui-state-focus {\n  -moz-box-shadow: 0px 0px 5px #1f89ce;\n  -webkit-box-shadow: 0px 0px 5px #1f89ce;\n  box-shadow: 0px 0px 5px #1f89ce; }\n\n.ui-chkbox-box.ui-state-focus.ui-state-active {\n  background: #186ba0; }\n\n/* Inputs */\n.ui-inputtext {\n  background: #ffffff;\n  color: #222222;\n  -webkit-transition: .2s;\n  -moz-transition: .2s;\n  transition: .2s; }\n\n.ui-inputtext.ui-state-focus,\n.ui-inputtext:focus {\n  -moz-box-shadow: 0px 0px 5px #1f89ce;\n  -webkit-box-shadow: 0px 0px 5px #1f89ce;\n  box-shadow: 0px 0px 5px #1f89ce; }\n\n/* InputSwitch */\n.ui-inputswitch-on {\n  background: #186ba0 !important;\n  color: #ffffff !important; }\n\n.ui-paginator .ui-paginator-page.ui-state-active {\n  background: #186ba0;\n  color: #ffffff;\n  border-color: #156090; }\n\n/* DataTable  */\n.ui-datatable th.ui-state-default {\n  background: #ebedf0;\n  border-color: #d9d9d9; }\n.ui-datatable th.ui-sortable-column:not(.ui-state-active):hover {\n  background: #d3d5d8;\n  border-color: #d9d9d9; }\n.ui-datatable th.ui-state-active {\n  background: #186ba0;\n  color: #ffffff; }\n.ui-datatable tbody > tr.ui-widget-content {\n  border-color: #d9d9d9; }\n  .ui-datatable tbody > tr.ui-widget-content.ui-datatable-odd {\n    background-color: #fafafb; }\n  .ui-datatable tbody > tr.ui-widget-content.ui-state-highlight {\n    background-color: #186ba0;\n    color: #FFFFFF; }\n.ui-datatable tfoot td.ui-state-default {\n  background: #ebedf0;\n  border-color: #d9d9d9; }\n\n/* Panel */\n.ui-panel.ui-widget {\n  padding: 0; }\n  .ui-panel.ui-widget .ui-panel-titlebar.ui-corner-all {\n    -moz-border-radius-bottom-left: 0;\n    -webkit-border-bottom-left-radius: 0;\n    border-bottom-left-radius: 0;\n    -moz-border-radius-bottom-right: 0;\n    -webkit-border-bottom-right-radius: 0;\n    border-bottom-right-radius: 0; }\n  .ui-panel.ui-widget .ui-panel-titlebar {\n    border-width: 0 0 1px 0; }\n  .ui-panel.ui-widget .ui-panel-titlebar-icon span {\n    position: relative;\n    top: 1px; }\n\n/* TreeTable */\n.ui-treetable th.ui-state-default {\n  background: #ebedf0;\n  border-color: #d9d9d9; }\n\n/* ButtonSet */\n.ui-togglebutton.ui-button.ui-state-default,\n.ui-selectbutton .ui-button.ui-state-default {\n  border: 1px solid #d6d6d6;\n  background: #ffffff;\n  font-weight: normal;\n  color: #555555; }\n\n.ui-togglebutton.ui-button.ui-state-hover, .ui-togglebutton.ui-button.ui-state-focus,\n.ui-selectbutton .ui-button.ui-state-hover, .ui-selectbutton .ui-button.ui-state-focus {\n  border: 1px solid #c0c0c0;\n  background: #eeeeee;\n  font-weight: normal;\n  color: #212121; }\n\n.ui-togglebutton.ui-button.ui-state-focus {\n  -moz-box-shadow: 0px 0px 5px #1f89ce;\n  -webkit-box-shadow: 0px 0px 5px #1f89ce;\n  box-shadow: 0px 0px 5px #1f89ce;\n  background: #ffffff; }\n\n.ui-togglebutton.ui-button.ui-state-active,\n.ui-selectbutton .ui-button.ui-state-active {\n  border: 1px solid #156090;\n  background: #186ba0;\n  color: #FFFFFF; }\n\n.ui-multiselect .ui-multiselect-label {\n  background-color: #ffffff; }\n\n.ui-dropdown.ui-state-focus, .ui-multiselect.ui-state-focus {\n  -moz-box-shadow: 0px 0px 5px #1f89ce;\n  -webkit-box-shadow: 0px 0px 5px #1f89ce;\n  box-shadow: 0px 0px 5px #1f89ce; }\n\n/* Growl */\n.ui-growl-item-container.ui-state-highlight.ui-growl-message-info {\n  background-color: #2196f3;\n  border-color: #2196f3; }\n.ui-growl-item-container.ui-state-highlight.ui-growl-message-error {\n  background-color: #f44336;\n  border-color: #f44336; }\n.ui-growl-item-container.ui-state-highlight.ui-growl-message-warn {\n  background-color: #FFB300;\n  border-color: #FFB300; }\n.ui-growl-item-container.ui-state-highlight.ui-growl-message-success {\n  background-color: #4CAF50;\n  border-color: #4CAF50; }\n\n/* TabMenu */\n.ui-tabmenu {\n  border: 0 none; }\n  .ui-tabmenu .ui-tabmenu-nav {\n    background: none; }\n    .ui-tabmenu .ui-tabmenu-nav > li.ui-state-default {\n      background: #f6f7f9; }\n    .ui-tabmenu .ui-tabmenu-nav > li.ui-state-active {\n      background: #ffffff;\n      font-weight: normal;\n      color: #555555; }\n    .ui-tabmenu .ui-tabmenu-nav > li:not(.ui-state-active):not(.ui-state-disabled):hover {\n      background: #ededf0; }\n\n/* Menus */\n.ui-menu,\n.ui-menu .ui-menu-child {\n  border: 1px solid #d9d9d9;\n  color: #1b1d1f;\n  background: #f6f7f9 0 0 repeat-x;\n  /* Old browsers */\n  background: -moz-linear-gradient(top, #f6f7f9 0%, #ebedf0 100%);\n  /* FF3.6+ */\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #f6f7f9), color-stop(100%, #ebedf0));\n  /* Chrome,Safari4+ */\n  background: -webkit-linear-gradient(top, #f6f7f9 0%, #ebedf0 100%);\n  /* Chrome10+,Safari5.1+ */\n  background: -o-linear-gradient(top, #f6f7f9 0%, #ebedf0 100%);\n  /* Opera11.10+ */\n  background: -ms-linear-gradient(top, #f6f7f9 0%, #ebedf0 100%);\n  /* IE10+ */\n  background: linear-gradient(to bottom, #f6f7f9 0%, #ebedf0 100%);\n  /* W3C */ }\n\n.ui-menu .ui-menuitem .ui-menuitem-link:hover {\n  background-color: #a6a6a6;\n  color: #ffffff; }\n.ui-menu .ui-menuitem.ui-menuitem-active > .ui-menuitem-link {\n  background-color: #a6a6a6;\n  color: #ffffff; }\n\n/* PanelMenu */\n.ui-panelmenu .ui-panelmenu-header.ui-state-active,\n.ui-panelmenu .ui-panelmenu-header.ui-state-active a {\n  border-color: #156090;\n  background: #186ba0;\n  color: #FFFFFF; }\n\n/* DatePicker */\n.ui-datepicker.ui-widget {\n  padding: 0; }\n  .ui-datepicker.ui-widget .ui-datepicker-header {\n    -webkit-border-radius: 0px;\n    -moz-border-radius: 0px;\n    border-radius: 0px;\n    border-top: 0 none;\n    border-left: 0 none;\n    border-right: 0 none; }\n    .ui-datepicker.ui-widget .ui-datepicker-header a:hover {\n      border-width: 1px; }\n  .ui-datepicker.ui-widget .ui-datepicker-calendar {\n    margin: 0; }\n    .ui-datepicker.ui-widget .ui-datepicker-calendar thead th {\n      background-color: #f6f8fa;\n      padding: 8px; }\n    .ui-datepicker.ui-widget .ui-datepicker-calendar td {\n      border-bottom: 1px solid rgba(213, 213, 213, 0.5);\n      padding: 0; }\n      .ui-datepicker.ui-widget .ui-datepicker-calendar td a {\n        border: 0 none;\n        text-align: center;\n        padding: 8px; }\n        .ui-datepicker.ui-widget .ui-datepicker-calendar td a.ui-state-highlight {\n          background-color: #d6d6d6;\n          color: #212121; }\n        .ui-datepicker.ui-widget .ui-datepicker-calendar td a.ui-state-active {\n          background-color: #186ba0;\n          color: #ffffff; }\n    .ui-datepicker.ui-widget .ui-datepicker-calendar tr:last-child td {\n      border-bottom: 0 none; }\n  .ui-datepicker.ui-widget .ui-timepicker {\n    border-bottom: 0 none;\n    border-left: 0 none;\n    border-right: 0 none;\n    -moz-border-radius: 0;\n    -webkit-border-radius: 0;\n    border-radius: 0; }\n  .ui-datepicker.ui-widget.ui-datepicker-timeonly .ui-timepicker {\n    border-top: 0 none; }\n\n/* Steps */\n.ui-steps .ui-steps-item.ui-state-highlight .ui-menuitem-link {\n  color: #ffffff; }\n\n/* Dialog */\n.ui-dialog.ui-widget .ui-dialog-titlebar {\n  padding: 1em 1.5em; }\n\n.ui-dialog.ui-widget .ui-dialog-titlebar .ui-dialog-title {\n  font-size: 1.25em; }\n\n.ui-dialog.ui-widget .ui-dialog-content {\n  padding: 1em 1.5em; }\n\n/*# sourceMappingURL=theme.css.map */\n",""])},/***/
503:/***/
function(e,t,n){e.exports=n.p+"674f50d287a8c48dc19ba404d20fe713.eot"},/***/
504:/***/
function(e,t,n){e.exports=n.p+"674f50d287a8c48dc19ba404d20fe713.eot"},/***/
505:/***/
function(e,t,n){e.exports=n.p+"b06871f281fee6b241d60582ae9369b9.ttf"},/***/
506:/***/
function(e,t,n){e.exports=n.p+"af7ae505a9eed503f8b8e6982036873e.woff2"},/***/
507:/***/
function(e,t,n){e.exports=n.p+"fee66e712a8a08eef5805a46892932ad.woff"},/***/
508:/***/
function(e,t,n){e.exports=n.p+"38861cba61c66739c1452c3a71e39852.ttf"},/***/
509:/***/
function(e,t,n){e.exports=n.p+"16e1d930cf13fb7a956372044b6d02d0.woff"},/***/
510:/***/
function(e,t,n){e.exports=n.p+"7e367be02cd17a96d513ab74846bafb3.woff2"},/***/
511:/***/
function(e,t,n){e.exports=n.p+"./assets/images/fontawesome-webfont.svg"},/***/
512:/***/
function(e,t,n){e.exports=n.p+"./assets/images/roboto-v15-latin-regular.svg"},/***/
513:/***/
function(e,t,n){e.exports=n.p+"./assets/images/loading.gif"},/***/
514:/***/
function(e,t,n){e.exports=n.p+"./assets/images/password-meter.png"},/***/
515:/***/
function(e,t,n){e.exports=n.p+"./assets/images/slider_handles.png"},/***/
517:/***/
function(e,t){e.exports='<div id="frontpage_root_box">\r\n    <h4 id="frontpage_title">Visualized Mathematical Expressions</h4>\r\n    <div class="frontpage_sandboxbtn_box">\r\n        <button class="frontpage_sandboxbtn" pButton type="button" (click)="onGoToSandbox()" label="Go to Sandbox"></button>\r\n    </div>\r\n    <div id="frontpage_or_box">\r\n        <p id="frontpage_or_text">Or</p>\r\n    </div>\r\n    <div id="frontpage_inputbox">\r\n        <div class="frontpage_expression_box" [ngSwitch]="chosenType">\r\n            <label id="frontpage_expression_des">Choose the type of tool you want to use and then fill out the necessary boxes </label>\r\n            <div id="frontpage_dropdown_generatebtn_box">\r\n                <p-dropdown id="frontpage_dropdownmenu" [options]="types" [(ngModel)]="type" (onChange)="onDropdownChange($event.originalEvent, $event.value)"></p-dropdown>\r\n                <button class="frontpage_generatebtn" pButton type="button" (click)="onGenerateURL()" label="Generate URL"></button>\r\n            </div>\r\n\r\n            <div *ngSwitchDefault class="SandboxType">\r\n                <input type="text" pInputText [(ngModel)]="expression" placeholder="Expression">\r\n            </div>\r\n            <div *ngSwitchCase="2" class="ProblemSolvingType">\r\n                <input type="text" pInputText [(ngModel)]="expression" placeholder="Expression">\r\n                <input type="text" pInputText [(ngModel)]="correctSolution" placeholder="Correct Solution">\r\n                <input type="text" pInputText [(ngModel)]="wrongSolution" placeholder="Wrong Solution">\r\n            </div>\r\n            <div *ngSwitchCase="3" class="GuideType">\r\n                <textarea [rows]="5" [cols]="30" pInputTextarea [(ngModel)]="tree" placeholder="Tree"></textarea>\r\n                <textarea [rows]="5" [cols]="30" pInputTextarea [(ngModel)]="description" placeholder="Guide Description"></textarea>\r\n            </div>\r\n        </div>\r\n        <textarea id="frontpage_output_area" [rows]="2" [cols]="80" pInputTextarea [(ngModel)]="urlOutput" placeholder="URL output"></textarea>\r\n        <button class="frontpage_copybtn" pButton type="button" (click)="onCopy()" label="Copy Link"></button>\r\n    </div>\r\n</div>'},/***/
518:/***/
function(e,t){e.exports='<div class="expression_operation_box" [ngSwitch]="operationState">\r\n    <div *ngSwitchDefault class="expression_operation expression_operation_closed">\r\n        <div class="expression_operation_info_box">\r\n            <img class="expression_operation_info_icon" src="/assets/images/icon-information-white-32x32.png" />\r\n            <p>{{infoText}}</p>\r\n        </div>\r\n    </div>\r\n    <div *ngSwitchCase="2" class="expression_operation expression_operation_added">\r\n        <div class="expression_operation_info_box">\r\n            <img class="expression_operation_info_icon" src="/assets/images/icon-information-white-32x32.png" />\r\n            <p>{{infoText}}</p>\r\n        </div>\r\n        <div class="expression_operation_line-divider"></div>\r\n        <div class="expression_operation_comparison">\r\n            <div class="expression_operation_current">\r\n                <p>Current expression</p>\r\n                <visualization [data]="currentData" class="expression_operation_visualization"></visualization>\r\n            </div>\r\n            <div class="expression_operation_arrow">\r\n                <img class="expression_operation_info_icon" src="/assets/images/icon-arrow-white-32x24.png" />\r\n            </div>\r\n            <div class="expression_operation_new">\r\n                <div class="expression_operation_edit">\r\n                    <label for="replace">Replacement expression</label>\r\n                    <input type="text" (ngModelChange)="onInputChange($event)" [(ngModel)]="input" id="replace"> \r\n                </div>\r\n                <div class="expression_operation_visualization">\r\n                    <visualization [data]="newData" class="expression_operation_visualization"></visualization>\r\n                </div>\r\n                <div class="expression_operation_actions">\r\n                    <button pButton (click)="applyOperation()" [disabled]="isApplyBtnDisabled()" label="Apply Operation"></button>\r\n                    <button pButton (click)="cancelOperation()" label="Cancel Operation"></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'},/***/
519:/***/
function(e,t){e.exports='<div class="expression_box">\r\n    <div class="expression_actions" #banner>\r\n        <p>{{counter}}</p>\r\n        <button pButton (click)="addExpression()" label="Add New"></button>\r\n        <button pButton (click)="cloneExpression()" label="Clone"></button>\r\n        <button pButton (click)="removeExpression()" label="Remove"></button>\r\n        <button pButton (click)="moveExpressionUp()" label="Move up"></button>\r\n        <button pButton (click)="moveExpressionDown()" label="Move down"></button>\r\n    </div>\r\n    <div class="expression_edit">\r\n        <input type="text" (ngModelChange)="onInputChange($event)" [(ngModel)]="input">\r\n    </div>\r\n    <div class="visualization_render">\r\n        <visualization [data]="data" [config]="config" [eventHandler]="expressionEventHandler"></visualization>\r\n    </div>\r\n</div>\r\n\r\n<expression-operation \r\n    [operationState]="operationState" [selectedNode]="selectedNode" \r\n    (onApplied)="onOperationApplied($event)" (onCanceled)="onOperationCanceled()">\r\n</expression-operation>'},/***/
520:/***/
function(e,t){e.exports='<p-dialog header="Success!" [(visible)]="display" modal="modal" responsive="true" closeOnEscape="true" [draggable]="false" dismissableMask="false">\r\n    <p>Congratulations!! you found the correct answer!</p>\r\n        <p-footer>\r\n            <div class="ui-dialog-buttonpane ui-widget-content ui-helper-clearfix">\r\n                <button type="button" pButton icon="fa-close" (click)="display=false" label="Close"></button>\r\n            </div>\r\n        </p-footer>\r\n</p-dialog>'},/***/
521:/***/
function(e,t){e.exports='<div id="sandbox_box">\r\n    <div id="sandbox_header_box">\r\n        <div id="sandbox_header_title_box">\r\n            <p id="sandbox_header_title">Sandbox</p>\r\n            <p class="sandbox_header_subtitle sandbox_header_title_separator">&gt;&gt;</p>\r\n            <p class="sandbox_header_subtitle">{{getModeTitle()}}</p>\r\n        </div>\r\n        <p class="sandbox_header_description">{{getModeDescription()}}</p>\r\n    </div>\r\n\r\n\r\n    <div [ngSwitch]="mode">\r\n        <div *ngSwitchDefault>\r\n            <div *ngIf="!getImportedExpression()" class="sandbox_information_box">\r\n                <img class="sandbox_information_icon" src="/assets/images/icon-information-white-32x32.png" />\r\n                <p class="sandbox_header_text">\r\n                    {{textService.getStandardEmptyText()}}\r\n                </p>\r\n            </div>\r\n        </div>\r\n        <div *ngSwitchCase="1">\r\n            <div class="sandbox_information_box">\r\n                <img class="sandbox_information_icon" src="/assets/images/icon-information-white-32x32.png" />\r\n                <div>\r\n                    <p class="sandbox_header_text sandbox_header_problem">\r\n                        Imported problem: solving x\r\n                    </p>\r\n                    <p *ngIf="getImportedExpression()" class="sandbox_header_text">\r\n                        {{textService.getInitialExpressionText()}}\r\n                    </p>\r\n                    <p class="sandbox_header_text">\r\n                        {{textService.getOperationsHintText()}}\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div *ngSwitchCase="2">\r\n            <div class="sandbox_information_box">\r\n                <img class="sandbox_information_icon" src="/assets/images/icon-information-white-32x32.png" />\r\n                <div>\r\n                    <p *ngIf="getImportedExpression()" class="sandbox_header_text">\r\n                        {{textService.getInitialExpressionText()}}\r\n                    </p>\r\n                    <p class="sandbox_header_text">\r\n                        {{textService.getOperationsHintText()}}\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf="getImportedDescription()" class="sandbox_information_box">\r\n        <img class="sandbox_information_icon" src="/assets/images/icon-information-white-32x32.png" />\r\n        <p class="sandbox_header_text">\r\n            Imported description: {{getImportedDescription()}}\r\n        </p>\r\n    </div>\r\n\r\n    <div id="sandbox_imported_expression_box" class="sandbox_information_box" *ngIf="getImportedExpression()">\r\n        <img class="sandbox_information_icon" src="/assets/images/icon-information-white-32x32.png" />\r\n        <div id="sandbox_imported_expression_box_content">\r\n            <p id="sandbox_imported_expression_title">Imported expression</p>\r\n            <input class="sandbox_imported_expression" type="text" value={{getImportedExpression()}} readonly>\r\n            <div id="sandbox_imported_expression_visualization">\r\n                <visualization [data]="importedExpressionData"></visualization>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div id="sandbox_expressions_box">\r\n        <div #expression_box>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<modal-success></modal-success>'},/***/
522:/***/
function(e,t){t.read=function(e,t,n,i,o){var r,a,u=8*o-i-1,s=(1<<u)-1,l=s>>1,c=-7,d=n?o-1:0,f=n?-1:1,p=e[t+d];for(d+=f,r=p&(1<<-c)-1,p>>=-c,c+=u;c>0;r=256*r+e[t+d],d+=f,c-=8);for(a=r&(1<<-c)-1,r>>=-c,c+=i;c>0;a=256*a+e[t+d],d+=f,c-=8);if(0===r)r=1-l;else{if(r===s)return a?NaN:1/0*(p?-1:1);a+=Math.pow(2,i),r-=l}return(p?-1:1)*a*Math.pow(2,r-i)},t.write=function(e,t,n,i,o,r){var a,u,s,l=8*r-o-1,c=(1<<l)-1,d=c>>1,f=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,p=i?0:r-1,b=i?1:-1,h=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(u=isNaN(t)?1:0,a=c):(a=Math.floor(Math.log(t)/Math.LN2),t*(s=Math.pow(2,-a))<1&&(a--,s*=2),t+=a+d>=1?f/s:f*Math.pow(2,1-d),t*s>=2&&(a++,s/=2),a+d>=c?(u=0,a=c):a+d>=1?(u=(t*s-1)*Math.pow(2,o),a+=d):(u=t*Math.pow(2,d-1)*Math.pow(2,o),a=0));o>=8;e[n+p]=255&u,p+=b,u/=256,o-=8);for(a=a<<o|u,l+=o;l>0;e[n+p]=255&a,p+=b,a/=256,l-=8);e[n+p-b]|=128*h}},/***/
523:/***/
function(e,t){var n={}.toString;e.exports=Array.isArray||function(e){return"[object Array]"==n.call(e)}},/***/
959:/***/
function(e,t){e.exports="#frontpage_root_box {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 8px;\r\n}\r\n#frontpage_title{\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-size: 20pt;\r\n    margin-top: 0px;\r\n    margin-bottom: 5px;\r\n}\r\n#frontpage_or_box {\r\n    text-align: center;\r\n}\r\n#frontpage_or_text {\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-weight: bold;\r\n    margin: 5px 0 0 0;\r\n}\r\n#frontpage_inputbox {   \r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    color: whitesmoke;\r\n    text-align: center;\r\n    margin-top: 5px;\r\n    padding: 5px;\r\n\r\n    box-shadow: 0 1px 10px 0px #555555;\r\n    background-color: grey;\r\n    border-radius: 10px\r\n}\r\n.frontpage_expression_box {\r\n    text-align: center;\r\n}\r\n#frontpage_dropdown_generatebtn_box {\r\n    display:flex;\r\n    align-items:flex-start;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    padding-top: 3px; \r\n}\r\n#frontpage_expression_field {\r\n    display: block;\r\n    text-align: center;\r\n    margin-left: 60px;\r\n}\r\n.frontpage_generatebtn {\r\n    display: inline-block;\r\n    margin-left: 2px;\r\n}\r\n#frontpage_dropdownmenu {\r\n    display: inline-block;\r\n    padding-bottom: 10px;\r\n}\r\n#frontpage_expression_des {\r\n    display: block;\r\n}\r\n#frontpage_output_area {\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n    height: 25vh;\r\n\r\n    width: 98%;\r\n    box-sizing: border-box;\r\n}\r\n.frontpage_sandboxbtn {\r\n    text-align: center;\r\n    display: grid;\r\n    padding: 5px;\r\n    width: 100%;\r\n}"},/***/
960:/***/
function(e,t){e.exports=".expression_operation {\r\n    background: grey;\r\n    padding: 5px;\r\n}\r\n\r\n.expression_operation_box {\r\n    position: relative;\r\n    border: 2px solid black;\r\n    border-bottom-left-radius: 10px;\r\n    border-bottom-right-radius: 10px;\r\n    overflow: hidden;\r\n    margin-top: -11px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.expression_operation_info_box {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.expression_operation_info_box > p {\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-size: 10pt;\r\n    font-weight: bold;\r\n    color: white;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    margin-left: 10px;\r\n}\r\n\r\n.expression_operation_info_box > img {\r\n    width: 24px;\r\n    height: 24px;\r\n}\r\n\r\n.expression_operation_info_icon {\r\n    flex-shrink: 0;\r\n}\r\n\r\n.expression_operation_line-divider {\r\n    border-top: 1px dashed white;\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.expression_operation_comparison {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.expression_operation_current {\r\n    background-color: cadetblue;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n\r\n    overflow: hidden;\r\n}\r\n\r\n.expression_operation_current > p {\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-size: 10pt;\r\n    font-weight: bold;\r\n    color: white;\r\n    margin-top: 0;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.expression_operation_arrow {\r\n    align-self: center;\r\n    padding: 5px;\r\n}\r\n\r\n.expression_operation_new {\r\n    flex-grow: 0.95;\r\n    background-color: cadetblue;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n\r\n    overflow: hidden;\r\n}\r\n\r\n.expression_operation_visualization {\r\n    margin-top: 2px;\r\n\r\n    overflow: auto;\r\n}\r\n\r\n.expression_operation_edit {    \r\n    margin-bottom: 5px;\r\n}\r\n\r\n.expression_operation_edit  > label {\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-size: 10pt;\r\n    font-weight: bold;\r\n    color: white;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.expression_operation_edit > input {\r\n    font-family: monospace;\r\n    font-size: 15pt;\r\n    border: 1px solid grey;\r\n    height: 23px;\r\n    width: 100%;\r\n    padding: 1px;\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    box-sizing: border-box; \r\n}\r\n\r\n.expression_operation_actions {\r\n    float:right;\r\n}\r\n\r\n.expression_operation_actions > button {\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.expression_operation_actions > button:active {\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    background-color: grey;\r\n}"},/***/
961:/***/
function(e,t){e.exports=".expression_box {\r\n    position: relative;\r\n\r\n    background-color: white;\r\n\r\n    border: 2px solid black;\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n\r\n    margin-bottom: 10px;    \r\n    padding: 5px;\r\n\r\n    overflow: hidden;\r\n}\r\n\r\n.expression_actions {\r\n    display: block;\r\n    padding: 5px;\r\n    background-color: lightblue;\r\n    border-radius: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.expression_actions_correct {\r\n    display: block;\r\n    padding: 5px;\r\n    background-color: green;\r\n    border-radius: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.expression_actions_wrong {\r\n    display: block;\r\n    padding: 5px;\r\n    background-color: red;\r\n    border-radius: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.expression_actions > button {\r\n    font-size: 9pt;\r\n}\r\n\r\n.expression_actions > p {\r\n    display: inline-flex;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-size: 10pt;\r\n    font-weight: bold;\r\n    border-radius: 10px;\r\n    padding-left: 6px;\r\n    padding-right: 6px;\r\n    padding-top: 1px;\r\n    margin: 0px;\r\n    height: 20px;\r\n    background-color: #3badd7;\r\n    color: white;\r\n}\r\n\r\n.expression_edit {\r\n    margin-bottom: 5px;\r\n}  \r\n\r\n.expression_edit > input {\r\n    font-family: monospace;\r\n    font-size: 15pt;\r\n    border: 1px solid grey;\r\n    width: 100%;\r\n    padding: 1px;\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    box-sizing: border-box; \r\n}\r\n\r\n.visualization_render {\r\n    display: block;\r\n    border-top: 1px dashed lightblue;\r\n    padding: 5px;\r\n}\r\n\r\n.visualization_render > img {\r\n    display: block;\r\n    zoom: 75%;\r\n    margin: 0 auto;\r\n}\r\n\r\n.expression {\r\n    position: absolute;\r\n    zoom: 200%;\r\n    bottom: 5px;\r\n    left: 5px;\r\n}"},/***/
962:/***/
function(e,t){e.exports="#sandbox_box {\r\n    height: 100%;\r\n    background-color: rgba(100,170,200,0.35);\r\n    background-image: -webkit-linear-gradient(rgba(255,255,255,1) 0%, rgba(227,227,227,1) 100%);\r\n    background-image: -moz-linear-gradient(rgba(255,255,255,1) 0%, rgba(227,227,227,1) 100%);\r\n    background-image: -o-linear-gradient(rgba(255,255,255,1) 0%, rgba(227,227,227,1) 100%);\r\n    background-image: linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(100,170,200,0.35) 100%);\r\n}\r\n\r\n#sandbox_header_box {\r\n    box-shadow: 0 1px 10px 0px #076993;\r\n    background-color: #3badd7;\r\n\r\n    padding: 5px 5px 5px 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n#sandbox_header_box p {\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    color: whitesmoke;\r\n}\r\n\r\n#sandbox_header_title_box {\r\n    display: flex;\r\n    align-items: baseline;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n#sandbox_header_title_box p {\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.sandbox_header_description {\r\n    font-size: 12pt;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.sandbox_header_text {\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.sandbox_header_problem {\r\n    font-weight: bold;\r\n}\r\n\r\n.sandbox_header_guide {\r\n    margin-top: 5px;\r\n    font-weight: bold;\r\n}\r\n\r\n#sandbox_header_title {\r\n    font-weight: bold;\r\n    font-size: 22pt;\r\n}\r\n\r\n.sandbox_header_title_separator {\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.sandbox_header_subtitle {\r\n    font-weight: bold;\r\n    font-size: 18pt;\r\n}\r\n\r\n.sandbox_information_box {\r\n    display: flex;\r\n    align-items: center;\r\n\r\n    box-shadow: 0 1px 10px 0px #555555;\r\n    background-color: grey;\r\n    border-radius: 10px;\r\n\r\n    padding: 5px;\r\n    margin: 5px;\r\n}\r\n\r\n.sandbox_information_box p {\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    \r\n    margin-bottom: 0;\r\n    color: whitesmoke;\r\n}\r\n\r\n.sandbox_information_icon {\r\n    width: 24px;\r\n    height: 24px;\r\n    flex-shrink: 0;\r\n\r\n    padding: 5px;\r\n\r\n    align-self: flex-start;\r\n}\r\n\r\n#sandbox_imported_expression_box {\r\n    overflow: hidden;\r\n}\r\n\r\n#sandbox_imported_expression_box_content {\r\n    flex-grow: 1;\r\n}\r\n\r\n#sandbox_imported_expression_title {\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    color: white;\r\n\r\n    margin-top: 2px;\r\n    margin-bottom: 5px;\r\n    border-bottom: 2px solid 444444;\r\n}\r\n\r\n.sandbox_imported_expression {\r\n    font-family: monospace;\r\n    font-size: 15pt;\r\n    border: 1px solid grey;\r\n    width: 100%;\r\n    padding: 1px;\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    box-sizing: border-box; \r\n}\r\n\r\n#sandbox_imported_expression_visualization {\r\n    margin-top: 5px;\r\n}\r\n\r\n#sandbox_expressions_box {\r\n    margin: 10px 5px 5px 5px; \r\n}"},/***/
963:/***/
function(e,t){e.exports=".mirror-mountain-box {\r\n  overflow: auto;\r\n}\r\n\r\n.mirror-mountain-rect {\r\n  fill: lightskyblue;\r\n  stroke: black;\r\n  stroke-width: 2;\r\n  user-select: none;\r\n  cursor: default;\r\n}\r\n\r\n.mirror-mountain-rect-equality {\r\n  fill: lawngreen;\r\n}\r\n\r\n.mirror-mountain-text {\r\n  font-family: Cambria, Cochin, Georgia, Times, Times New Roman, serif;\r\n  text-anchor: middle;\r\n  fill: black;\r\n  user-select: none;\r\n  cursor: default;\r\n}\r\n\r\n.mirror-mountain-line {\r\n  stroke: black;\r\n  stroke-width: 2;\r\n}"}},[1247]);