(window.webpackJsonp=window.webpackJsonp||[]).push([[442],{2206:function(a,t,s){"use strict";s.r(t);var n=s(54),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#_1、bean的生命周期清单"}},[a._v("1、bean的生命周期清单")])]),s("li",[s("a",{attrs:{href:"#_2、指定-bean-的初始化方法和销毁方法"}},[a._v("2、指定 bean 的初始化方法和销毁方法")]),s("ul",[s("li",[s("a",{attrs:{href:"#_1创建两个方法作为初始化和销毁方法"}},[a._v("①创建两个方法作为初始化和销毁方法")])]),s("li",[s("a",{attrs:{href:"#_2配置-bean-时指定初始化和销毁方法"}},[a._v("②配置 bean 时指定初始化和销毁方法")])])])]),s("li",[s("a",{attrs:{href:"#_3、bean-的后置处理器"}},[a._v("3、bean 的后置处理器")]),s("ul",[s("li",[s("a",{attrs:{href:"#_1创建后置处理器类"}},[a._v("①创建后置处理器类")])]),s("li",[s("a",{attrs:{href:"#_2把-bean-的后置处理器放入-ioc-容器"}},[a._v("②把 bean 的后置处理器放入 IOC 容器")])]),s("li",[s("a",{attrs:{href:"#_3执行效果示例"}},[a._v("③执行效果示例")])])])])])]),s("p"),a._v(" "),s("h1",{attrs:{id:"实验十六-bean的生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实验十六-bean的生命周期"}},[a._v("#")]),a._v(" 实验十六 bean的生命周期")]),a._v(" "),s("h2",{attrs:{id:"_1、bean的生命周期清单"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、bean的生命周期清单"}},[a._v("#")]),a._v(" 1、bean的生命周期清单")]),a._v(" "),s("ul",[s("li",[a._v("bean 对象创建（调用无参构造器）")]),a._v(" "),s("li",[a._v("给 bean 对象设置属性（调用属性对应的 setter 方法）")]),a._v(" "),s("li",[s("span",{staticStyle:{color:"green","font-weight":"bold"}},[a._v("bean 对象初始化之前操作（由 bean 的后置处理器负责）")])]),a._v(" "),s("li",[s("span",{staticStyle:{color:"blue","font-weight":"bold"}},[a._v("bean 对象初始化（需在配置 bean 时指定初始化方法）")])]),a._v(" "),s("li",[s("span",{staticStyle:{color:"green","font-weight":"bold"}},[a._v("bean 对象初始化之后操作（由 bean 的后置处理器负责）")])]),a._v(" "),s("li",[a._v("bean 对象就绪可以使用")]),a._v(" "),s("li",[s("span",{staticStyle:{color:"blue","font-weight":"bold"}},[a._v("bean 对象销毁（需在配置 bean 时指定销毁方法）")])]),a._v(" "),s("li",[a._v("IOC 容器关闭")])]),a._v(" "),s("h2",{attrs:{id:"_2、指定-bean-的初始化方法和销毁方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、指定-bean-的初始化方法和销毁方法"}},[a._v("#")]),a._v(" 2、指定 bean 的初始化方法和销毁方法")]),a._v(" "),s("h3",{attrs:{id:"_1创建两个方法作为初始化和销毁方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1创建两个方法作为初始化和销毁方法"}},[a._v("#")]),a._v(" ①创建两个方法作为初始化和销毁方法")]),a._v(" "),s("p",[a._v("用com.atguigu.ioc.component.HappyComponent类测试：")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("happyInitMethod")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"HappyComponent初始化"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("happyDestroyMethod")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"HappyComponent销毁"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("h3",{attrs:{id:"_2配置-bean-时指定初始化和销毁方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2配置-bean-时指定初始化和销毁方法"}},[a._v("#")]),a._v(" ②配置 bean 时指定初始化和销毁方法")]),a._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- 实验十六 bean的生命周期 --\x3e")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- 使用init-method属性指定初始化方法 --\x3e")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- 使用destroy-method属性指定销毁方法 --\x3e")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("bean")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("happyComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("com.atguigu.ioc.component.HappyComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("init-method")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("happyInitMethod"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("destroy-method")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("happyDestroyMethod"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("property")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("happyName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("uuu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("bean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br")])]),s("h2",{attrs:{id:"_3、bean-的后置处理器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、bean-的后置处理器"}},[a._v("#")]),a._v(" 3、bean 的后置处理器")]),a._v(" "),s("h3",{attrs:{id:"_1创建后置处理器类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1创建后置处理器类"}},[a._v("#")]),a._v(" ①创建后置处理器类")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("package")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("atguigu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("ioc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("process")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("beans"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BeansException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("beans"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("factory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BeanPostProcessor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 声明一个自定义的bean后置处理器")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 注意：bean后置处理器不是单独针对某一个bean生效，而是针对IOC容器中所有bean都会执行")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MyHappyBeanProcessor")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BeanPostProcessor")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("postProcessBeforeInitialization")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" bean"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" beanName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BeansException")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    \n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"☆☆☆"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" beanName "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('" = "')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" bean"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    \n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" bean"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("postProcessAfterInitialization")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" bean"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" beanName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BeansException")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    \n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"★★★"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" beanName "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('" = "')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" bean"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    \n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" bean"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br")])]),s("h3",{attrs:{id:"_2把-bean-的后置处理器放入-ioc-容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2把-bean-的后置处理器放入-ioc-容器"}},[a._v("#")]),a._v(" ②把 bean 的后置处理器放入 IOC 容器")]),a._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- bean的后置处理器要放入IOC容器才能生效 --\x3e")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("bean")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("myHappyBeanProcessor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("com.atguigu.ioc.process.MyHappyBeanProcessor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h3",{attrs:{id:"_3执行效果示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3执行效果示例"}},[a._v("#")]),a._v(" ③执行效果示例")]),a._v(" "),s("blockquote",[s("p",[a._v("HappyComponent创建对象"),s("br"),a._v("\nHappyComponent要设置属性了"),s("br"),a._v("\n☆☆☆happyComponent = com.atguigu.ioc.component.HappyComponent@ca263c2"),s("br"),a._v("\nHappyComponent初始化"),s("br"),a._v("\n★★★happyComponent = com.atguigu.ioc.component.HappyComponent@ca263c2"),s("br"),a._v("\nHappyComponent销毁")])]),a._v(" "),s("p",[s("RouterLink",{attrs:{to:"/pro004-Spring/lecture/chapter01/verse03/experiment15.html"}},[a._v("上一个实验")]),a._v(" "),s("RouterLink",{attrs:{to:"/pro004-Spring/lecture/chapter01/verse03.html"}},[a._v("回目录")])],1)])}),[],!1,null,null,null);t.default=e.exports}}]);