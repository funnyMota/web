# web api概述

标准库:ECMAScript中的对象和函数

Web API:浏览器宿主环境中的对象和函数

1. 知识繁杂
2. 成体系的知识
3. 程序思维: 知识+程序思维 = 应用
4. 兼容性: 了解,不记忆

Web API:
- BOM: Browser Object Model,浏览器对象模型
- DOM: Document Object Model,文档对象模型

BOM:控制浏览器本身
DOM:控制HTML文档

ES 由 ECMAScript规定
WebAPI 由 W3C规定

**DOM是什么**

DOM的核心概念,是将一个HTML或XML文档,用对象模型表示,每个对象称之为dom对象
dom对象又称为节点Node

节点的类型:

- DocumentType,文档类型节点
- Document,文档节点,表示整个文档
- Comment,注释节点
- Element,元素节点
- TEXT,文本节点
- Attribute,属性节点
- DocumentFragment,文档片段节点

dom树: 