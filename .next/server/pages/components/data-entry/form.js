module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/components/data-entry/form.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./app/components/AppNotification/NotificationItem.js":
/*!************************************************************!*\
  !*** ./app/components/AppNotification/NotificationItem.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const NotificationItem = ({
  notification
}) => {
  const {
    icon,
    image,
    title,
    time
  } = notification;
  return __jsx("li", {
    className: "gx-media"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    className: "gx-size-40 gx-mr-3",
    alt: image,
    src: image
  }), __jsx("div", {
    className: "gx-media-body gx-align-self-center"
  }, __jsx("p", {
    className: "gx-fs-sm gx-mb-0"
  }, title), __jsx("i", {
    className: `icon icon-${icon} gx-pr-2`
  }), " ", __jsx("span", {
    className: "gx-meta-date"
  }, __jsx("small", null, time))));
};

/* harmony default export */ __webpack_exports__["default"] = (NotificationItem);

/***/ }),

/***/ "./app/components/AppNotification/data.js":
/*!************************************************!*\
  !*** ./app/components/AppNotification/data.js ***!
  \************************************************/
/*! exports provided: notifications */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifications", function() { return notifications; });
const notifications = [{
  image: 'https://via.placeholder.com/150x150',
  title: "Stella Johnson has recently posted an album",
  time: "4:10 PM",
  icon: "thumb-up gx-text-blue"
}, {
  image: 'https://via.placeholder.com/150x150',
  title: "Alex Brown has shared Martin Guptil's post",
  time: "5:18 PM",
  icon: "chat gx-text-grey"
}, {
  image: 'https://via.placeholder.com/640x420',
  title: "Domnic Brown has sent you a group invitation for Global Health",
  time: "5:36 PM",
  icon: "birthday text-info"
}, {
  image: 'https://via.placeholder.com/150x150',
  title: "John Smith has birthday today",
  time: "5:54 PM",
  icon: "birthday gx-text-warning"
}, {
  image: 'https://via.placeholder.com/150x150',
  title: "Chris has updated his profile picture",
  time: "5:25 PM",
  icon: "profile gx-text-grey"
}];

/***/ }),

/***/ "./app/components/AppNotification/index.js":
/*!*************************************************!*\
  !*** ./app/components/AppNotification/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NotificationItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationItem */ "./app/components/AppNotification/NotificationItem.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./app/components/AppNotification/data.js");
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/CustomScrollbars */ "./util/CustomScrollbars.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const AppNotification = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "gx-popover-header"
  }, __jsx("h3", {
    className: "gx-mb-0"
  }, "Notifications"), __jsx("i", {
    className: "gx-icon-btn icon icon-charvlet-down"
  })), __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "gx-popover-scroll"
  }, __jsx("ul", {
    className: "gx-sub-popover"
  }, _data__WEBPACK_IMPORTED_MODULE_2__["notifications"].map((notification, index) => __jsx(_NotificationItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: index,
    notification: notification
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (AppNotification);

/***/ }),

/***/ "./app/components/CircularProgress/index.js":
/*!**************************************************!*\
  !*** ./app/components/CircularProgress/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const CircularProgress = ({
  className
}) => __jsx("div", {
  className: `loader ${className}`
}, __jsx("img", {
  src: "/images/loader.svg",
  alt: "loader",
  style: {
    height: 60
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (CircularProgress);
CircularProgress.defaultProps = {
  className: ''
};

/***/ }),

/***/ "./app/components/MailNotification/NotificationItem.js":
/*!*************************************************************!*\
  !*** ./app/components/MailNotification/NotificationItem.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const NotificationItem = ({
  notification
}) => {
  const {
    image,
    badge,
    name,
    time,
    message
  } = notification;
  return __jsx("li", {
    className: "gx-media"
  }, __jsx("div", {
    className: "gx-user-thumb gx-mr-3"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    className: "gx-size-40",
    alt: image,
    src: image
  }), badge > 0 ? __jsx("span", {
    className: "gx-badge gx-badge-danger gx-text-white gx-rounded-circle"
  }, badge) : null), __jsx("div", {
    className: "gx-media-body"
  }, __jsx("div", {
    className: "gx-flex-row gx-justify-content-between gx-align-items-center"
  }, __jsx("h5", {
    className: "gx-text-capitalize gx-user-name gx-mb-0"
  }, __jsx("span", {
    className: "gx-link"
  }, name)), __jsx("span", {
    className: "gx-meta-date"
  }, __jsx("small", null, time))), __jsx("p", {
    className: "gx-fs-sm"
  }, message), __jsx("span", {
    className: "gx-btn gx-btn-sm gx-top2 gx-text-muted"
  }, __jsx("i", {
    className: "icon icon-reply gx-pr-2"
  }), "Reply"), __jsx("span", {
    className: "gx-btn gx-btn-sm gx-top2 gx-text-muted"
  }, __jsx("i", {
    className: "icon icon-custom-view gx-pr-2"
  }), "Read")));
};

/* harmony default export */ __webpack_exports__["default"] = (NotificationItem);

/***/ }),

/***/ "./app/components/MailNotification/data.js":
/*!*************************************************!*\
  !*** ./app/components/MailNotification/data.js ***!
  \*************************************************/
/*! exports provided: notifications */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifications", function() { return notifications; });
const notifications = [{
  id: 1,
  image: "https://via.placeholder.com/150",
  name: "Domnic Brown",
  time: "6:19 PM",
  message: "There are many variations of passages of...",
  badge: 5
}, {
  id: 2,
  image: "https://via.placeholder.com/150",
  name: "John Smith",
  time: "4:18 PM",
  message: "Lorem Ipsum is simply dummy text of the..."
}, {
  id: 3,
  image: "https://via.placeholder.com/150",
  name: "John Smith",
  time: "7:10 PM",
  message: "The point of using Lorem Ipsum is that it has a...",
  badge: 8
}, {
  id: 4,
  image: "https://via.placeholder.com/150",
  name: "alex dolgove",
  time: "5:10 PM",
  message: "It is a long established fact that a reader will..."
}, {
  id: 5,
  image: "https://via.placeholder.com/150",
  name: "Domnic Harris",
  time: "7:35 PM",
  message: "All the Lorem Ipsum generators on the...",
  badge: 3
}];

/***/ }),

/***/ "./app/components/MailNotification/index.js":
/*!**************************************************!*\
  !*** ./app/components/MailNotification/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NotificationItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationItem */ "./app/components/MailNotification/NotificationItem.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./app/components/MailNotification/data.js");
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/CustomScrollbars */ "./util/CustomScrollbars.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const MailNotification = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "gx-popover-header"
  }, __jsx("h3", {
    className: "gx-mb-0"
  }, "Messages"), __jsx("i", {
    className: "gx-icon-btn icon icon-charvlet-down"
  })), __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "gx-popover-scroll"
  }, __jsx("ul", {
    className: "gx-sub-popover"
  }, _data__WEBPACK_IMPORTED_MODULE_2__["notifications"].map((notification, index) => __jsx(_NotificationItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: index,
    notification: notification
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (MailNotification);

/***/ }),

/***/ "./app/components/SearchBox/index.js":
/*!*******************************************!*\
  !*** ./app/components/SearchBox/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const SearchBox = ({
  styleName,
  placeholder,
  onChange,
  value
}) => {
  return __jsx("div", {
    className: `gx-search-bar ${styleName}`
  }, __jsx("div", {
    className: "gx-form-group"
  }, __jsx("input", {
    className: "ant-input",
    type: "search",
    placeholder: placeholder,
    onChange: onChange,
    value: value
  }), __jsx("span", {
    className: "gx-search-icon gx-pointer"
  }, __jsx("i", {
    className: "icon icon-search"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchBox);
SearchBox.defaultProps = {
  styleName: "",
  value: ""
};

/***/ }),

/***/ "./app/components/UserInfo/index.js":
/*!******************************************!*\
  !*** ./app/components/UserInfo/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions_Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../redux/actions/Auth */ "./redux/actions/Auth.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class UserInfo extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const userMenuOptions = __jsx("ul", {
      className: "gx-user-popover"
    }, __jsx("li", null, "My Account"), __jsx("li", null, "Connections"), __jsx("li", {
      onClick: () => this.props.userSignOut()
    }, "Logout"));

    return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
      overlayClassName: "gx-popover-horizantal",
      placement: "bottomRight",
      content: userMenuOptions,
      trigger: "click"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
      src: "/images/images/avatar/domnic-harris.png",
      className: "gx-avatar gx-pointer",
      alt: ""
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, {
  userSignOut: _redux_actions_Auth__WEBPACK_IMPORTED_MODULE_3__["userSignOut"]
})(UserInfo));

/***/ }),

/***/ "./app/core/Customizer/index.js":
/*!**************************************!*\
  !*** ./app/core/Customizer/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import React, {useState} from "react";
// import {Button, Drawer, Radio} from "antd";
// import {useDispatch, useSelector} from "react-redux";
// import CustomScrollbars from "../../../util/CustomScrollbars";
// import {setThemeType} from "../../../redux/actions/Setting";
//
// import {
//   BLUE,
//   BLUE_DARK_TEXT_COLOR,
//   BLUE_SEC,
//   DARK_BLUE,
//   DARK_BLUE_DARK_TEXT_COLOR,
//   DARK_BLUE_SEC,
//   DEEP_ORANGE,
//   DEEP_ORANGE_DARK_TEXT_COLOR,
//   DEEP_ORANGE_SEC,
//   LAYOUT_TYPE_BOXED,
//   LAYOUT_TYPE_FRAMED,
//   LAYOUT_TYPE_FULL,
//   LIGHT_BLUE,
//   LIGHT_BLUE_DARK_TEXT_COLOR,
//   LIGHT_BLUE_SEC,
//   LIGHT_PURPLE,
//   LIGHT_PURPLE_1,
//   LIGHT_PURPLE_1_DARK_TEXT_COLOR,
//   LIGHT_PURPLE_1_SEC,
//   LIGHT_PURPLE_2,
//   LIGHT_PURPLE_2_DARK_TEXT_COLOR,
//   LIGHT_PURPLE_2_SEC,
//   LIGHT_PURPLE_DARK_TEXT_COLOR,
//   LIGHT_PURPLE_SEC,
//   NAV_STYLE_ABOVE_HEADER,
//   NAV_STYLE_BELOW_HEADER,
//   NAV_STYLE_DARK_HORIZONTAL,
//   NAV_STYLE_DEFAULT_HORIZONTAL,
//   NAV_STYLE_DRAWER,
//   NAV_STYLE_FIXED,
//   NAV_STYLE_INSIDE_HEADER_HORIZONTAL,
//   NAV_STYLE_MINI_SIDEBAR,
//   NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
//   NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
//   ORANGE,
//   ORANGE_DARK_TEXT_COLOR,
//   ORANGE_SEC,
//   RED,
//   RED_DARK_TEXT_COLOR,
//   RED_SEC,
//   THEME_TYPE_DARK,
//   THEME_TYPE_LITE,
//   THEME_TYPE_SEMI_DARK
// } from "../../../constants/ThemeSetting";
// import {onNavStyleChange} from "../../../redux/actions";
//
// const CustomizerSystem = () => {
//
//   const [isCustomizerOpened, setIsCustomizerOpened] = useState(false);
//   const dispatch = useDispatch();
//
//   const themeType = useSelector(({settings}) => settings.themeType);
//   const themeColor = useSelector(({settings}) => settings.themeColor);
//   const navStyle = useSelector(({settings}) => settings.navStyle);
//   const layoutType = useSelector(({settings}) => settings.layoutType);
//
//   console.log(" in  customizer", themeColor);
//
//   const handleColorChange = (filename) => {
//     // console.log("filename", filename);
//     // let link = document.createElement('link');
//     // link.type = 'text/css';
//     // link.rel = 'stylesheet';
//     // link.className = 'gx-style';
//     // link.href = `/css/${filename}.css`;
//
//     // setTimeout(() => {
//     //   const children = document.getElementsByClassName('gx-style');
//     //
//     //   if (children.length > 1) {
//     //     for (let index = 0; index < children.length; index++) {
//     //       if ((index + 1) < children.length) {
//     //         const child = children[index];
//     //         child.parentNode.removeChild(child);
//     //       }
//     //     }
//     //   }
//     // }, 10000);
//     // console.log("my link ",link);
//     // document.body.appendChild(link);
//     // dispatch(setThemeColor(filename));
//   };
//
//   const toggleCustomizer = () => {
//     setIsCustomizerOpened(!isCustomizerOpened);
//   };
//
//   const onThemeTypeChange = (e) => {
//     dispatch(setThemeType(e.target.value));
//   };
//
//   const onNavStyleChanges = (navStyle) => {
//     dispatch(onNavStyleChange(navStyle));
//   };
//
//   const getCustomizerContent = () => {
//
//     // if (themeType === THEME_TYPE_DARK) {
//     //   document.body.classList.add('dark-theme');
//     //   let link = document.createElement('link');
//     //   link.type = 'text/css';
//     //   link.rel = 'stylesheet';
//     //   link.href = "/css/dark_theme.css";
//     //   link.className = 'style_dark_theme';
//     //   document.body.appendChild(link);
//     // } else if (document.body.classList.contains('dark-theme')) {
//     //   document.body.classList.remove('dark-theme');
//     //   const children = document.getElementsByClassName('style_dark_theme');
//     //   if (children.length > 1) {
//     //     for (let index = 0; index < children.length; index++) {
//     //       if (index < children.length) {
//     //         const child = children[index];
//     //         child.parentNode.removeChild(child);
//     //       }
//     //     }
//     //   }
//     }
//
//     return <CustomScrollbars className="gx-customizer">
//       <div className="gx-customizer-item">
//         <h6 className="gx-mb-3 gx-text-uppercase">Theme</h6>
//         <Radio.Group value={themeType} onChange={onThemeTypeChange}>
//           <Radio.Button value={THEME_TYPE_LITE}>Lite</Radio.Button>
//           <Radio.Button value={THEME_TYPE_SEMI_DARK}>Semi Dark</Radio.Button>
//           <Radio.Button value={THEME_TYPE_DARK}>Dark</Radio.Button>
//         </Radio.Group>
//       </div>
//       <div className="gx-customizer-item">
//         {getPresetColors(themeColor)}
//       </div>
//
//       <h6 className="gx-mb-3 gx-text-uppercase">Nav Style</h6>
//
//       {getNavStyles(navStyle)}
//
//       <h6 className="gx-mb-3 gx-text-uppercase">Layout</h6>
//
//       {getLayoutsTypes(layoutType)}
//     </CustomScrollbars>
//   };
//
//   const handleThemeColor = (fileName) => {
//     // handleColorChange(fileName);
//   };
//
//   const handleLayoutTypes = (layoutType) => {
//     // dispatch(onLayoutTypeChange(layoutType));
//   };
//
//   const getPresetColors = (themeColor) => {
//     return <ul className="gx-color-option gx-list-inline">
//
//       <li>
//         <span
//           onClick={() => handleThemeColor("light_purple")}
//           style={{backgroundColor: LIGHT_PURPLE_SEC, color: LIGHT_PURPLE_DARK_TEXT_COLOR}}
//           className={`gx-link gx-color-light-purple ${themeColor === LIGHT_PURPLE && 'active'}`}/>
//       </li>
//       <li>
//         <span
//           onClick={() => handleThemeColor("red")}
//           style={{backgroundColor: RED_SEC, color: RED_DARK_TEXT_COLOR}}
//           className={`gx-link gx-color-red ${themeColor === RED && 'active'}`}/>
//       </li>
//       <li>
//         <span
//           onClick={() => handleThemeColor("blue")}
//           style={{backgroundColor: BLUE_SEC, color: BLUE_DARK_TEXT_COLOR}}
//           className={`gx-link gx-color-blue ${themeColor === BLUE && 'active'}`}/>
//       </li>
//       <li>
//         <span
//           onClick={() => handleThemeColor("dark_blue")}
//           style={{backgroundColor: DARK_BLUE_SEC, color: DARK_BLUE_DARK_TEXT_COLOR}}
//           className={`gx-link gx-color-dark-blue ${themeColor === DARK_BLUE && 'active'}`}/>
//       </li>
//
//       <li>
//         <span
//           onClick={() => handleThemeColor("orange")}
//           style={{backgroundColor: ORANGE_SEC, color: ORANGE_DARK_TEXT_COLOR}}
//           className={`gx-link gx-color-orange ${themeColor === ORANGE && 'active'}`}/>
//       </li>
//
//       <li>
//         <span
//           onClick={() => handleThemeColor("light_blue")}
//           style={{backgroundColor: LIGHT_BLUE_SEC, color: LIGHT_BLUE_DARK_TEXT_COLOR}}
//           className={`gx-link gx-color-light-blue ${themeColor === LIGHT_BLUE && 'active'}`}/>
//       </li>
//
//       <li>
//         <span
//           onClick={() => handleThemeColor("deep_orange")}
//           style={{backgroundColor: DEEP_ORANGE_SEC, color: DEEP_ORANGE_DARK_TEXT_COLOR}}
//           className={`gx-link gx-color-deep-orange ${themeColor === DEEP_ORANGE && 'active'}`}/>
//       </li>
//
//       <li>
//         <span
//           onClick={() => handleThemeColor("light_purple_1")}
//           style={{
//             backgroundColor: LIGHT_PURPLE_1_SEC,
//             color: LIGHT_PURPLE_1_DARK_TEXT_COLOR
//           }}
//           className={`gx-link gx-color-light-purple1 ${themeColor === LIGHT_PURPLE_1 && 'active'}`}/>
//       </li>
//
//       <li>
//         <span
//           onClick={() => handleThemeColor("light_purple_2")}
//           style={{
//             backgroundColor: LIGHT_PURPLE_2_SEC,
//             color: LIGHT_PURPLE_2_DARK_TEXT_COLOR
//           }}
//           className={`gx-link gx-color-light-purple2 ${themeColor === LIGHT_PURPLE_2 && 'active'}`}/>
//       </li>
//     </ul>
//   };
//
//   const getLayoutsTypes = (layoutType) => {
//     return <ul className="gx-layout-option gx-list-inline">
//       <li>
//         <span onClick={() => handleLayoutTypes(LAYOUT_TYPE_FRAMED)}
//               className={`gx-pointer ${layoutType === LAYOUT_TYPE_FRAMED && 'active'}`}>
//         <img src={('/images/layouts/framed.png')} alt='framed'/>
//         </span>
//       </li>
//       <li>
//         <span onClick={() => handleLayoutTypes(LAYOUT_TYPE_FULL)}
//               className={`gx-pointer ${layoutType === LAYOUT_TYPE_FULL && 'active'}`}>
//         <img src={('/images/layouts/full width.png')} alt='full width'/>
//         </span>
//       </li>
//       <li>
//         <span onClick={() => handleLayoutTypes(LAYOUT_TYPE_BOXED)}
//               className={`gx-pointer ${layoutType === LAYOUT_TYPE_BOXED && 'active'}`}>
//         <img src={('/images/layouts/boxed.png')} alt='boxed'/>
//         </span>
//       </li>
//     </ul>
//   };
//
//   const getNavStyles = (navStyle) => {
//     return <ul className="gx-nav-option gx-list-inline">
//       <li>
//         <span onClick={() => onNavStyleChanges(NAV_STYLE_FIXED)}
//               className={`gx-pointer ${navStyle === NAV_STYLE_FIXED && 'active'}`}>
//         <img src={('/images/layouts/fixed.png')} alt='fixed'/>
//         </span>
//       </li>
//       <li>
//         <span onClick={() => onNavStyleChanges(NAV_STYLE_MINI_SIDEBAR)}
//               className={`gx-pointer ${navStyle === NAV_STYLE_MINI_SIDEBAR && 'active'}`}>
//         <img src={('/images/layouts/mini sidebar.png')} alt='mini sidebar'/>
//         </span>
//       </li>
//       <li>
//         <span onClick={() => onNavStyleChanges(NAV_STYLE_DRAWER)}
//               className={`gx-pointer ${navStyle === NAV_STYLE_DRAWER && 'active'}`}>
//         <img src={('/images/layouts/drawer nav.png')} alt='drawer nav'/>
//         </span>
//       </li>
//       <li>
//         <span onClick={() => onNavStyleChanges(NAV_STYLE_NO_HEADER_MINI_SIDEBAR)}
//               className={`gx-pointer ${navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR && 'active'}`}>
//         <img src={('/images/layouts/no header mini sidebar.png')} alt='no hader mini sidebar'/>
//         </span>
//       </li>
//       <li>
//         <span onClick={() => onNavStyleChanges(NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR)}
//               className={`gx-pointer ${navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR && 'active'}`}>
//         <img src={('/images/layouts/vertical no header.png')} alt='vertical no header'/>
//         </span>
//       </li>
//       <li>
//         <span onClick={() => onNavStyleChanges(NAV_STYLE_DEFAULT_HORIZONTAL)}
//               className={`gx-pointer ${navStyle === NAV_STYLE_DEFAULT_HORIZONTAL && 'active'}`}>
//         <img src={('/images/layouts/default horizontal.png')} alt='default horizontal'/>
//         </span>
//       </li>
//       <li>
//         <span onClick={() => onNavStyleChanges(NAV_STYLE_DARK_HORIZONTAL)}
//               className={`gx-pointer ${navStyle === NAV_STYLE_DARK_HORIZONTAL && 'active'}`}>
//         <img src={('/images/layouts/dark horizontal.png')} alt='dark horizontal'/>
//         </span>
//       </li>
//       <li>
//         <span onClick={() => onNavStyleChanges(NAV_STYLE_INSIDE_HEADER_HORIZONTAL)}
//               className={`gx-pointer ${navStyle === NAV_STYLE_INSIDE_HEADER_HORIZONTAL && 'active'}`}>
//         <img src={('/images/layouts/inside header horizontal.png')} alt='inside header horizontal'/>
//         </span>
//       </li>
//       <li>
//         <span onClick={() => onNavStyleChanges(NAV_STYLE_BELOW_HEADER)}
//               className={`gx-pointer ${navStyle === NAV_STYLE_BELOW_HEADER && 'active'}`}>
//         <img src={('/images/layouts/below header.png')} alt='below header'/>
//         </span>
//       </li>
//
//       <li>
//         <span onClick={() => onNavStyleChanges(NAV_STYLE_ABOVE_HEADER)}
//               className={`gx-pointer ${navStyle === NAV_STYLE_ABOVE_HEADER && 'active'}`}>
//         <img src={('/images/layouts/top to header.png')} alt='top to header'/>
//         </span>
//       </li>
//     </ul>
//   };
//
//   return (
//     <>
//       <Drawer
//         placement="right"
//         closable={false}
//         onClose={toggleCustomizer}
//         visible={isCustomizerOpened}>
//         {
//           getCustomizerContent()
//         }
//       </Drawer>
//       <div className="gx-customizer-option">
//         <Button type="primary" onClick={toggleCustomizer}>
//           <i className="icon icon-setting fxicon-hc-spin gx-d-block"/>
//         </Button>
//       </div>
//     </>
//   );
// };
//
// export default CustomizerSystem;


const Index = () => {
  return __jsx("div", null);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./app/core/Layout/index.js":
/*!**********************************!*\
  !*** ./app/core/Layout/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Sidebar */ "./app/core/Sidebar/index.js");
/* harmony import */ var _Topbar_HorizontalDefault__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Topbar/HorizontalDefault */ "./app/core/Topbar/HorizontalDefault/index.js");
/* harmony import */ var _Topbar_HorizontalDark__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Topbar/HorizontalDark */ "./app/core/Topbar/HorizontalDark/index.js");
/* harmony import */ var _Topbar_InsideHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Topbar/InsideHeader */ "./app/core/Topbar/InsideHeader/index.js");
/* harmony import */ var _Topbar_AboveHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Topbar/AboveHeader */ "./app/core/Topbar/AboveHeader/index.js");
/* harmony import */ var _Topbar_BelowHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Topbar/BelowHeader */ "./app/core/Topbar/BelowHeader/index.js");
/* harmony import */ var _Topbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Topbar */ "./app/core/Topbar/index.js");
/* harmony import */ var _util_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../util/config */ "./util/config.js");
/* harmony import */ var _util_config__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_util_config__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../constants/ThemeSetting */ "./constants/ThemeSetting.js");
/* harmony import */ var _Topbar_NoHeaderNotification__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Topbar/NoHeaderNotification */ "./app/core/Topbar/NoHeaderNotification/index.js");
/* harmony import */ var _lngProvider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../lngProvider */ "./lngProvider/index.js");
/* harmony import */ var _Customizer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Customizer */ "./app/core/Customizer/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















const {
  Content,
  Footer
} = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"];

const AppLayout = ({
  children
}) => {
  const {
    width,
    themeType,
    layoutType,
    locale,
    navStyle
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings);

  const getContainerClass = navStyle => {
    switch (navStyle) {
      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_DARK_HORIZONTAL"]:
        return "gx-container-wrap";

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_DEFAULT_HORIZONTAL"]:
        return "gx-container-wrap";

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_INSIDE_HEADER_HORIZONTAL"]:
        return "gx-container-wrap";

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_BELOW_HEADER"]:
        return "gx-container-wrap";

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_ABOVE_HEADER"]:
        return "gx-container-wrap";

      default:
        return '';
    }
  };

  const getNavStyles = navStyle => {
    switch (navStyle) {
      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_DEFAULT_HORIZONTAL"]:
        return __jsx(_Topbar_HorizontalDefault__WEBPACK_IMPORTED_MODULE_5__["default"], null);

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_DARK_HORIZONTAL"]:
        return __jsx(_Topbar_HorizontalDark__WEBPACK_IMPORTED_MODULE_6__["default"], null);

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_INSIDE_HEADER_HORIZONTAL"]:
        return __jsx(_Topbar_InsideHeader__WEBPACK_IMPORTED_MODULE_7__["default"], null);

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_ABOVE_HEADER"]:
        return __jsx(_Topbar_AboveHeader__WEBPACK_IMPORTED_MODULE_8__["default"], null);

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_BELOW_HEADER"]:
        return __jsx(_Topbar_BelowHeader__WEBPACK_IMPORTED_MODULE_9__["default"], null);

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_FIXED"]:
        return __jsx(_Topbar__WEBPACK_IMPORTED_MODULE_10__["default"], null);

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_DRAWER"]:
        return __jsx(_Topbar__WEBPACK_IMPORTED_MODULE_10__["default"], null);

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_MINI_SIDEBAR"]:
        return __jsx(_Topbar__WEBPACK_IMPORTED_MODULE_10__["default"], null);

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_NO_HEADER_MINI_SIDEBAR"]:
        return __jsx(_Topbar_NoHeaderNotification__WEBPACK_IMPORTED_MODULE_13__["default"], null);

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR"]:
        return __jsx(_Topbar_NoHeaderNotification__WEBPACK_IMPORTED_MODULE_13__["default"], null);

      default:
        return null;
    }
  };

  const getSidebar = (navStyle, width) => {
    if (width < _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["TAB_SIZE"]) {
      return __jsx(_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], null);
    }

    switch (navStyle) {
      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_FIXED"]:
        return __jsx(_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], null);

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_DRAWER"]:
        return __jsx(_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], null);

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_MINI_SIDEBAR"]:
        return __jsx(_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], null);

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_NO_HEADER_MINI_SIDEBAR"]:
        return __jsx(_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], null);

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR"]:
        return __jsx(_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], null);

      default:
        return null;
    }
  };

  let bodyClass = "";

  if (themeType === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_12__["THEME_TYPE_DARK"]) {
    bodyClass = "dark-theme";
  }

  const currentAppLocale = _lngProvider__WEBPACK_IMPORTED_MODULE_14__["default"][locale.locale];
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["ConfigProvider"], {
    locale: currentAppLocale.antd
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["IntlProvider"], {
    locale: currentAppLocale.locale,
    messages: currentAppLocale.messages
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    className: `gx-app-layout ${bodyClass}`
  }, getSidebar(navStyle, width), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, getNavStyles(navStyle), __jsx(Content, {
    className: `gx-layout-content ${getContainerClass(navStyle)}`
  }, __jsx("div", {
    className: "gx-main-content-wrapper"
  }, children), __jsx(Footer, null, __jsx("div", {
    className: "gx-layout-footer-content"
  }, _util_config__WEBPACK_IMPORTED_MODULE_11__["footerText"])))), __jsx(_Customizer__WEBPACK_IMPORTED_MODULE_15__["default"], null))));
};

const mapStateToProps = ({
  settings
}) => {
  const {
    width,
    themeType,
    layoutType,
    navStyle,
    locale
  } = settings;
  return {
    width,
    themeType,
    layoutType,
    navStyle,
    locale
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(AppLayout));

/***/ }),

/***/ "./app/core/Sidebar/AppsNavigation.js":
/*!********************************************!*\
  !*** ./app/core/Sidebar/AppsNavigation.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const AppsNavigation = () => __jsx("ul", {
  className: "gx-app-nav"
}, __jsx("li", null, __jsx("i", {
  className: "icon icon-search-new"
})), __jsx("li", null, __jsx("i", {
  className: "icon icon-notification"
})), __jsx("li", null, __jsx("i", {
  className: "icon icon-chat-new"
})));

/* harmony default export */ __webpack_exports__["default"] = (AppsNavigation);

/***/ }),

/***/ "./app/core/Sidebar/SidebarContent.js":
/*!********************************************!*\
  !*** ./app/core/Sidebar/SidebarContent.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/CustomScrollbars */ "./util/CustomScrollbars.js");
/* harmony import */ var _SidebarLogo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SidebarLogo */ "./app/core/Sidebar/SidebarLogo.js");
/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UserProfile */ "./app/core/Sidebar/UserProfile.js");
/* harmony import */ var _AppsNavigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AppsNavigation */ "./app/core/Sidebar/AppsNavigation.js");
/* harmony import */ var _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../constants/ThemeSetting */ "./constants/ThemeSetting.js");
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../util/IntlMessages */ "./util/IntlMessages.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../redux/actions */ "./redux/actions/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const SubMenu = antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].SubMenu;
const MenuItemGroup = antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].ItemGroup;

const SidebarContent = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  let {
    navStyle,
    themeType,
    pathname
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(({
    settings
  }) => settings);

  const getNoHeaderClass = navStyle => {
    if (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_8__["NAV_STYLE_NO_HEADER_MINI_SIDEBAR"] || navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_8__["NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR"]) {
      return "gx-no-header-notifications";
    }

    return "";
  };

  const getNavStyleSubMenuClass = navStyle => {
    if (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_8__["NAV_STYLE_NO_HEADER_MINI_SIDEBAR"]) {
      return "gx-no-header-submenu-popup";
    }

    return "";
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_11__["setPathName"])(router.pathname));
  }, [router.pathname]);
  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[1];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_SidebarLogo__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx("div", {
    className: "gx-sidebar-content"
  }, __jsx("div", {
    className: `gx-sidebar-notifications ${getNoHeaderClass(navStyle)}`
  }, __jsx(_UserProfile__WEBPACK_IMPORTED_MODULE_6__["default"], null), __jsx(_AppsNavigation__WEBPACK_IMPORTED_MODULE_7__["default"], null)), __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "gx-layout-sider-scrollbar"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    defaultOpenKeys: [defaultOpenKeys],
    selectedKeys: [selectedKeys],
    theme: themeType === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_8__["THEME_TYPE_LITE"] ? 'lite' : 'dark',
    mode: "inline"
  }, __jsx(MenuItemGroup, {
    key: "main",
    className: "gx-menu-group",
    title: __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: "sidebar.main"
    })
  }, __jsx(SubMenu, {
    key: "dashboard",
    popupClassName: getNavStyleSubMenuClass(navStyle),
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-dasbhoard"
    }), __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: "sidebar.dashboard"
    })))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "main/dashboard/crypto"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/main/dashboard/crypto"
  }, __jsx("a", null, __jsx("i", {
    className: "icon icon-crypto"
  }), __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.dashboard.crypto"
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "main/dashboard/crm"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/main/dashboard/crm"
  }, __jsx("a", null, __jsx("i", {
    className: "icon icon-crm"
  }), __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.dashboard.crm"
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "main/dashboard/listing"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/main/dashboard/listing"
  }, __jsx("a", null, __jsx("i", {
    className: "icon icon-listing-dbrd"
  }), __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.dashboard.listing"
  })))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "main/widgets"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/main/widgets"
  }, __jsx("a", null, __jsx("i", {
    className: "icon icon-widgets"
  }), __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.widgets"
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "main/metrics"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/main/metrics"
  }, __jsx("a", null, __jsx("i", {
    className: "icon icon-apps"
  }), __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.metrics"
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "main/layouts"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/main/layouts"
  }, __jsx("a", null, __jsx("i", {
    className: "icon icon-card"
  }), __jsx("span", null, " ", __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.layouts"
  })))))), __jsx(MenuItemGroup, {
    key: "in-built-apps",
    className: "gx-menu-group",
    title: __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: "sidebar.inBuiltApp"
    })
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "in-built-apps/mail"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/in-built-apps/mail"
  }, __jsx("a", null, __jsx("i", {
    className: "icon icon-email"
  }), __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.mailApp"
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "in-built-apps/todo"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/in-built-apps/todo"
  }, __jsx("a", null, __jsx("i", {
    className: "icon icon-check-square-o"
  }), __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.todoApp"
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "in-built-apps/contacts"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/in-built-apps/contacts"
  }, __jsx("a", null, __jsx("i", {
    className: "icon icon-contacts"
  }), __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.contactsApp"
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "in-built-apps/chat"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/in-built-apps/chat"
  }, __jsx("a", null, __jsx("i", {
    className: "icon icon-chat-bubble -flex-column-reverse"
  }), __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.chatApp"
  })))))), __jsx(MenuItemGroup, {
    key: "social-apps",
    className: "gx-menu-group",
    title: __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: "sidebar.social"
    })
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "social-apps/profile"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/social-apps/profile"
  }, __jsx("a", null, __jsx("i", {
    className: "icon icon-profile2"
  }), __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.extensions.profile"
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "social-apps/wall"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/social-apps/wall"
  }, __jsx("a", null, __jsx("i", {
    className: "icon icon-avatar -flex-column-reverse"
  }), __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.wall"
  })))))), __jsx(MenuItemGroup, {
    key: "components",
    className: "gx-menu-group",
    title: __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: "sidebar.components"
    })
  }, __jsx(SubMenu, {
    key: "general",
    popupClassName: getNavStyleSubMenuClass(navStyle),
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-all-contacts"
    }), __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: "sidebar.components.general"
    })))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/general/button"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/general/button"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.general.button"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/general/icon"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/general/icon"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.general.icon"
  }))))), __jsx(SubMenu, {
    key: "navigation",
    popupClassName: getNavStyleSubMenuClass(navStyle),
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-navigation"
    }), __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: "sidebar.components.navigation"
    })))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/navigation/affix"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/navigation/affix"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.navigation.affix"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/navigation/breadcrumb"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/navigation/breadcrumb"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.navigation.breadcrumb"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/navigation/dropdown"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/navigation/dropdown"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.navigation.dropdown"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/navigation/menu"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/navigation/menu"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.navigation.menu"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/navigation/pagination"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/navigation/pagination"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.navigation.pagination"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/navigation/steps"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/navigation/steps"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.navigation.steps"
  }))))), __jsx(SubMenu, {
    key: "data-entry",
    popupClassName: getNavStyleSubMenuClass(navStyle),
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-data-entry"
    }), __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: "sidebar.components.dataEntry"
    })))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/data-entry/auto-complete"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/data-entry/auto-complete"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.dataEntry.autoComplete"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/data-entry/checkbox"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/data-entry/checkbox"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.dataEntry.checkbox"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/data-entry/cascader"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/data-entry/cascader"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.dataEntry.cascader"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/data-entry/date-picker"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/data-entry/date-picker"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.dataEntry.datePicker"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/data-entry/form"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/data-entry/form"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.dataEntry.form"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/data-entry/input-number"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/data-entry/input-number"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.dataEntry.inputNumber"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/data-entry/input"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/data-entry/input"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.dataEntry.input"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/data-entry/mention"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/data-entry/mention"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.dataEntry.mention"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/data-entry/rate"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/data-entry/rate"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.dataEntry.rate"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/data-entry/radio"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/data-entry/radio"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.dataEntry.radio"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/data-entry/switch"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/data-entry/switch"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.dataEntry.switch"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/data-entry/slider"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/data-entry/slider"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.dataEntry.slider"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/data-entry/select"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/data-entry/select"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.dataEntry.select"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/data-entry/tree"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/data-entry/tree-select"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.dataEntry.treeSelect"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/data-entry/transfer"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/data-entry/transfer"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.dataEntry.transfer"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/data-entry/time-picker"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/data-entry/time-picker"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.dataEntry.timePicker"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/data-entry/upload"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/data-entry/upload"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.dataEntry.upload"
  }))))), __jsx(SubMenu, {
    key: "data-display",
    popupClassName: getNavStyleSubMenuClass(navStyle),
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-data-display"
    }), __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: "sidebar.components.dataDisplay"
    })))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/data-display/avatar"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/data-display/avatar"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.dataDisplay.avatar"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/data-display/badge"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/data-display/badge"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.dataDisplay.badge"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/data-display/collapse"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/data-display/collapse"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.dataDisplay.collapse"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/data-display/carousel"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/data-display/carousel"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.dataDisplay.carousel"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/data-display/card"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/data-display/card"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.dataDisplay.card"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/data-display/calendar"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/data-display/calendar"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.dataDisplay.calender"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/data-display/popover"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/data-display/popover"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.dataDisplay.popover"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/data-display/tree"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/data-display/tree"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.dataDisplay.tree"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/data-display/tooltip"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/data-display/tooltip"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.dataDisplay.toolTips"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/data-display/timeline"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/data-display/timeline"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.dataDisplay.timeLine"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/data-display/tag"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/data-display/tag"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.dataDisplay.tag"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/data-display/tabs"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/data-display/tabs"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.dataDisplay.tabs"
  }))))), __jsx(SubMenu, {
    key: "feedBack",
    popupClassName: getNavStyleSubMenuClass(navStyle),
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-feedback"
    }), __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: "sidebar.components.feedBack"
    })))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/feedBack/alert"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/feedBack/alert"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.feedBack.alert"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/feedBack/modal"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/feedBack/modal"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.feedBack.modal"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/feedBack/message"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/feedBack/message"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.feedBack.message"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/feedBack/notification"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/feedBack/notification"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.feedBack.notification"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/feedBack/progress"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/feedBack/progress"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.feedBack.progress"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/feedBack/popconfirm"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/feedBack/popconfirm"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.feedBack.popConfirm"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/feedBack/spin"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/feedBack/spin"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.feedBack.spin"
  }))))), __jsx(SubMenu, {
    key: "others",
    popupClassName: getNavStyleSubMenuClass(navStyle),
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-inbox"
    }), __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: "sidebar.components.other"
    })))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/others/anchor"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/others/anchor"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.other.anchor"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/others/backtop"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/others/backtop"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.other.backTop"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/others/divider"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/others/divider"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.other.divider"
  }))))), __jsx(SubMenu, {
    key: "table",
    popupClassName: getNavStyleSubMenuClass(navStyle),
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-table"
    }), __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: "sidebar.dataDisplay.table"
    })))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/table/basic"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/table/basic"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.view.basicTable"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "components/table/data"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/components/table/data"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.view.dataTable"
  })))))), __jsx(MenuItemGroup, {
    key: "extra-components",
    className: "gx-menu-group",
    title: __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: "sidebar.extraComponents"
    })
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extra-components/stripe"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extra-components/stripe"
  }, __jsx("a", null, __jsx("i", {
    className: "icon icon-card"
  }), "Stripe"))), __jsx(SubMenu, {
    key: "editor",
    popupClassName: getNavStyleSubMenuClass(navStyle),
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-editor"
    }), __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: "sidebar.editors"
    })))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extra-components/editor/ck"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extra-components/editor/ck"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.editors.CKEditor"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extra-components/color-picker"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extra-components/color-picker"
  }, __jsx("a", null, __jsx("i", {
    className: "icon icon-picker"
  }), __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.pickers.colorPickers"
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extra-components/dnd"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extra-components/dnd"
  }, __jsx("a", null, __jsx("i", {
    className: "icon icon-drag-and-drop"
  }), __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.extensions.dragNDrop"
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extra-components/sweet-alert"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extra-components/sweet-alert"
  }, __jsx("a", null, __jsx("i", {
    className: "icon icon-sweet-alert"
  }), __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.extensions.sweetAlert"
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extra-components/notification"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extra-components/notification"
  }, __jsx("a", null, __jsx("i", {
    className: "icon icon-notification"
  }), __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.extensions.notification"
  }))))), __jsx(SubMenu, {
    key: "time-line",
    popupClassName: getNavStyleSubMenuClass(navStyle),
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-timeline"
    }), __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: "sidebar.timeLine"
    })))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extra-components/time-line/default"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extra-components/time-line/default"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.timeLine.default"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extra-components/time-line/default-with-icon"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extra-components/time-line/default-with-icon"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.timeLine.defaultwithIcons"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extra-components/time-line/left-align"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extra-components/time-line/left-align"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.timeLine.leftAligned"
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extra-components/shuffle"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extra-components/shuffle"
  }, __jsx("a", null, __jsx("i", {
    className: "icon icon-shuffle"
  }), __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.extensions.shuffle"
  })))))), __jsx(MenuItemGroup, {
    key: "extensions",
    className: "gx-menu-group",
    title: __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: "sidebar.extensions"
    })
  }, __jsx(SubMenu, {
    key: "map",
    popupClassName: getNavStyleSubMenuClass(navStyle),
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-extensions"
    }), __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: "sidebar.map"
    })))
  }, __jsx(SubMenu, {
    key: "google",
    popupClassName: getNavStyleSubMenuClass(navStyle),
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-map-google"
    }), __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: "sidebar.google.map"
    })))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extensions/map/google/simple"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extensions/map/google/simple"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.map.simple"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extensions/map/google/styled"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extensions/map/google/styled"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.map.styled"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extensions/map/google/geo-location"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extensions/map/google/geo-location"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.map.geoLocation"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extensions/map/google/directions"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extensions/map/google/directions"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.map.mapDirection"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extensions/map/google/overlay"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extensions/map/google/overlay"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.map.overlay"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extensions/map/google/kml"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extensions/map/google/kml"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.map.kmLayer"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extensions/map/google/popup-info"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extensions/map/google/popup-info"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.map.popupInfo"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extensions/map/google/traffic"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extensions/map/google/traffic"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.map.trafficLayer"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extensions/map/google/street-view"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extensions/map/google/street-view"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.map.streetView"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extensions/map/google/event"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extensions/map/google/event"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.map.eventListener"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extensions/map/google/drawing"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extensions/map/google/drawing"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.map.mapDrawing"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extensions/map/google/clustering"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extensions/map/google/clustering"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.map.mapClustering"
  }))))), __jsx(SubMenu, {
    key: "ammap",
    popupClassName: getNavStyleSubMenuClass(navStyle),
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-amchart"
    }), __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: "sidebar.ammap"
    })))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extensions/map/ammap/animations-lines"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extensions/map/ammap/animations-lines"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.map.animations.lines"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extensions/map/ammap/curved-lines"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extensions/map/ammap/curved-lines"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.map.curved.lines"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extensions/map/ammap/zooming-countries"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extensions/map/ammap/zooming-countries"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.map.zooming.countries"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extensions/map/ammap/patterns"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extensions/map/ammap/patterns"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.map.patterns"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extensions/map/ammap/capitals-map"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extensions/map/ammap/capitals-map"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.map.capitals.map"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extensions/map/ammap/map-markers"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extensions/map/ammap/map-markers"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.map.markers"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extensions/map/ammap/flight-routes"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extensions/map/ammap/flight-routes"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.map.flight.routes"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extensions/map/ammap/choropleth"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extensions/map/ammap/choropleth"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.map.choropleth"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extensions/map/ammap/grouped-countries"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extensions/map/ammap/grouped-countries"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.map.grouped.countries"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extensions/map/ammap/bubbles"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extensions/map/ammap/bubbles"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.map.bubbles"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extensions/map/ammap/drill-down"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extensions/map/ammap/drill-down"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.map.drill.down"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extensions/map/ammap/multiple-areas"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extensions/map/ammap/multiple-areas"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.map.multiple.areas"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extensions/map/ammap/weather"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extensions/map/ammap/weather"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.map.weather"
  })))))), __jsx(SubMenu, {
    key: "chart",
    popupClassName: getNavStyleSubMenuClass(navStyle),
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-chart"
    }), __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: "sidebar.chart"
    })))
  }, __jsx(SubMenu, {
    key: "recharts",
    popupClassName: getNavStyleSubMenuClass(navStyle),
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-chart-area-new"
    }), __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: "sidebar.components.rechart"
    })))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extensions/chart/recharts/area"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extensions/chart/recharts/area"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.chart.area"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extensions/chart/recharts/bar"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extensions/chart/recharts/bar"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.chart.bar"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extensions/chart/recharts/composed"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extensions/chart/recharts/composed"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.chart.composed"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extensions/chart/recharts/line"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extensions/chart/recharts/line"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.chart.line"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extensions/chart/recharts/pie"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extensions/chart/recharts/pie"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.chart.pie"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extensions/chart/recharts/radar"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extensions/chart/recharts/radar"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.chart.radar"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extensions/chart/recharts/radial"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extensions/chart/recharts/radial"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.chart.radial"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extensions/chart/recharts/scatter"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extensions/chart/recharts/scatter"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.chart.scatter"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extensions/chart/recharts/treemap"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extensions/chart/recharts/treemap"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.chart.tree"
  }))))), __jsx(SubMenu, {
    key: "amchart",
    popupClassName: getNavStyleSubMenuClass(navStyle),
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-amchart"
    }), __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: "sidebar.components.amchart"
    })))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extensions/chart/amchart/area"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extensions/chart/amchart/area"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.chart.area"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extensions/chart/amchart/bar"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extensions/chart/amchart/bar"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.chart.bar"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extensions/chart/amchart/line"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extensions/chart/amchart/line"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.chart.line"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extensions/chart/amchart/pie"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extensions/chart/amchart/pie"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.chart.pie"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "extensions/chart/amchart/composed"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/extensions/chart/amchart/composed"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.chart.composed"
  }))))))), __jsx(MenuItemGroup, {
    key: "custom-views",
    className: "gx-menu-group",
    title: __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: "sidebar.customViews"
    })
  }, __jsx(SubMenu, {
    key: "user-auth",
    popupClassName: getNavStyleSubMenuClass(navStyle),
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-auth-screen"
    }), __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: "app.userAuth"
    })))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "custom-views/user-auth/sign-in"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/custom-views/user-auth/sign-in"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "app.userAuth.signIn"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "custom-views/user-auth/forgot-password"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/custom-views/user-auth/forgot-password"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "app.userAuth.forgotPassword"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "custom-views/user-auth/sign-up"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/custom-views/user-auth/sign-up"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "app.userAuth.signUp"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "custom-views/user-auth/lock-screen"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/custom-views/user-auth/lock-screen"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "app.userAuth.lockScreen"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "custom-views/user-auth/reset-password"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/custom-views/user-auth/reset-password"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "app.userAuth.resetPassword"
  }))))), __jsx(SubMenu, {
    key: "list-type",
    popupClassName: getNavStyleSubMenuClass(navStyle),
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-all-contacts"
    }), __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: "sidebar.listType"
    })))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "custom-views/list-type/simple-list"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/custom-views/list-type/simple-list"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.listType.plainListView"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "custom-views/list-type/strip-list"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/custom-views/list-type/strip-list"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.listType.withDivider"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "custom-views/list-type/card-list"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/custom-views/list-type/card-list"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.listType.cardListView"
  }))))), __jsx(SubMenu, {
    key: "eCommerce",
    popupClassName: getNavStyleSubMenuClass(navStyle),
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-shopping-cart"
    }), __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: "sidebar.eCommerce"
    })))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "custom-views/eCommerce/product-grid"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/custom-views/eCommerce/product-grid"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.eCommerce.productGrid"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "custom-views/eCommerce/product-list"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/custom-views/eCommerce/product-list"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.eCommerce.productList"
  }))))), __jsx(SubMenu, {
    key: "error-pages",
    popupClassName: getNavStyleSubMenuClass(navStyle),
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-error"
    }), __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: "sidebar.extraPages"
    })))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "custom-views/error-pages/error-404"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/custom-views/error-pages/error-404"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.extraPages.404"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "custom-views/error-pages/error-500"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/custom-views/error-pages/error-500"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.extraPages.500"
  }))))), __jsx(SubMenu, {
    key: "extras",
    popupClassName: getNavStyleSubMenuClass(navStyle),
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-ellipse-h"
    }), __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: "sidebar.listType.extras"
    })))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "custom-views/extras/pricing-table"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/custom-views/extras/pricing-table"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.extraElements.pricingTable"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "custom-views/extras/callouts"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/custom-views/extras/callouts"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.extraElements.callouts"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "custom-views/extras/testimonials"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/custom-views/extras/testimonials"
  }, __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "sidebar.extraElements.testimonials"
  }))))))))));
};

SidebarContent.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (SidebarContent);

/***/ }),

/***/ "./app/core/Sidebar/SidebarLogo.js":
/*!*****************************************!*\
  !*** ./app/core/Sidebar/SidebarLogo.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions_Setting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../redux/actions/Setting */ "./redux/actions/Setting.js");
/* harmony import */ var _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/ThemeSetting */ "./constants/ThemeSetting.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const SidebarLogo = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    width,
    themeType,
    navCollapsed
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(({
    settings
  }) => settings);
  let navStyle = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(({
    settings
  }) => settings.navStyle);

  if (width < _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["TAB_SIZE"] && navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_FIXED"]) {
    navStyle = _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_DRAWER"];
  }

  return __jsx("div", {
    className: "gx-layout-sider-header"
  }, navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_FIXED"] || navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_MINI_SIDEBAR"] ? __jsx("div", {
    className: "gx-linebar"
  }, __jsx("i", {
    className: `gx-icon-btn icon icon-${navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_MINI_SIDEBAR"] ? 'menu-unfold' : 'menu-fold'} ${themeType !== _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["THEME_TYPE_LITE"] ? 'gx-text-white' : ''}`,
    onClick: () => {
      if (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_DRAWER"]) {
        dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_3__["toggleCollapsedSideNav"])(!navCollapsed));
      } else if (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_FIXED"]) {
        dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_3__["onNavStyleChange"])(_constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_MINI_SIDEBAR"]));
      } else if (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_NO_HEADER_MINI_SIDEBAR"]) {
        dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_3__["toggleCollapsedSideNav"])(!navCollapsed));
      } else {
        dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_3__["onNavStyleChange"])(_constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_FIXED"]));
      }
    }
  })) : null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, __jsx("a", {
    className: "gx-site-logo"
  }, navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["NAV_STYLE_NO_HEADER_MINI_SIDEBAR"] && width >= _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["TAB_SIZE"] ? __jsx("img", {
    alt: "lo",
    src: "/images/w-logo.png"
  }) : themeType === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_4__["THEME_TYPE_LITE"] ? __jsx("img", {
    alt: "logo1",
    src: "/images/logo-white.png"
  }) : __jsx("img", {
    alt: "logo2",
    src: "/images/logo.png"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SidebarLogo);

/***/ }),

/***/ "./app/core/Sidebar/UserProfile.js":
/*!*****************************************!*\
  !*** ./app/core/Sidebar/UserProfile.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions_Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../redux/actions/Auth */ "./redux/actions/Auth.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const UserProfile = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  const userMenuOptions = __jsx("ul", {
    className: "gx-user-popover"
  }, __jsx("li", null, "My Account"), __jsx("li", null, "Connections"), __jsx("li", {
    onClick: () => dispatch(Object(_redux_actions_Auth__WEBPACK_IMPORTED_MODULE_3__["userSignOut"])())
  }, "Logout"));

  return __jsx("div", {
    className: "gx-flex-row gx-align-items-center gx-mb-4 gx-avatar-row"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
    placement: "bottomRight",
    content: userMenuOptions,
    trigger: "click"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
    src: "/images/avatar/domnic-harris.png",
    className: "gx-size-40 gx-pointer gx-mr-3",
    alt: ""
  }), __jsx("span", {
    className: "gx-avatar-name"
  }, "Rob Farnandies", __jsx("i", {
    className: "icon icon-chevron-down gx-fs-xxs gx-ml-2"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

/***/ }),

/***/ "./app/core/Sidebar/index.js":
/*!***********************************!*\
  !*** ./app/core/Sidebar/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SidebarContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SidebarContent */ "./app/core/Sidebar/SidebarContent.js");
/* harmony import */ var _redux_actions_Setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../redux/actions/Setting */ "./redux/actions/Setting.js");
/* harmony import */ var _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants/ThemeSetting */ "./constants/ThemeSetting.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const {
  Sider
} = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"];

const Sidebar = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    themeType,
    navCollapsed,
    width,
    navStyle
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(({
    settings
  }) => settings);

  const onToggleCollapsedNav = () => {
    dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_4__["toggleCollapsedSideNav"])(!navCollapsed));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener('resize', () => {
      dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_4__["updateWindowWidth"])(window.innerWidth));
    });
  }, [dispatch]);
  let drawerStyle = "gx-collapsed-sidebar";

  if (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_FIXED"]) {
    drawerStyle = "";
  } else if (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_NO_HEADER_MINI_SIDEBAR"]) {
    drawerStyle = "gx-mini-sidebar gx-mini-custom-sidebar";
  } else if (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR"]) {
    drawerStyle = "gx-custom-sidebar";
  } else if (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_MINI_SIDEBAR"]) {
    drawerStyle = "gx-mini-sidebar";
  } else if (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_DRAWER"]) {
    drawerStyle = "gx-collapsed-sidebar";
  }

  if ((navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_FIXED"] || navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_MINI_SIDEBAR"] || navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR"]) && width < _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["TAB_SIZE"]) {
    drawerStyle = "gx-collapsed-sidebar";
  }

  return __jsx(Sider, {
    className: `gx-app-sidebar ${drawerStyle} ${themeType !== _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["THEME_TYPE_LITE"] ? 'gx-layout-sider-dark' : null}`,
    trigger: null,
    collapsed: width < _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["TAB_SIZE"] ? false : navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_MINI_SIDEBAR"] || navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_NO_HEADER_MINI_SIDEBAR"],
    theme: themeType === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["THEME_TYPE_LITE"] ? "lite" : "dark",
    collapsible: true
  }, navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_DRAWER"] || width < _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["TAB_SIZE"] ? __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Drawer"], {
    className: `gx-drawer-sidebar ${themeType !== _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["THEME_TYPE_LITE"] ? 'gx-drawer-sidebar-dark' : null}`,
    placement: "left",
    closable: false,
    onClose: onToggleCollapsedNav,
    visible: navCollapsed
  }, __jsx(_SidebarContent__WEBPACK_IMPORTED_MODULE_3__["default"], null)) : __jsx(_SidebarContent__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./app/core/Topbar/AboveHeader/index.js":
/*!**********************************************!*\
  !*** ./app/core/Topbar/AboveHeader/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/CustomScrollbars */ "./util/CustomScrollbars.js");
/* harmony import */ var _languageData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../languageData */ "./app/core/Topbar/languageData.js");
/* harmony import */ var _components_SearchBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/SearchBox */ "./app/components/SearchBox/index.js");
/* harmony import */ var _components_UserInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/UserInfo */ "./app/components/UserInfo/index.js");
/* harmony import */ var _components_AppNotification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/AppNotification */ "./app/components/AppNotification/index.js");
/* harmony import */ var _components_MailNotification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/MailNotification */ "./app/components/MailNotification/index.js");
/* harmony import */ var _redux_actions_Setting__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../redux/actions/Setting */ "./redux/actions/Setting.js");
/* harmony import */ var _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../constants/ThemeSetting */ "./constants/ThemeSetting.js");
/* harmony import */ var _HorizontalNav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../HorizontalNav */ "./app/core/Topbar/HorizontalNav.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../util/IntlMessages */ "./util/IntlMessages.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















const {
  Header
} = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"];
const Option = antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option;

const menu = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
  onClick: handleMenuClick
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "1"
}, "Products"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "2"
}, "Blog"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "3"
}, "Apps"));

function handleMenuClick() {
  antd__WEBPACK_IMPORTED_MODULE_1__["message"].info('Click on menu item.');
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

const AboveHeader = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    0: searchText,
    1: setSearchText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const locale = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.locale);
  const navCollapsed = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.navCollapsed);
  const width = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.width);

  const languageMenu = () => __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "gx-popover-lang-scroll"
  }, __jsx("ul", {
    className: "gx-sub-popover"
  }, _languageData__WEBPACK_IMPORTED_MODULE_5__["default"].map(language => __jsx("li", {
    className: "gx-media gx-pointer",
    key: JSON.stringify(language),
    onClick: e => dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_10__["switchLanguage"])(language))
  }, __jsx("i", {
    className: `flag flag-24 gx-mr-2 flag-${language.icon}`
  }), __jsx("span", {
    className: "gx-language-text"
  }, language.name)))));

  const updateSearchChatUser = evt => {
    setSearchText(evt.target.value);
  };

  return __jsx("div", {
    className: "gx-header-horizontal gx-header-horizontal-dark gx-above-header-horizontal"
  }, __jsx("div", {
    className: "gx-header-horizontal-nav gx-header-horizontal-nav-curve gx-d-none gx-d-lg-block"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-nav-flex"
  }, __jsx(_HorizontalNav__WEBPACK_IMPORTED_MODULE_12__["default"], null), __jsx("ul", {
    className: "gx-header-notifications gx-ml-auto"
  }, __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-menu-lines"
  }))), __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-setting"
  }))), __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-apps-new"
  }))))))), __jsx("div", {
    className: "gx-header-horizontal-top"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-top-flex"
  }, __jsx("div", {
    className: "gx-header-horizontal-top-left"
  }, __jsx("i", {
    className: "icon icon-alert gx-mr-3"
  }), __jsx("p", {
    className: "gx-mb-0 gx-text-truncate"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "app.announced"
  }))), __jsx("ul", {
    className: "gx-login-list"
  }, __jsx("li", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "app.userAuth.login"
  })), __jsx("li", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "app.userAuth.signUp"
  })))))), __jsx(Header, {
    className: "gx-header-horizontal-main"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-main-flex"
  }, __jsx("div", {
    className: "gx-d-block gx-d-lg-none gx-linebar gx-mr-xs-3"
  }, __jsx("i", {
    className: "gx-icon-btn icon icon-menu",
    onClick: () => {
      if (width <= _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_11__["TAB_SIZE"]) {
        dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_10__["toggleCollapsedSideNav"])(!navCollapsed));
      }
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
    href: "/"
  }, __jsx("img", {
    alt: "",
    className: "gx-d-block gx-d-lg-none gx-pointer gx-mr-xs-3 gx-pt-xs-1 gx-w-logo",
    src: "/images/w-logo.png"
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
    href: "/"
  }, __jsx("img", {
    alt: "",
    className: "gx-d-none gx-d-lg-block gx-pointer gx-mr-xs-5 gx-logo",
    src: "/images/logo.png"
  })), __jsx("div", {
    className: "gx-header-search gx-d-none gx-d-lg-flex"
  }, __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
    styleName: "gx-lt-icon-search-bar-lg",
    placeholder: "Search in app...",
    onChange: updateSearchChatUser,
    value: searchText
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    defaultValue: "lucy",
    style: {
      width: 120
    },
    onChange: handleChange
  }, __jsx(Option, {
    value: "jack"
  }, "Products"), __jsx(Option, {
    value: "lucy"
  }, "Apps"), __jsx(Option, {
    value: "Yiminghe"
  }, "Blogs"))), __jsx("ul", {
    className: "gx-header-notifications gx-ml-auto"
  }, __jsx("li", {
    className: "gx-notify gx-notify-search gx-d-inline-block gx-d-lg-none"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx("div", {
      className: "gx-d-flex"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
      overlay: menu
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], null, "Category ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "down"
    }))), __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
      styleName: "gx-popover-search-bar",
      placeholder: "Search in app...",
      onChange: updateSearchChatUser,
      value: searchText
    })),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-search-new"
  })))), __jsx("li", {
    className: "gx-notify"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_AppNotification__WEBPACK_IMPORTED_MODULE_8__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-notification"
  })))), __jsx("li", {
    className: "gx-msg"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_MailNotification__WEBPACK_IMPORTED_MODULE_9__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-status-pos gx-d-block"
  }, __jsx("i", {
    className: "icon icon-chat-new"
  }), __jsx("span", {
    className: "gx-status gx-status-rtl gx-small gx-orange"
  })))), __jsx("li", {
    className: "gx-language"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: languageMenu(),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-flex-row gx-align-items-center"
  }, __jsx("i", {
    className: `flag flag-24 flag-${locale.icon}`
  })))), __jsx("li", {
    className: "gx-user-nav"
  }, __jsx(_components_UserInfo__WEBPACK_IMPORTED_MODULE_7__["default"], null)))))));
};

/* harmony default export */ __webpack_exports__["default"] = (AboveHeader);

/***/ }),

/***/ "./app/core/Topbar/BelowHeader/index.js":
/*!**********************************************!*\
  !*** ./app/core/Topbar/BelowHeader/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/CustomScrollbars */ "./util/CustomScrollbars.js");
/* harmony import */ var _languageData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../languageData */ "./app/core/Topbar/languageData.js");
/* harmony import */ var _components_SearchBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/SearchBox */ "./app/components/SearchBox/index.js");
/* harmony import */ var _components_UserInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/UserInfo */ "./app/components/UserInfo/index.js");
/* harmony import */ var _components_AppNotification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/AppNotification */ "./app/components/AppNotification/index.js");
/* harmony import */ var _components_MailNotification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/MailNotification */ "./app/components/MailNotification/index.js");
/* harmony import */ var _redux_actions_Setting__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../redux/actions/Setting */ "./redux/actions/Setting.js");
/* harmony import */ var _HorizontalNav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../HorizontalNav */ "./app/core/Topbar/HorizontalNav.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../util/IntlMessages */ "./util/IntlMessages.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














const {
  Header
} = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"];
const Option = antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option;

const menu = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
  onClick: handleMenuClick
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "1"
}, "Products"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "2"
}, "Apps"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "3"
}, "Blogs"));

function handleMenuClick(e) {
  antd__WEBPACK_IMPORTED_MODULE_1__["message"].info('Click on menu item.');
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

const BelowHeader = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    0: searchText,
    1: setSearchText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const locale = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.locale);
  const navCollapsed = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.navCollapsed);

  const languageMenu = () => __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "gx-popover-lang-scroll"
  }, __jsx("ul", {
    className: "gx-sub-popover"
  }, _languageData__WEBPACK_IMPORTED_MODULE_5__["default"].map(language => __jsx("li", {
    className: "gx-media gx-pointer",
    key: JSON.stringify(language),
    onClick: e => dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_10__["switchLanguage"])(language))
  }, __jsx("i", {
    className: `flag flag-24 gx-mr-2 flag-${language.icon}`
  }), __jsx("span", {
    className: "gx-language-text"
  }, language.name)))));

  const updateSearchChatUser = evt => {
    setSearchText(evt.target.value);
  };

  return __jsx("div", {
    className: "gx-header-horizontal gx-header-horizontal-dark gx-below-header-horizontal"
  }, __jsx("div", {
    className: "gx-header-horizontal-top"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-top-flex"
  }, __jsx("div", {
    className: "gx-header-horizontal-top-left"
  }, __jsx("i", {
    className: "icon icon-alert gx-mr-3"
  }), __jsx("p", {
    className: "gx-mb-0 gx-text-truncate"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "app.announced"
  }))), __jsx("ul", {
    className: "gx-login-list"
  }, __jsx("li", null, "Login"), __jsx("li", null, "Signup"))))), __jsx(Header, {
    className: "gx-header-horizontal-main"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-main-flex"
  }, __jsx("div", {
    className: "gx-d-block gx-d-lg-none gx-linebar gx-mr-xs-3"
  }, __jsx("i", {
    className: "gx-icon-btn icon icon-menu",
    onClick: () => {
      dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_10__["toggleCollapsedSideNav"])(!navCollapsed));
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: "/"
  }, __jsx("img", {
    alt: "",
    className: "gx-d-block gx-d-lg-none gx-pointer gx-mr-xs-3 gx-pt-xs-1 gx-w-logo",
    src: "/images/w-logo.png"
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: "/"
  }, __jsx("img", {
    alt: "",
    className: "gx-d-none gx-d-lg-block gx-pointer gx-mr-xs-5 gx-logo",
    src: "/images/logo.png"
  })), __jsx("div", {
    className: "gx-header-search gx-d-none gx-d-lg-flex"
  }, __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
    styleName: "gx-lt-icon-search-bar-lg",
    placeholder: "Search in app...",
    onChange: updateSearchChatUser,
    value: searchText
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    defaultValue: "lucy",
    style: {
      width: 120
    },
    onChange: handleChange
  }, __jsx(Option, {
    value: "jack"
  }, "Products"), __jsx(Option, {
    value: "lucy"
  }, "Apps"), __jsx(Option, {
    value: "Yiminghe"
  }, "Blogs"))), __jsx("ul", {
    className: "gx-header-notifications gx-ml-auto"
  }, __jsx("li", {
    className: "gx-notify gx-notify-search gx-d-inline-block gx-d-lg-none"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx("div", {
      className: "gx-d-flex"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
      overlay: menu
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], null, "Category ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "down"
    }))), __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
      styleName: "gx-popover-search-bar",
      placeholder: "Search in app...",
      onChange: updateSearchChatUser,
      value: searchText
    })),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-search-new"
  })))), __jsx("li", {
    className: "gx-notify"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_AppNotification__WEBPACK_IMPORTED_MODULE_8__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-notification"
  })))), __jsx("li", {
    className: "gx-msg"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_MailNotification__WEBPACK_IMPORTED_MODULE_9__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-status-pos gx-d-block"
  }, __jsx("i", {
    className: "icon icon-chat-new"
  }), __jsx("span", {
    className: "gx-status gx-status-rtl gx-small gx-orange"
  })))), __jsx("li", {
    className: "gx-language"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: languageMenu(),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-flex-row gx-align-items-center"
  }, __jsx("i", {
    className: `flag flag-24 flag-${locale.icon}`
  })))), __jsx("li", {
    className: "gx-user-nav"
  }, __jsx(_components_UserInfo__WEBPACK_IMPORTED_MODULE_7__["default"], null)))))), __jsx("div", {
    className: "gx-header-horizontal-nav gx-header-horizontal-nav-curve gx-d-none gx-d-lg-block"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-nav-flex"
  }, __jsx(_HorizontalNav__WEBPACK_IMPORTED_MODULE_11__["default"], null), __jsx("ul", {
    className: "gx-header-notifications gx-ml-auto"
  }, __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-menu-lines"
  }))), __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-setting"
  }))), __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-apps-new"
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (BelowHeader);

/***/ }),

/***/ "./app/core/Topbar/HorizontalDark/index.js":
/*!*************************************************!*\
  !*** ./app/core/Topbar/HorizontalDark/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/CustomScrollbars */ "./util/CustomScrollbars.js");
/* harmony import */ var _languageData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../languageData */ "./app/core/Topbar/languageData.js");
/* harmony import */ var _components_SearchBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/SearchBox */ "./app/components/SearchBox/index.js");
/* harmony import */ var _components_UserInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/UserInfo */ "./app/components/UserInfo/index.js");
/* harmony import */ var _components_AppNotification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/AppNotification */ "./app/components/AppNotification/index.js");
/* harmony import */ var _components_MailNotification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/MailNotification */ "./app/components/MailNotification/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _HorizontalNav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../HorizontalNav */ "./app/core/Topbar/HorizontalNav.js");
/* harmony import */ var _redux_actions_Setting__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../redux/actions/Setting */ "./redux/actions/Setting.js");
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../util/IntlMessages */ "./util/IntlMessages.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














const {
  Header
} = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"];
const Option = antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option;

const menu = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
  onClick: handleMenuClick
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "1"
}, "Products"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "2"
}, "Apps"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "3"
}, "Blogs"));

function handleMenuClick(e) {
  antd__WEBPACK_IMPORTED_MODULE_1__["message"].info('Click on menu item.');
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

const HorizontalDark = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    0: searchText,
    1: setSearchText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const locale = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.locale);
  const navCollapsed = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.navCollapsed);

  const languageMenu = () => __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "gx-popover-lang-scroll"
  }, __jsx("ul", {
    className: "gx-sub-popover"
  }, _languageData__WEBPACK_IMPORTED_MODULE_5__["default"].map(language => __jsx("li", {
    className: "gx-media gx-pointer",
    key: JSON.stringify(language),
    onClick: e => dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_12__["switchLanguage"])(language))
  }, __jsx("i", {
    className: `flag flag-24 gx-mr-2 flag-${language.icon}`
  }), __jsx("span", {
    className: "gx-language-text"
  }, language.name)))));

  const updateSearchChatUser = evt => {
    setSearchText(evt.target.value);
  };

  return __jsx("div", {
    className: "gx-header-horizontal gx-header-horizontal-dark"
  }, __jsx("div", {
    className: "gx-header-horizontal-top"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-top-flex"
  }, __jsx("div", {
    className: "gx-header-horizontal-top-left"
  }, __jsx("i", {
    className: "icon icon-alert gx-mr-3"
  }), __jsx("p", {
    className: "gx-mb-0 gx-text-truncate"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "app.announced"
  }))), __jsx("ul", {
    className: "gx-login-list"
  }, __jsx("li", null, "Login"), __jsx("li", null, "Signup"))))), __jsx(Header, {
    className: "gx-header-horizontal-main"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-main-flex"
  }, __jsx("div", {
    className: "gx-d-block gx-d-lg-none gx-linebar gx-mr-xs-3"
  }, __jsx("i", {
    className: "gx-icon-btn icon icon-menu",
    onClick: () => {
      dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_12__["toggleCollapsedSideNav"])(!navCollapsed));
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/"
  }, __jsx("img", {
    alt: "",
    className: "gx-d-block gx-d-lg-none gx-pointer gx-mr-xs-3 gx-pt-xs-1 gx-w-logo",
    src: "/images/w-logo.png"
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/"
  }, __jsx("img", {
    alt: "",
    className: "gx-d-none gx-d-lg-block gx-pointer gx-mr-xs-5 gx-logo",
    src: "/images/logo.png"
  })), __jsx("div", {
    className: "gx-header-search gx-d-none gx-d-lg-flex"
  }, __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
    styleName: "gx-lt-icon-search-bar-lg",
    placeholder: "Search in app...",
    onChange: updateSearchChatUser,
    value: searchText
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    defaultValue: "lucy",
    style: {
      width: 120
    },
    onChange: handleChange
  }, __jsx(Option, {
    value: "jack"
  }, "Products"), __jsx(Option, {
    value: "lucy"
  }, "Apps"), __jsx(Option, {
    value: "Yiminghe"
  }, "Blogs"))), __jsx("ul", {
    className: "gx-header-notifications gx-ml-auto"
  }, __jsx("li", {
    className: "gx-notify gx-notify-search gx-d-inline-block gx-d-lg-none"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx("div", {
      className: "gx-d-flex"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
      overlay: menu
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], null, "Category ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "down"
    }))), __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
      styleName: "gx-popover-search-bar",
      placeholder: "Search in app...",
      onChange: updateSearchChatUser,
      value: searchText
    })),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-search-new"
  })))), __jsx("li", {
    className: "gx-notify"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_AppNotification__WEBPACK_IMPORTED_MODULE_8__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-notification"
  })))), __jsx("li", {
    className: "gx-msg"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_MailNotification__WEBPACK_IMPORTED_MODULE_9__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-status-pos gx-d-block"
  }, __jsx("i", {
    className: "icon icon-chat-new"
  }), __jsx("span", {
    className: "gx-status gx-status-rtl gx-small gx-orange"
  })))), __jsx("li", {
    className: "gx-language"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: languageMenu(),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-flex-row gx-align-items-center"
  }, __jsx("i", {
    className: `flag flag-24 flag-${locale.icon}`
  })))), __jsx("li", {
    className: "gx-user-nav"
  }, __jsx(_components_UserInfo__WEBPACK_IMPORTED_MODULE_7__["default"], null)))))), __jsx("div", {
    className: "gx-header-horizontal-nav gx-d-none gx-d-lg-block"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-nav-flex"
  }, __jsx(_HorizontalNav__WEBPACK_IMPORTED_MODULE_11__["default"], null), __jsx("ul", {
    className: "gx-header-notifications gx-ml-auto"
  }, __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-menu-lines"
  }))), __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-setting"
  }))), __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-apps-new"
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (HorizontalDark);

/***/ }),

/***/ "./app/core/Topbar/HorizontalDefault/index.js":
/*!****************************************************!*\
  !*** ./app/core/Topbar/HorizontalDefault/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/CustomScrollbars */ "./util/CustomScrollbars.js");
/* harmony import */ var _languageData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../languageData */ "./app/core/Topbar/languageData.js");
/* harmony import */ var _components_SearchBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/SearchBox */ "./app/components/SearchBox/index.js");
/* harmony import */ var _components_UserInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/UserInfo */ "./app/components/UserInfo/index.js");
/* harmony import */ var _components_AppNotification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/AppNotification */ "./app/components/AppNotification/index.js");
/* harmony import */ var _components_MailNotification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/MailNotification */ "./app/components/MailNotification/index.js");
/* harmony import */ var _HorizontalNav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../HorizontalNav */ "./app/core/Topbar/HorizontalNav.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _redux_actions_Setting__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../redux/actions/Setting */ "./redux/actions/Setting.js");
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../util/IntlMessages */ "./util/IntlMessages.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














const {
  Header
} = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"];
const Option = antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option;

const menu = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
  onClick: handleMenuClick
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "1"
}, "Products"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "2"
}, "Apps"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "3"
}, "Blogs"));

function handleMenuClick(e) {
  antd__WEBPACK_IMPORTED_MODULE_1__["message"].info('Click on menu item.');
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

const HorizontalDefault = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    0: searchText,
    1: setSearchText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const locale = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.locale);
  const navCollapsed = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.navCollapsed);

  const languageMenu = () => __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "gx-popover-lang-scroll"
  }, __jsx("ul", {
    className: "gx-sub-popover"
  }, _languageData__WEBPACK_IMPORTED_MODULE_5__["default"].map(language => __jsx("li", {
    className: "gx-media gx-pointer",
    key: JSON.stringify(language),
    onClick: e => dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_12__["switchLanguage"])(language))
  }, __jsx("i", {
    className: `flag flag-24 gx-mr-2 flag-${language.icon}`
  }), __jsx("span", {
    className: "gx-language-text"
  }, language.name)))));

  const updateSearchChatUser = evt => {
    setSearchText(evt.target.value);
  };

  return __jsx("div", {
    className: "gx-header-horizontal"
  }, __jsx("div", {
    className: "gx-header-horizontal-top"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-top-flex"
  }, __jsx("div", {
    className: "gx-header-horizontal-top-left"
  }, __jsx("i", {
    className: "icon icon-alert gx-mr-3"
  }), __jsx("p", {
    className: "gx-mb-0 gx-text-truncate"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "app.announced"
  }))), __jsx("ul", {
    className: "gx-login-list"
  }, __jsx("li", null, "Login"), __jsx("li", null, "Signup"))))), __jsx(Header, {
    className: "gx-header-horizontal-main"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-main-flex"
  }, __jsx("div", {
    className: "gx-d-block gx-d-lg-none gx-linebar gx-mr-xs-3"
  }, __jsx("i", {
    className: "gx-icon-btn icon icon-menu",
    onClick: () => {
      console.log("navCollapsed", !navCollapsed);
      dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_12__["toggleCollapsedSideNav"])(!navCollapsed));
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/"
  }, __jsx("img", {
    alt: "",
    className: "gx-d-block gx-d-lg-none gx-pointer gx-w-logo",
    src: "/images/w-logo.png"
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/"
  }, __jsx("img", {
    alt: "",
    className: "gx-d-none gx-d-lg-block gx-pointer gx-mr-xs-5 gx-logo",
    src: "/images/logo-white.png"
  })), __jsx("div", {
    className: "gx-header-search gx-d-none gx-d-lg-flex"
  }, __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
    styleName: "gx-lt-icon-search-bar-lg",
    placeholder: "Search in app...",
    onChange: updateSearchChatUser,
    value: searchText
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    defaultValue: "lucy",
    style: {
      width: 120
    },
    onChange: handleChange
  }, __jsx(Option, {
    value: "jack"
  }, "Products"), __jsx(Option, {
    value: "lucy"
  }, "Apps"), __jsx(Option, {
    value: "Yiminghe"
  }, "Blogs"))), __jsx("ul", {
    className: "gx-header-notifications gx-ml-auto"
  }, __jsx("li", {
    className: "gx-notify gx-notify-search gx-d-inline-block gx-d-lg-none"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx("div", {
      className: "gx-d-flex"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
      overlay: menu
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], null, "Category ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "down"
    }))), __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
      styleName: "gx-popover-search-bar",
      z: true,
      placeholder: "Search in app...",
      onChange: updateSearchChatUser,
      value: searchText
    })),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-search-new"
  })))), __jsx("li", {
    className: "gx-notify"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_AppNotification__WEBPACK_IMPORTED_MODULE_8__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-notification"
  })))), __jsx("li", {
    className: "gx-msg"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_MailNotification__WEBPACK_IMPORTED_MODULE_9__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-status-pos gx-d-block"
  }, __jsx("i", {
    className: "icon icon-chat-new"
  }), __jsx("span", {
    className: "gx-status gx-status-rtl gx-small gx-orange"
  })))), __jsx("li", {
    className: "gx-language"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: languageMenu(),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-flex-row gx-align-items-center"
  }, __jsx("i", {
    className: `flag flag-24 flag-${locale.icon}`
  })))), __jsx("li", {
    className: "gx-user-nav"
  }, __jsx(_components_UserInfo__WEBPACK_IMPORTED_MODULE_7__["default"], null)))))), __jsx("div", {
    className: "gx-header-horizontal-nav gx-header-horizontal-nav-curve gx-d-none gx-d-lg-block"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-nav-flex"
  }, __jsx(_HorizontalNav__WEBPACK_IMPORTED_MODULE_10__["default"], null), __jsx("ul", {
    className: "gx-header-notifications gx-ml-auto"
  }, __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-menu-lines"
  }))), __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-setting"
  }))), __jsx("li", null, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-apps-new"
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (HorizontalDefault);

/***/ }),

/***/ "./app/core/Topbar/HorizontalNav.js":
/*!******************************************!*\
  !*** ./app/core/Topbar/HorizontalNav.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/IntlMessages */ "./util/IntlMessages.js");
/* harmony import */ var _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants/ThemeSetting */ "./constants/ThemeSetting.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const SubMenu = antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].SubMenu;
const MenuItemGroup = antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].ItemGroup;

const HorizontalNav = () => {
  const navStyle = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(({
    settings
  }) => settings.navStyle);
  const pathname = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(({
    settings
  }) => settings.pathname);

  const getNavStyleSubMenuClass = navStyle => {
    switch (navStyle) {
      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_DEFAULT_HORIZONTAL"]:
        return "gx-menu-horizontal gx-submenu-popup-curve";

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_INSIDE_HEADER_HORIZONTAL"]:
        return "gx-menu-horizontal gx-submenu-popup-curve gx-inside-submenu-popup-curve";

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_BELOW_HEADER"]:
        return "gx-menu-horizontal gx-submenu-popup-curve gx-below-submenu-popup-curve";

      case _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_5__["NAV_STYLE_ABOVE_HEADER"]:
        return "gx-menu-horizontal gx-submenu-popup-curve gx-above-submenu-popup-curve";

      default:
        return "gx-menu-horizontal";
    }
  };

  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[1];
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    defaultOpenKeys: [defaultOpenKeys],
    selectedKeys: [selectedKeys],
    mode: "horizontal"
  }, __jsx(SubMenu, {
    popupClassName: getNavStyleSubMenuClass(navStyle),
    key: "main",
    title: __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.main"
    })
  }, __jsx(SubMenu, {
    popupClassName: "gx-menu-horizontal",
    key: "dashboard",
    title: __jsx("span", null, " ", __jsx("i", {
      className: "icon icon-dasbhoard"
    }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.dashboard"
    }))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "main/dashboard/crypto"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/main/dashboard/crypto"
  }, __jsx("i", {
    className: "icon icon-crypto"
  }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dashboard.crypto"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "main/dashboard/crm"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/main/dashboard/crm"
  }, __jsx("i", {
    className: "icon icon-crm"
  }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dashboard.crm"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "main/dashboard/listing"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/main/dashboard/listing"
  }, __jsx("i", {
    className: "icon icon-listing-dbrd"
  }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dashboard.listing"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "main/widgets"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/main/widgets"
  }, __jsx("i", {
    className: "icon icon-widgets"
  }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.widgets"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "main/metrics"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/main/metrics"
  }, __jsx("i", {
    className: "icon icon-apps"
  }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.metrics"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "main/algolia"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/main/algolia"
  }, __jsx("i", {
    className: "icon icon-shopping-cart "
  }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.algolia"
  })))), __jsx(SubMenu, {
    popupClassName: getNavStyleSubMenuClass(navStyle),
    key: "in-built-apps",
    title: __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.inBuiltApp"
    })
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "in-built-apps/mail"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/in-built-apps/mail"
  }, __jsx("i", {
    className: "icon icon-email"
  }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.mailApp"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "in-built-apps/todo"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/in-built-apps/todo"
  }, __jsx("i", {
    className: "icon icon-check-square-o"
  }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.todoApp"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "in-built-apps/contacts"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/in-built-apps/contacts"
  }, __jsx("i", {
    className: "icon icon-contacts"
  }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.contactsApp"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "in-built-apps/chat"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/in-built-apps/chat"
  }, __jsx("i", {
    className: "icon icon-chat-bubble -flex-column-reverse"
  }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.chatApp"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "social-apps/profile"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/social-apps/profile"
  }, __jsx("i", {
    className: "icon icon-profile2"
  }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.extensions.profile"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "social-apps/wall"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/social-apps/wall"
  }, __jsx("i", {
    className: "icon icon-avatar -flex-column-reverse"
  }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.wall"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "in-built-apps/notes"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/in-built-apps/notes"
  }, __jsx("i", {
    className: "icon icon-copy"
  }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.notes"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "in-built-apps/firebase-crud"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/in-built-apps/firebase-crud"
  }, __jsx("i", {
    className: "icon icon-icon"
  }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.crud"
  })))), __jsx(SubMenu, {
    popupClassName: getNavStyleSubMenuClass(navStyle),
    key: "components",
    title: __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.components"
    })
  }, __jsx(SubMenu, {
    popupClassName: "gx-menu-horizontal",
    key: "general",
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-all-contacts"
    }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.components.general"
    }))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/general/button"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/general/button"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.general.button"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/general/icon"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/general/icon"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.general.icon"
  })))), __jsx(SubMenu, {
    popupClassName: "gx-menu-horizontal",
    key: "navigation",
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-navigation"
    }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.components.navigation"
    }))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/navigation/affix"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/navigation/affix"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.navigation.affix"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/navigation/breadcrumb"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/navigation/breadcrumb"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.navigation.breadcrumb"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/navigation/dropdown"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/navigation/dropdown"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.navigation.dropdown"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/navigation/menu"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/navigation/menu"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.navigation.menu"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/navigation/pagination"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/navigation/pagination"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.navigation.pagination"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/navigation/steps"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/navigation/steps"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.navigation.steps"
  })))), __jsx(SubMenu, {
    popupClassName: "gx-menu-horizontal",
    key: "dataEntry",
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-data-entry"
    }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.components.dataEntry"
    }))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataEntry/autoComplete"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataEntry/autoComplete"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataEntry.autoComplete"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataEntry/checkbox"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataEntry/checkbox"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataEntry.checkbox"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataEntry/cascader"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataEntry/cascader"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataEntry.cascader"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataEntry/datePicker"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataEntry/datePicker"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataEntry.datePicker"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataEntry/form"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataEntry/form"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataEntry.form"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataEntry/inputNumber"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataEntry/inputNumber"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataEntry.inputNumber"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataEntry/input"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataEntry/input"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataEntry.input"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataEntry/mention"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataEntry/mention"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataEntry.mention"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataEntry/rate"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataEntry/rate"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataEntry.rate"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataEntry/radio"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataEntry/radio"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataEntry.radio"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataEntry/switch"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataEntry/switch"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataEntry.switch"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataEntry/slider"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataEntry/slider"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataEntry.slider"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataEntry/select"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataEntry/select"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataEntry.select"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataEntry/treeSelect"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataEntry/treeSelect"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataEntry.treeSelect"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataEntry/transfer"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataEntry/transfer"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataEntry.transfer"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataEntry/timePicker"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataEntry/timePicker"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataEntry.timePicker"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataEntry/upload"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataEntry/upload"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataEntry.upload"
  })))), __jsx(SubMenu, {
    popupClassName: "gx-menu-horizontal",
    key: "dataDisplay",
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-data-display"
    }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.components.dataDisplay"
    }))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataDisplay/avatar"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataDisplay/avatar"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataDisplay.avatar"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataDisplay/badge"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataDisplay/badge"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataDisplay.badge"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataDisplay/collapse"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataDisplay/collapse"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataDisplay.collapse"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataDisplay/carousel"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataDisplay/carousel"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataDisplay.carousel"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataDisplay/card"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataDisplay/card"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataDisplay.card"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataDisplay/calendar"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataDisplay/calendar"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataDisplay.calender"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataDisplay/popover"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataDisplay/popover"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataDisplay.popover"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataDisplay/tree"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataDisplay/tree"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataDisplay.tree"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataDisplay/tooltip"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataDisplay/tooltip"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataDisplay.toolTips"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataDisplay/timeline"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataDisplay/timeline"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataDisplay.timeLine"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataDisplay/tag"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataDisplay/tag"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataDisplay.tag"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/dataDisplay/tabs"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/dataDisplay/tabs"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.dataDisplay.tabs"
  })))), __jsx(SubMenu, {
    popupClassName: "gx-menu-horizontal",
    key: "feedBack",
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-feedback"
    }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.components.feedBack"
    }))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/feedBack/alert"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/feedBack/alert"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.feedBack.alert"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/feedBack/modal"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/feedBack/modal"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.feedBack.modal"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/feedBack/message"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/feedBack/message"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.feedBack.message"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/feedBack/notification"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/feedBack/notification"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.feedBack.notification"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/feedBack/progress"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/feedBack/progress"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.feedBack.progress"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/feedBack/popconfirm"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/feedBack/popconfirm"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.feedBack.popConfirm"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/feedBack/spin"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/feedBack/spin"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.feedBack.spin"
  })))), __jsx(SubMenu, {
    popupClassName: "gx-menu-horizontal",
    key: "others",
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-inbox"
    }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.components.other"
    }))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/others/anchor"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/others/anchor"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.other.anchor"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/others/backtop"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/others/backtop"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.other.backTop"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/others/divider"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/others/divider"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.other.divider"
  })))), __jsx(SubMenu, {
    popupClassName: "gx-menu-horizontal",
    key: "table",
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-table"
    }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.dataDisplay.table"
    }))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/table/basic"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/table/basic"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.view.basicTable"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "components/table/data"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/components/table/data"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.view.dataTable"
  }))))), __jsx(SubMenu, {
    popupClassName: getNavStyleSubMenuClass(navStyle),
    key: "extraComponents",
    title: __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.extraComponents"
    })
  }, __jsx(SubMenu, {
    popupClassName: "gx-menu-horizontal",
    key: "editor",
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-editor"
    }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.editors"
    }))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extra-components/editor/ck"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extra-components/editor/ck"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.editors.CKEditor"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extra-components/editor/wysiswyg"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extra-components/editor/wysiswyg"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.editors.WYSISWYGEditor"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extra-components/color-picker"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extra-components/color-picker"
  }, __jsx("i", {
    className: "icon icon-picker"
  }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.pickers.colorPickers"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extra-components/dnd"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extra-components/dnd"
  }, __jsx("i", {
    className: "icon icon-drag-and-drop"
  }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.extensions.dragNDrop"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extra-components/sweet-alert"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extra-components/sweet-alert"
  }, __jsx("i", {
    className: "icon icon-sweet-alert"
  }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.extensions.sweetAlert"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extra-components/notification"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extra-components/notification"
  }, __jsx("i", {
    className: "icon icon-notification"
  }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.extensions.notification"
  }))), __jsx(SubMenu, {
    popupClassName: "gx-menu-horizontal",
    key: "time-line",
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-timeline"
    }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.timeLine"
    }))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extra-components/time-line/default"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extra-components/time-line/default"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.timeLine.default"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extra-components/time-line/default-with-icon"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extra-components/time-line/default-with-icon"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.timeLine.defaultwithIcons"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extra-components/time-line/left-align"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extra-components/time-line/left-align"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.timeLine.leftAligned"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extra-components/shuffle"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extra-components/shuffle"
  }, __jsx("i", {
    className: "icon icon-shuffle"
  }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.extensions.shuffle"
  })))), __jsx(SubMenu, {
    popupClassName: getNavStyleSubMenuClass(navStyle),
    key: "extensions",
    title: __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.extensions"
    })
  }, __jsx(MenuItemGroup, {
    key: "map",
    title: __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.map"
    })
  }, __jsx(SubMenu, {
    popupClassName: "gx-menu-horizontal",
    key: "google",
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-map-google"
    }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.google.map"
    }))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/google/simple"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/google/simple"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.simple"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/google/styled"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/google/styled"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.styled"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/google/geo-location"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/google/geo-location"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.geoLocation"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/google/directions"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/google/directions"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.mapDirection"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/google/overlay"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/google/overlay"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.overlay"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/google/kml"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/google/kml"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.kmLayer"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/google/popup-info"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/google/popup-info"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.popupInfo"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/google/traffic"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/google/traffic"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.trafficLayer"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/google/street-view"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/google/street-view"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.streetView"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/google/event"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/google/event"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.eventListener"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/google/drawing"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/google/drawing"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.mapDrawing"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/google/clustering"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/google/clustering"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.mapClustering"
  })))), __jsx(SubMenu, {
    popupClassName: "gx-menu-horizontal",
    key: "ammap",
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-amchart"
    }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.ammap"
    }))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/ammap/animations-lines"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/ammap/animations-lines"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.animations.lines"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/ammap/curved-lines"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/ammap/curved-lines"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.curved.lines"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/ammap/zooming-countries"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/ammap/zooming-countries"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.zooming.countries"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/ammap/patterns"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/ammap/patterns"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.patterns"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/ammap/capitals-map"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/ammap/capitals-map"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.capitals.map"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/ammap/map-markers"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/ammap/map-markers"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.markers"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/ammap/flight-routes"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/ammap/flight-routes"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.flight.routes"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/ammap/choropleth"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/ammap/choropleth"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.choropleth"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/ammap/grouped-countries"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/ammap/grouped-countries"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.grouped.countries"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/ammap/bubbles"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/ammap/bubbles"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.bubbles"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/ammap/drill-down"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/ammap/drill-down"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.drill.down"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/ammap/multiple-areas"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/ammap/multiple-areas"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.multiple.areas"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/map/ammap/weather"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/map/ammap/weather"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.map.weather"
  }))))), __jsx(MenuItemGroup, {
    key: "chart",
    title: __jsx("span", null, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.chart"
    }))
  }, __jsx(SubMenu, {
    popupClassName: "gx-menu-horizontal",
    key: "rechart",
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-chart-area-new"
    }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.components.rechart"
    }))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/chart/recharts/area"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/chart/recharts/area"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.chart.area"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/chart/recharts/bar"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/chart/recharts/bar"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.chart.bar"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/chart/recharts/composed"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/chart/recharts/composed"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.chart.composed"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/chart/recharts/line"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/chart/recharts/line"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.chart.line"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/chart/recharts/pie"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/chart/recharts/pie"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.chart.pie"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/chart/recharts/radar"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/chart/recharts/radar"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.chart.radar"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/chart/recharts/radial"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/chart/recharts/radial"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.chart.radial"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/chart/recharts/scatter"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/chart/recharts/scatter"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.chart.scatter"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/chart/recharts/treemap"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/chart/recharts/treemap"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.chart.tree"
  })))), __jsx(SubMenu, {
    popupClassName: "gx-menu-horizontal",
    key: "amchart",
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-amchart"
    }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.components.amchart"
    }))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/chart/amchart/area"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/chart/amchart/area"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.chart.area"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/chart/amchart/bar"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/chart/amchart/bar"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.chart.bar"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/chart/amchart/line"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/chart/amchart/line"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.chart.line"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/chart/amchart/pie"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/chart/amchart/pie"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.chart.pie"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/chart/amchart/composed"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/chart/amchart/composed"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.chart.composed"
  }))))), __jsx(SubMenu, {
    popupClassName: "gx-menu-horizontal",
    key: "calendar",
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-calendar"
    }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.calendar"
    }))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/calendar/basic"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/calendar/basic"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.calendar.basic"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/calendar/cultures"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/calendar/cultures"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.calendar.cultures"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/calendar/popup"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/calendar/popup"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.calendar.popup"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/calendar/rendering"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/calendar/rendering"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.calendar.rendering"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/calendar/selectable"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/calendar/selectable"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.calendar.selectable"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "extensions/calendar/timeslots"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/extensions/calendar/timeslots"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.calendar.timeslots"
  }))))), __jsx(SubMenu, {
    popupClassName: getNavStyleSubMenuClass(navStyle),
    key: "custom-views",
    title: __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.customViews"
    })
  }, __jsx(SubMenu, {
    popupClassName: "gx-menu-horizontal",
    key: "user-auth",
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-auth-screen"
    }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "app.userAuth"
    }))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "custom-views/user-auth/sign-in"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/custom-views/user-auth/sign-in"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "app.userAuth.signIn"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "custom-views/user-auth/forgot-password"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/custom-views/user-auth/forgot-password"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "app.userAuth.forgotPassword"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "custom-views/user-auth/sign-up"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/custom-views/user-auth/sign-up"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "app.userAuth.signUp"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "custom-views/user-auth/lock-screen"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/custom-views/user-auth/lock-screen"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "app.userAuth.lockScreen"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "custom-views/user-auth/reset-password"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/custom-views/user-auth/reset-password"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "app.userAuth.resetPassword"
  })))), __jsx(SubMenu, {
    popupClassName: "gx-menu-horizontal",
    key: "list-type",
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-all-contacts"
    }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.listType"
    }))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "custom-views/list-type/simple-list"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/custom-views/list-type/simple-list"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.listType.plainListView"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "custom-views/list-type/strip-list"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/custom-views/list-type/strip-list"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.listType.withDivider"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "custom-views/list-type/card-list"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/custom-views/list-type/card-list"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.listType.cardListView"
  })))), __jsx(SubMenu, {
    popupClassName: "gx-menu-horizontal",
    key: "eCommerce",
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-shopping-cart"
    }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.eCommerce"
    }))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "custom-views/eCommerce/product-grid"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/custom-views/eCommerce/product-grid"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.eCommerce.productGrid"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "custom-views/eCommerce/product-list"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/custom-views/eCommerce/product-list"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.eCommerce.productList"
  })))), __jsx(SubMenu, {
    popupClassName: "gx-menu-horizontal",
    key: "errorPages",
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-error"
    }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.extraPages"
    }))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "custom-views/error-pages/error-404"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/custom-views/error-pages/error-404"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.extraPages.404"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "custom-views/error-pages/error-500"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/custom-views/error-pages/error-500"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.extraPages.500"
  })))), __jsx(SubMenu, {
    popupClassName: "gx-menu-horizontal",
    key: "extra-elements",
    title: __jsx("span", null, __jsx("i", {
      className: "icon icon-ellipse-h"
    }), __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "sidebar.listType.extras"
    }))
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "custom-views/extras/pricing-table"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/custom-views/extras/pricing-table"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.extraElements.pricingTable"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "custom-views/extras/callouts"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/custom-views/extras/callouts"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.extraElements.callouts"
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "custom-views/extras/testimonials"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/custom-views/extras/testimonials"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "sidebar.extraElements.testimonials"
  }))))));
};

HorizontalNav.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (HorizontalNav);

/***/ }),

/***/ "./app/core/Topbar/InsideHeader/index.js":
/*!***********************************************!*\
  !*** ./app/core/Topbar/InsideHeader/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../util/CustomScrollbars */ "./util/CustomScrollbars.js");
/* harmony import */ var _languageData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../languageData */ "./app/core/Topbar/languageData.js");
/* harmony import */ var _components_SearchBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/SearchBox */ "./app/components/SearchBox/index.js");
/* harmony import */ var _components_UserInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/UserInfo */ "./app/components/UserInfo/index.js");
/* harmony import */ var _components_AppNotification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/AppNotification */ "./app/components/AppNotification/index.js");
/* harmony import */ var _components_MailNotification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/MailNotification */ "./app/components/MailNotification/index.js");
/* harmony import */ var _HorizontalNav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../HorizontalNav */ "./app/core/Topbar/HorizontalNav.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _redux_actions_Setting__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../redux/actions/Setting */ "./redux/actions/Setting.js");
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../util/IntlMessages */ "./util/IntlMessages.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














const {
  Header
} = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"];

const menu = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
  onClick: handleMenuClick
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "1"
}, "Products"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "2"
}, "Apps"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
  key: "3"
}, "Blogs"));

function handleMenuClick(e) {
  antd__WEBPACK_IMPORTED_MODULE_1__["message"].info('Click on menu item.');
}

const InsideHeader = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    0: searchText,
    1: setSearchText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const locale = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.locale);
  const navCollapsed = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(({
    settings
  }) => settings.navCollapsed);

  const languageMenu = () => __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "gx-popover-lang-scroll"
  }, __jsx("ul", {
    className: "gx-sub-popover"
  }, _languageData__WEBPACK_IMPORTED_MODULE_5__["default"].map(language => __jsx("li", {
    className: "gx-media gx-pointer",
    key: JSON.stringify(language),
    onClick: e => dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_12__["switchLanguage"])(language))
  }, __jsx("i", {
    className: `flag flag-24 gx-mr-2 flag-${language.icon}`
  }), __jsx("span", {
    className: "gx-language-text"
  }, language.name)))));

  const updateSearchChatUser = evt => {
    setSearchText(evt.target.value);
  };

  return __jsx("div", {
    className: "gx-header-horizontal gx-header-horizontal-dark gx-inside-header-horizontal"
  }, __jsx("div", {
    className: "gx-header-horizontal-top"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-top-flex"
  }, __jsx("div", {
    className: "gx-header-horizontal-top-left"
  }, __jsx("i", {
    className: "icon icon-alert gx-mr-3"
  }), __jsx("p", {
    className: "gx-mb-0 gx-text-truncate"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "app.announced"
  }))), __jsx("ul", {
    className: "gx-login-list"
  }, __jsx("li", null, "Login"), __jsx("li", null, "Signup"))))), __jsx(Header, {
    className: "gx-header-horizontal-main"
  }, __jsx("div", {
    className: "gx-container"
  }, __jsx("div", {
    className: "gx-header-horizontal-main-flex"
  }, __jsx("div", {
    className: "gx-d-block gx-d-lg-none gx-linebar gx-mr-xs-3 6e"
  }, __jsx("i", {
    className: "gx-icon-btn icon icon-menu",
    onClick: () => {
      dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_12__["toggleCollapsedSideNav"])(!navCollapsed));
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/"
  }, __jsx("img", {
    alt: "",
    className: "gx-d-block gx-d-lg-none gx-pointer gx-mr-xs-3 gx-pt-xs-1 gx-w-logo",
    src: "/images/w-logo.png"
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/"
  }, __jsx("img", {
    alt: "",
    className: "gx-d-none gx-d-lg-block gx-pointer gx-mr-xs-5 gx-logo",
    src: "/images/logo.png"
  })), __jsx("div", {
    className: "gx-header-horizontal-nav gx-header-horizontal-nav-curve gx-d-none gx-d-lg-block"
  }, __jsx(_HorizontalNav__WEBPACK_IMPORTED_MODULE_10__["default"], null)), __jsx("ul", {
    className: "gx-header-notifications gx-ml-auto"
  }, __jsx("li", {
    className: "gx-notify gx-notify-search"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx("div", {
      className: "gx-d-flex"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
      overlay: menu
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], null, "Category ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "down"
    }))), __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
      styleName: "gx-popover-search-bar",
      placeholder: "Search in app...",
      onChange: updateSearchChatUser,
      value: searchText
    })),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-search-new"
  })))), __jsx("li", {
    className: "gx-notify"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_AppNotification__WEBPACK_IMPORTED_MODULE_8__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-notification"
  })))), __jsx("li", {
    className: "gx-msg"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_MailNotification__WEBPACK_IMPORTED_MODULE_9__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-status-pos gx-d-block"
  }, __jsx("i", {
    className: "icon icon-chat-new"
  }), __jsx("span", {
    className: "gx-status gx-status-rtl gx-small gx-orange"
  })))), __jsx("li", {
    className: "gx-language"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: languageMenu(),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-flex-row gx-align-items-center"
  }, __jsx("i", {
    className: `flag flag-24 flag-${locale.icon}`
  })))), __jsx("li", {
    className: "gx-user-nav"
  }, __jsx(_components_UserInfo__WEBPACK_IMPORTED_MODULE_7__["default"], null)))))));
};

const mapStateToProps = ({
  settings
}) => {
  const {
    locale,
    navCollapsed
  } = settings;
  return {
    locale,
    navCollapsed
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, {
  toggleCollapsedSideNav: _redux_actions_Setting__WEBPACK_IMPORTED_MODULE_12__["toggleCollapsedSideNav"],
  switchLanguage: _redux_actions_Setting__WEBPACK_IMPORTED_MODULE_12__["switchLanguage"]
})(InsideHeader));

/***/ }),

/***/ "./app/core/Topbar/NoHeaderNotification/index.js":
/*!*******************************************************!*\
  !*** ./app/core/Topbar/NoHeaderNotification/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions_Setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../redux/actions/Setting */ "./redux/actions/Setting.js");
/* harmony import */ var _util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../util/IntlMessages */ "./util/IntlMessages.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const NoHeaderNotification = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const navCollapsed = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(({
    settings
  }) => settings.navCollapsed);
  return __jsx("div", {
    className: "gx-no-header-horizontal"
  }, __jsx("div", {
    className: "gx-d-block gx-d-lg-none gx-linebar gx-mr-xs-3"
  }, __jsx("i", {
    className: "gx-icon-btn icon icon-menu",
    onClick: () => {
      dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_2__["toggleCollapsedSideNav"])(!navCollapsed));
    }
  })), __jsx("div", {
    className: "gx-no-header-horizontal-top"
  }, __jsx("div", {
    className: "gx-no-header-horizontal-top-center"
  }, __jsx("i", {
    className: "icon icon-alert gx-mr-3"
  }), __jsx("p", {
    className: "gx-mb-0 gx-text-truncate"
  }, __jsx(_util_IntlMessages__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "app.announced"
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (NoHeaderNotification);

/***/ }),

/***/ "./app/core/Topbar/index.js":
/*!**********************************!*\
  !*** ./app/core/Topbar/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/CustomScrollbars */ "./util/CustomScrollbars.js");
/* harmony import */ var _languageData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./languageData */ "./app/core/Topbar/languageData.js");
/* harmony import */ var _redux_actions_Setting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../redux/actions/Setting */ "./redux/actions/Setting.js");
/* harmony import */ var _components_SearchBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/SearchBox */ "./app/components/SearchBox/index.js");
/* harmony import */ var _components_UserInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/UserInfo */ "./app/components/UserInfo/index.js");
/* harmony import */ var _components_AppNotification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/AppNotification */ "./app/components/AppNotification/index.js");
/* harmony import */ var _components_MailNotification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/MailNotification */ "./app/components/MailNotification/index.js");
/* harmony import */ var _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../constants/ThemeSetting */ "./constants/ThemeSetting.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const {
  Header
} = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"];

const Topbar = () => {
  const {
    locale,
    width,
    navCollapsed,
    navStyle
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useSelector"])(({
    settings
  }) => settings);
  const {
    searchText,
    setSearchText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useDispatch"])();

  const languageMenu = () => __jsx(_util_CustomScrollbars__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "gx-popover-lang-scroll"
  }, __jsx("ul", {
    className: "gx-sub-popover"
  }, _languageData__WEBPACK_IMPORTED_MODULE_4__["default"].map(language => __jsx("li", {
    className: "gx-media gx-pointer",
    key: JSON.stringify(language),
    onClick: e => dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_5__["switchLanguage"])(language))
  }, __jsx("i", {
    className: `flag flag-24 gx-mr-2 flag-${language.icon}`
  }), __jsx("span", {
    className: "gx-language-text"
  }, language.name)))));

  const updateSearchChatUser = evt => {
    setSearchText(evt.target.value);
  };

  return __jsx(Header, null, navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_10__["NAV_STYLE_DRAWER"] || (navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_10__["NAV_STYLE_FIXED"] || navStyle === _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_10__["NAV_STYLE_MINI_SIDEBAR"]) && width < _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_10__["TAB_SIZE"] ? __jsx("div", {
    className: "gx-linebar gx-mr-3"
  }, __jsx("i", {
    className: "gx-icon-btn icon icon-menu",
    onClick: () => {
      dispatch(Object(_redux_actions_Setting__WEBPACK_IMPORTED_MODULE_5__["toggleCollapsedSideNav"])(!navCollapsed));
    }
  })) : null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, __jsx("img", {
    alt: "",
    className: "gx-d-block gx-d-lg-none gx-pointer",
    src: "/images/w-logo.png"
  })), __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
    styleName: "gx-d-none gx-d-lg-block gx-lt-icon-search-bar-lg",
    placeholder: "Search in app...",
    onChange: updateSearchChatUser,
    value: searchText
  }), __jsx("ul", {
    className: "gx-header-notifications gx-ml-auto"
  }, __jsx("li", {
    className: "gx-notify gx-notify-search gx-d-inline-block gx-d-lg-none"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_SearchBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
      styleName: "gx-popover-search-bar",
      placeholder: "Search in app...",
      onChange: updateSearchChatUser,
      value: searchText
    }),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-search-new"
  })))), width >= _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_10__["TAB_SIZE"] ? null : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("li", {
    className: "gx-notify"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_AppNotification__WEBPACK_IMPORTED_MODULE_8__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-d-block"
  }, __jsx("i", {
    className: "icon icon-notification"
  })))), __jsx("li", {
    className: "gx-msg"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: __jsx(_components_MailNotification__WEBPACK_IMPORTED_MODULE_9__["default"], null),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-status-pos gx-d-block"
  }, __jsx("i", {
    className: "icon icon-chat-new"
  }), __jsx("span", {
    className: "gx-status gx-status-rtl gx-small gx-orange"
  }))))), __jsx("li", {
    className: "gx-language"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "gx-popover-horizantal",
    placement: "bottomRight",
    content: languageMenu(),
    trigger: "click"
  }, __jsx("span", {
    className: "gx-pointer gx-flex-row gx-align-items-center"
  }, __jsx("i", {
    className: `flag flag-24 flag-${locale.icon}`
  }), __jsx("span", {
    className: "gx-pl-2 gx-language-name"
  }, locale.name), __jsx("i", {
    className: "icon icon-chevron-down gx-pl-2"
  })))), width >= _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_10__["TAB_SIZE"] ? null : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("li", {
    className: "gx-user-nav"
  }, __jsx(_components_UserInfo__WEBPACK_IMPORTED_MODULE_7__["default"], null)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Topbar);

/***/ }),

/***/ "./app/core/Topbar/languageData.js":
/*!*****************************************!*\
  !*** ./app/core/Topbar/languageData.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const languageData = [{
  languageId: 'english',
  locale: 'en',
  name: 'English',
  icon: 'us'
}, {
  languageId: 'russian',
  // Unique ID for language
  locale: 'ru',
  // locale name to link with the previously named locale
  name: 'Russian',
  // Display name of the language
  Icon: 'ru' // To choose the flag of the country

}, {
  languageId: 'chinese',
  locale: 'zh',
  name: 'Chinese',
  icon: 'cn'
}, {
  languageId: 'spanish',
  locale: 'es',
  name: 'Spanish',
  icon: 'es'
}, {
  languageId: 'french',
  locale: 'fr',
  name: 'French',
  icon: 'fr'
}, {
  languageId: 'italian',
  locale: 'it',
  name: 'Italian',
  icon: 'it'
}, {
  languageId: 'saudi-arabia',
  locale: 'ar',
  name: 'Arabic',
  icon: 'sa'
}];
/* harmony default export */ __webpack_exports__["default"] = (languageData);

/***/ }),

/***/ "./app/hoc/securedPage/index.js":
/*!**************************************!*\
  !*** ./app/hoc/securedPage/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _withData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withData */ "./app/hoc/securedPage/withData.js");
/* harmony import */ var _withLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withLayout */ "./app/hoc/securedPage/withLayout.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(_withData__WEBPACK_IMPORTED_MODULE_1__["default"], _withLayout__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./app/hoc/securedPage/withData.js":
/*!*****************************************!*\
  !*** ./app/hoc/securedPage/withData.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/session */ "./util/session.js");
/* harmony import */ var _util_redirect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/redirect */ "./util/redirect.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (ComposedComponent => class WithData extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  static async getInitialProps(context) {
    const isLoggedIn = Object(_util_session__WEBPACK_IMPORTED_MODULE_1__["getCookie"])('user_id', context.req);

    if (!isLoggedIn) {
      Object(_util_redirect__WEBPACK_IMPORTED_MODULE_2__["default"])(context, '/signin');
    }

    return {
      isLoggedIn
    };
  }

  render() {
    return __jsx(ComposedComponent, this.props);
  }

});

/***/ }),

/***/ "./app/hoc/securedPage/withLayout.js":
/*!*******************************************!*\
  !*** ./app/hoc/securedPage/withLayout.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Layout */ "./app/core/Layout/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (ComposedComponent => props => __jsx(_core_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, __jsx(ComposedComponent, props)));

/***/ }),

/***/ "./constants/ActionTypes.js":
/*!**********************************!*\
  !*** ./constants/ActionTypes.js ***!
  \**********************************/
/*! exports provided: TOGGLE_COLLAPSED_NAV, WINDOW_WIDTH, SWITCH_LANGUAGE, FETCH_START, FETCH_SUCCESS, FETCH_ERROR, SHOW_MESSAGE, HIDE_MESSAGE, ON_SHOW_LOADER, ON_HIDE_LOADER, SIGNUP_USER, SIGNUP_USER_SUCCESS, SIGNIN_GOOGLE_USER, SIGNIN_GOOGLE_USER_SUCCESS, SIGNIN_FACEBOOK_USER, SIGNIN_FACEBOOK_USER_SUCCESS, SIGNIN_TWITTER_USER, SIGNIN_TWITTER_USER_SUCCESS, SIGNIN_GITHUB_USER, SIGNIN_GITHUB_USER_SUCCESS, SIGNIN_USER, SIGNIN_USER_SUCCESS, SIGNOUT_USER, SIGNOUT_USER_SUCCESS, INIT_URL, GET_STICKY, NOTES_UPDATE, FETCH_ALL_NOTES_SUCCESS, UPDATE_ALL_NOTES_SUCCESS, GET_All_CONTACT_SUCCESS, ON_ADD_CONTACT_SUCCESS, UPDATE_CONTACT_SUCCESS, DELETE_CONTACT_SUCCESS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_COLLAPSED_NAV", function() { return TOGGLE_COLLAPSED_NAV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW_WIDTH", function() { return WINDOW_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWITCH_LANGUAGE", function() { return SWITCH_LANGUAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_START", function() { return FETCH_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SUCCESS", function() { return FETCH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ERROR", function() { return FETCH_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_MESSAGE", function() { return SHOW_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIDE_MESSAGE", function() { return HIDE_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_SHOW_LOADER", function() { return ON_SHOW_LOADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_HIDE_LOADER", function() { return ON_HIDE_LOADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_USER", function() { return SIGNUP_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_USER_SUCCESS", function() { return SIGNUP_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_GOOGLE_USER", function() { return SIGNIN_GOOGLE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_GOOGLE_USER_SUCCESS", function() { return SIGNIN_GOOGLE_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_FACEBOOK_USER", function() { return SIGNIN_FACEBOOK_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_FACEBOOK_USER_SUCCESS", function() { return SIGNIN_FACEBOOK_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_TWITTER_USER", function() { return SIGNIN_TWITTER_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_TWITTER_USER_SUCCESS", function() { return SIGNIN_TWITTER_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_GITHUB_USER", function() { return SIGNIN_GITHUB_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_GITHUB_USER_SUCCESS", function() { return SIGNIN_GITHUB_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_USER", function() { return SIGNIN_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_USER_SUCCESS", function() { return SIGNIN_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNOUT_USER", function() { return SIGNOUT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNOUT_USER_SUCCESS", function() { return SIGNOUT_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INIT_URL", function() { return INIT_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_STICKY", function() { return GET_STICKY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTES_UPDATE", function() { return NOTES_UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ALL_NOTES_SUCCESS", function() { return FETCH_ALL_NOTES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_ALL_NOTES_SUCCESS", function() { return UPDATE_ALL_NOTES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_All_CONTACT_SUCCESS", function() { return GET_All_CONTACT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON_ADD_CONTACT_SUCCESS", function() { return ON_ADD_CONTACT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_CONTACT_SUCCESS", function() { return UPDATE_CONTACT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_CONTACT_SUCCESS", function() { return DELETE_CONTACT_SUCCESS; });
// Customizer const
const TOGGLE_COLLAPSED_NAV = 'TOGGLE_COLLAPSE_MENU';
const WINDOW_WIDTH = 'WINDOW-WIDTH';
const SWITCH_LANGUAGE = 'SWITCH-LANGUAGE'; //Contact Module const

const FETCH_START = 'fetch_start';
const FETCH_SUCCESS = 'fetch_success';
const FETCH_ERROR = 'fetch_error';
const SHOW_MESSAGE = 'SHOW_MESSAGE';
const HIDE_MESSAGE = 'HIDE_MESSAGE';
const ON_SHOW_LOADER = 'ON_SHOW_LOADER';
const ON_HIDE_LOADER = 'ON_HIDE_LOADER'; //Auth const

const SIGNUP_USER = 'SIGNUP_USER';
const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
const SIGNIN_GOOGLE_USER = 'SIGNIN_GOOGLE_USER';
const SIGNIN_GOOGLE_USER_SUCCESS = 'SIGNIN_GOOGLE_USER_SUCCESS';
const SIGNIN_FACEBOOK_USER = 'SIGNIN_FACEBOOK_USER';
const SIGNIN_FACEBOOK_USER_SUCCESS = 'SIGNIN_FACEBOOK_USER_SUCCESS';
const SIGNIN_TWITTER_USER = 'SIGNIN_TWITTER_USER';
const SIGNIN_TWITTER_USER_SUCCESS = 'SIGNIN_TWITTER_USER_SUCCESS';
const SIGNIN_GITHUB_USER = 'SIGNIN_GITHUB_USER';
const SIGNIN_GITHUB_USER_SUCCESS = 'signin_github_user_success';
const SIGNIN_USER = 'SIGNIN_USER';
const SIGNIN_USER_SUCCESS = 'SIGNIN_USER_SUCCESS';
const SIGNOUT_USER = 'SIGNOUT_USER';
const SIGNOUT_USER_SUCCESS = 'SIGNOUT_USER_SUCCESS';
const INIT_URL = 'INIT_URL'; //Sticky

const GET_STICKY = 'GET_STICKY';
const NOTES_UPDATE = 'NOTES_UPDATE';
const FETCH_ALL_NOTES_SUCCESS = 'FETCH_ALL_NOTES_SUCCESS';
const UPDATE_ALL_NOTES_SUCCESS = 'UPDATE_ALL_NOTES_SUCCESS'; //Contact

const GET_All_CONTACT_SUCCESS = 'GET_All_CONTACT_SUCCESS';
const ON_ADD_CONTACT_SUCCESS = 'ON_ADD_CONTACT_SUCCESS';
const UPDATE_CONTACT_SUCCESS = 'UPDATE_CONTACT_SUCCESS';
const DELETE_CONTACT_SUCCESS = 'DELETE_CONTACT_SUCCESS';

/***/ }),

/***/ "./constants/ThemeSetting.js":
/*!***********************************!*\
  !*** ./constants/ThemeSetting.js ***!
  \***********************************/
/*! exports provided: THEME_TYPE, THEME_TYPE_LITE, THEME_TYPE_DARK, THEME_TYPE_SEMI_DARK, THEME_COLOR_SELECTION, THEME_COLOR_SELECTION_PRESET, THEME_COLOR_SELECTION_CUSTOMIZE, HORIZONTAL_NAVIGATION, HORIZONTAL_MENU_POSITION, ABOVE_THE_HEADER, INSIDE_THE_HEADER, BELOW_THE_HEADER, VERTICAL_NAVIGATION, NAV_STYLE_MINI, LAYOUT_TYPE, SET_PATH_NAME, LAYOUT_TYPE_FRAMED, LAYOUT_TYPE_BOXED, LAYOUT_TYPE_FULL, NAV_STYLE, NAV_STYLE_FIXED, NAV_STYLE_MINI_SIDEBAR, NAV_STYLE_DRAWER, NAV_STYLE_NO_HEADER_MINI_SIDEBAR, NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR, NAV_STYLE_DEFAULT_HORIZONTAL, NAV_STYLE_DARK_HORIZONTAL, NAV_STYLE_INSIDE_HEADER_HORIZONTAL, NAV_STYLE_BELOW_HEADER, NAV_STYLE_ABOVE_HEADER, LIGHT_PURPLE, LIGHT_PURPLE_SEC, LIGHT_PURPLE_NAV_DARK_BG, LIGHT_PURPLE_DARK_TEXT_COLOR, RED, RED_SEC, RED_NAV_DARK_BG, RED_DARK_TEXT_COLOR, BLUE, BLUE_SEC, BLUE_NAV_DARK_BG, BLUE_DARK_TEXT_COLOR, DARK_BLUE, DARK_BLUE_SEC, DARK_BLUE_NAV_DARK_BG, DARK_BLUE_DARK_TEXT_COLOR, ORANGE, ORANGE_SEC, ORANGE_NAV_DARK_BG, ORANGE_DARK_TEXT_COLOR, LIGHT_BLUE, LIGHT_BLUE_SEC, LIGHT_BLUE_NAV_DARK_BG, LIGHT_BLUE_DARK_TEXT_COLOR, DEEP_ORANGE, DEEP_ORANGE_SEC, DEEP_ORANGE_NAV_DARK_BG, DEEP_ORANGE_DARK_TEXT_COLOR, LIGHT_PURPLE_1, LIGHT_PURPLE_1_SEC, LIGHT_PURPLE_1_NAV_DARK_BG, LIGHT_PURPLE_1_DARK_TEXT_COLOR, LIGHT_PURPLE_2, LIGHT_PURPLE_2_SEC, LIGHT_PURPLE_2_NAV_DARK_BG, LIGHT_PURPLE_2_DARK_TEXT_COLOR, TAB_SIZE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME_TYPE", function() { return THEME_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME_TYPE_LITE", function() { return THEME_TYPE_LITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME_TYPE_DARK", function() { return THEME_TYPE_DARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME_TYPE_SEMI_DARK", function() { return THEME_TYPE_SEMI_DARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME_COLOR_SELECTION", function() { return THEME_COLOR_SELECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME_COLOR_SELECTION_PRESET", function() { return THEME_COLOR_SELECTION_PRESET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME_COLOR_SELECTION_CUSTOMIZE", function() { return THEME_COLOR_SELECTION_CUSTOMIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HORIZONTAL_NAVIGATION", function() { return HORIZONTAL_NAVIGATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HORIZONTAL_MENU_POSITION", function() { return HORIZONTAL_MENU_POSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ABOVE_THE_HEADER", function() { return ABOVE_THE_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INSIDE_THE_HEADER", function() { return INSIDE_THE_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BELOW_THE_HEADER", function() { return BELOW_THE_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERTICAL_NAVIGATION", function() { return VERTICAL_NAVIGATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE_MINI", function() { return NAV_STYLE_MINI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_TYPE", function() { return LAYOUT_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PATH_NAME", function() { return SET_PATH_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_TYPE_FRAMED", function() { return LAYOUT_TYPE_FRAMED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_TYPE_BOXED", function() { return LAYOUT_TYPE_BOXED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_TYPE_FULL", function() { return LAYOUT_TYPE_FULL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE", function() { return NAV_STYLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE_FIXED", function() { return NAV_STYLE_FIXED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE_MINI_SIDEBAR", function() { return NAV_STYLE_MINI_SIDEBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE_DRAWER", function() { return NAV_STYLE_DRAWER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE_NO_HEADER_MINI_SIDEBAR", function() { return NAV_STYLE_NO_HEADER_MINI_SIDEBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR", function() { return NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE_DEFAULT_HORIZONTAL", function() { return NAV_STYLE_DEFAULT_HORIZONTAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE_DARK_HORIZONTAL", function() { return NAV_STYLE_DARK_HORIZONTAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE_INSIDE_HEADER_HORIZONTAL", function() { return NAV_STYLE_INSIDE_HEADER_HORIZONTAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE_BELOW_HEADER", function() { return NAV_STYLE_BELOW_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_STYLE_ABOVE_HEADER", function() { return NAV_STYLE_ABOVE_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE", function() { return LIGHT_PURPLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE_SEC", function() { return LIGHT_PURPLE_SEC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE_NAV_DARK_BG", function() { return LIGHT_PURPLE_NAV_DARK_BG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE_DARK_TEXT_COLOR", function() { return LIGHT_PURPLE_DARK_TEXT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RED", function() { return RED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RED_SEC", function() { return RED_SEC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RED_NAV_DARK_BG", function() { return RED_NAV_DARK_BG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RED_DARK_TEXT_COLOR", function() { return RED_DARK_TEXT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLUE", function() { return BLUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLUE_SEC", function() { return BLUE_SEC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLUE_NAV_DARK_BG", function() { return BLUE_NAV_DARK_BG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLUE_DARK_TEXT_COLOR", function() { return BLUE_DARK_TEXT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DARK_BLUE", function() { return DARK_BLUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DARK_BLUE_SEC", function() { return DARK_BLUE_SEC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DARK_BLUE_NAV_DARK_BG", function() { return DARK_BLUE_NAV_DARK_BG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DARK_BLUE_DARK_TEXT_COLOR", function() { return DARK_BLUE_DARK_TEXT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORANGE", function() { return ORANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORANGE_SEC", function() { return ORANGE_SEC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORANGE_NAV_DARK_BG", function() { return ORANGE_NAV_DARK_BG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORANGE_DARK_TEXT_COLOR", function() { return ORANGE_DARK_TEXT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_BLUE", function() { return LIGHT_BLUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_BLUE_SEC", function() { return LIGHT_BLUE_SEC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_BLUE_NAV_DARK_BG", function() { return LIGHT_BLUE_NAV_DARK_BG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_BLUE_DARK_TEXT_COLOR", function() { return LIGHT_BLUE_DARK_TEXT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEEP_ORANGE", function() { return DEEP_ORANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEEP_ORANGE_SEC", function() { return DEEP_ORANGE_SEC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEEP_ORANGE_NAV_DARK_BG", function() { return DEEP_ORANGE_NAV_DARK_BG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEEP_ORANGE_DARK_TEXT_COLOR", function() { return DEEP_ORANGE_DARK_TEXT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE_1", function() { return LIGHT_PURPLE_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE_1_SEC", function() { return LIGHT_PURPLE_1_SEC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE_1_NAV_DARK_BG", function() { return LIGHT_PURPLE_1_NAV_DARK_BG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE_1_DARK_TEXT_COLOR", function() { return LIGHT_PURPLE_1_DARK_TEXT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE_2", function() { return LIGHT_PURPLE_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE_2_SEC", function() { return LIGHT_PURPLE_2_SEC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE_2_NAV_DARK_BG", function() { return LIGHT_PURPLE_2_NAV_DARK_BG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE_2_DARK_TEXT_COLOR", function() { return LIGHT_PURPLE_2_DARK_TEXT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB_SIZE", function() { return TAB_SIZE; });
// Customizer const
const THEME_TYPE = 'THEME_TYPE';
const THEME_TYPE_LITE = 'THEME_TYPE_LITE';
const THEME_TYPE_DARK = 'THEME_TYPE_DARK';
const THEME_TYPE_SEMI_DARK = 'THEME_TYPE_SEMI_DARK';
const THEME_COLOR_SELECTION = 'THEME_COLOR_SELECTION';
const THEME_COLOR_SELECTION_PRESET = 'THEME_COLOR_SELECTION_PRESET';
const THEME_COLOR_SELECTION_CUSTOMIZE = 'THEME_COLOR_SELECTION_CUSTOMIZE';
const HORIZONTAL_NAVIGATION = 'HORIZONTAL_NAVIGATION';
const HORIZONTAL_MENU_POSITION = 'HORIZONTAL_MENU_POSITION';
const ABOVE_THE_HEADER = 'ABOVE_THE_HEADER';
const INSIDE_THE_HEADER = 'INSIDE_THE_HEADER';
const BELOW_THE_HEADER = 'BELOW_THE_HEADER';
const VERTICAL_NAVIGATION = 'VERTICAL_NAVIGATION';
const NAV_STYLE_MINI = 'NAV_STYLE_MINI';
const LAYOUT_TYPE = 'LAYOUT_TYPE';
const SET_PATH_NAME = 'SET_PATH_NAME';
const LAYOUT_TYPE_FRAMED = 'LAYOUT_TYPE_FRAMED';
const LAYOUT_TYPE_BOXED = 'LAYOUT_TYPE_BOXED';
const LAYOUT_TYPE_FULL = 'LAYOUT_TYPE_FULL';
const NAV_STYLE = 'NAV_STYLE';
const NAV_STYLE_FIXED = 'NAV_STYLE_FIXED';
const NAV_STYLE_MINI_SIDEBAR = 'NAV_STYLE_MINI_SIDEBAR';
const NAV_STYLE_DRAWER = 'NAV_STYLE_DRAWER';
const NAV_STYLE_NO_HEADER_MINI_SIDEBAR = 'NAV_STYLE_NO_HEADER_MINI_SIDEBAR';
const NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR = 'NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR';
const NAV_STYLE_DEFAULT_HORIZONTAL = 'NAV_STYLE_DEFAULT_HORIZONTAL';
const NAV_STYLE_DARK_HORIZONTAL = 'NAV_STYLE_DARK_HORIZONTAL';
const NAV_STYLE_INSIDE_HEADER_HORIZONTAL = 'NAV_STYLE_INSIDE_HEADER_HORIZONTAL';
const NAV_STYLE_BELOW_HEADER = 'NAV_STYLE_BELOW_HEADER';
const NAV_STYLE_ABOVE_HEADER = 'NAV_STYLE_ABOVE_HEADER';
const LIGHT_PURPLE = '#8A2BE2';
const LIGHT_PURPLE_SEC = '#00B378';
const LIGHT_PURPLE_NAV_DARK_BG = '#32394F';
const LIGHT_PURPLE_DARK_TEXT_COLOR = '#9799AC';
const RED = '#FF2B7A';
const RED_SEC = '#00D9C9';
const RED_NAV_DARK_BG = '#3C3766';
const RED_DARK_TEXT_COLOR = '#878BAB';
const BLUE = '#3DA4E6';
const BLUE_SEC = '#FCB53B';
const BLUE_NAV_DARK_BG = '#444342';
const BLUE_DARK_TEXT_COLOR = '#AAA59A';
const DARK_BLUE = '#0469B9';
const DARK_BLUE_SEC = '#17BDE5';
const DARK_BLUE_NAV_DARK_BG = '#086880';
const DARK_BLUE_DARK_TEXT_COLOR = '#9DDAE9';
const ORANGE = '#F18805';
const ORANGE_SEC = '#F1D065';
const ORANGE_NAV_DARK_BG = '#272932';
const ORANGE_DARK_TEXT_COLOR = '#ABA895';
const LIGHT_BLUE = '#6A95FF';
const LIGHT_BLUE_SEC = '#59DCFF';
const LIGHT_BLUE_NAV_DARK_BG = '#1B2642';
const LIGHT_BLUE_DARK_TEXT_COLOR = '#92A2C8';
const DEEP_ORANGE = '#F87060';
const DEEP_ORANGE_SEC = '#70A288';
const DEEP_ORANGE_NAV_DARK_BG = '#08415C';
const DEEP_ORANGE_DARK_TEXT_COLOR = '#97B8C7';
const LIGHT_PURPLE_1 = '#A172E7';
const LIGHT_PURPLE_1_SEC = '#E14594';
const LIGHT_PURPLE_1_NAV_DARK_BG = '#182952';
const LIGHT_PURPLE_1_DARK_TEXT_COLOR = '#8288B4';
const LIGHT_PURPLE_2 = '#956FE7';
const LIGHT_PURPLE_2_SEC = '#64D7D6';
const LIGHT_PURPLE_2_NAV_DARK_BG = '#284C7C';
const LIGHT_PURPLE_2_DARK_TEXT_COLOR = '#5782BB';
const TAB_SIZE = 992;

/***/ }),

/***/ "./firebaseConfig/index.js":
/*!*********************************!*\
  !*** ./firebaseConfig/index.js ***!
  \*********************************/
/*! exports provided: database, auth, googleAuthProvider, githubAuthProvider, facebookAuthProvider, twitterAuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "database", function() { return database; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleAuthProvider", function() { return googleAuthProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "githubAuthProvider", function() { return githubAuthProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "facebookAuthProvider", function() { return facebookAuthProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "twitterAuthProvider", function() { return twitterAuthProvider; });
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);
 // Initialize Firebase

const config = {
  apiKey: "AIzaSyAz-GPfA-hN74oFh3XvXsF9vQrlE5xpU10",
  authDomain: "wieldy-4f59c.firebaseapp.com",
  databaseURL: "https://wieldy-4f59c.firebaseio.com",
  projectId: "wieldy-4f59c",
  storageBucket: "wieldy-4f59c.appspot.com",
  messagingSenderId: "81949884261"
};

if (!firebase__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  firebase__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);
}

const auth = firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth();
const googleAuthProvider = new firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth.TwitterAuthProvider();
const database = firebase__WEBPACK_IMPORTED_MODULE_0___default.a.database();


/***/ }),

/***/ "./lngProvider/entries/ar_SA.js":
/*!**************************************!*\
  !*** ./lngProvider/entries/ar_SA.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_locale_provider_en_US__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/locale-provider/en_US */ "antd/lib/locale-provider/en_US");
/* harmony import */ var antd_lib_locale_provider_en_US__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_locale_provider_en_US__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locales_ar_SA_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locales/ar_SA.json */ "./lngProvider/locales/ar_SA.json");
var _locales_ar_SA_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../locales/ar_SA.json */ "./lngProvider/locales/ar_SA.json", 1);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const saLang = {
  messages: _objectSpread({}, _locales_ar_SA_json__WEBPACK_IMPORTED_MODULE_1__),
  antd: antd_lib_locale_provider_en_US__WEBPACK_IMPORTED_MODULE_0___default.a,
  locale: 'ar'
};
/* harmony default export */ __webpack_exports__["default"] = (saLang);

/***/ }),

/***/ "./lngProvider/entries/en-US.js":
/*!**************************************!*\
  !*** ./lngProvider/entries/en-US.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_locale_provider_en_US__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/locale-provider/en_US */ "antd/lib/locale-provider/en_US");
/* harmony import */ var antd_lib_locale_provider_en_US__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_locale_provider_en_US__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locales_en_US_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locales/en_US.json */ "./lngProvider/locales/en_US.json");
var _locales_en_US_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../locales/en_US.json */ "./lngProvider/locales/en_US.json", 1);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const EnLang = {
  messages: _objectSpread({}, _locales_en_US_json__WEBPACK_IMPORTED_MODULE_1__),
  antd: antd_lib_locale_provider_en_US__WEBPACK_IMPORTED_MODULE_0___default.a,
  locale: 'en-US'
};
/* harmony default export */ __webpack_exports__["default"] = (EnLang);

/***/ }),

/***/ "./lngProvider/entries/es_ES.js":
/*!**************************************!*\
  !*** ./lngProvider/entries/es_ES.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_locale_provider_ca_ES__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/locale-provider/ca_ES */ "antd/lib/locale-provider/ca_ES");
/* harmony import */ var antd_lib_locale_provider_ca_ES__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_locale_provider_ca_ES__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locales_es_ES_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locales/es_ES.json */ "./lngProvider/locales/es_ES.json");
var _locales_es_ES_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../locales/es_ES.json */ "./lngProvider/locales/es_ES.json", 1);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const saLang = {
  messages: _objectSpread({}, _locales_es_ES_json__WEBPACK_IMPORTED_MODULE_1__),
  antd: antd_lib_locale_provider_ca_ES__WEBPACK_IMPORTED_MODULE_0___default.a,
  locale: 'es'
};
/* harmony default export */ __webpack_exports__["default"] = (saLang);

/***/ }),

/***/ "./lngProvider/entries/fr_FR.js":
/*!**************************************!*\
  !*** ./lngProvider/entries/fr_FR.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_locale_provider_fr_FR__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/locale-provider/fr_FR */ "antd/lib/locale-provider/fr_FR");
/* harmony import */ var antd_lib_locale_provider_fr_FR__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_locale_provider_fr_FR__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locales_fr_FR_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locales/fr_FR.json */ "./lngProvider/locales/fr_FR.json");
var _locales_fr_FR_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../locales/fr_FR.json */ "./lngProvider/locales/fr_FR.json", 1);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const saLang = {
  messages: _objectSpread({}, _locales_fr_FR_json__WEBPACK_IMPORTED_MODULE_1__),
  antd: antd_lib_locale_provider_fr_FR__WEBPACK_IMPORTED_MODULE_0___default.a,
  locale: 'fr-FR'
};
/* harmony default export */ __webpack_exports__["default"] = (saLang);

/***/ }),

/***/ "./lngProvider/entries/it_IT.js":
/*!**************************************!*\
  !*** ./lngProvider/entries/it_IT.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_locale_provider_it_IT__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/locale-provider/it_IT */ "antd/lib/locale-provider/it_IT");
/* harmony import */ var antd_lib_locale_provider_it_IT__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_locale_provider_it_IT__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locales_it_IT_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locales/it_IT.json */ "./lngProvider/locales/it_IT.json");
var _locales_it_IT_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../locales/it_IT.json */ "./lngProvider/locales/it_IT.json", 1);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const saLang = {
  messages: _objectSpread({}, _locales_it_IT_json__WEBPACK_IMPORTED_MODULE_1__),
  antd: antd_lib_locale_provider_it_IT__WEBPACK_IMPORTED_MODULE_0___default.a,
  locale: 'it-IT'
};
/* harmony default export */ __webpack_exports__["default"] = (saLang);

/***/ }),

/***/ "./lngProvider/entries/ru_RU.js":
/*!**************************************!*\
  !*** ./lngProvider/entries/ru_RU.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_locale_provider_ru_RU__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/locale-provider/ru_RU */ "antd/lib/locale-provider/ru_RU");
/* harmony import */ var antd_lib_locale_provider_ru_RU__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_locale_provider_ru_RU__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locales_ru_RU_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locales/ru_RU.json */ "./lngProvider/locales/ru_RU.json");
var _locales_ru_RU_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../locales/ru_RU.json */ "./lngProvider/locales/ru_RU.json", 1);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const RuLang = {
  messages: _objectSpread({}, _locales_ru_RU_json__WEBPACK_IMPORTED_MODULE_1__),
  antd: antd_lib_locale_provider_ru_RU__WEBPACK_IMPORTED_MODULE_0___default.a,
  locale: 'ru-RU'
};
/* harmony default export */ __webpack_exports__["default"] = (RuLang);

/***/ }),

/***/ "./lngProvider/entries/zh-Hans-CN.js":
/*!*******************************************!*\
  !*** ./lngProvider/entries/zh-Hans-CN.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _locales_zh_Hans_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../locales/zh-Hans.json */ "./lngProvider/locales/zh-Hans.json");
var _locales_zh_Hans_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../locales/zh-Hans.json */ "./lngProvider/locales/zh-Hans.json", 1);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const ZhLan = {
  messages: _objectSpread({}, _locales_zh_Hans_json__WEBPACK_IMPORTED_MODULE_0__),
  antd: null,
  locale: 'zh-Hans-CN'
};
/* harmony default export */ __webpack_exports__["default"] = (ZhLan);

/***/ }),

/***/ "./lngProvider/index.js":
/*!******************************!*\
  !*** ./lngProvider/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entries_en_US__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entries/en-US */ "./lngProvider/entries/en-US.js");
/* harmony import */ var _entries_zh_Hans_CN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entries/zh-Hans-CN */ "./lngProvider/entries/zh-Hans-CN.js");
/* harmony import */ var _entries_ar_SA__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entries/ar_SA */ "./lngProvider/entries/ar_SA.js");
/* harmony import */ var _entries_it_IT__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entries/it_IT */ "./lngProvider/entries/it_IT.js");
/* harmony import */ var _entries_es_ES__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entries/es_ES */ "./lngProvider/entries/es_ES.js");
/* harmony import */ var _entries_fr_FR__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entries/fr_FR */ "./lngProvider/entries/fr_FR.js");
/* harmony import */ var _entries_ru_RU__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entries/ru_RU */ "./lngProvider/entries/ru_RU.js");







const AppLocale = {
  en: _entries_en_US__WEBPACK_IMPORTED_MODULE_0__["default"],
  zh: _entries_zh_Hans_CN__WEBPACK_IMPORTED_MODULE_1__["default"],
  ar: _entries_ar_SA__WEBPACK_IMPORTED_MODULE_2__["default"],
  it: _entries_it_IT__WEBPACK_IMPORTED_MODULE_3__["default"],
  es: _entries_es_ES__WEBPACK_IMPORTED_MODULE_4__["default"],
  fr: _entries_fr_FR__WEBPACK_IMPORTED_MODULE_5__["default"],
  ru: _entries_ru_RU__WEBPACK_IMPORTED_MODULE_6__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (AppLocale);

/***/ }),

/***/ "./lngProvider/locales/ar_SA.json":
/*!****************************************!*\
  !*** ./lngProvider/locales/ar_SA.json ***!
  \****************************************/
/*! exports provided: app.announced, sidebar.main, sidebar.dashboard, sidebar.layouts, sidebar.dashboard.crm, sidebar.components, sidebar.components.general, sidebar.general.button, sidebar.general.icon, sidebar.components.navigation, sidebar.navigation.affix, sidebar.navigation.breadcrumb, sidebar.navigation.dropdown, sidebar.navigation.menu, sidebar.navigation.pagination, sidebar.navigation.steps, sidebar.components.dataEntry, sidebar.dataEntry.autoComplete, sidebar.dataEntry.checkbox, sidebar.dataEntry.cascader, sidebar.dataEntry.datePicker, sidebar.dataEntry.form, sidebar.dataEntry.inputNumber, sidebar.dataEntry.input, sidebar.dataEntry.mention, sidebar.dataEntry.rate, sidebar.dataEntry.radio, sidebar.dataEntry.switch, sidebar.dataEntry.slider, sidebar.dataEntry.select, sidebar.dataEntry.treeSelect, sidebar.dataEntry.transfer, sidebar.dataEntry.timePicker, sidebar.dataEntry.upload, sidebar.components.dataDisplay, sidebar.dataDisplay.avatar, sidebar.dataDisplay.badge, sidebar.dataDisplay.collapse, sidebar.dataDisplay.carousel, sidebar.dataDisplay.card, sidebar.dataDisplay.calender, sidebar.dataDisplay.list, sidebar.dataDisplay.popover, sidebar.dataDisplay.tree, sidebar.dataDisplay.toolTips, sidebar.dataDisplay.timeLine, sidebar.dataDisplay.tag, sidebar.dataDisplay.tabs, sidebar.dataDisplay.table, sidebar.components.feedBack, sidebar.feedBack.alert, sidebar.feedBack.modal, sidebar.feedBack.message, sidebar.feedBack.notification, sidebar.feedBack.progress, sidebar.feedBack.popConfirm, sidebar.feedBack.spin, sidebar.components.other, sidebar.other.anchor, sidebar.other.backTop, sidebar.other.divider, sidebar.widgets, sidebar.metrics, sidebar.view, sidebar.view.basicTable, sidebar.view.dataTable, sidebar.extensions, sidebar.extensions.editior, sidebar.extensions.dragNDrop, sidebar.extensions.sweetAlert, sidebar.extensions.notification, sidebar.extensions.reactDates, sidebar.extensions.dropZone, sidebar.googleMap, sidebar.charts, sidebar.apps, sidebar.mailApp, sidebar.todoApp, sidebar.contactsApp, sidebar.chatApp, sidebar.pickers, sidebar.notes, sidebar.crud, sidebar.pickers.dateTimePickers, sidebar.pickers.colorPickers, sidebar.chart, sidebar.chart.line, sidebar.chart.bar, sidebar.chart.area, sidebar.chart.composed, sidebar.chart.scatter, sidebar.chart.pie, sidebar.chart.radial, sidebar.chart.radar, sidebar.chart.tree, sidebar.map, sidebar.map.simple, sidebar.map.styled, sidebar.map.geoLocation, sidebar.map.mapDirection, sidebar.map.overlay, sidebar.map.kmLayer, sidebar.map.popupInfo, sidebar.map.trafficLayer, sidebar.map.streetView, sidebar.map.eventListener, sidebar.map.mapDrawing, sidebar.map.mapClustering, sidebar.modules, sidebar.calendar, sidebar.calendar.basic, sidebar.calendar.cultures, sidebar.calendar.dnd, sidebar.calendar.popup, sidebar.calendar.rendering, sidebar.calendar.selectable, sidebar.calendar.timeslots, sidebar.mail.title, sidebar.mail.compose, sidebar.mail.mailbox, sidebar.mail.filters, sidebar.mail.labels, sidebar.eCommerce, sidebar.eCommerce.productList, sidebar.eCommerce.productGrid, sidebar.extraComponents, sidebar.inBuiltApp, sidebar.extraElements.callouts, sidebar.extraElements.testimonials, sidebar.timeLine, sidebar.timeLine.default, sidebar.timeLine.defaultwithIcons, sidebar.timeLine.leftAligned, sidebar.extraElements.pricingTable, sidebar.customViews, sidebar.listType, sidebar.listType.extras, sidebar.listType.plainListView, sidebar.listType.withDivider, sidebar.listType.cardListView, sidebar.extraPages.404, sidebar.extraPages.500, sidebar.extraPages, app.userAuth, app.userAuth.login, app.userAuth.signIn, app.userAuth.send, app.userAuth.bySigning, app.userAuth.or, app.userAuth.forgotPassword, app.userAuth.forgot, app.userAuth.signUp, app.userAuth.getAccount, app.userAuth.resetPassword, app.userAuth.reset, app.userAuth.lockScreen, app.userAuth.unLock, appModule.enterPasswordUnlock, appModule.enterPasswordReset, appModule.loginSuccessfully, appModule.password, appModule.email, appModule.name, appModule.phone, appModule.designation, appModule.regsiter, appModule.regsiterNow, appModule.hvAccount, appModule.createAccount, appModule.termAndCondition, appModule.iAccept, todo, todo.addTask, todo.all, todo.filters, todo.labels, chat.selectUserChat, chat.selectContactChat, chat.chatUser, chat.contacts, chat.searchStartNewChat, chat.typeMessage, chat.status, contact.saveContact, contact.addContact, contact.searchContact, mail.mailbox, mail.compose, mail.filters, mail.labels, mail.title, eCommerce.buyNow, eCommerce.addToCart, eCommerce.readMore, callouts.viewRange, callouts.basic, extraElements.callout, testimonials.basic, testimonials.classic, testimonials.standard, extraElements.testimonials, button.modify, button.delete, pricingTable.basic, pricingTable.circle, pricingTable.classic, pricingTable.dark, pricingTable.personal, pricingTable.easyTranslation, pricingTable.awesomeGoogleFonts, pricingTable.hotelBookingSystem, pricingTable.emailComposeInterface, pricingTable.locationFinderApp, pricingTable.buyNow, pricingTable.business, pricingTable.professional, button.yes, button.no, extraPages.404Msg, extraPages.500Msg, extraPages.goHome, extension.sweetAlerts, sweetAlerts.basic, sweetAlerts.description, sweetAlerts.success, sweetAlerts.warning, sweetAlerts.custom, sweetAlerts.htmlTag, sweetAlerts.prompt, sweetAlerts.itsBlue, sweetAlerts.passwordPrompt, sweetAlerts.customStyle, sweetAlerts.itPretty, sweetAlerts.btnClicked, sweetAlerts.youWillFind, sweetAlerts.youWillNotAble, sweetAlerts.hereIsaMessage, sweetAlerts.goodJob, sweetAlerts.yesDeleteIt, sweetAlerts.areYouSure, sweetAlerts.doYouLikeThumb, sweetAlerts.anInput, sweetAlerts.writeSomethingInteresting, sweetAlerts.writeSomething, sweetAlerts.youMustEnterPassword, sweetAlerts.enterPassword, extension.notification, notification.infoMsg, notification.successMessage, notification.warningMessage, notification.closeAfter3000ms, notification.errorMessage, notification.titleHere, notification.clickMe, notification.info, notification.success, notification.warning, notification.error, sidebar.editors, sidebar.editors.CKEditor, sidebar.editors.WYSISWYGEditor, picker.color.alpha, picker.color.hue, picker.color.circle, picker.color.compact, picker.color.block, picker.color.chrome, picker.color.github, picker.color.twitter, picker.color.withRedux, picker.color.sketch, picker.color.material, picker.color.slider, picker.color.basic, picker.color.basicToggle, picker.color.custom, picker.color.customPointer, picker.color.photoshop, picker.color.swatches, picker.color.basicPositioning, sidebar.documents, sidebar.documents.changelog, sidebar.documents.installation, sidebar.dashboard.listing, sidebar.dashboard.crypto, sidebar.algolia, sidebar.components.rechart, sidebar.components.amchart, sidebar.google.map, sidebar.ammap, sidebar.map.animations.lines, sidebar.map.curved.lines, sidebar.map.zooming.countries, sidebar.map.patterns, sidebar.map.capitals.map, sidebar.map.markers, sidebar.map.flight.routes, sidebar.map.choropleth, sidebar.map.grouped.countries, sidebar.map.bubbles, sidebar.map.drill.down, sidebar.map.multiple.areas, sidebar.map.weather, sidebar.extensions.shuffle, sidebar.extensions.profile, sidebar.social, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"app.announced\":\"سيتم إصدار نسخة جديدة في 25 ديسمبر. ترّقب!\",\"sidebar.main\":\"الأساسية\",\"sidebar.dashboard\":\"لوحة القيادة\",\"sidebar.layouts\":\"تخطيطات\",\"sidebar.dashboard.crm\":\"إدارة علاقات العملاء\",\"sidebar.components\":\"المكونات\",\"sidebar.components.general\":\"جنرال لواء\",\"sidebar.general.button\":\"زر\",\"sidebar.general.icon\":\"أيقونة\",\"sidebar.components.navigation\":\"التنقل\",\"sidebar.navigation.affix\":\"لصق\",\"sidebar.navigation.breadcrumb\":\"التفصيلي\",\"sidebar.navigation.dropdown\":\"اسقاط\",\"sidebar.navigation.menu\":\"قائمة طعام\",\"sidebar.navigation.pagination\":\"ترقيم الصفحات\",\"sidebar.navigation.steps\":\"خطوات\",\"sidebar.components.dataEntry\":\"ادخال بيانات\",\"sidebar.dataEntry.autoComplete\":\"الإكمال التلقائي\",\"sidebar.dataEntry.checkbox\":\"مربع\",\"sidebar.dataEntry.cascader\":\"Cascader\",\"sidebar.dataEntry.datePicker\":\"منتقي التاريخ\",\"sidebar.dataEntry.form\":\"شكل\",\"sidebar.dataEntry.inputNumber\":\"InputNumber\",\"sidebar.dataEntry.input\":\"إدخال\",\"sidebar.dataEntry.mention\":\"أشير\",\"sidebar.dataEntry.rate\":\"معدل\",\"sidebar.dataEntry.radio\":\"راديو\",\"sidebar.dataEntry.switch\":\"مفتاح كهربائي\",\"sidebar.dataEntry.slider\":\"المنزلق\",\"sidebar.dataEntry.select\":\"تحديد\",\"sidebar.dataEntry.treeSelect\":\"TreeSelect\",\"sidebar.dataEntry.transfer\":\"نقل\",\"sidebar.dataEntry.timePicker\":\"منتقي الوقت\",\"sidebar.dataEntry.upload\":\"تحميل\",\"sidebar.components.dataDisplay\":\"عرض البيانات\",\"sidebar.dataDisplay.avatar\":\"الصورة الرمزية\",\"sidebar.dataDisplay.badge\":\"شارة\",\"sidebar.dataDisplay.collapse\":\"انهدام\",\"sidebar.dataDisplay.carousel\":\"دائري\",\"sidebar.dataDisplay.card\":\"بطاقة\",\"sidebar.dataDisplay.calender\":\"التقويم\",\"sidebar.dataDisplay.list\":\"قائمة\",\"sidebar.dataDisplay.popover\":\"قائمة\",\"sidebar.dataDisplay.tree\":\"شجرة\",\"sidebar.dataDisplay.toolTips\":\"تلميحات\",\"sidebar.dataDisplay.timeLine\":\"الجدول الزمني\",\"sidebar.dataDisplay.tag\":\"بطاقة\",\"sidebar.dataDisplay.tabs\":\"علامات التبويب\",\"sidebar.dataDisplay.table\":\"الطاولة\",\"sidebar.components.feedBack\":\"ردود الفعل\",\"sidebar.feedBack.alert\":\"محزر\",\"sidebar.feedBack.modal\":\"شكلي\",\"sidebar.feedBack.message\":\"رسالة\",\"sidebar.feedBack.notification\":\"إعلام\",\"sidebar.feedBack.progress\":\"تقدم\",\"sidebar.feedBack.popConfirm\":\"البوب تأكيد\",\"sidebar.feedBack.spin\":\"غزل\",\"sidebar.components.other\":\"آخر\",\"sidebar.other.anchor\":\"مذيع الأخبار\",\"sidebar.other.backTop\":\"عودة أعلى\",\"sidebar.other.divider\":\"مقسم\",\"sidebar.widgets\":\"الحاجيات\",\"sidebar.metrics\":\"قياس\",\"sidebar.view\":\"رأي\",\"sidebar.view.basicTable\":\"الجدول الأساسي\",\"sidebar.view.dataTable\":\"جدول البيانات\",\"sidebar.extensions\":\"ملحقات\",\"sidebar.extensions.editior\":\"محرر\",\"sidebar.extensions.dragNDrop\":\"السحب والإسقاط\",\"sidebar.extensions.sweetAlert\":\"الحلو تنبيه\",\"sidebar.extensions.notification\":\"إعلام\",\"sidebar.extensions.reactDates\":\"رد فعل التواريخ\",\"sidebar.extensions.dropZone\":\"إسقاط المنطقة\",\"sidebar.googleMap\":\"خرائط جوجل\",\"sidebar.charts\":\"الرسوم البيانية\",\"sidebar.apps\":\"التطبيقات\",\"sidebar.mailApp\":\"تطبيق البريد\",\"sidebar.todoApp\":\"تودو التطبيق\",\"sidebar.contactsApp\":\"اتصالات التطبيق\",\"sidebar.chatApp\":\"تطبيق الدردشة\",\"sidebar.pickers\":\"جامعي\",\"sidebar.notes\":\"ملاحظات\",\"sidebar.crud\":\"Firebase CRUD\",\"sidebar.pickers.dateTimePickers\":\"التاريخ والوقت\",\"sidebar.pickers.colorPickers\":\"قارورة اللون\",\"sidebar.chart\":\"خريطة\",\"sidebar.chart.line\":\"خط الرسم البياني\",\"sidebar.chart.bar\":\"شريط الرسم البياني\",\"sidebar.chart.area\":\"مخطط المساحة\",\"sidebar.chart.composed\":\"الرسم البياني\",\"sidebar.chart.scatter\":\"مخطط مبعثر\",\"sidebar.chart.pie\":\"مخطط دائري\",\"sidebar.chart.radial\":\"مخطط نصف قطري\",\"sidebar.chart.radar\":\"مخطط الرادار\",\"sidebar.chart.tree\":\"مخطط شجرة\",\"sidebar.map\":\"خرائط جوجل\",\"sidebar.map.simple\":\"خرائط جوجل...\",\"sidebar.map.styled\":\"خريطة نصب\",\"sidebar.map.geoLocation\":\"الموقع الجغرافي\",\"sidebar.map.mapDirection\":\"خريطة الاتجاه\",\"sidebar.map.overlay\":\"تراكب الخريطة\",\"sidebar.map.kmLayer\":\"خريطة كم طبقة\",\"sidebar.map.popupInfo\":\"معلومات المنبثقة من الخريطة\",\"sidebar.map.trafficLayer\":\"خريطة حركة المرور\",\"sidebar.map.streetView\":\"منظر الشارع\",\"sidebar.map.eventListener\":\"مستمع الحدث\",\"sidebar.map.mapDrawing\":\"خريطة الرسم\",\"sidebar.map.mapClustering\":\"خريطة المجموعات\",\"sidebar.modules\":\"وحدات\",\"sidebar.calendar\":\"التقويم\",\"sidebar.calendar.basic\":\"الأساسية\",\"sidebar.calendar.cultures\":\"الثقافات\",\"sidebar.calendar.dnd\":\"DND\",\"sidebar.calendar.popup\":\"يظهر فجأة\",\"sidebar.calendar.rendering\":\"استدعاء\",\"sidebar.calendar.selectable\":\"اختيار\",\"sidebar.calendar.timeslots\":\"فتحات الوقت\",\"sidebar.mail.title\":\"بريد\",\"sidebar.mail.compose\":\"مؤلف موسيقى\",\"sidebar.mail.mailbox\":\"صندوق بريد\",\"sidebar.mail.filters\":\"مرشحات\",\"sidebar.mail.labels\":\"تسميات\",\"sidebar.eCommerce\":\"التجارة الإلكترونية\",\"sidebar.eCommerce.productList\":\"قائمة المنتجات\",\"sidebar.eCommerce.productGrid\":\"شبكة المنتج\",\"sidebar.extraComponents\":\"مكونات اضافية\",\"sidebar.inBuiltApp\":\"تطبيقات مدمجة\",\"sidebar.extraElements.callouts\":\"صرخ\",\"sidebar.extraElements.testimonials\":\"الشهادات - التوصيات\",\"sidebar.timeLine\":\"الجدول الزمني\",\"sidebar.timeLine.default\":\"افتراضي\",\"sidebar.timeLine.defaultwithIcons\":\"الافتراضي مع الرموز\",\"sidebar.timeLine.leftAligned\":\"اليسار الانحياز\",\"sidebar.extraElements.pricingTable\":\"جدول التسعير\",\"sidebar.customViews\":\"طرق عرض مخصصة\",\"sidebar.listType\":\"نوع القائمة\",\"sidebar.listType.extras\":\"إضافات\",\"sidebar.listType.plainListView\":\"عرض قائمة بسيطة\",\"sidebar.listType.withDivider\":\"قائمة بسيطة مع المفرق\",\"sidebar.listType.cardListView\":\"عرض قائمة البطاقات\",\"sidebar.extraPages.404\":\"404 خطأ الصفحة\",\"sidebar.extraPages.500\":\"500 خطأ الصفحة\",\"sidebar.extraPages\":\"صفحات اضافية\",\"app.userAuth\":\"مصادقة المستخدم\",\"app.userAuth.login\":\"تسجيل الدخول\",\"app.userAuth.signIn\":\"تسجيل الدخول\",\"app.userAuth.send\":\"إرسال\",\"app.userAuth.bySigning\":\"من خلال التسجيل ، يمكنك الاستفادة من الميزات الكاملة لخدماتنا.\",\"app.userAuth.or\":\"أو\",\"app.userAuth.forgotPassword\":\"هل نسيت كلمة المرور\",\"app.userAuth.forgot\":\"لا تقلق. استعادة كلمة المرور أمر سهل. فقط أخبرنا بالبريد الإلكتروني الذي قمت بالتسجيل به مع jumbo\",\"app.userAuth.signUp\":\"سجل\",\"app.userAuth.getAccount\":\"الحصول على حساب !!!\",\"app.userAuth.resetPassword\":\"إعادة ضبط كلمة المرور\",\"app.userAuth.reset\":\"إعادة تعيين\",\"app.userAuth.lockScreen\":\"اقفل الشاشة\",\"app.userAuth.unLock\":\"فتح\",\"appModule.enterPasswordUnlock\":\"أدخل كلمة المرور الخاصة بك لفتح الشاشة!\",\"appModule.enterPasswordReset\":\"أدخل كلمة مرور جديدة لحسابك\",\"appModule.loginSuccessfully\":\"تسجيل الدخول بنجاح\",\"appModule.password\":\"كلمه السر\",\"appModule.email\":\"البريد الإلكتروني\",\"appModule.name\":\"اسم\",\"appModule.phone\":\"هاتف\",\"appModule.designation\":\"تعيين\",\"appModule.regsiter\":\"تسجيل\",\"appModule.regsiterNow\":\"تسجيل رقم\",\"appModule.hvAccount\":\"لديك حساب\",\"appModule.createAccount\":\"انشئ حساب\",\"appModule.termAndCondition\":\"الشروط و الأحكام\",\"appModule.iAccept\":\"بالاشتراك ، أوافق\",\"todo\":\"لكى يفعل\",\"todo.addTask\":\"إضافة مهمة\",\"todo.all\":\"الكل\",\"todo.filters\":\"مرشحات\",\"todo.labels\":\"تسميات\",\"chat.selectUserChat\":\"اختر المستخدم لبدء الدردشة\",\"chat.selectContactChat\":\"حدد جهة اتصال لبدء الدردشة\",\"chat.chatUser\":\"دردشات\",\"chat.contacts\":\"جهات الاتصال\",\"chat.searchStartNewChat\":\"ابحث أو ابدأ محادثة جديدة\",\"chat.typeMessage\":\"اكتب واضغط على Enter لإرسال الرسالة\",\"chat.status\":\"انها حالة .... وليس يومياتك ...\",\"contact.saveContact\":\"حفظ الاتصال\",\"contact.addContact\":\"إضافة جهة اتصال\",\"contact.searchContact\":\"بحث الاتصال\",\"mail.mailbox\":\"صندوق بريد\",\"mail.compose\":\"مؤلف موسيقى\",\"mail.filters\":\"مرشحات\",\"mail.labels\":\"تسميات\",\"mail.title\":\"رسالة جديدة\",\"eCommerce.buyNow\":\"اشتري الآن\",\"eCommerce.addToCart\":\"أضف إلى السلة\",\"eCommerce.readMore\":\"اقرأ أكثر\",\"callouts.viewRange\":\"عرض النطاق\",\"callouts.basic\":\"الأساسية\",\"extraElements.callout\":\"عنصر إضافي\",\"testimonials.basic\":\"الأساسية\",\"testimonials.classic\":\"كلاسيكي\",\"testimonials.standard\":\"اساسي\",\"extraElements.testimonials\":\"الشهادات - التوصيات\",\"button.modify\":\"تعديل\",\"button.delete\":\"حذف\",\"pricingTable.basic\":\"الأساسية\",\"pricingTable.circle\":\"دائرة\",\"pricingTable.classic\":\"كلاسيكي\",\"pricingTable.dark\":\"داكن\",\"pricingTable.personal\":\"الشخصية\",\"pricingTable.easyTranslation\":\"الترجمة السهلة\",\"pricingTable.awesomeGoogleFonts\":\"رائع جوجل الخطوط\",\"pricingTable.hotelBookingSystem\":\"نظام حجز الفنادق\",\"pricingTable.emailComposeInterface\":\"البريد الإلكتروني تأليف واجهة\",\"pricingTable.locationFinderApp\":\"موقع الباحث عن التطبيق\",\"pricingTable.buyNow\":\"اشتري الآن\",\"pricingTable.business\":\"اعمال\",\"pricingTable.professional\":\"المحترفين\",\"button.yes\":\"نعم فعلا\",\"button.no\":\"لا\",\"extraPages.404Msg\":\"عفوًا ، حدث خطأ. الصفحة غير موجودة!\",\"extraPages.500Msg\":\"عذرا ، الخادم يذهب بشكل خاطئ\",\"extraPages.goHome\":\"الذهاب إلى المنزل\",\"extension.sweetAlerts\":\"تنبيهات حلوة\",\"sweetAlerts.basic\":\"الأساسية\",\"sweetAlerts.description\":\"مع الوصف\",\"sweetAlerts.success\":\"نجاح\",\"sweetAlerts.warning\":\"تحذير\",\"sweetAlerts.custom\":\"العادة\",\"sweetAlerts.htmlTag\":\"علامة Html\",\"sweetAlerts.prompt\":\"مستعجل\",\"sweetAlerts.itsBlue\":\"إنه أزرق!\",\"sweetAlerts.passwordPrompt\":\"كلمة المرور موجه\",\"sweetAlerts.customStyle\":\"نمط مخصص\",\"sweetAlerts.itPretty\":\"إنها جميلة ، أليس كذلك؟\",\"sweetAlerts.btnClicked\":\"لقد قمت بالنقر فوق الزر!\",\"sweetAlerts.youWillFind\":\"سوف تجد أنهم يصل!\",\"sweetAlerts.youWillNotAble\":\"لن تكون قادرًا على استرداد هذا الملف الوهمي!\",\"sweetAlerts.hereIsaMessage\":\"هنا رسالة!\",\"sweetAlerts.goodJob\":\"عمل جيد!\",\"sweetAlerts.yesDeleteIt\":\"نعم ، احذفها!\",\"sweetAlerts.areYouSure\":\"هل أنت واثق؟\",\"sweetAlerts.doYouLikeThumb\":\"هل تحب الإبهام؟\",\"sweetAlerts.anInput\":\"مدخلا!\",\"sweetAlerts.writeSomethingInteresting\":\"اكتب شيئًا مثيرًا للاهتمام:\",\"sweetAlerts.writeSomething\":\"أكتب شيئا\",\"sweetAlerts.youMustEnterPassword\":\"يجب عليك إدخال كلمة المرور الخاصة بك!\",\"sweetAlerts.enterPassword\":\"أدخل كلمة المرور\",\"extension.notification\":\"إعلام\",\"notification.infoMsg\":\"رسالة المعلومات\",\"notification.successMessage\":\"نجاح رسالة\",\"notification.warningMessage\":\"رسالة تحذير\",\"notification.closeAfter3000ms\":\"أغلق بعد 3000 مللي ثانية\",\"notification.errorMessage\":\"رسالة خطأ\",\"notification.titleHere\":\"العنوان هنا\",\"notification.clickMe\":\"انقر فوق لي!\",\"notification.info\":\"معلومات\",\"notification.success\":\"نجاح\",\"notification.warning\":\"تحذير\",\"notification.error\":\"خطأ\",\"sidebar.editors\":\"المحررين\",\"sidebar.editors.CKEditor\":\"CKEditor\",\"sidebar.editors.WYSISWYGEditor\":\"محرر WYSIWYG\",\"picker.color.alpha\":\"الفا القاطنون\",\"picker.color.hue\":\"هيو جامعي\",\"picker.color.circle\":\"دائرة منتقي\",\"picker.color.compact\":\"القارضون المدمجة\",\"picker.color.block\":\"بلوك جامعي\",\"picker.color.chrome\":\"كروم المنتقون\",\"picker.color.github\":\"جيثب بيكرز\",\"picker.color.twitter\":\"قارعي التغريد\",\"picker.color.withRedux\":\"مع Redux\",\"picker.color.sketch\":\"صانعي رسم\",\"picker.color.material\":\"جامعي المواد\",\"picker.color.slider\":\"المتزلجون جامعي\",\"picker.color.basic\":\"القتلة الأساسيين\",\"picker.color.basicToggle\":\"تبديل الأساسي\",\"picker.color.custom\":\"جامعي مخصص\",\"picker.color.customPointer\":\"مؤشر مخصص\",\"picker.color.photoshop\":\"قارورة فوتوشوب\",\"picker.color.swatches\":\"حوامل المنتزعون\",\"picker.color.basicPositioning\":\"المواقع الأساسية\",\"sidebar.documents\":\"مستندات\",\"sidebar.documents.changelog\":\"التغيير\",\"sidebar.documents.installation\":\"التركيب\",\"sidebar.dashboard.listing\":\"قائمة\",\"sidebar.dashboard.crypto\":\"التشفير\",\"sidebar.algolia\":\"Algolia\",\"sidebar.components.rechart\":\"ReChart\",\"sidebar.components.amchart\":\"AmChart\",\"sidebar.google.map\":\"Google Map\",\"sidebar.ammap\":\"AmMap\",\"sidebar.map.animations.lines\":\"مع الرسوم المتحركة\",\"sidebar.map.curved.lines\":\"مع الخطوط المنحنية\",\"sidebar.map.zooming.countries\":\"البلدان التكبير\",\"sidebar.map.patterns\":\"خريطة مع أنماط\",\"sidebar.map.capitals.map\":\"خريطة العواصم\",\"sidebar.map.markers\":\"علامات الخريطة\",\"sidebar.map.flight.routes\":\"رحلات الطيران\",\"sidebar.map.choropleth\":\"خريطة الحرارة\",\"sidebar.map.grouped.countries\":\"الدول المتجمعة\",\"sidebar.map.bubbles\":\"خريطة مع فقاعات\",\"sidebar.map.drill.down\":\"حفر أسفل الخريطة\",\"sidebar.map.multiple.areas\":\"مجالات متعددة\",\"sidebar.map.weather\":\"خريطة الطقس\",\"sidebar.extensions.shuffle\":\"خلط\",\"sidebar.extensions.profile\":\"الملف الشخصي\",\"sidebar.social\":\"التطبيقات الاجتماعية\"}");

/***/ }),

/***/ "./lngProvider/locales/en_US.json":
/*!****************************************!*\
  !*** ./lngProvider/locales/en_US.json ***!
  \****************************************/
/*! exports provided: app.announced, sidebar.main, sidebar.dashboard, sidebar.layouts, sidebar.dashboard.crm, sidebar.components, sidebar.components.general, sidebar.general.button, sidebar.general.icon, sidebar.components.navigation, sidebar.navigation.affix, sidebar.navigation.breadcrumb, sidebar.navigation.dropdown, sidebar.navigation.menu, sidebar.navigation.pagination, sidebar.navigation.steps, sidebar.components.dataEntry, sidebar.dataEntry.autoComplete, sidebar.dataEntry.checkbox, sidebar.dataEntry.cascader, sidebar.dataEntry.datePicker, sidebar.dataEntry.form, sidebar.dataEntry.inputNumber, sidebar.dataEntry.input, sidebar.dataEntry.mention, sidebar.dataEntry.rate, sidebar.dataEntry.radio, sidebar.dataEntry.switch, sidebar.dataEntry.slider, sidebar.dataEntry.select, sidebar.dataEntry.treeSelect, sidebar.dataEntry.transfer, sidebar.dataEntry.timePicker, sidebar.dataEntry.upload, sidebar.components.dataDisplay, sidebar.dataDisplay.avatar, sidebar.dataDisplay.badge, sidebar.dataDisplay.collapse, sidebar.dataDisplay.carousel, sidebar.dataDisplay.card, sidebar.dataDisplay.calender, sidebar.dataDisplay.list, sidebar.dataDisplay.popover, sidebar.dataDisplay.tree, sidebar.dataDisplay.toolTips, sidebar.dataDisplay.timeLine, sidebar.dataDisplay.tag, sidebar.dataDisplay.tabs, sidebar.dataDisplay.table, sidebar.components.feedBack, sidebar.feedBack.alert, sidebar.feedBack.modal, sidebar.feedBack.message, sidebar.feedBack.notification, sidebar.feedBack.progress, sidebar.feedBack.popConfirm, sidebar.feedBack.spin, sidebar.components.other, sidebar.other.anchor, sidebar.other.backTop, sidebar.other.divider, sidebar.widgets, sidebar.metrics, sidebar.view, sidebar.view.basicTable, sidebar.view.dataTable, sidebar.extensions, sidebar.extensions.editior, sidebar.extensions.dragNDrop, sidebar.extensions.sweetAlert, sidebar.extensions.notification, sidebar.extensions.reactDates, sidebar.extensions.dropZone, sidebar.googleMap, sidebar.charts, sidebar.apps, sidebar.mailApp, sidebar.todoApp, sidebar.contactsApp, sidebar.chatApp, sidebar.wall, sidebar.notes, sidebar.crud, sidebar.pickers, sidebar.pickers.dateTimePickers, sidebar.pickers.colorPickers, sidebar.chart, sidebar.chart.line, sidebar.chart.bar, sidebar.chart.area, sidebar.chart.composed, sidebar.chart.scatter, sidebar.chart.pie, sidebar.chart.radial, sidebar.chart.radar, sidebar.chart.tree, sidebar.map.simple, sidebar.map.styled, sidebar.map.geoLocation, sidebar.map.mapDirection, sidebar.map.overlay, sidebar.map.kmLayer, sidebar.map.popupInfo, sidebar.map.trafficLayer, sidebar.map.streetView, sidebar.map.eventListener, sidebar.map.mapDrawing, sidebar.map.mapClustering, sidebar.modules, sidebar.calendar, sidebar.calendar.basic, sidebar.calendar.cultures, sidebar.calendar.dnd, sidebar.calendar.popup, sidebar.calendar.rendering, sidebar.calendar.selectable, sidebar.calendar.timeslots, sidebar.mail.title, sidebar.mail.compose, sidebar.mail.mailbox, sidebar.mail.filters, sidebar.mail.labels, sidebar.eCommerce, sidebar.eCommerce.productList, sidebar.eCommerce.productGrid, sidebar.extraComponents, sidebar.inBuiltApp, sidebar.extraElements.callouts, sidebar.extraElements.testimonials, sidebar.timeLine, sidebar.timeLine.default, sidebar.timeLine.defaultwithIcons, sidebar.timeLine.leftAligned, sidebar.extraElements.pricingTable, sidebar.customViews, sidebar.listType, sidebar.listType.extras, sidebar.listType.plainListView, sidebar.listType.withDivider, sidebar.listType.cardListView, sidebar.extraPages.404, sidebar.extraPages.500, sidebar.extraPages, app.userAuth, app.userAuth.login, app.userAuth.signIn, app.userAuth.send, app.userAuth.bySigning, app.userAuth.or, app.userAuth.forgotPassword, app.userAuth.forgot, app.userAuth.signUp, app.userAuth.getAccount, app.userAuth.resetPassword, app.userAuth.reset, app.userAuth.lockScreen, app.userAuth.unLock, appModule.enterPasswordUnlock, appModule.enterPasswordReset, appModule.loginSuccessfully, appModule.password, appModule.email, appModule.name, appModule.phone, appModule.designation, appModule.regsiter, appModule.regsiterNow, appModule.hvAccount, appModule.createAccount, appModule.termAndCondition, appModule.iAccept, todo, todo.addTask, todo.all, todo.filters, todo.labels, chat.selectUserChat, chat.selectContactChat, chat.chatUser, chat.contacts, chat.searchStartNewChat, chat.typeMessage, chat.status, contact.saveContact, contact.addContact, contact.searchContact, mail.mailbox, mail.compose, mail.filters, mail.labels, mail.title, eCommerce.buyNow, eCommerce.addToCart, eCommerce.readMore, callouts.viewRange, callouts.basic, extraElements.callout, testimonials.basic, testimonials.classic, testimonials.standard, extraElements.testimonials, button.modify, button.delete, pricingTable.basic, pricingTable.circle, pricingTable.classic, pricingTable.dark, pricingTable.personal, pricingTable.easyTranslation, pricingTable.awesomeGoogleFonts, pricingTable.hotelBookingSystem, pricingTable.emailComposeInterface, pricingTable.locationFinderApp, pricingTable.buyNow, pricingTable.business, pricingTable.professional, button.yes, button.no, extraPages.404Msg, extraPages.500Msg, extraPages.goHome, extension.sweetAlerts, sweetAlerts.basic, sweetAlerts.description, sweetAlerts.success, sweetAlerts.warning, sweetAlerts.custom, sweetAlerts.htmlTag, sweetAlerts.prompt, sweetAlerts.itsBlue, sweetAlerts.passwordPrompt, sweetAlerts.customStyle, sweetAlerts.itPretty, sweetAlerts.btnClicked, sweetAlerts.youWillFind, sweetAlerts.youWillNotAble, sweetAlerts.hereIsaMessage, sweetAlerts.goodJob, sweetAlerts.yesDeleteIt, sweetAlerts.areYouSure, sweetAlerts.doYouLikeThumb, sweetAlerts.anInput, sweetAlerts.writeSomethingInteresting, sweetAlerts.writeSomething, sweetAlerts.youMustEnterPassword, sweetAlerts.enterPassword, extension.notification, notification.infoMsg, notification.successMessage, notification.warningMessage, notification.closeAfter3000ms, notification.errorMessage, notification.titleHere, notification.clickMe, notification.info, notification.success, notification.warning, notification.error, sidebar.editors, sidebar.editors.CKEditor, sidebar.editors.WYSISWYGEditor, picker.color.alpha, picker.color.hue, picker.color.circle, picker.color.compact, picker.color.block, picker.color.chrome, picker.color.github, picker.color.twitter, picker.color.withRedux, picker.color.sketch, picker.color.material, picker.color.slider, picker.color.basic, picker.color.basicToggle, picker.color.custom, picker.color.customPointer, picker.color.photoshop, picker.color.swatches, picker.color.basicPositioning, sidebar.documents, sidebar.documents.changelog, sidebar.documents.installation, sidebar.dashboard.listing, sidebar.dashboard.crypto, sidebar.map, sidebar.algolia, sidebar.firebase.crud, sidebar.components.rechart, sidebar.components.amchart, sidebar.google.map, sidebar.ammap, sidebar.map.animations.lines, sidebar.map.curved.lines, sidebar.map.zooming.countries, sidebar.map.patterns, sidebar.map.capitals.map, sidebar.map.markers, sidebar.map.flight.routes, sidebar.map.choropleth, sidebar.map.grouped.countries, sidebar.map.bubbles, sidebar.map.drill.down, sidebar.map.multiple.areas, sidebar.map.weather, sidebar.extensions.shuffle, sidebar.extensions.profile, sidebar.social, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"app.announced\":\"A new version will be released on December 25th. Stay tuned!\",\"sidebar.main\":\"Main\",\"sidebar.dashboard\":\"Dashboard\",\"sidebar.layouts\":\"Layouts\",\"sidebar.dashboard.crm\":\"Crm\",\"sidebar.components\":\"Components\",\"sidebar.components.general\":\"General\",\"sidebar.general.button\":\"Button\",\"sidebar.general.icon\":\"Icon\",\"sidebar.components.navigation\":\"Navigation\",\"sidebar.navigation.affix\":\"Affix\",\"sidebar.navigation.breadcrumb\":\"Breadcrumb\",\"sidebar.navigation.dropdown\":\"Dropdown\",\"sidebar.navigation.menu\":\"Menu\",\"sidebar.navigation.pagination\":\"Pagination\",\"sidebar.navigation.steps\":\"Steps\",\"sidebar.components.dataEntry\":\"Data Entry\",\"sidebar.dataEntry.autoComplete\":\"AutoComplete\",\"sidebar.dataEntry.checkbox\":\"Checkbox\",\"sidebar.dataEntry.cascader\":\"Cascader\",\"sidebar.dataEntry.datePicker\":\"Datepicker\",\"sidebar.dataEntry.form\":\"Form\",\"sidebar.dataEntry.inputNumber\":\"InputNumber\",\"sidebar.dataEntry.input\":\"Input\",\"sidebar.dataEntry.mention\":\"Mention\",\"sidebar.dataEntry.rate\":\"Rate\",\"sidebar.dataEntry.radio\":\"Radio\",\"sidebar.dataEntry.switch\":\"Switch\",\"sidebar.dataEntry.slider\":\"Slider\",\"sidebar.dataEntry.select\":\"Select\",\"sidebar.dataEntry.treeSelect\":\"TreeSelect\",\"sidebar.dataEntry.transfer\":\"Transfer\",\"sidebar.dataEntry.timePicker\":\"Time Picker\",\"sidebar.dataEntry.upload\":\"Upload\",\"sidebar.components.dataDisplay\":\"Data Display\",\"sidebar.dataDisplay.avatar\":\"Avatar\",\"sidebar.dataDisplay.badge\":\"Badge\",\"sidebar.dataDisplay.collapse\":\"Collapse\",\"sidebar.dataDisplay.carousel\":\"Carousel\",\"sidebar.dataDisplay.card\":\"Card\",\"sidebar.dataDisplay.calender\":\"Calender\",\"sidebar.dataDisplay.list\":\"List\",\"sidebar.dataDisplay.popover\":\"Popover\",\"sidebar.dataDisplay.tree\":\"Tree\",\"sidebar.dataDisplay.toolTips\":\"Tooltips\",\"sidebar.dataDisplay.timeLine\":\"Timeline\",\"sidebar.dataDisplay.tag\":\"Tag\",\"sidebar.dataDisplay.tabs\":\"Tabs\",\"sidebar.dataDisplay.table\":\"Table\",\"sidebar.components.feedBack\":\"Feedback\",\"sidebar.feedBack.alert\":\"Alert\",\"sidebar.feedBack.modal\":\"Modal\",\"sidebar.feedBack.message\":\"Message\",\"sidebar.feedBack.notification\":\"Notification\",\"sidebar.feedBack.progress\":\"Progress\",\"sidebar.feedBack.popConfirm\":\"PopConfirm\",\"sidebar.feedBack.spin\":\"Spin\",\"sidebar.components.other\":\"Other\",\"sidebar.other.anchor\":\"Anchor\",\"sidebar.other.backTop\":\"BackTop\",\"sidebar.other.divider\":\"Divider\",\"sidebar.widgets\":\"Widgets\",\"sidebar.metrics\":\"Metrics\",\"sidebar.view\":\"View\",\"sidebar.view.basicTable\":\"Basic Table\",\"sidebar.view.dataTable\":\"Data Table\",\"sidebar.extensions\":\"Extensions\",\"sidebar.extensions.editior\":\"Editior\",\"sidebar.extensions.dragNDrop\":\"Drag & Drop\",\"sidebar.extensions.sweetAlert\":\"Sweet Alert\",\"sidebar.extensions.notification\":\"Notification\",\"sidebar.extensions.reactDates\":\"React Dates\",\"sidebar.extensions.dropZone\":\"Drop Zone\",\"sidebar.googleMap\":\"Google Map\",\"sidebar.charts\":\"Charts\",\"sidebar.apps\":\"Apps\",\"sidebar.mailApp\":\"Mail App\",\"sidebar.todoApp\":\"Todo App\",\"sidebar.contactsApp\":\"Contacts App\",\"sidebar.chatApp\":\"Chat App\",\"sidebar.wall\":\"Wall App\",\"sidebar.notes\":\"Notes\",\"sidebar.crud\":\"Firebase CRUD\",\"sidebar.pickers\":\"Pickers\",\"sidebar.pickers.dateTimePickers\":\"Date & Time Pickers\",\"sidebar.pickers.colorPickers\":\"Color Pickers\",\"sidebar.chart\":\"Chart\",\"sidebar.chart.line\":\"Line Chart\",\"sidebar.chart.bar\":\"Bar Chart\",\"sidebar.chart.area\":\"Area Chart\",\"sidebar.chart.composed\":\"Composed Chart\",\"sidebar.chart.scatter\":\"Scatter Chart\",\"sidebar.chart.pie\":\"Pie Chart\",\"sidebar.chart.radial\":\"Radial Chart\",\"sidebar.chart.radar\":\"Radar Chart\",\"sidebar.chart.tree\":\"Tree Chart\",\"sidebar.map.simple\":\"Simple Map\",\"sidebar.map.styled\":\"Styled Map\",\"sidebar.map.geoLocation\":\"Geo Location\",\"sidebar.map.mapDirection\":\"Map Direction\",\"sidebar.map.overlay\":\"Map Overlay\",\"sidebar.map.kmLayer\":\"Map Km Layer\",\"sidebar.map.popupInfo\":\"Map Popup Info\",\"sidebar.map.trafficLayer\":\"Map Traffic Layer\",\"sidebar.map.streetView\":\"Street View\",\"sidebar.map.eventListener\":\"Event Listener\",\"sidebar.map.mapDrawing\":\"Map Drawing\",\"sidebar.map.mapClustering\":\"Map Clustering\",\"sidebar.modules\":\"Modules\",\"sidebar.calendar\":\"Calendar\",\"sidebar.calendar.basic\":\"Basic\",\"sidebar.calendar.cultures\":\"Cultures\",\"sidebar.calendar.dnd\":\"Dnd\",\"sidebar.calendar.popup\":\"Popup\",\"sidebar.calendar.rendering\":\"Rendering\",\"sidebar.calendar.selectable\":\"Selectable\",\"sidebar.calendar.timeslots\":\"Timeslots\",\"sidebar.mail.title\":\"Mail\",\"sidebar.mail.compose\":\"COMPOSE\",\"sidebar.mail.mailbox\":\"Mailbox\",\"sidebar.mail.filters\":\"Filters\",\"sidebar.mail.labels\":\"Labels\",\"sidebar.eCommerce\":\"eCommerce\",\"sidebar.eCommerce.productList\":\"Product List\",\"sidebar.eCommerce.productGrid\":\"Product Grid\",\"sidebar.extraComponents\":\"Extra Components\",\"sidebar.inBuiltApp\":\"In-built Apps\",\"sidebar.extraElements.callouts\":\"Callout\",\"sidebar.extraElements.testimonials\":\"Testimonials\",\"sidebar.timeLine\":\"Time Line\",\"sidebar.timeLine.default\":\"Default\",\"sidebar.timeLine.defaultwithIcons\":\"Default with Icons\",\"sidebar.timeLine.leftAligned\":\"Left Aligned\",\"sidebar.extraElements.pricingTable\":\"Pricing Table\",\"sidebar.customViews\":\"Custom Views\",\"sidebar.listType\":\"List Type\",\"sidebar.listType.extras\":\"Extras\",\"sidebar.listType.plainListView\":\"Plain List View\",\"sidebar.listType.withDivider\":\"Plain List with Divider\",\"sidebar.listType.cardListView\":\"Cards List View\",\"sidebar.extraPages.404\":\"404 Error Page\",\"sidebar.extraPages.500\":\"500 Error Page\",\"sidebar.extraPages\":\"Extra Pages\",\"app.userAuth\":\"User Auth\",\"app.userAuth.login\":\"Login\",\"app.userAuth.signIn\":\"Sign In\",\"app.userAuth.send\":\"SEND\",\"app.userAuth.bySigning\":\"By Signing Up, you can avail full features of our services.\",\"app.userAuth.or\":\"or\",\"app.userAuth.forgotPassword\":\"Forgot Password\",\"app.userAuth.forgot\":\"Don't worry. Recovering the password is easy.Just tell us the email you have registered with jumbo\",\"app.userAuth.signUp\":\"Sign Up\",\"app.userAuth.getAccount\":\"Get an account !!!\",\"app.userAuth.resetPassword\":\"Reset Password\",\"app.userAuth.reset\":\"RESET\",\"app.userAuth.lockScreen\":\"Lock Screen\",\"app.userAuth.unLock\":\"UNLOCK\",\"appModule.enterPasswordUnlock\":\"Enter your password to unlock the screen!\",\"appModule.enterPasswordReset\":\"Enter a new password for your account\",\"appModule.loginSuccessfully\":\"Login Successfully\",\"appModule.password\":\"Password\",\"appModule.email\":\"Email\",\"appModule.name\":\"Name\",\"appModule.phone\":\"Phone\",\"appModule.designation\":\"Designation\",\"appModule.regsiter\":\"Regsiter\",\"appModule.regsiterNow\":\"Regsiter No\",\"appModule.hvAccount\":\"Have an account\",\"appModule.createAccount\":\"Create an account\",\"appModule.termAndCondition\":\"Term & Condition\",\"appModule.iAccept\":\"by signing up, I accept\",\"todo\":\"To-Do\",\"todo.addTask\":\"ADD TASK\",\"todo.all\":\"All\",\"todo.filters\":\"Filters\",\"todo.labels\":\"Labels\",\"chat.selectUserChat\":\"Select User to start Chat\",\"chat.selectContactChat\":\"Select contact to start Chat\",\"chat.chatUser\":\"Chats\",\"chat.contacts\":\"Contacts\",\"chat.searchStartNewChat\":\"Search or start new chat\",\"chat.typeMessage\":\"Type and hit enter to send message\",\"chat.status\":\"it's a status....not your diary...\",\"contact.saveContact\":\"Save Contact\",\"contact.addContact\":\"Add Contact\",\"contact.searchContact\":\"Search contact\",\"mail.mailbox\":\"Mailbox\",\"mail.compose\":\"COMPOSE\",\"mail.filters\":\"Filters\",\"mail.labels\":\"Labels\",\"mail.title\":\"New Message\",\"eCommerce.buyNow\":\"Buy Now\",\"eCommerce.addToCart\":\"Add To Cart\",\"eCommerce.readMore\":\"Read More\",\"callouts.viewRange\":\"VIEW RANGE\",\"callouts.basic\":\"Basic\",\"extraElements.callout\":\"Extra Element\",\"testimonials.basic\":\"Basic\",\"testimonials.classic\":\"Classic\",\"testimonials.standard\":\"Standard\",\"extraElements.testimonials\":\"Testimonials\",\"button.modify\":\"Modify\",\"button.delete\":\"Delete\",\"pricingTable.basic\":\"Basic\",\"pricingTable.circle\":\"Circle\",\"pricingTable.classic\":\"Classic\",\"pricingTable.dark\":\"Dark\",\"pricingTable.personal\":\"PERSONAL\",\"pricingTable.easyTranslation\":\"Easy Translation\",\"pricingTable.awesomeGoogleFonts\":\"Awesome Google Fonts\",\"pricingTable.hotelBookingSystem\":\"Hotel Booking System\",\"pricingTable.emailComposeInterface\":\"Email Compose Interface\",\"pricingTable.locationFinderApp\":\"Location Finder App\",\"pricingTable.buyNow\":\"buy now\",\"pricingTable.business\":\"BUSINESS\",\"pricingTable.professional\":\"PROFESSIONAL\",\"button.yes\":\"Yes\",\"button.no\":\"No\",\"extraPages.404Msg\":\"Oops, an error has occurred. Page not found!\",\"extraPages.500Msg\":\"Sorry, server goes wrong\",\"extraPages.goHome\":\"Go to Home\",\"extension.sweetAlerts\":\"Sweet Alerts\",\"sweetAlerts.basic\":\"Basic\",\"sweetAlerts.description\":\"With Description\",\"sweetAlerts.success\":\"Success\",\"sweetAlerts.warning\":\"Warning\",\"sweetAlerts.custom\":\"Custom\",\"sweetAlerts.htmlTag\":\"Html Tag\",\"sweetAlerts.prompt\":\"Prompt\",\"sweetAlerts.itsBlue\":\"It's Green!\",\"sweetAlerts.passwordPrompt\":\"Password Prompt\",\"sweetAlerts.customStyle\":\"Custom Style\",\"sweetAlerts.itPretty\":\"It's pretty, isn't it?\",\"sweetAlerts.btnClicked\":\"You clicked the button!\",\"sweetAlerts.youWillFind\":\"You will find they are up!\",\"sweetAlerts.youWillNotAble\":\"You will not be able to recover this imaginary file!\",\"sweetAlerts.hereIsaMessage\":\"Here's a message!\",\"sweetAlerts.goodJob\":\"Good job!\",\"sweetAlerts.yesDeleteIt\":\"Yes, delete it!\",\"sweetAlerts.areYouSure\":\"Are you sure?\",\"sweetAlerts.doYouLikeThumb\":\"Do you like thumbs?\",\"sweetAlerts.anInput\":\"An input!\",\"sweetAlerts.writeSomethingInteresting\":\"Write something interesting:\",\"sweetAlerts.writeSomething\":\"Write something\",\"sweetAlerts.youMustEnterPassword\":\"You must enter your password!\",\"sweetAlerts.enterPassword\":\"Enter Password\",\"extension.notification\":\"Notification\",\"notification.infoMsg\":\"Info message\",\"notification.successMessage\":\"Success message\",\"notification.warningMessage\":\"Warning message\",\"notification.closeAfter3000ms\":\"Close after 3000ms\",\"notification.errorMessage\":\"Error message\",\"notification.titleHere\":\"Title here\",\"notification.clickMe\":\"Click me!\",\"notification.info\":\"Info\",\"notification.success\":\"Success\",\"notification.warning\":\"Warning\",\"notification.error\":\"Error\",\"sidebar.editors\":\"Editors\",\"sidebar.editors.CKEditor\":\"CKEditor\",\"sidebar.editors.WYSISWYGEditor\":\"WYSISWYG Editor\",\"picker.color.alpha\":\"Alpha Pickers\",\"picker.color.hue\":\"Hue Pickers\",\"picker.color.circle\":\"Circle Pickers\",\"picker.color.compact\":\"Compact Pickers\",\"picker.color.block\":\"Block Pickers\",\"picker.color.chrome\":\"Chrome Pickers\",\"picker.color.github\":\"Github Pickers\",\"picker.color.twitter\":\"Twitter Pickers\",\"picker.color.withRedux\":\"With Redux\",\"picker.color.sketch\":\"Sketch Pickers\",\"picker.color.material\":\"Material Pickers\",\"picker.color.slider\":\"Slider Pickers\",\"picker.color.basic\":\"Basic Pickers\",\"picker.color.basicToggle\":\"Basic Toggle\",\"picker.color.custom\":\"Custom Pickers\",\"picker.color.customPointer\":\"Custom Pointer\",\"picker.color.photoshop\":\"Photoshop Pickers\",\"picker.color.swatches\":\"Swatches Pickers\",\"picker.color.basicPositioning\":\"Basic Positioning\",\"sidebar.documents\":\"Documents\",\"sidebar.documents.changelog\":\"Changelog\",\"sidebar.documents.installation\":\"Installation\",\"sidebar.dashboard.listing\":\"Listing\",\"sidebar.dashboard.crypto\":\"Crypto\",\"sidebar.map\":\"Map\",\"sidebar.algolia\":\"Algolia\",\"sidebar.firebase.crud\":\"Firebase Curd\",\"sidebar.components.rechart\":\"ReChart\",\"sidebar.components.amchart\":\"AmChart\",\"sidebar.google.map\":\"Google Map\",\"sidebar.ammap\":\"AmMap\",\"sidebar.map.animations.lines\":\"With Animations\",\"sidebar.map.curved.lines\":\"With Curved Lines\",\"sidebar.map.zooming.countries\":\"Zooming Countries\",\"sidebar.map.patterns\":\"Map With Patterns\",\"sidebar.map.capitals.map\":\"Capitals Map\",\"sidebar.map.markers\":\"Map Markers\",\"sidebar.map.flight.routes\":\"Flight Routes\",\"sidebar.map.choropleth\":\"Heat Map\",\"sidebar.map.grouped.countries\":\"Grouped Countries\",\"sidebar.map.bubbles\":\"Map with Bubbles\",\"sidebar.map.drill.down\":\"Drill Down Map\",\"sidebar.map.multiple.areas\":\"Multiple Areas\",\"sidebar.map.weather\":\"Weather map\",\"sidebar.extensions.shuffle\":\"Shuffle\",\"sidebar.extensions.profile\":\"Profile\",\"sidebar.social\":\"Social Apps\"}");

/***/ }),

/***/ "./lngProvider/locales/es_ES.json":
/*!****************************************!*\
  !*** ./lngProvider/locales/es_ES.json ***!
  \****************************************/
/*! exports provided: app.announced, sidebar.main, sidebar.dashboard, sidebar.layouts, sidebar.dashboard.crm, sidebar.components, sidebar.components.general, sidebar.general.button, sidebar.general.icon, sidebar.components.navigation, sidebar.navigation.affix, sidebar.navigation.breadcrumb, sidebar.navigation.dropdown, sidebar.navigation.menu, sidebar.navigation.pagination, sidebar.navigation.steps, sidebar.components.dataEntry, sidebar.dataEntry.autoComplete, sidebar.dataEntry.checkbox, sidebar.dataEntry.cascader, sidebar.dataEntry.datePicker, sidebar.dataEntry.form, sidebar.dataEntry.inputNumber, sidebar.dataEntry.input, sidebar.dataEntry.mention, sidebar.dataEntry.rate, sidebar.dataEntry.radio, sidebar.dataEntry.switch, sidebar.dataEntry.slider, sidebar.dataEntry.select, sidebar.dataEntry.treeSelect, sidebar.dataEntry.transfer, sidebar.dataEntry.timePicker, sidebar.dataEntry.upload, sidebar.components.dataDisplay, sidebar.dataDisplay.avatar, sidebar.dataDisplay.badge, sidebar.dataDisplay.collapse, sidebar.dataDisplay.carousel, sidebar.dataDisplay.card, sidebar.dataDisplay.calender, sidebar.dataDisplay.list, sidebar.dataDisplay.popover, sidebar.dataDisplay.tree, sidebar.dataDisplay.toolTips, sidebar.dataDisplay.timeLine, sidebar.dataDisplay.tag, sidebar.dataDisplay.tabs, sidebar.dataDisplay.table, sidebar.components.feedBack, sidebar.feedBack.alert, sidebar.feedBack.modal, sidebar.feedBack.message, sidebar.feedBack.notification, sidebar.feedBack.progress, sidebar.feedBack.popConfirm, sidebar.feedBack.spin, sidebar.components.other, sidebar.other.anchor, sidebar.other.backTop, sidebar.other.divider, sidebar.widgets, sidebar.metrics, sidebar.view, sidebar.view.basicTable, sidebar.view.dataTable, sidebar.extensions, sidebar.extensions.editior, sidebar.extensions.dragNDrop, sidebar.extensions.sweetAlert, sidebar.extensions.notification, sidebar.extensions.reactDates, sidebar.extensions.dropZone, sidebar.googleMap, sidebar.charts, sidebar.apps, sidebar.mailApp, sidebar.todoApp, sidebar.contactsApp, sidebar.chatApp, sidebar.notes, sidebar.pickers, sidebar.crud, sidebar.pickers.dateTimePickers, sidebar.pickers.colorPickers, sidebar.chart, sidebar.chart.line, sidebar.chart.bar, sidebar.chart.area, sidebar.chart.composed, sidebar.chart.scatter, sidebar.chart.pie, sidebar.chart.radial, sidebar.chart.radar, sidebar.chart.tree, sidebar.map, sidebar.map.simple, sidebar.map.styled, sidebar.map.geoLocation, sidebar.map.mapDirection, sidebar.map.overlay, sidebar.map.kmLayer, sidebar.map.popupInfo, sidebar.map.trafficLayer, sidebar.map.streetView, sidebar.map.eventListener, sidebar.map.mapDrawing, sidebar.map.mapClustering, sidebar.modules, sidebar.calendar, sidebar.calendar.basic, sidebar.calendar.cultures, sidebar.calendar.dnd, sidebar.calendar.popup, sidebar.calendar.rendering, sidebar.calendar.selectable, sidebar.calendar.timeslots, sidebar.mail.title, sidebar.mail.compose, sidebar.mail.mailbox, sidebar.mail.filters, sidebar.mail.labels, sidebar.eCommerce, sidebar.eCommerce.productList, sidebar.eCommerce.productGrid, sidebar.extraComponents, sidebar.inBuiltApp, sidebar.extraElements.callouts, sidebar.extraElements.testimonials, sidebar.timeLine, sidebar.timeLine.default, sidebar.timeLine.defaultwithIcons, sidebar.timeLine.leftAligned, sidebar.extraElements.pricingTable, sidebar.customViews, sidebar.listType, sidebar.listType.extras, sidebar.listType.plainListView, sidebar.listType.withDivider, sidebar.listType.cardListView, sidebar.extraPages.404, sidebar.extraPages.500, sidebar.extraPages, app.userAuth, app.userAuth.login, app.userAuth.signIn, app.userAuth.send, app.userAuth.bySigning, app.userAuth.or, app.userAuth.forgotPassword, app.userAuth.forgot, app.userAuth.signUp, app.userAuth.getAccount, app.userAuth.resetPassword, app.userAuth.reset, app.userAuth.lockScreen, app.userAuth.unLock, appModule.enterPasswordUnlock, appModule.enterPasswordReset, appModule.loginSuccessfully, appModule.password, appModule.email, appModule.name, appModule.phone, appModule.designation, appModule.regsiter, appModule.regsiterNow, appModule.hvAccount, appModule.createAccount, appModule.termAndCondition, appModule.iAccept, todo, todo.addTask, todo.all, todo.filters, todo.labels, chat.selectUserChat, chat.selectContactChat, chat.chatUser, chat.contacts, chat.searchStartNewChat, chat.typeMessage, chat.status, contact.saveContact, contact.addContact, contact.searchContact, mail.mailbox, mail.compose, mail.filters, mail.labels, mail.title, eCommerce.buyNow, eCommerce.addToCart, eCommerce.readMore, callouts.viewRange, callouts.basic, extraElements.callout, testimonials.basic, testimonials.classic, testimonials.standard, extraElements.testimonials, button.modify, button.delete, pricingTable.basic, pricingTable.circle, pricingTable.classic, pricingTable.dark, pricingTable.personal, pricingTable.easyTranslation, pricingTable.awesomeGoogleFonts, pricingTable.hotelBookingSystem, pricingTable.emailComposeInterface, pricingTable.locationFinderApp, pricingTable.buyNow, pricingTable.business, pricingTable.professional, button.yes, button.no, extraPages.404Msg, extraPages.500Msg, extraPages.goHome, extension.sweetAlerts, sweetAlerts.basic, sweetAlerts.description, sweetAlerts.success, sweetAlerts.warning, sweetAlerts.custom, sweetAlerts.htmlTag, sweetAlerts.prompt, sweetAlerts.itsBlue, sweetAlerts.passwordPrompt, sweetAlerts.customStyle, sweetAlerts.itPretty, sweetAlerts.btnClicked, sweetAlerts.youWillFind, sweetAlerts.youWillNotAble, sweetAlerts.hereIsaMessage, sweetAlerts.goodJob, sweetAlerts.yesDeleteIt, sweetAlerts.areYouSure, sweetAlerts.doYouLikeThumb, sweetAlerts.anInput, sweetAlerts.writeSomethingInteresting, sweetAlerts.writeSomething, sweetAlerts.youMustEnterPassword, sweetAlerts.enterPassword, extension.notification, notification.infoMsg, notification.successMessage, notification.warningMessage, notification.closeAfter3000ms, notification.errorMessage, notification.titleHere, notification.clickMe, notification.info, notification.success, notification.warning, notification.error, sidebar.editors, sidebar.editors.CKEditor, sidebar.editors.WYSISWYGEditor, picker.color.alpha, picker.color.hue, picker.color.circle, picker.color.compact, picker.color.block, picker.color.chrome, picker.color.github, picker.color.twitter, picker.color.withRedux, picker.color.sketch, picker.color.material, picker.color.slider, picker.color.basic, picker.color.basicToggle, picker.color.custom, picker.color.customPointer, picker.color.photoshop, picker.color.swatches, picker.color.basicPositioning, sidebar.documents, sidebar.documents.changelog, sidebar.documents.installation, sidebar.dashboard.listing, sidebar.dashboard.crypto, sidebar.algolia, sidebar.components.rechart, sidebar.components.amchart, sidebar.google.map, sidebar.ammap, sidebar.map.animations.lines, sidebar.map.curved.lines, sidebar.map.zooming.countries, sidebar.map.patterns, sidebar.map.capitals.map, sidebar.map.markers, sidebar.map.flight.routes, sidebar.map.choropleth, sidebar.map.grouped.countries, sidebar.map.bubbles, sidebar.map.drill.down, sidebar.map.multiple.areas, sidebar.map.weather, sidebar.extensions.shuffle, sidebar.extensions.profile, sidebar.social, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"app.announced\":\"Se lanzará una nueva versión el 25 de diciembre. ¡Manténganse al tanto!\",\"sidebar.main\":\"Principal\",\"sidebar.dashboard\":\"Tablero\",\"sidebar.layouts\":\"Diseños\",\"sidebar.dashboard.crm\":\"Crm\",\"sidebar.components\":\"Componentes\",\"sidebar.components.general\":\"General\",\"sidebar.general.button\":\"Botón\",\"sidebar.general.icon\":\"Icono\",\"sidebar.components.navigation\":\"Navegación\",\"sidebar.navigation.affix\":\"Afijo\",\"sidebar.navigation.breadcrumb\":\"Migaja de pan\",\"sidebar.navigation.dropdown\":\"Desplegable\",\"sidebar.navigation.menu\":\"Menú\",\"sidebar.navigation.pagination\":\"Paginación\",\"sidebar.navigation.steps\":\"Pasos\",\"sidebar.components.dataEntry\":\"Entrada de datos\",\"sidebar.dataEntry.autoComplete\":\"Autocompletar\",\"sidebar.dataEntry.checkbox\":\"Caja\",\"sidebar.dataEntry.cascader\":\"Cascader\",\"sidebar.dataEntry.datePicker\":\"Selector de fechas\",\"sidebar.dataEntry.form\":\"Formar\",\"sidebar.dataEntry.inputNumber\":\"Número de entrada\",\"sidebar.dataEntry.input\":\"Entrada\",\"sidebar.dataEntry.mention\":\"Mencionar\",\"sidebar.dataEntry.rate\":\"Tarifa\",\"sidebar.dataEntry.radio\":\"Radio\",\"sidebar.dataEntry.switch\":\"Cambiar\",\"sidebar.dataEntry.slider\":\"Control deslizante\",\"sidebar.dataEntry.select\":\"Seleccionar\",\"sidebar.dataEntry.treeSelect\":\"TreeSelect\",\"sidebar.dataEntry.transfer\":\"Transferir\",\"sidebar.dataEntry.timePicker\":\"Selector de tiempo\",\"sidebar.dataEntry.upload\":\"Subir\",\"sidebar.components.dataDisplay\":\"Visualización de datos\",\"sidebar.dataDisplay.avatar\":\"Avatar\",\"sidebar.dataDisplay.badge\":\"Distintivo\",\"sidebar.dataDisplay.collapse\":\"Colapso\",\"sidebar.dataDisplay.carousel\":\"Carrusel\",\"sidebar.dataDisplay.card\":\"Tarjeta\",\"sidebar.dataDisplay.calender\":\"Calendario\",\"sidebar.dataDisplay.list\":\"Lista\",\"sidebar.dataDisplay.popover\":\"Popover\",\"sidebar.dataDisplay.tree\":\"Árbol\",\"sidebar.dataDisplay.toolTips\":\"Información sobre herramientas\",\"sidebar.dataDisplay.timeLine\":\"Cronología\",\"sidebar.dataDisplay.tag\":\"Etiqueta\",\"sidebar.dataDisplay.tabs\":\"Pestañas\",\"sidebar.dataDisplay.table\":\"Mesa\",\"sidebar.components.feedBack\":\"Realimentación\",\"sidebar.feedBack.alert\":\"Alerta\",\"sidebar.feedBack.modal\":\"Modal\",\"sidebar.feedBack.message\":\"Mensaje\",\"sidebar.feedBack.notification\":\"Notificación\",\"sidebar.feedBack.progress\":\"Progreso\",\"sidebar.feedBack.popConfirm\":\"PopConfirm\",\"sidebar.feedBack.spin\":\"Girar\",\"sidebar.components.other\":\"Otro\",\"sidebar.other.anchor\":\"Ancla\",\"sidebar.other.backTop\":\"BackTop\",\"sidebar.other.divider\":\"Divisor\",\"sidebar.widgets\":\"Widgets\",\"sidebar.metrics\":\"Métrica\",\"sidebar.view\":\"Ver\",\"sidebar.view.basicTable\":\"Tabla básica\",\"sidebar.view.dataTable\":\"Tabla de datos\",\"sidebar.extensions\":\"Extensiones\",\"sidebar.extensions.editior\":\"Editor\",\"sidebar.extensions.dragNDrop\":\"Arrastrar y soltar\",\"sidebar.extensions.sweetAlert\":\"Sweet Alert\",\"sidebar.extensions.notification\":\"Notificación\",\"sidebar.extensions.reactDates\":\"Fechas de reacción\",\"sidebar.extensions.dropZone\":\"Zona de descenso\",\"sidebar.googleMap\":\"Mapa de Google\",\"sidebar.charts\":\"Gráficos\",\"sidebar.apps\":\"Aplicaciones\",\"sidebar.mailApp\":\"Aplicación de correo\",\"sidebar.todoApp\":\"Aplicación de Todo\",\"sidebar.contactsApp\":\"Aplicación Contactos\",\"sidebar.chatApp\":\"Aplicación de chat\",\"sidebar.notes\":\"Notas\",\"sidebar.pickers\":\"Pickers\",\"sidebar.crud\":\"Firebase CRUD\",\"sidebar.pickers.dateTimePickers\":\"Selector de fecha y hora\",\"sidebar.pickers.colorPickers\":\"Selector de color\",\"sidebar.chart\":\"Gráfico\",\"sidebar.chart.line\":\"Gráfico de linea\",\"sidebar.chart.bar\":\"Gráfico de barras\",\"sidebar.chart.area\":\"Carta de área\",\"sidebar.chart.composed\":\"Gráfico compuesto\",\"sidebar.chart.scatter\":\"Gráfico de dispersión\",\"sidebar.chart.pie\":\"Gráfico circular\",\"sidebar.chart.radial\":\"Gráfico radial\",\"sidebar.chart.radar\":\"Gráfico de radar\",\"sidebar.chart.tree\":\"Árbol de Carta\",\"sidebar.map\":\"Mapa de Google\",\"sidebar.map.simple\":\"Mapa simple\",\"sidebar.map.styled\":\"Mapa de estilo\",\"sidebar.map.geoLocation\":\"Ubicación geográfica\",\"sidebar.map.mapDirection\":\"Dirección del mapa\",\"sidebar.map.overlay\":\"Superposición de mapa\",\"sidebar.map.kmLayer\":\"Mapa Km Layer\",\"sidebar.map.popupInfo\":\"Mapa de información emergente\",\"sidebar.map.trafficLayer\":\"Mapa Traffic Layer\",\"sidebar.map.streetView\":\"vista de calle\",\"sidebar.map.eventListener\":\"Escucha del evento\",\"sidebar.map.mapDrawing\":\"Mapa de dibujo\",\"sidebar.map.mapClustering\":\"Agrupación de mapas\",\"sidebar.modules\":\"Módulos\",\"sidebar.calendar\":\"Calendario\",\"sidebar.calendar.basic\":\"BASIC\",\"sidebar.calendar.cultures\":\"Culturas\",\"sidebar.calendar.dnd\":\"Dnd\",\"sidebar.calendar.popup\":\"Surgir\",\"sidebar.calendar.rendering\":\"Representación\",\"sidebar.calendar.selectable\":\"Seleccionable\",\"sidebar.calendar.timeslots\":\"Ranuras de tiempo\",\"sidebar.mail.title\":\"Correo\",\"sidebar.mail.compose\":\"COMPONER\",\"sidebar.mail.mailbox\":\"Buzón\",\"sidebar.mail.filters\":\"filtros\",\"sidebar.mail.labels\":\"Etiquetas\",\"sidebar.eCommerce\":\"eCommerce\",\"sidebar.eCommerce.productList\":\"Lista de productos\",\"sidebar.eCommerce.productGrid\":\"Cuadrícula de producto\",\"sidebar.extraComponents\":\"Componentes extra\",\"sidebar.inBuiltApp\":\"Aplicaciones integradas\",\"sidebar.extraElements.callouts\":\"Gritar\",\"sidebar.extraElements.testimonials\":\"Testimonios\",\"sidebar.timeLine\":\"Time Line\",\"sidebar.timeLine.default\":\"Defecto\",\"sidebar.timeLine.defaultwithIcons\":\"Predeterminado con iconos\",\"sidebar.timeLine.leftAligned\":\"Alineado a la izquierda\",\"sidebar.extraElements.pricingTable\":\"Tabla de precios\",\"sidebar.customViews\":\"Vistas personalizadas\",\"sidebar.listType\":\"Tipo de lista\",\"sidebar.listType.extras\":\"Extras\",\"sidebar.listType.plainListView\":\"Vista de lista simple\",\"sidebar.listType.withDivider\":\"Lista simple con divisor\",\"sidebar.listType.cardListView\":\"Vista de lista de tarjetas\",\"sidebar.extraPages.404\":\"Página de error 404\",\"sidebar.extraPages.500\":\"500 página de error\",\"sidebar.extraPages\":\"Páginas extra\",\"app.userAuth\":\"Usuario Auth\",\"app.userAuth.login\":\"Iniciar sesión\",\"app.userAuth.signIn\":\"Registrarse\",\"app.userAuth.send\":\"ENVIAR\",\"app.userAuth.bySigning\":\"Al registrarse, puede aprovechar las características completas de nuestros servicios.\",\"app.userAuth.or\":\"o\",\"app.userAuth.forgotPassword\":\"Se te olvidó tu contraseña\",\"app.userAuth.forgot\":\"No te preocupes Recuperar la contraseña es fácil. Simplemente díganos el correo electrónico que ha registrado con jumbo\",\"app.userAuth.signUp\":\"Regístrate\",\"app.userAuth.getAccount\":\"Obtener una cuenta !!!\",\"app.userAuth.resetPassword\":\"Restablecer la contraseña\",\"app.userAuth.reset\":\"REINICIAR\",\"app.userAuth.lockScreen\":\"Bloquear pantalla\",\"app.userAuth.unLock\":\"DESBLOQUEAR\",\"appModule.enterPasswordUnlock\":\"¡Ingresa tu contraseña para desbloquear la pantalla!\",\"appModule.enterPasswordReset\":\"Ingrese una nueva contraseña para su cuenta\",\"appModule.loginSuccessfully\":\"Iniciar sesión exitosamente\",\"appModule.password\":\"Contraseña\",\"appModule.email\":\"Email\",\"appModule.name\":\"Nombre\",\"appModule.phone\":\"Teléfono\",\"appModule.designation\":\"Designacion\",\"appModule.regsiter\":\"Registro\",\"appModule.regsiterNow\":\"Registrarse No\",\"appModule.hvAccount\":\"Tener una cuenta\",\"appModule.createAccount\":\"Crea una cuenta\",\"appModule.termAndCondition\":\"Término y condición\",\"appModule.iAccept\":\"registrándome, acepto\",\"todo\":\"Que hacer\",\"todo.addTask\":\"AGREGAR TAREA\",\"todo.all\":\"Todas\",\"todo.filters\":\"Filtros\",\"todo.labels\":\"Etiquetas\",\"chat.selectUserChat\":\"Seleccionar usuario para iniciar el chat\",\"chat.selectContactChat\":\"Seleccionar contacto para iniciar el chat\",\"chat.chatUser\":\"Chats\",\"chat.contacts\":\"Contactos\",\"chat.searchStartNewChat\":\"Buscar o iniciar un chat nuevo\",\"chat.typeMessage\":\"Escribe y presiona enter para enviar el mensaje\",\"chat.status\":\"es un estado ... no es tu diario ...\",\"contact.saveContact\":\"Guardar contacto\",\"contact.addContact\":\"Agregar contacto\",\"contact.searchContact\":\"Buscar contacto\",\"mail.mailbox\":\"Buzón\",\"mail.compose\":\"COMPONER\",\"mail.filters\":\"Filtros\",\"mail.labels\":\"Etiquetas\",\"mail.title\":\"Nuevo mensaje\",\"eCommerce.buyNow\":\"Compra ahora\",\"eCommerce.addToCart\":\"AÑADIR A LA CESTA\",\"eCommerce.readMore\":\"LEE MAS\",\"callouts.viewRange\":\"VER RANGO\",\"callouts.basic\":\"BASIC\",\"extraElements.callout\":\"Elemento extra\",\"testimonials.basic\":\"BASIC\",\"testimonials.classic\":\"Clásico\",\"testimonials.standard\":\"Estándar\",\"extraElements.testimonials\":\"Testimonios\",\"button.modify\":\"Modificar\",\"button.delete\":\"Borrar\",\"pricingTable.basic\":\"BASIC\",\"pricingTable.circle\":\"Circulo\",\"pricingTable.classic\":\"Clásico\",\"pricingTable.dark\":\"Oscuro\",\"pricingTable.personal\":\"PERSONAL\",\"pricingTable.easyTranslation\":\"Traducción fácil\",\"pricingTable.awesomeGoogleFonts\":\"Fuentes increíbles de Google\",\"pricingTable.hotelBookingSystem\":\"Sistema de reserva de hotel\",\"pricingTable.emailComposeInterface\":\"Interfaz de redacción de correo electrónico\",\"pricingTable.locationFinderApp\":\"Aplicación de buscador de ubicación\",\"pricingTable.buyNow\":\"Compra ahora...\",\"pricingTable.business\":\"NEGOCIO\",\"pricingTable.professional\":\"PROFESIONAL\",\"button.yes\":\"Sí\",\"button.no\":\"No\",\"extraPages.404Msg\":\"Vaya, ha ocurrido un error. ¡Página no encontrada!\",\"extraPages.500Msg\":\"Lo siento, el servidor sale mal\",\"extraPages.goHome\":\"Ir a casa\",\"extension.sweetAlerts\":\"Sweet Alerts\",\"sweetAlerts.basic\":\"BASIC\",\"sweetAlerts.description\":\"Con descripción\",\"sweetAlerts.success\":\"Éxito\",\"sweetAlerts.warning\":\"Advertencia\",\"sweetAlerts.custom\":\"Personalizado\",\"sweetAlerts.htmlTag\":\"Etiqueta Html\",\"sweetAlerts.prompt\":\"Rápido\",\"sweetAlerts.itsBlue\":\"¡Es azul!\",\"sweetAlerts.passwordPrompt\":\"Indicación de contraseña\",\"sweetAlerts.customStyle\":\"Estilo personalizado\",\"sweetAlerts.itPretty\":\"Es lindo, ¿verdad?\",\"sweetAlerts.btnClicked\":\"Hiciste clic en el botón!\",\"sweetAlerts.youWillFind\":\"¡Encontrarás que están listos!\",\"sweetAlerts.youWillNotAble\":\"¡No podrás recuperar este archivo imaginario!\",\"sweetAlerts.hereIsaMessage\":\"¡Aquí hay un mensaje!\",\"sweetAlerts.goodJob\":\"¡Buen trabajo!\",\"sweetAlerts.yesDeleteIt\":\"Sí, eliminarlo!\",\"sweetAlerts.areYouSure\":\"¿Estás seguro?\",\"sweetAlerts.doYouLikeThumb\":\"¿Te gustan los pulgares?\",\"sweetAlerts.anInput\":\"Una entrada!\",\"sweetAlerts.writeSomethingInteresting\":\"Escribe algo interesante:\",\"sweetAlerts.writeSomething\":\"Escribe algo\",\"sweetAlerts.youMustEnterPassword\":\"¡Debes ingresar tu contraseña!\",\"sweetAlerts.enterPassword\":\"Introducir la contraseña\",\"extension.notification\":\"Notificación\",\"notification.infoMsg\":\"Mensaje de información\",\"notification.successMessage\":\"Mensaje de éxito\",\"notification.warningMessage\":\"Mensaje de advertencia\",\"notification.closeAfter3000ms\":\"Cerrar después de 3000ms\",\"notification.errorMessage\":\"Mensaje de error\",\"notification.titleHere\":\"Título aquí\",\"notification.clickMe\":\"¡Haz click en mi!\",\"notification.info\":\"Información\",\"notification.success\":\"Éxito\",\"notification.warning\":\"Advertencia\",\"notification.error\":\"Error\",\"sidebar.editors\":\"Editores\",\"sidebar.editors.CKEditor\":\"CKEditor\",\"sidebar.editors.WYSISWYGEditor\":\"Editor WYSIWYG\",\"picker.color.alpha\":\"Recolectores alfa\",\"picker.color.hue\":\"Recogedores de tono\",\"picker.color.circle\":\"Seleccionadores de círculo\",\"picker.color.compact\":\"Selector compacto\",\"picker.color.block\":\"Selector de bloque\",\"picker.color.chrome\":\"Recogedores de Chrome\",\"picker.color.github\":\"Segadores Github\",\"picker.color.twitter\":\"Seleccionadores de Twitter\",\"picker.color.withRedux\":\"Con Redux\",\"picker.color.sketch\":\"Recogedores de bosquejos\",\"picker.color.material\":\"Recogedores de materiales\",\"picker.color.slider\":\"Seleccionadores de control deslizante\",\"picker.color.basic\":\"Selector básico\",\"picker.color.basicToggle\":\"Alternar básico\",\"picker.color.custom\":\"Recogedores personalizados\",\"picker.color.customPointer\":\"Puntero personalizado\",\"picker.color.photoshop\":\"Selector de Photoshop\",\"picker.color.swatches\":\"Selector de muestras\",\"picker.color.basicPositioning\":\"Posicionamiento Básico\",\"sidebar.documents\":\"Documentos\",\"sidebar.documents.changelog\":\"Registro de cambios\",\"sidebar.documents.installation\":\"Instalación\",\"sidebar.dashboard.listing\":\"Listing\",\"sidebar.dashboard.crypto\":\"Crypto\",\"sidebar.algolia\":\"Algolia\",\"sidebar.components.rechart\":\"ReChart\",\"sidebar.components.amchart\":\"AmChart\",\"sidebar.google.map\":\"Google Map\",\"sidebar.ammap\":\"AmMap\",\"sidebar.map.animations.lines\":\"Con animaciones\",\"sidebar.map.curved.lines\":\"Con líneas curvas\",\"sidebar.map.zooming.countries\":\"Zooming Países\",\"sidebar.map.patterns\":\"Mapa con patrones\",\"sidebar.map.capitals.map\":\"Mapa de capitales\",\"sidebar.map.markers\":\"Marcadores de mapa\",\"sidebar.map.flight.routes\":\"Rutas de vuelo\",\"sidebar.map.choropleth\":\"Mapa de calor\",\"sidebar.map.grouped.countries\":\"Países agrupados\",\"sidebar.map.bubbles\":\"Mapa con burbujas\",\"sidebar.map.drill.down\":\"Drill Down Map\",\"sidebar.map.multiple.areas\":\"Áreas múltiples\",\"sidebar.map.weather\":\"Weather map\",\"sidebar.extensions.shuffle\":\"Barajar\",\"sidebar.extensions.profile\":\"Perfil\",\"sidebar.social\":\"Aplicaciones sociales\"}");

/***/ }),

/***/ "./lngProvider/locales/fr_FR.json":
/*!****************************************!*\
  !*** ./lngProvider/locales/fr_FR.json ***!
  \****************************************/
/*! exports provided: app.announced, sidebar.main, sidebar.dashboard, sidebar.layouts, sidebar.dashboard.crm, sidebar.components, sidebar.components.general, sidebar.general.button, sidebar.general.icon, sidebar.components.navigation, sidebar.navigation.affix, sidebar.navigation.breadcrumb, sidebar.navigation.dropdown, sidebar.navigation.menu, sidebar.navigation.pagination, sidebar.navigation.steps, sidebar.components.dataEntry, sidebar.dataEntry.autoComplete, sidebar.dataEntry.checkbox, sidebar.dataEntry.cascader, sidebar.dataEntry.datePicker, sidebar.dataEntry.form, sidebar.dataEntry.inputNumber, sidebar.dataEntry.input, sidebar.dataEntry.mention, sidebar.dataEntry.rate, sidebar.dataEntry.radio, sidebar.dataEntry.switch, sidebar.dataEntry.slider, sidebar.dataEntry.select, sidebar.dataEntry.treeSelect, sidebar.dataEntry.transfer, sidebar.dataEntry.timePicker, sidebar.dataEntry.upload, sidebar.components.dataDisplay, sidebar.dataDisplay.avatar, sidebar.dataDisplay.badge, sidebar.dataDisplay.collapse, sidebar.dataDisplay.carousel, sidebar.dataDisplay.card, sidebar.dataDisplay.calender, sidebar.dataDisplay.list, sidebar.dataDisplay.popover, sidebar.dataDisplay.tree, sidebar.dataDisplay.toolTips, sidebar.dataDisplay.timeLine, sidebar.dataDisplay.tag, sidebar.dataDisplay.tabs, sidebar.dataDisplay.table, sidebar.components.feedBack, sidebar.feedBack.alert, sidebar.feedBack.modal, sidebar.feedBack.message, sidebar.feedBack.notification, sidebar.feedBack.progress, sidebar.feedBack.popConfirm, sidebar.feedBack.spin, sidebar.components.other, sidebar.other.anchor, sidebar.other.backTop, sidebar.other.divider, sidebar.widgets, sidebar.metrics, sidebar.view, sidebar.view.basicTable, sidebar.view.dataTable, sidebar.extensions, sidebar.extensions.editior, sidebar.extensions.dragNDrop, sidebar.extensions.sweetAlert, sidebar.extensions.notification, sidebar.extensions.reactDates, sidebar.extensions.dropZone, sidebar.googleMap, sidebar.charts, sidebar.apps, sidebar.mailApp, sidebar.todoApp, sidebar.contactsApp, sidebar.chatApp, sidebar.notes, sidebar.pickers, sidebar.crud, sidebar.pickers.dateTimePickers, sidebar.pickers.colorPickers, sidebar.chart, sidebar.chart.line, sidebar.chart.bar, sidebar.chart.area, sidebar.chart.composed, sidebar.chart.scatter, sidebar.chart.pie, sidebar.chart.radial, sidebar.chart.radar, sidebar.chart.tree, sidebar.map, sidebar.map.simple, sidebar.map.styled, sidebar.map.geoLocation, sidebar.map.mapDirection, sidebar.map.overlay, sidebar.map.kmLayer, sidebar.map.popupInfo, sidebar.map.trafficLayer, sidebar.map.streetView, sidebar.map.eventListener, sidebar.map.mapDrawing, sidebar.map.mapClustering, sidebar.modules, sidebar.calendar, sidebar.calendar.basic, sidebar.calendar.cultures, sidebar.calendar.dnd, sidebar.calendar.popup, sidebar.calendar.rendering, sidebar.calendar.selectable, sidebar.calendar.timeslots, sidebar.mail.title, sidebar.mail.compose, sidebar.mail.mailbox, sidebar.mail.filters, sidebar.mail.labels, sidebar.eCommerce, sidebar.eCommerce.productList, sidebar.eCommerce.productGrid, sidebar.extraComponents, sidebar.inBuiltApp, sidebar.extraElements.callouts, sidebar.extraElements.testimonials, sidebar.timeLine, sidebar.timeLine.default, sidebar.timeLine.defaultwithIcons, sidebar.timeLine.leftAligned, sidebar.extraElements.pricingTable, sidebar.customViews, sidebar.listType, sidebar.listType.extras, sidebar.listType.plainListView, sidebar.listType.withDivider, sidebar.listType.cardListView, sidebar.extraPages.404, sidebar.extraPages.500, sidebar.extraPages, app.userAuth, app.userAuth.login, app.userAuth.signIn, app.userAuth.send, app.userAuth.bySigning, app.userAuth.or, app.userAuth.forgotPassword, app.userAuth.forgot, app.userAuth.signUp, app.userAuth.getAccount, app.userAuth.resetPassword, app.userAuth.reset, app.userAuth.lockScreen, app.userAuth.unLock, appModule.enterPasswordUnlock, appModule.enterPasswordReset, appModule.loginSuccessfully, appModule.password, appModule.email, appModule.name, appModule.phone, appModule.designation, appModule.regsiter, appModule.regsiterNow, appModule.hvAccount, appModule.createAccount, appModule.termAndCondition, appModule.iAccept, todo, todo.addTask, todo.all, todo.filters, todo.labels, chat.selectUserChat, chat.selectContactChat, chat.chatUser, chat.contacts, chat.searchStartNewChat, chat.typeMessage, chat.status, contact.saveContact, contact.addContact, contact.searchContact, mail.mailbox, mail.compose, mail.filters, mail.labels, mail.title, eCommerce.buyNow, eCommerce.addToCart, eCommerce.readMore, callouts.viewRange, callouts.basic, extraElements.callout, testimonials.basic, testimonials.classic, testimonials.standard, extraElements.testimonials, button.modify, button.delete, pricingTable.basic, pricingTable.circle, pricingTable.classic, pricingTable.dark, pricingTable.personal, pricingTable.easyTranslation, pricingTable.awesomeGoogleFonts, pricingTable.hotelBookingSystem, pricingTable.emailComposeInterface, pricingTable.locationFinderApp, pricingTable.buyNow, pricingTable.business, pricingTable.professional, button.yes, button.no, extraPages.404Msg, extraPages.500Msg, extraPages.goHome, extension.sweetAlerts, sweetAlerts.basic, sweetAlerts.description, sweetAlerts.success, sweetAlerts.warning, sweetAlerts.custom, sweetAlerts.htmlTag, sweetAlerts.prompt, sweetAlerts.itsBlue, sweetAlerts.passwordPrompt, sweetAlerts.customStyle, sweetAlerts.itPretty, sweetAlerts.btnClicked, sweetAlerts.youWillFind, sweetAlerts.youWillNotAble, sweetAlerts.hereIsaMessage, sweetAlerts.goodJob, sweetAlerts.yesDeleteIt, sweetAlerts.areYouSure, sweetAlerts.doYouLikeThumb, sweetAlerts.anInput, sweetAlerts.writeSomethingInteresting, sweetAlerts.writeSomething, sweetAlerts.youMustEnterPassword, sweetAlerts.enterPassword, extension.notification, notification.infoMsg, notification.successMessage, notification.warningMessage, notification.closeAfter3000ms, notification.errorMessage, notification.titleHere, notification.clickMe, notification.info, notification.success, notification.warning, notification.error, sidebar.editors, sidebar.editors.CKEditor, sidebar.editors.WYSISWYGEditor, picker.color.alpha, picker.color.hue, picker.color.circle, picker.color.compact, picker.color.block, picker.color.chrome, picker.color.github, picker.color.twitter, picker.color.withRedux, picker.color.sketch, picker.color.material, picker.color.slider, picker.color.basic, picker.color.basicToggle, picker.color.custom, picker.color.customPointer, picker.color.photoshop, picker.color.swatches, picker.color.basicPositioning, sidebar.documents, sidebar.documents.changelog, sidebar.documents.installation, sidebar.dashboard.listing, sidebar.dashboard.crypto, sidebar.algolia, sidebar.components.rechart, sidebar.components.amchart, sidebar.google.map, sidebar.ammap, sidebar.map.animations.lines, sidebar.map.curved.lines, sidebar.map.zooming.countries, sidebar.map.patterns, sidebar.map.capitals.map, sidebar.map.markers, sidebar.map.flight.routes, sidebar.map.choropleth, sidebar.map.grouped.countries, sidebar.map.bubbles, sidebar.map.drill.down, sidebar.map.multiple.areas, sidebar.map.weather, sidebar.extensions.shuffle, sidebar.extensions.profile, sidebar.social, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"app.announced\":\"Une nouvelle version sortira le 25 décembre. Restez à l'écoute!\",\"sidebar.main\":\"Principale\",\"sidebar.dashboard\":\"Tableau de bord\",\"sidebar.layouts\":\"Layouts\",\"sidebar.dashboard.crm\":\"Crm\",\"sidebar.components\":\"Composants\",\"sidebar.components.general\":\"Général\",\"sidebar.general.button\":\"Bouton\",\"sidebar.general.icon\":\"Icône\",\"sidebar.components.navigation\":\"La navigation\",\"sidebar.navigation.affix\":\"Affixe\",\"sidebar.navigation.breadcrumb\":\"Miette de pain\",\"sidebar.navigation.dropdown\":\"Menu déroulant\",\"sidebar.navigation.menu\":\"Menu\",\"sidebar.navigation.pagination\":\"Pagination\",\"sidebar.navigation.steps\":\"Pas\",\"sidebar.components.dataEntry\":\"La saisie des données\",\"sidebar.dataEntry.autoComplete\":\"Saisie semi-automatique\",\"sidebar.dataEntry.checkbox\":\"Case à cocher\",\"sidebar.dataEntry.cascader\":\"Cascader\",\"sidebar.dataEntry.datePicker\":\"Sélecteur de date\",\"sidebar.dataEntry.form\":\"Forme\",\"sidebar.dataEntry.inputNumber\":\"InputNumber\",\"sidebar.dataEntry.input\":\"Contribution\",\"sidebar.dataEntry.mention\":\"Mention\",\"sidebar.dataEntry.rate\":\"Taux\",\"sidebar.dataEntry.radio\":\"Radio\",\"sidebar.dataEntry.switch\":\"Commutateur\",\"sidebar.dataEntry.slider\":\"Slider\",\"sidebar.dataEntry.select\":\"Sélectionner\",\"sidebar.dataEntry.treeSelect\":\"TreeSelect\",\"sidebar.dataEntry.transfer\":\"Transfert\",\"sidebar.dataEntry.timePicker\":\"Time Picker\",\"sidebar.dataEntry.upload\":\"Télécharger\",\"sidebar.components.dataDisplay\":\"Affichage des données\",\"sidebar.dataDisplay.avatar\":\"Avatar\",\"sidebar.dataDisplay.badge\":\"Badge\",\"sidebar.dataDisplay.collapse\":\"Effondrer\",\"sidebar.dataDisplay.carousel\":\"Carrousel\",\"sidebar.dataDisplay.card\":\"Carte\",\"sidebar.dataDisplay.calender\":\"Calendrier\",\"sidebar.dataDisplay.list\":\"liste\",\"sidebar.dataDisplay.popover\":\"Popover\",\"sidebar.dataDisplay.tree\":\"Arbre\",\"sidebar.dataDisplay.toolTips\":\"Info-bulles\",\"sidebar.dataDisplay.timeLine\":\"Chronologie\",\"sidebar.dataDisplay.tag\":\"Marque\",\"sidebar.dataDisplay.tabs\":\"Tabs\",\"sidebar.dataDisplay.table\":\"Table\",\"sidebar.components.feedBack\":\"Retour d'information\",\"sidebar.feedBack.alert\":\"Alerte\",\"sidebar.feedBack.modal\":\"Modal\",\"sidebar.feedBack.message\":\"Message\",\"sidebar.feedBack.notification\":\"Notification\",\"sidebar.feedBack.progress\":\"Le progrès\",\"sidebar.feedBack.popConfirm\":\"PopConfirm\",\"sidebar.feedBack.spin\":\"Tourner\",\"sidebar.components.other\":\"Autre\",\"sidebar.other.anchor\":\"Ancre\",\"sidebar.other.backTop\":\"BackTop\",\"sidebar.other.divider\":\"Diviseur\",\"sidebar.widgets\":\"Widgets\",\"sidebar.metrics\":\"Métrique\",\"sidebar.view\":\"Vue\",\"sidebar.view.basicTable\":\"Table de base\",\"sidebar.view.dataTable\":\"Tableau de données\",\"sidebar.extensions\":\"Extensions\",\"sidebar.extensions.editior\":\"Éditeur\",\"sidebar.extensions.dragNDrop\":\"Drag & Drop\",\"sidebar.extensions.sweetAlert\":\"Alerte douce\",\"sidebar.extensions.notification\":\"Notification\",\"sidebar.extensions.reactDates\":\"Réagissez les dates\",\"sidebar.extensions.dropZone\":\"Zone de largage\",\"sidebar.googleMap\":\"Google Map\",\"sidebar.charts\":\"Graphiques\",\"sidebar.apps\":\"applications\",\"sidebar.mailApp\":\"Application de messagerie\",\"sidebar.todoApp\":\"Todo App\",\"sidebar.contactsApp\":\"Contacts App\",\"sidebar.chatApp\":\"App chat\",\"sidebar.notes\":\"Remarques\",\"sidebar.pickers\":\"Pickers\",\"sidebar.crud\":\"Firebase CRUD\",\"sidebar.pickers.dateTimePickers\":\"Sélecteurs de date et d'heure\",\"sidebar.pickers.colorPickers\":\"Color Pickers\",\"sidebar.chart\":\"Graphique\",\"sidebar.chart.line\":\"Graphique en ligne\",\"sidebar.chart.bar\":\"Diagramme à bandes\",\"sidebar.chart.area\":\"Graphique de zone\",\"sidebar.chart.composed\":\"Tableau composé\",\"sidebar.chart.scatter\":\"Diagramme de dispersion\",\"sidebar.chart.pie\":\"Camembert\",\"sidebar.chart.radial\":\"Graphique radial\",\"sidebar.chart.radar\":\"Graphique radar\",\"sidebar.chart.tree\":\"Arbre\",\"sidebar.map\":\"Google Map\",\"sidebar.map.simple\":\"Carte simple\",\"sidebar.map.styled\":\"Carte stylée\",\"sidebar.map.geoLocation\":\"Emplacement géographique\",\"sidebar.map.mapDirection\":\"Direction de la carte\",\"sidebar.map.overlay\":\"Superposition de carte\",\"sidebar.map.kmLayer\":\"Carte Km Layer\",\"sidebar.map.popupInfo\":\"Map Popup Info\",\"sidebar.map.trafficLayer\":\"Couche routière\",\"sidebar.map.streetView\":\"Street View\",\"sidebar.map.eventListener\":\"Event Listener\",\"sidebar.map.mapDrawing\":\"Dessin de carte\",\"sidebar.map.mapClustering\":\"Clustering de carte\",\"sidebar.modules\":\"Modules\",\"sidebar.calendar\":\"Calendrier\",\"sidebar.calendar.basic\":\"De base\",\"sidebar.calendar.cultures\":\"Des cultures\",\"sidebar.calendar.dnd\":\"Dnd\",\"sidebar.calendar.popup\":\"Apparaitre\",\"sidebar.calendar.rendering\":\"Le rendu\",\"sidebar.calendar.selectable\":\"Sélectionnable\",\"sidebar.calendar.timeslots\":\"Tranches de temps\",\"sidebar.mail.title\":\"Courrier\",\"sidebar.mail.compose\":\"COMPOSER\",\"sidebar.mail.mailbox\":\"Boites aux lettres\",\"sidebar.mail.filters\":\"filtres\",\"sidebar.mail.labels\":\"Étiquettes\",\"sidebar.eCommerce\":\"commerce électronique\",\"sidebar.eCommerce.productList\":\"Liste de produits\",\"sidebar.eCommerce.productGrid\":\"Grille de produit\",\"sidebar.extraComponents\":\"Composants supplémentaires\",\"sidebar.inBuiltApp\":\"Applications intégrées\",\"sidebar.extraElements.callouts\":\"Faire appel à\",\"sidebar.extraElements.testimonials\":\"Témoignages\",\"sidebar.timeLine\":\"Chronologie\",\"sidebar.timeLine.default\":\"Défaut\",\"sidebar.timeLine.defaultwithIcons\":\"Par défaut avec des icônes\",\"sidebar.timeLine.leftAligned\":\"Aligné à gauche\",\"sidebar.extraElements.pricingTable\":\"Tableau de tarification\",\"sidebar.customViews\":\"Affichages personnalisés\",\"sidebar.listType\":\"Type de liste\",\"sidebar.listType.extras\":\"Extras\",\"sidebar.listType.plainListView\":\"Vue en liste simple\",\"sidebar.listType.withDivider\":\"Liste simple avec diviseur\",\"sidebar.listType.cardListView\":\"Vue liste de cartes\",\"sidebar.extraPages.404\":\"404 Page d'erreur\",\"sidebar.extraPages.500\":\"500 Page d'erreur\",\"sidebar.extraPages\":\"Pages supplémentaires\",\"app.userAuth\":\"Authentification utilisateur\",\"app.userAuth.login\":\"S'identifier\",\"app.userAuth.signIn\":\"Se connecter\",\"app.userAuth.send\":\"ENVOYER\",\"app.userAuth.bySigning\":\"En vous inscrivant, vous pouvez profiter des caractéristiques complètes de nos services.\",\"app.userAuth.or\":\"ou\",\"app.userAuth.forgotPassword\":\"Mot de passe oublié\",\"app.userAuth.forgot\":\"Ne t'inquiète pas. Récupérer le mot de passe est facile. Dites-nous simplement l'email que vous avez enregistré avec jumbo\",\"app.userAuth.signUp\":\"S'inscrire\",\"app.userAuth.getAccount\":\"Avoir un compte !!!\",\"app.userAuth.resetPassword\":\"réinitialiser le mot de passe\",\"app.userAuth.reset\":\"RÉINITIALISER\",\"app.userAuth.lockScreen\":\"Écran verrouillé\",\"app.userAuth.unLock\":\"OUVRIR\",\"appModule.enterPasswordUnlock\":\"Entrez votre mot de passe pour déverrouiller l'écran!\",\"appModule.enterPasswordReset\":\"Entrez un nouveau mot de passe pour votre compte\",\"appModule.loginSuccessfully\":\"Connectez-vous avec succès\",\"appModule.password\":\"Mot de passe\",\"appModule.email\":\"Email\",\"appModule.name\":\"prénom\",\"appModule.phone\":\"Téléphone\",\"appModule.designation\":\"La désignation\",\"appModule.regsiter\":\"registre\",\"appModule.regsiterNow\":\"Inscrivez-vous Non\",\"appModule.hvAccount\":\"Avoir un compte\",\"appModule.createAccount\":\"Créer un compte\",\"appModule.termAndCondition\":\"Terme et condition\",\"appModule.iAccept\":\"en vous inscrivant, j'accepte\",\"todo\":\"Faire\",\"todo.addTask\":\"AJOUTER UNE TÂCHE\",\"todo.all\":\"Tout\",\"todo.filters\":\"Filtres\",\"todo.labels\":\"Étiquettes\",\"chat.selectUserChat\":\"Sélectionnez Utilisateur pour lancer le chat\",\"chat.selectContactChat\":\"Sélectionnez le contact pour démarrer le chat\",\"chat.chatUser\":\"Chats\",\"chat.contacts\":\"Contacts\",\"chat.searchStartNewChat\":\"Rechercher ou démarrer une nouvelle discussion\",\"chat.typeMessage\":\"Tapez et appuyez sur Entrée pour envoyer un message\",\"chat.status\":\"c'est un statut ... pas votre journal ...\",\"contact.saveContact\":\"Enregistrer le contact\",\"contact.addContact\":\"Ajouter le contact\",\"contact.searchContact\":\"Rechercher un contact\",\"mail.mailbox\":\"Boites aux lettres\",\"mail.compose\":\"COMPOSER\",\"mail.filters\":\"Filtres\",\"mail.labels\":\"Étiquettes\",\"mail.title\":\"Nouveau message\",\"eCommerce.buyNow\":\"Acheter maintenant\",\"eCommerce.addToCart\":\"AJOUTER AU PANIER\",\"eCommerce.readMore\":\"LIRE LA SUITE\",\"callouts.viewRange\":\"VOIR LA GAMME\",\"callouts.basic\":\"De base\",\"extraElements.callout\":\"Elément supplémentaire\",\"testimonials.basic\":\"De base\",\"testimonials.classic\":\"Classique\",\"testimonials.standard\":\"la norme\",\"extraElements.testimonials\":\"Témoignages\",\"button.modify\":\"Modifier\",\"button.delete\":\"Effacer\",\"pricingTable.basic\":\"De base\",\"pricingTable.circle\":\"Cercle\",\"pricingTable.classic\":\"Classique\",\"pricingTable.dark\":\"Foncé\",\"pricingTable.personal\":\"PERSONNEL\",\"pricingTable.easyTranslation\":\"Traduction facile\",\"pricingTable.awesomeGoogleFonts\":\"Impressionnant Google Fonts\",\"pricingTable.hotelBookingSystem\":\"Système de réservation d'hôtel\",\"pricingTable.emailComposeInterface\":\"Email Compose Interface\",\"pricingTable.locationFinderApp\":\"Application de localisation\",\"pricingTable.buyNow\":\"Acheter maintenant\",\"pricingTable.business\":\"ENTREPRISE\",\"pricingTable.professional\":\"PROFESSIONNEL\",\"button.yes\":\"Oui\",\"button.no\":\"Non\",\"extraPages.404Msg\":\"Oups, une erreur s'est produite. Page non trouvée!\",\"extraPages.500Msg\":\"Désolé, le serveur va mal\",\"extraPages.goHome\":\"Aller à la maison\",\"extension.sweetAlerts\":\"Alertes douces\",\"sweetAlerts.basic\":\"De base\",\"sweetAlerts.description\":\"Avec description\",\"sweetAlerts.success\":\"Succès\",\"sweetAlerts.warning\":\"Attention\",\"sweetAlerts.custom\":\"Douane\",\"sweetAlerts.htmlTag\":\"Balise Html\",\"sweetAlerts.prompt\":\"Rapide\",\"sweetAlerts.itsBlue\":\"C'est bleu!\",\"sweetAlerts.passwordPrompt\":\"Invite de mot de passe\",\"sweetAlerts.customStyle\":\"Style personnalisé\",\"sweetAlerts.itPretty\":\"C'est joli, n'est-ce pas?\",\"sweetAlerts.btnClicked\":\"Vous avez cliqué sur le bouton!\",\"sweetAlerts.youWillFind\":\"Vous trouverez qu'ils sont en place!\",\"sweetAlerts.youWillNotAble\":\"Vous ne serez pas capable de récupérer ce fichier imaginaire!\",\"sweetAlerts.hereIsaMessage\":\"Voici un message!\",\"sweetAlerts.goodJob\":\"Bon travail!\",\"sweetAlerts.yesDeleteIt\":\"Oui, supprimez-le!\",\"sweetAlerts.areYouSure\":\"Êtes-vous sûr?\",\"sweetAlerts.doYouLikeThumb\":\"Aimez-vous les pouces?\",\"sweetAlerts.anInput\":\"Une entrée!\",\"sweetAlerts.writeSomethingInteresting\":\"Ecrire quelque chose d'intéressant:\",\"sweetAlerts.writeSomething\":\"Écris quelque chose\",\"sweetAlerts.youMustEnterPassword\":\"Vous devez entrer votre mot de passe!\",\"sweetAlerts.enterPassword\":\"Entrer le mot de passe\",\"extension.notification\":\"Notification\",\"notification.infoMsg\":\"Message d'information\",\"notification.successMessage\":\"Message de réussite\",\"notification.warningMessage\":\"Message d'alerte\",\"notification.closeAfter3000ms\":\"Fermer après 3000ms\",\"notification.errorMessage\":\"Message d'erreur\",\"notification.titleHere\":\"Titre ici\",\"notification.clickMe\":\"Clique moi!\",\"notification.info\":\"Info\",\"notification.success\":\"Succès\",\"notification.warning\":\"Attention\",\"notification.error\":\"Erreur\",\"sidebar.editors\":\"Éditeurs\",\"sidebar.editors.CKEditor\":\"CKEditor\",\"sidebar.editors.WYSISWYGEditor\":\"Éditeur WYSIWYG\",\"picker.color.alpha\":\"Alpha Pickers\",\"picker.color.hue\":\"Pickers de teinte\",\"picker.color.circle\":\"Cueilleurs de cercle\",\"picker.color.compact\":\"Pickers compacts\",\"picker.color.block\":\"Ramasseurs de blocs\",\"picker.color.chrome\":\"Chrome Pickers\",\"picker.color.github\":\"Github Cueilleurs\",\"picker.color.twitter\":\"Capteurs Twitter\",\"picker.color.withRedux\":\"Avec Redux\",\"picker.color.sketch\":\"Sketch Pickers\",\"picker.color.material\":\"Ramasseurs de matériel\",\"picker.color.slider\":\"Sliders Pickers\",\"picker.color.basic\":\"Cueilleurs de base\",\"picker.color.basicToggle\":\"Bascule basique\",\"picker.color.custom\":\"Pickers personnalisés\",\"picker.color.customPointer\":\"Pointeur personnalisé\",\"picker.color.photoshop\":\"Photoshop Pickers\",\"picker.color.swatches\":\"Nuanciers\",\"picker.color.basicPositioning\":\"Positionnement de base\",\"sidebar.documents\":\"Documents\",\"sidebar.documents.changelog\":\"Changelog\",\"sidebar.documents.installation\":\"Installation\",\"sidebar.dashboard.listing\":\"Inscription\",\"sidebar.dashboard.crypto\":\"Crypto\",\"sidebar.algolia\":\"Algolia\",\"sidebar.components.rechart\":\"ReChart\",\"sidebar.components.amchart\":\"AmChart\",\"sidebar.google.map\":\"Google Map\",\"sidebar.ammap\":\"AmMap\",\"sidebar.map.animations.lines\":\"Avec des animations\",\"sidebar.map.curved.lines\":\"Avec des lignes courbes\",\"sidebar.map.zooming.countries\":\"Zoom pays\",\"sidebar.map.patterns\":\"Carte avec des motifs\",\"sidebar.map.capitals.map\":\"Carte des capitales\",\"sidebar.map.markers\":\"Marqueurs de carte\",\"sidebar.map.flight.routes\":\"Routes de vol\",\"sidebar.map.choropleth\":\"Carte de chaleur\",\"sidebar.map.grouped.countries\":\"Pays groupés\",\"sidebar.map.bubbles\":\"Map with Bubbles\",\"sidebar.map.drill.down\":\"Drill Down Map\",\"sidebar.map.multiple.areas\":\"Plusieurs zones\",\"sidebar.map.weather\":\"Carte météorologique\",\"sidebar.extensions.shuffle\":\"Mélanger\",\"sidebar.extensions.profile\":\"Profil\",\"sidebar.social\":\"Applications sociales\"}");

/***/ }),

/***/ "./lngProvider/locales/it_IT.json":
/*!****************************************!*\
  !*** ./lngProvider/locales/it_IT.json ***!
  \****************************************/
/*! exports provided: app.announced, sidebar.main, sidebar.dashboard, sidebar.layouts, sidebar.dashboard.crm, sidebar.components, sidebar.components.general, sidebar.general.button, sidebar.general.icon, sidebar.components.navigation, sidebar.navigation.affix, sidebar.navigation.breadcrumb, sidebar.navigation.dropdown, sidebar.navigation.menu, sidebar.navigation.pagination, sidebar.navigation.steps, sidebar.components.dataEntry, sidebar.dataEntry.autoComplete, sidebar.dataEntry.checkbox, sidebar.dataEntry.cascader, sidebar.dataEntry.datePicker, sidebar.dataEntry.form, sidebar.dataEntry.inputNumber, sidebar.dataEntry.input, sidebar.dataEntry.mention, sidebar.dataEntry.rate, sidebar.dataEntry.radio, sidebar.dataEntry.switch, sidebar.dataEntry.slider, sidebar.dataEntry.select, sidebar.dataEntry.treeSelect, sidebar.dataEntry.transfer, sidebar.dataEntry.timePicker, sidebar.dataEntry.upload, sidebar.components.dataDisplay, sidebar.dataDisplay.avatar, sidebar.dataDisplay.badge, sidebar.dataDisplay.collapse, sidebar.dataDisplay.carousel, sidebar.dataDisplay.card, sidebar.dataDisplay.calender, sidebar.dataDisplay.list, sidebar.dataDisplay.popover, sidebar.dataDisplay.tree, sidebar.dataDisplay.toolTips, sidebar.dataDisplay.timeLine, sidebar.dataDisplay.tag, sidebar.dataDisplay.tabs, sidebar.dataDisplay.table, sidebar.components.feedBack, sidebar.feedBack.alert, sidebar.feedBack.modal, sidebar.feedBack.message, sidebar.feedBack.notification, sidebar.feedBack.progress, sidebar.feedBack.popConfirm, sidebar.feedBack.spin, sidebar.components.other, sidebar.other.anchor, sidebar.other.backTop, sidebar.other.divider, sidebar.widgets, sidebar.metrics, sidebar.view, sidebar.view.basicTable, sidebar.view.dataTable, sidebar.extensions, sidebar.extensions.editior, sidebar.extensions.dragNDrop, sidebar.extensions.sweetAlert, sidebar.extensions.notification, sidebar.extensions.reactDates, sidebar.extensions.dropZone, sidebar.googleMap, sidebar.charts, sidebar.apps, sidebar.mailApp, sidebar.todoApp, sidebar.contactsApp, sidebar.chatApp, sidebar.notes, sidebar.pickers, sidebar.crud, sidebar.pickers.dateTimePickers, sidebar.pickers.colorPickers, sidebar.chart, sidebar.chart.line, sidebar.chart.bar, sidebar.chart.area, sidebar.chart.composed, sidebar.chart.scatter, sidebar.chart.pie, sidebar.chart.radial, sidebar.chart.radar, sidebar.chart.tree, sidebar.map, sidebar.map.simple, sidebar.map.styled, sidebar.map.geoLocation, sidebar.map.mapDirection, sidebar.map.overlay, sidebar.map.kmLayer, sidebar.map.popupInfo, sidebar.map.trafficLayer, sidebar.map.streetView, sidebar.map.eventListener, sidebar.map.mapDrawing, sidebar.map.mapClustering, sidebar.modules, sidebar.calendar, sidebar.calendar.basic, sidebar.calendar.cultures, sidebar.calendar.dnd, sidebar.calendar.popup, sidebar.calendar.rendering, sidebar.calendar.selectable, sidebar.calendar.timeslots, sidebar.mail.title, sidebar.mail.compose, sidebar.mail.mailbox, sidebar.mail.filters, sidebar.mail.labels, sidebar.eCommerce, sidebar.eCommerce.productList, sidebar.eCommerce.productGrid, sidebar.extraComponents, sidebar.inBuiltApp, sidebar.extraElements.callouts, sidebar.extraElements.testimonials, sidebar.timeLine, sidebar.timeLine.default, sidebar.timeLine.defaultwithIcons, sidebar.timeLine.leftAligned, sidebar.extraElements.pricingTable, sidebar.customViews, sidebar.listType.extras, sidebar.listType, sidebar.listType.plainListView, sidebar.listType.withDivider, sidebar.listType.cardListView, sidebar.extraPages.404, sidebar.extraPages.500, sidebar.extraPages, app.userAuth, app.userAuth.login, app.userAuth.signIn, app.userAuth.send, app.userAuth.bySigning, app.userAuth.or, app.userAuth.forgotPassword, app.userAuth.forgot, app.userAuth.signUp, app.userAuth.getAccount, app.userAuth.resetPassword, app.userAuth.reset, app.userAuth.lockScreen, app.userAuth.unLock, appModule.enterPasswordUnlock, appModule.enterPasswordReset, appModule.loginSuccessfully, appModule.password, appModule.email, appModule.name, appModule.phone, appModule.designation, appModule.regsiter, appModule.regsiterNow, appModule.hvAccount, appModule.createAccount, appModule.termAndCondition, appModule.iAccept, todo, todo.addTask, todo.all, todo.filters, todo.labels, chat.selectUserChat, chat.selectContactChat, chat.chatUser, chat.contacts, chat.searchStartNewChat, chat.typeMessage, chat.status, contact.saveContact, contact.addContact, contact.searchContact, mail.mailbox, mail.compose, mail.filters, mail.labels, mail.title, eCommerce.buyNow, eCommerce.addToCart, eCommerce.readMore, callouts.viewRange, callouts.basic, extraElements.callout, testimonials.basic, testimonials.classic, testimonials.standard, extraElements.testimonials, button.modify, button.delete, pricingTable.basic, pricingTable.circle, pricingTable.classic, pricingTable.dark, pricingTable.personal, pricingTable.easyTranslation, pricingTable.awesomeGoogleFonts, pricingTable.hotelBookingSystem, pricingTable.emailComposeInterface, pricingTable.locationFinderApp, pricingTable.buyNow, pricingTable.business, pricingTable.professional, button.yes, button.no, extraPages.404Msg, extraPages.500Msg, extraPages.goHome, extension.sweetAlerts, sweetAlerts.basic, sweetAlerts.description, sweetAlerts.success, sweetAlerts.warning, sweetAlerts.custom, sweetAlerts.htmlTag, sweetAlerts.prompt, sweetAlerts.itsBlue, sweetAlerts.passwordPrompt, sweetAlerts.customStyle, sweetAlerts.itPretty, sweetAlerts.btnClicked, sweetAlerts.youWillFind, sweetAlerts.youWillNotAble, sweetAlerts.hereIsaMessage, sweetAlerts.goodJob, sweetAlerts.yesDeleteIt, sweetAlerts.areYouSure, sweetAlerts.doYouLikeThumb, sweetAlerts.anInput, sweetAlerts.writeSomethingInteresting, sweetAlerts.writeSomething, sweetAlerts.youMustEnterPassword, sweetAlerts.enterPassword, extension.notification, notification.infoMsg, notification.successMessage, notification.warningMessage, notification.closeAfter3000ms, notification.errorMessage, notification.titleHere, notification.clickMe, notification.info, notification.success, notification.warning, notification.error, sidebar.editors, sidebar.editors.CKEditor, sidebar.editors.WYSISWYGEditor, picker.color.alpha, picker.color.hue, picker.color.circle, picker.color.compact, picker.color.block, picker.color.chrome, picker.color.github, picker.color.twitter, picker.color.withRedux, picker.color.sketch, picker.color.material, picker.color.slider, picker.color.basic, picker.color.basicToggle, picker.color.custom, picker.color.customPointer, picker.color.photoshop, picker.color.swatches, picker.color.basicPositioning, sidebar.documents, sidebar.documents.changelog, sidebar.documents.installation, sidebar.dashboard.listing, sidebar.dashboard.crypto, sidebar.algolia, sidebar.components.rechart, sidebar.components.amchart, sidebar.google.map, sidebar.ammap, sidebar.map.animations.lines, sidebar.map.curved.lines, sidebar.map.zooming.countries, sidebar.map.patterns, sidebar.map.capitals.map, sidebar.map.markers, sidebar.map.flight.routes, sidebar.map.choropleth, sidebar.map.grouped.countries, sidebar.map.bubbles, sidebar.map.drill.down, sidebar.map.multiple.areas, sidebar.map.weather, sidebar.extensions.shuffle, sidebar.extensions.profile, sidebar.social, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"app.announced\":\"Una nuova versione sarà rilasciata il 25 dicembre. Rimanete sintonizzati!\",\"sidebar.main\":\"Principale\",\"sidebar.dashboard\":\"Cruscotto\",\"sidebar.layouts\":\"Layouts\",\"sidebar.dashboard.crm\":\"Crm\",\"sidebar.components\":\"componenti\",\"sidebar.components.general\":\"Generale\",\"sidebar.general.button\":\"Pulsante\",\"sidebar.general.icon\":\"Icona\",\"sidebar.components.navigation\":\"Navigazione\",\"sidebar.navigation.affix\":\"Apporre\",\"sidebar.navigation.breadcrumb\":\"breadcrumb\",\"sidebar.navigation.dropdown\":\"Cadere in picchiata\",\"sidebar.navigation.menu\":\"Menu\",\"sidebar.navigation.pagination\":\"paginatura\",\"sidebar.navigation.steps\":\"passi\",\"sidebar.components.dataEntry\":\"Inserimento dati\",\"sidebar.dataEntry.autoComplete\":\"Completamento automatico\",\"sidebar.dataEntry.checkbox\":\"casella di controllo\",\"sidebar.dataEntry.cascader\":\"Cascader\",\"sidebar.dataEntry.datePicker\":\"Date picker\",\"sidebar.dataEntry.form\":\"Modulo\",\"sidebar.dataEntry.inputNumber\":\"Numero di input\",\"sidebar.dataEntry.input\":\"Ingresso\",\"sidebar.dataEntry.mention\":\"Citare\",\"sidebar.dataEntry.rate\":\"Vota\",\"sidebar.dataEntry.radio\":\"Radio\",\"sidebar.dataEntry.switch\":\"Interruttore\",\"sidebar.dataEntry.slider\":\"Slider\",\"sidebar.dataEntry.select\":\"Selezionare\",\"sidebar.dataEntry.treeSelect\":\"TreeSelect\",\"sidebar.dataEntry.transfer\":\"Trasferimento\",\"sidebar.dataEntry.timePicker\":\"Time Picker\",\"sidebar.dataEntry.upload\":\"Caricare\",\"sidebar.components.dataDisplay\":\"Visualizzazione dati\",\"sidebar.dataDisplay.avatar\":\"Avatar\",\"sidebar.dataDisplay.badge\":\"Distintivo\",\"sidebar.dataDisplay.collapse\":\"Crollo\",\"sidebar.dataDisplay.carousel\":\"Giostra\",\"sidebar.dataDisplay.card\":\"Carta\",\"sidebar.dataDisplay.calender\":\"Calendario\",\"sidebar.dataDisplay.list\":\"Elenco\",\"sidebar.dataDisplay.popover\":\"popover\",\"sidebar.dataDisplay.tree\":\"Albero\",\"sidebar.dataDisplay.toolTips\":\"Tooltips\",\"sidebar.dataDisplay.timeLine\":\"Sequenza temporale\",\"sidebar.dataDisplay.tag\":\"Etichetta\",\"sidebar.dataDisplay.tabs\":\"Tabs\",\"sidebar.dataDisplay.table\":\"tavolo\",\"sidebar.components.feedBack\":\"Risposta\",\"sidebar.feedBack.alert\":\"Mettere in guardia\",\"sidebar.feedBack.modal\":\"Modale\",\"sidebar.feedBack.message\":\"Messaggio\",\"sidebar.feedBack.notification\":\"Notifica\",\"sidebar.feedBack.progress\":\"Progresso\",\"sidebar.feedBack.popConfirm\":\"PopConfirm\",\"sidebar.feedBack.spin\":\"Rotazione\",\"sidebar.components.other\":\"Altro\",\"sidebar.other.anchor\":\"Ancora\",\"sidebar.other.backTop\":\"BackTop\",\"sidebar.other.divider\":\"Divisore\",\"sidebar.widgets\":\"widget\",\"sidebar.metrics\":\"Metrica\",\"sidebar.view\":\"vista\",\"sidebar.view.basicTable\":\"Tabella di base\",\"sidebar.view.dataTable\":\"Tabella dati\",\"sidebar.extensions\":\"estensioni\",\"sidebar.extensions.editior\":\"editore\",\"sidebar.extensions.dragNDrop\":\"Trascina e rilascia\",\"sidebar.extensions.sweetAlert\":\"Dolce avviso\",\"sidebar.extensions.notification\":\"Notifica\",\"sidebar.extensions.reactDates\":\"Date di Reazione\",\"sidebar.extensions.dropZone\":\"Zona di rilascio\",\"sidebar.googleMap\":\"Google Map\",\"sidebar.charts\":\"Grafici\",\"sidebar.apps\":\"applicazioni\",\"sidebar.mailApp\":\"App di posta\",\"sidebar.todoApp\":\"App Todo\",\"sidebar.contactsApp\":\"App Contatti\",\"sidebar.chatApp\":\"App di chat\",\"sidebar.notes\":\"Gli appunti\",\"sidebar.pickers\":\"Pickers\",\"sidebar.crud\":\"Firebase CRUD\",\"sidebar.pickers.dateTimePickers\":\"Raccoglitori di data e ora\",\"sidebar.pickers.colorPickers\":\"Raccoglitori di colori\",\"sidebar.chart\":\"Grafico\",\"sidebar.chart.line\":\"Grafico a linee\",\"sidebar.chart.bar\":\"Grafico a barre\",\"sidebar.chart.area\":\"Area grafico\",\"sidebar.chart.composed\":\"Grafico composto\",\"sidebar.chart.scatter\":\"Grafico a dispersione\",\"sidebar.chart.pie\":\"Grafico a torta\",\"sidebar.chart.radial\":\"Grafico radiale\",\"sidebar.chart.radar\":\"Grafico radar\",\"sidebar.chart.tree\":\"Grafico ad albero\",\"sidebar.map\":\"Google Map\",\"sidebar.map.simple\":\"Mappa semplice\",\"sidebar.map.styled\":\"Mappa in stile\",\"sidebar.map.geoLocation\":\"Posizione geografica\",\"sidebar.map.mapDirection\":\"Direzione della mappa\",\"sidebar.map.overlay\":\"Sovrapposizione mappa\",\"sidebar.map.kmLayer\":\"Mappa Km Layer\",\"sidebar.map.popupInfo\":\"Mappa Informazioni popup\",\"sidebar.map.trafficLayer\":\"Mappa dello strato di traffico\",\"sidebar.map.streetView\":\"vista stradale\",\"sidebar.map.eventListener\":\"Listener di eventi\",\"sidebar.map.mapDrawing\":\"Disegno della mappa\",\"sidebar.map.mapClustering\":\"Raggruppamento di mappe\",\"sidebar.modules\":\"moduli\",\"sidebar.calendar\":\"Calendario\",\"sidebar.calendar.basic\":\"Di base\",\"sidebar.calendar.cultures\":\"culture\",\"sidebar.calendar.dnd\":\"Dnd\",\"sidebar.calendar.popup\":\"Apparire\",\"sidebar.calendar.rendering\":\"Rendering\",\"sidebar.calendar.selectable\":\"selezionabile\",\"sidebar.calendar.timeslots\":\"Fasce orarie\",\"sidebar.mail.title\":\"posta\",\"sidebar.mail.compose\":\"COMPORRE\",\"sidebar.mail.mailbox\":\"Cassetta postale\",\"sidebar.mail.filters\":\"filtri\",\"sidebar.mail.labels\":\"etichette\",\"sidebar.eCommerce\":\"eCommerce\",\"sidebar.eCommerce.productList\":\"Elenco prodotti\",\"sidebar.eCommerce.productGrid\":\"Griglia del prodotto\",\"sidebar.extraComponents\":\"Componenti extra\",\"sidebar.inBuiltApp\":\"App integrate\",\"sidebar.extraElements.callouts\":\"Chiamare\",\"sidebar.extraElements.testimonials\":\"Testimonianze\",\"sidebar.timeLine\":\"Sequenza temporale\",\"sidebar.timeLine.default\":\"Predefinito\",\"sidebar.timeLine.defaultwithIcons\":\"Predefinito con icone\",\"sidebar.timeLine.leftAligned\":\"Sinistra allineata\",\"sidebar.extraElements.pricingTable\":\"Tabella dei prezzi\",\"sidebar.customViews\":\"Visualizzazioni personalizzate\",\"sidebar.listType.extras\":\"extra\",\"sidebar.listType\":\"Tipo di lista\",\"sidebar.listType.plainListView\":\"Lista semplice\",\"sidebar.listType.withDivider\":\"Lista semplice con divisore\",\"sidebar.listType.cardListView\":\"Visualizzazione elenco schede\",\"sidebar.extraPages.404\":\"404 Pagina di errore\",\"sidebar.extraPages.500\":\"500 Pagina di errore\",\"sidebar.extraPages\":\"Pagine extra\",\"app.userAuth\":\"Autenticazione dell'utente\",\"app.userAuth.login\":\"Accesso\",\"app.userAuth.signIn\":\"Registrati\",\"app.userAuth.send\":\"INVIARE\",\"app.userAuth.bySigning\":\"Con la registrazione, puoi usufruire delle funzionalità complete dei nostri servizi.\",\"app.userAuth.or\":\"o\",\"app.userAuth.forgotPassword\":\"Ha dimenticato la password\",\"app.userAuth.forgot\":\"Non ti preoccupare Recuperare la password è facile. Basta dirci l'e-mail che hai registrato con jumbo\",\"app.userAuth.signUp\":\"Iscriviti\",\"app.userAuth.getAccount\":\"Ottenere un account !!!\",\"app.userAuth.resetPassword\":\"Resetta la password\",\"app.userAuth.reset\":\"RESET\",\"app.userAuth.lockScreen\":\"Blocca schermo\",\"app.userAuth.unLock\":\"SBLOCCARE\",\"appModule.enterPasswordUnlock\":\"Inserisci la tua password per sbloccare lo schermo!\",\"appModule.enterPasswordReset\":\"Inserisci una nuova password per il tuo account\",\"appModule.loginSuccessfully\":\"Accedi con successo\",\"appModule.password\":\"Parola d'ordine\",\"appModule.email\":\"E-mail\",\"appModule.name\":\"Nome\",\"appModule.phone\":\"Telefono\",\"appModule.designation\":\"Designazione\",\"appModule.regsiter\":\"Registrare\",\"appModule.regsiterNow\":\"Registro n\",\"appModule.hvAccount\":\"Avere un conto\",\"appModule.createAccount\":\"Crea un account\",\"appModule.termAndCondition\":\"Termini e condizioni\",\"appModule.iAccept\":\"iscrivendomi, accetto\",\"todo\":\"Fare\",\"todo.addTask\":\"AGGIUNGI TASK\",\"todo.all\":\"Tutti\",\"todo.filters\":\"filtri\",\"todo.labels\":\"etichette\",\"chat.selectUserChat\":\"Seleziona Utente per avviare la chat\",\"chat.selectContactChat\":\"Seleziona contatto per avviare la chat\",\"chat.chatUser\":\"chat\",\"chat.contacts\":\"Contatti\",\"chat.searchStartNewChat\":\"Cerca o inizia nuova chat\",\"chat.typeMessage\":\"Scrivi e premi invio per inviare un messaggio\",\"chat.status\":\"è uno status .... non è il tuo diario ...\",\"contact.saveContact\":\"Salva contatto\",\"contact.addContact\":\"Aggiungi contatto\",\"contact.searchContact\":\"Cerca contatto\",\"mail.mailbox\":\"Cassetta postale\",\"mail.compose\":\"COMPORRE\",\"mail.filters\":\"filtri\",\"mail.labels\":\"etichette\",\"mail.title\":\"Nuovo messaggio\",\"eCommerce.buyNow\":\"Acquista ora\",\"eCommerce.addToCart\":\"AGGIUNGI AL CARRELLO\",\"eCommerce.readMore\":\"LEGGI DI PIÙ\",\"callouts.viewRange\":\"VISUALIZZA GAMMA\",\"callouts.basic\":\"Di base\",\"extraElements.callout\":\"Elemento extra\",\"testimonials.basic\":\"Di base\",\"testimonials.classic\":\"Classico\",\"testimonials.standard\":\"Standard\",\"extraElements.testimonials\":\"Testimonianze\",\"button.modify\":\"Modificare\",\"button.delete\":\"Elimina\",\"pricingTable.basic\":\"Di base\",\"pricingTable.circle\":\"Cerchio\",\"pricingTable.classic\":\"Classico\",\"pricingTable.dark\":\"Buio\",\"pricingTable.personal\":\"PERSONALE\",\"pricingTable.easyTranslation\":\"Traduzione semplice\",\"pricingTable.awesomeGoogleFonts\":\"Font Google fantastici\",\"pricingTable.hotelBookingSystem\":\"Sistema di prenotazione alberghiera\",\"pricingTable.emailComposeInterface\":\"Email Compose Interface\",\"pricingTable.locationFinderApp\":\"Location Finder App\",\"pricingTable.buyNow\":\"acquista ora\",\"pricingTable.business\":\"ATTIVITÀ COMMERCIALE\",\"pricingTable.professional\":\"PROFESSIONALE\",\"button.yes\":\"sì\",\"button.no\":\"No\",\"extraPages.404Msg\":\"Spiacenti, si è verificato un errore. Pagina non trovata!\",\"extraPages.500Msg\":\"Spiacente, il server va male\",\"extraPages.goHome\":\"Vai a casa\",\"extension.sweetAlerts\":\"Avvisi dolci\",\"sweetAlerts.basic\":\"Di base\",\"sweetAlerts.description\":\"Con descrizione\",\"sweetAlerts.success\":\"Successo\",\"sweetAlerts.warning\":\"avvertimento\",\"sweetAlerts.custom\":\"costume\",\"sweetAlerts.htmlTag\":\"Tag HTML\",\"sweetAlerts.prompt\":\"Richiesta\",\"sweetAlerts.itsBlue\":\"È blu!\",\"sweetAlerts.passwordPrompt\":\"Richiesta password\",\"sweetAlerts.customStyle\":\"Stile personalizzato\",\"sweetAlerts.itPretty\":\"È carino, non è vero?\",\"sweetAlerts.btnClicked\":\"Hai fatto clic sul pulsante!\",\"sweetAlerts.youWillFind\":\"Scoprirai che sono su!\",\"sweetAlerts.youWillNotAble\":\"Non sarai in grado di recuperare questo file immaginario!\",\"sweetAlerts.hereIsaMessage\":\"Ecco un messaggio!\",\"sweetAlerts.goodJob\":\"Buon lavoro!\",\"sweetAlerts.yesDeleteIt\":\"Sì, cancellalo!\",\"sweetAlerts.areYouSure\":\"Sei sicuro?\",\"sweetAlerts.doYouLikeThumb\":\"Ti piacciono i pollici?\",\"sweetAlerts.anInput\":\"Un input!\",\"sweetAlerts.writeSomethingInteresting\":\"Scrivi qualcosa di interessante:\",\"sweetAlerts.writeSomething\":\"Scrivi qualcosa\",\"sweetAlerts.youMustEnterPassword\":\"Devi inserire la tua password!\",\"sweetAlerts.enterPassword\":\"Inserire la password\",\"extension.notification\":\"Notifica\",\"notification.infoMsg\":\"Messaggio informativo\",\"notification.successMessage\":\"Messaggio di successo\",\"notification.warningMessage\":\"Messaggio di avvertimento\",\"notification.closeAfter3000ms\":\"Chiudi dopo 3000 ms\",\"notification.errorMessage\":\"Messaggio di errore\",\"notification.titleHere\":\"Titolo qui\",\"notification.clickMe\":\"Cliccami!\",\"notification.info\":\"Informazioni\",\"notification.success\":\"Successo\",\"notification.warning\":\"avvertimento\",\"notification.error\":\"Errore\",\"sidebar.editors\":\"Editors\",\"sidebar.editors.CKEditor\":\"CKEditor\",\"sidebar.editors.WYSISWYGEditor\":\"WYSIWYG Editor\",\"picker.color.alpha\":\"Raccoglitrici Alpha\",\"picker.color.hue\":\"Selezionatori di tinte\",\"picker.color.circle\":\"Raccoglitori di cerchi\",\"picker.color.compact\":\"Picker compatti\",\"picker.color.block\":\"Raccoglitori di blocchi\",\"picker.color.chrome\":\"Raccoglitrici di cromo\",\"picker.color.github\":\"Github Pickers\",\"picker.color.twitter\":\"Raccoglitori di Twitter\",\"picker.color.withRedux\":\"Con Redux\",\"picker.color.sketch\":\"Raccoglitori di schizzo\",\"picker.color.material\":\"Raccoglitori di materiale\",\"picker.color.slider\":\"Raccoglitori di cursori\",\"picker.color.basic\":\"Raccoglitori di base\",\"picker.color.basicToggle\":\"Toggle di base\",\"picker.color.custom\":\"Raccoglitori personalizzati\",\"picker.color.customPointer\":\"Puntatore personalizzato\",\"picker.color.photoshop\":\"Selettori di Photoshop\",\"picker.color.swatches\":\"Raccoglitrici di campioni\",\"picker.color.basicPositioning\":\"Posizionamento di base\",\"sidebar.documents\":\"Documenti\",\"sidebar.documents.changelog\":\"changelog\",\"sidebar.documents.installation\":\"Installazione\",\"sidebar.dashboard.listing\":\"listato\",\"sidebar.dashboard.crypto\":\"Crypto\",\"sidebar.algolia\":\"Algolia\",\"sidebar.components.rechart\":\"ReChart\",\"sidebar.components.amchart\":\"AmChart\",\"sidebar.google.map\":\"Google Map\",\"sidebar.ammap\":\"AmMap\",\"sidebar.map.animations.lines\":\"Con animazioni\",\"sidebar.map.curved.lines\":\"Con linee curve\",\"sidebar.map.zooming.countries\":\"Paesi in via di sviluppo\",\"sidebar.map.patterns\":\"Mappa con modelli\",\"sidebar.map.capitals.map\":\"Mappa dei Capitali\",\"sidebar.map.markers\":\"Indicatori di mappa\",\"sidebar.map.flight.routes\":\"Itinerari di volo\",\"sidebar.map.choropleth\":\"Mappa di calore\",\"sidebar.map.grouped.countries\":\"Paesi raggruppati\",\"sidebar.map.bubbles\":\"Mappa con bolle\",\"sidebar.map.drill.down\":\"Drill Down Map\",\"sidebar.map.multiple.areas\":\"Aree multiple\",\"sidebar.map.weather\":\"Mappa del tempo\",\"sidebar.extensions.shuffle\":\"rimescolare\",\"sidebar.extensions.profile\":\"Profilo\",\"sidebar.social\":\"App sociali\"}");

/***/ }),

/***/ "./lngProvider/locales/ru_RU.json":
/*!****************************************!*\
  !*** ./lngProvider/locales/ru_RU.json ***!
  \****************************************/
/*! exports provided: app.announced, sidebar.main, sidebar.dashboard, sidebar.layouts, sidebar.dashboard.crm, sidebar.components, sidebar.components.general, sidebar.general.button, sidebar.general.icon, sidebar.components.navigation, sidebar.navigation.affix, sidebar.navigation.breadcrumb, sidebar.navigation.dropdown, sidebar.navigation.menu, sidebar.navigation.pagination, sidebar.navigation.steps, sidebar.components.dataEntry, sidebar.dataEntry.autoComplete, sidebar.dataEntry.checkbox, sidebar.dataEntry.cascader, sidebar.dataEntry.datePicker, sidebar.dataEntry.form, sidebar.dataEntry.inputNumber, sidebar.dataEntry.input, sidebar.dataEntry.mention, sidebar.dataEntry.rate, sidebar.dataEntry.radio, sidebar.dataEntry.switch, sidebar.dataEntry.slider, sidebar.dataEntry.select, sidebar.dataEntry.treeSelect, sidebar.dataEntry.transfer, sidebar.dataEntry.timePicker, sidebar.dataEntry.upload, sidebar.components.dataDisplay, sidebar.dataDisplay.avatar, sidebar.dataDisplay.badge, sidebar.dataDisplay.collapse, sidebar.dataDisplay.carousel, sidebar.dataDisplay.card, sidebar.dataDisplay.calender, sidebar.dataDisplay.list, sidebar.dataDisplay.popover, sidebar.dataDisplay.tree, sidebar.dataDisplay.toolTips, sidebar.dataDisplay.timeLine, sidebar.dataDisplay.tag, sidebar.dataDisplay.tabs, sidebar.dataDisplay.table, sidebar.components.feedBack, sidebar.feedBack.alert, sidebar.feedBack.modal, sidebar.feedBack.message, sidebar.feedBack.notification, sidebar.feedBack.progress, sidebar.feedBack.popConfirm, sidebar.feedBack.spin, sidebar.components.other, sidebar.other.anchor, sidebar.other.backTop, sidebar.other.divider, sidebar.widgets, sidebar.metrics, sidebar.view, sidebar.view.basicTable, sidebar.view.dataTable, sidebar.extensions, sidebar.extensions.editior, sidebar.extensions.dragNDrop, sidebar.extensions.sweetAlert, sidebar.extensions.notification, sidebar.extensions.reactDates, sidebar.extensions.dropZone, sidebar.googleMap, sidebar.charts, sidebar.apps, sidebar.mailApp, sidebar.todoApp, sidebar.contactsApp, sidebar.chatApp, sidebar.wall, sidebar.notes, sidebar.crud, sidebar.pickers, sidebar.pickers.dateTimePickers, sidebar.pickers.colorPickers, sidebar.chart, sidebar.chart.line, sidebar.chart.bar, sidebar.chart.area, sidebar.chart.composed, sidebar.chart.scatter, sidebar.chart.pie, sidebar.chart.radial, sidebar.chart.radar, sidebar.chart.tree, sidebar.map.simple, sidebar.map.styled, sidebar.map.geoLocation, sidebar.map.mapDirection, sidebar.map.overlay, sidebar.map.kmLayer, sidebar.map.popupInfo, sidebar.map.trafficLayer, sidebar.map.streetView, sidebar.map.eventListener, sidebar.map.mapDrawing, sidebar.map.mapClustering, sidebar.modules, sidebar.calendar, sidebar.calendar.basic, sidebar.calendar.cultures, sidebar.calendar.dnd, sidebar.calendar.popup, sidebar.calendar.rendering, sidebar.calendar.selectable, sidebar.calendar.timeslots, sidebar.mail.title, sidebar.mail.compose, sidebar.mail.mailbox, sidebar.mail.filters, sidebar.mail.labels, sidebar.eCommerce, sidebar.eCommerce.productList, sidebar.eCommerce.productGrid, sidebar.extraComponents, sidebar.inBuiltApp, sidebar.extraElements.callouts, sidebar.extraElements.testimonials, sidebar.timeLine, sidebar.timeLine.default, sidebar.timeLine.defaultwithIcons, sidebar.timeLine.leftAligned, sidebar.extraElements.pricingTable, sidebar.customViews, sidebar.listType, sidebar.listType.extras, sidebar.listType.plainListView, sidebar.listType.withDivider, sidebar.listType.cardListView, sidebar.extraPages.404, sidebar.extraPages.500, sidebar.extraPages, app.userAuth, app.userAuth.login, app.userAuth.signIn, app.userAuth.send, app.userAuth.bySigning, app.userAuth.or, app.userAuth.forgotPassword, app.userAuth.forgot, app.userAuth.signUp, app.userAuth.getAccount, app.userAuth.resetPassword, app.userAuth.reset, app.userAuth.lockScreen, app.userAuth.unLock, appModule.enterPasswordUnlock, appModule.enterPasswordReset, appModule.loginSuccessfully, appModule.password, appModule.email, appModule.name, appModule.phone, appModule.designation, appModule.regsiter, appModule.regsiterNow, appModule.hvAccount, appModule.createAccount, appModule.termAndCondition, appModule.iAccept, todo, todo.addTask, todo.all, todo.filters, todo.labels, chat.selectUserChat, chat.selectContactChat, chat.chatUser, chat.contacts, chat.searchStartNewChat, chat.typeMessage, chat.status, contact.saveContact, contact.addContact, contact.searchContact, mail.mailbox, mail.compose, mail.filters, mail.labels, mail.title, eCommerce.buyNow, eCommerce.addToCart, eCommerce.readMore, callouts.viewRange, callouts.basic, extraElements.callout, testimonials.basic, testimonials.classic, testimonials.standard, extraElements.testimonials, button.modify, button.delete, pricingTable.basic, pricingTable.circle, pricingTable.classic, pricingTable.dark, pricingTable.personal, pricingTable.easyTranslation, pricingTable.awesomeGoogleFonts, pricingTable.hotelBookingSystem, pricingTable.emailComposeInterface, pricingTable.locationFinderApp, pricingTable.buyNow, pricingTable.business, pricingTable.professional, button.yes, button.no, extraPages.404Msg, extraPages.500Msg, extraPages.goHome, extension.sweetAlerts, sweetAlerts.basic, sweetAlerts.description, sweetAlerts.success, sweetAlerts.warning, sweetAlerts.custom, sweetAlerts.htmlTag, sweetAlerts.prompt, sweetAlerts.itsBlue, sweetAlerts.passwordPrompt, sweetAlerts.customStyle, sweetAlerts.itPretty, sweetAlerts.btnClicked, sweetAlerts.youWillFind, sweetAlerts.youWillNotAble, sweetAlerts.hereIsaMessage, sweetAlerts.goodJob, sweetAlerts.yesDeleteIt, sweetAlerts.areYouSure, sweetAlerts.doYouLikeThumb, sweetAlerts.anInput, sweetAlerts.writeSomethingInteresting, sweetAlerts.writeSomething, sweetAlerts.youMustEnterPassword, sweetAlerts.enterPassword, extension.notification, notification.infoMsg, notification.successMessage, notification.warningMessage, notification.closeAfter3000ms, notification.errorMessage, notification.titleHere, notification.clickMe, notification.info, notification.success, notification.warning, notification.error, sidebar.editors, sidebar.editors.CKEditor, sidebar.editors.WYSISWYGEditor, picker.color.alpha, picker.color.hue, picker.color.circle, picker.color.compact, picker.color.block, picker.color.chrome, picker.color.github, picker.color.twitter, picker.color.withRedux, picker.color.sketch, picker.color.material, picker.color.slider, picker.color.basic, picker.color.basicToggle, picker.color.custom, picker.color.customPointer, picker.color.photoshop, picker.color.swatches, picker.color.basicPositioning, sidebar.documents, sidebar.documents.changelog, sidebar.documents.installation, sidebar.dashboard.listing, sidebar.dashboard.crypto, sidebar.map, sidebar.algolia, sidebar.firebase.crud, sidebar.components.rechart, sidebar.components.amchart, sidebar.google.map, sidebar.ammap, sidebar.map.animations.lines, sidebar.map.curved.lines, sidebar.map.zooming.countries, sidebar.map.patterns, sidebar.map.capitals.map, sidebar.map.markers, sidebar.map.flight.routes, sidebar.map.choropleth, sidebar.map.grouped.countries, sidebar.map.bubbles, sidebar.map.drill.down, sidebar.map.multiple.areas, sidebar.map.weather, sidebar.extensions.shuffle, sidebar.extensions.profile, sidebar.social, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"app.announced\":\"A new version will be released on December 25th. Stay tuned!\",\"sidebar.main\":\"Главный\",\"sidebar.dashboard\":\"Дашборд\",\"sidebar.layouts\":\"Макеты\",\"sidebar.dashboard.crm\":\"Crm\",\"sidebar.components\":\"Компоненты\",\"sidebar.components.general\":\"Общее\",\"sidebar.general.button\":\"Кнопка\",\"sidebar.general.icon\":\"Значок\",\"sidebar.components.navigation\":\"Навигация\",\"sidebar.navigation.affix\":\"Аффикс\",\"sidebar.navigation.breadcrumb\":\"Breadcrumb\",\"sidebar.navigation.dropdown\":\"Dropdown\",\"sidebar.navigation.menu\":\"Меню\",\"sidebar.navigation.pagination\":\"Нумерация страниц\",\"sidebar.navigation.steps\":\"Действия\",\"sidebar.components.dataEntry\":\"Ввод данных\",\"sidebar.dataEntry.autoComplete\":\"Автозаполнение\",\"sidebar.dataEntry.checkbox\":\"Checkbox\",\"sidebar.dataEntry.cascader\":\"Cascader\",\"sidebar.dataEntry.datePicker\":\"Datepicker\",\"sidebar.dataEntry.form\":\"Form\",\"sidebar.dataEntry.inputNumber\":\"InputNumber\",\"sidebar.dataEntry.input\":\"Input\",\"sidebar.dataEntry.mention\":\"Mention\",\"sidebar.dataEntry.rate\":\"Rate\",\"sidebar.dataEntry.radio\":\"Radio\",\"sidebar.dataEntry.switch\":\"Switch\",\"sidebar.dataEntry.slider\":\"Slider\",\"sidebar.dataEntry.select\":\"Select\",\"sidebar.dataEntry.treeSelect\":\"TreeSelect\",\"sidebar.dataEntry.transfer\":\"Transfer\",\"sidebar.dataEntry.timePicker\":\"Time Picker\",\"sidebar.dataEntry.upload\":\"Загрузить\",\"sidebar.components.dataDisplay\":\"Отображение данных\",\"sidebar.dataDisplay.avatar\":\"Аватар\",\"sidebar.dataDisplay.badge\":\"Badge\",\"sidebar.dataDisplay.collapse\":\"Collapse\",\"sidebar.dataDisplay.carousel\":\"Carousel\",\"sidebar.dataDisplay.card\":\"Card\",\"sidebar.dataDisplay.calender\":\"Calender\",\"sidebar.dataDisplay.list\":\"List\",\"sidebar.dataDisplay.popover\":\"Popover\",\"sidebar.dataDisplay.tree\":\"Tree\",\"sidebar.dataDisplay.toolTips\":\"Tooltips\",\"sidebar.dataDisplay.timeLine\":\"Timeline\",\"sidebar.dataDisplay.tag\":\"Tag\",\"sidebar.dataDisplay.tabs\":\"Tabs\",\"sidebar.dataDisplay.table\":\"Таблица\",\"sidebar.components.feedBack\":\"Обратная связь\",\"sidebar.feedBack.alert\":\"Предупреждение\",\"sidebar.feedBack.modal\":\"Модал\",\"sidebar.feedBack.message\":\"Сообщение\",\"sidebar.feedBack.notification\":\"Уведомление\",\"sidebar.feedBack.progress\":\"Прогресс\",\"sidebar.feedBack.popConfirm\":\"PopConfirm\",\"sidebar.feedBack.spin\":\"Spin\",\"sidebar.components.other\":\"Другой\",\"sidebar.other.anchor\":\"Anchor\",\"sidebar.other.backTop\":\"BackTop\",\"sidebar.other.divider\":\"Divider\",\"sidebar.widgets\":\"Виджеты\",\"sidebar.metrics\":\"Метрика\",\"sidebar.view\":\"Посмотреть\",\"sidebar.view.basicTable\":\"Базовая таблица\",\"sidebar.view.dataTable\":\"Таблица данных\",\"sidebar.extensions\":\"Расширения\",\"sidebar.extensions.editior\":\"Редактор\",\"sidebar.extensions.dragNDrop\":\"Перетаскивания\",\"sidebar.extensions.sweetAlert\":\"Sweet Alert\",\"sidebar.extensions.notification\":\"Уведомление\",\"sidebar.extensions.reactDates\":\"React Dates\",\"sidebar.extensions.dropZone\":\"Drop Zone\",\"sidebar.googleMap\":\"Google Карта\",\"sidebar.charts\":\"Графики\",\"sidebar.apps\":\"Программы\",\"sidebar.mailApp\":\"Приложение Mail\",\"sidebar.todoApp\":\"Приложение Todo\",\"sidebar.contactsApp\":\"Приложение Контакты\",\"sidebar.chatApp\":\"Приложение Chat\",\"sidebar.wall\":\"Приложение Wall\",\"sidebar.notes\":\"Примечание\",\"sidebar.crud\":\"Firebase CRUD\",\"sidebar.pickers\":\"Pickers\",\"sidebar.pickers.dateTimePickers\":\"Date & Time Pickers\",\"sidebar.pickers.colorPickers\":\"Color Pickers\",\"sidebar.chart\":\"Графики\",\"sidebar.chart.line\":\"Line Chart\",\"sidebar.chart.bar\":\"Bar Chart\",\"sidebar.chart.area\":\"Area Chart\",\"sidebar.chart.composed\":\"Composed Chart\",\"sidebar.chart.scatter\":\"Scatter Chart\",\"sidebar.chart.pie\":\"Pie Chart\",\"sidebar.chart.radial\":\"Radial Chart\",\"sidebar.chart.radar\":\"Radar Chart\",\"sidebar.chart.tree\":\"Tree Chart\",\"sidebar.map.simple\":\"Simple Map\",\"sidebar.map.styled\":\"Styled Map\",\"sidebar.map.geoLocation\":\"Geo Location\",\"sidebar.map.mapDirection\":\"Map Direction\",\"sidebar.map.overlay\":\"Map Overlay\",\"sidebar.map.kmLayer\":\"Map Km Layer\",\"sidebar.map.popupInfo\":\"Map Popup Info\",\"sidebar.map.trafficLayer\":\"Map Traffic Layer\",\"sidebar.map.streetView\":\"Street View\",\"sidebar.map.eventListener\":\"Event Listener\",\"sidebar.map.mapDrawing\":\"Map Drawing\",\"sidebar.map.mapClustering\":\"Map Clustering\",\"sidebar.modules\":\"Modules\",\"sidebar.calendar\":\"Calendar\",\"sidebar.calendar.basic\":\"Основной\",\"sidebar.calendar.cultures\":\"Cultures\",\"sidebar.calendar.dnd\":\"Dnd\",\"sidebar.calendar.popup\":\"Popup\",\"sidebar.calendar.rendering\":\"Rendering\",\"sidebar.calendar.selectable\":\"Selectable\",\"sidebar.calendar.timeslots\":\"Timeslots\",\"sidebar.mail.title\":\"Mail\",\"sidebar.mail.compose\":\"COMPOSE\",\"sidebar.mail.mailbox\":\"Mailbox\",\"sidebar.mail.filters\":\"Фильтры\",\"sidebar.mail.labels\":\"Labels\",\"sidebar.eCommerce\":\"eCommerce\",\"sidebar.eCommerce.productList\":\"Product List\",\"sidebar.eCommerce.productGrid\":\"Product Grid\",\"sidebar.extraComponents\":\"Дополнительные Компоненты\",\"sidebar.inBuiltApp\":\"Встроенные Приложения\",\"sidebar.extraElements.callouts\":\"Callout\",\"sidebar.extraElements.testimonials\":\"Отзывы\",\"sidebar.timeLine\":\"Time Line\",\"sidebar.timeLine.default\":\"Default\",\"sidebar.timeLine.defaultwithIcons\":\"Default with Icons\",\"sidebar.timeLine.leftAligned\":\"Left Aligned\",\"sidebar.extraElements.pricingTable\":\"Pricing Table\",\"sidebar.customViews\":\"Custom Views\",\"sidebar.listType\":\"List Type\",\"sidebar.listType.extras\":\"Extras\",\"sidebar.listType.plainListView\":\"Plain List View\",\"sidebar.listType.withDivider\":\"Plain List with Divider\",\"sidebar.listType.cardListView\":\"Cards List View\",\"sidebar.extraPages.404\":\"404 Error Page\",\"sidebar.extraPages.500\":\"500 Error Page\",\"sidebar.extraPages\":\"Extra Pages\",\"app.userAuth\":\"Аутентификация Пользователя\",\"app.userAuth.login\":\"Авторизоваться\",\"app.userAuth.signIn\":\"Войти в систему\",\"app.userAuth.send\":\"ОТПРАВИТЬ\",\"app.userAuth.bySigning\":\"Зарегистрировавшись, вы можете воспользоваться всеми функциями наших услуг.\",\"app.userAuth.or\":\"или\",\"app.userAuth.forgotPassword\":\"Забыли пароль\",\"app.userAuth.forgot\":\"Не беспокойся Восстановить пароль очень просто. Просто сообщите нам адрес электронной почты, который вы зарегистрировали\",\"app.userAuth.signUp\":\"Зарегистрироваться\",\"app.userAuth.getAccount\":\"Получить аккаунт !!!\",\"app.userAuth.resetPassword\":\"Сброс пароля\",\"app.userAuth.reset\":\"СБРОС\",\"app.userAuth.lockScreen\":\"Lock Screen\",\"app.userAuth.unLock\":\"UNLOCK\",\"appModule.enterPasswordUnlock\":\"Enter your password to unlock the screen!\",\"appModule.enterPasswordReset\":\"Введите новый пароль для вашей учетной записи\",\"appModule.loginSuccessfully\":\"Вход Успешно\",\"appModule.password\":\"Пароль\",\"appModule.email\":\"Эл. адрес\",\"appModule.name\":\"Имя\",\"appModule.phone\":\"Телефон\",\"appModule.designation\":\"Designation\",\"appModule.regsiter\":\"Регистрация\",\"appModule.regsiterNow\":\"Регистрация №\",\"appModule.hvAccount\":\"Уже зарегистрированы\",\"appModule.createAccount\":\"Создать учетную запись\",\"appModule.termAndCondition\":\"Term & Condition\",\"appModule.iAccept\":\"зарегистрировавшись, я принимаю\",\"todo\":\"To-Do\",\"todo.addTask\":\"Добавить Задачу\",\"todo.all\":\"Все\",\"todo.filters\":\"Фильтры\",\"todo.labels\":\"Labels\",\"chat.selectUserChat\":\"Select User to start Chat\",\"chat.selectContactChat\":\"Select contact to start Chat\",\"chat.chatUser\":\"Чаты\",\"chat.contacts\":\"Контакты\",\"chat.searchStartNewChat\":\"Search or start new chat\",\"chat.typeMessage\":\"Type and hit enter to send message\",\"chat.status\":\"it's a status....not your diary...\",\"contact.saveContact\":\"Сохранить Контакт\",\"contact.addContact\":\"Добавить Контакт\",\"contact.searchContact\":\"Search contact\",\"mail.mailbox\":\"Mailbox\",\"mail.compose\":\"COMPOSE\",\"mail.filters\":\"Фильтры\",\"mail.labels\":\"Labels\",\"mail.title\":\"New Message\",\"eCommerce.buyNow\":\"Buy Now\",\"eCommerce.addToCart\":\"Добавить в корзину\",\"eCommerce.readMore\":\"Читать далее\",\"callouts.viewRange\":\"VIEW RANGE\",\"callouts.basic\":\"Основной\",\"extraElements.callout\":\"Extra Element\",\"testimonials.basic\":\"Основной\",\"testimonials.classic\":\"Классический\",\"testimonials.standard\":\"Стандарт\",\"extraElements.testimonials\":\"Отзывы\",\"button.modify\":\"Изменить\",\"button.delete\":\"Удалить\",\"pricingTable.basic\":\"Основной\",\"pricingTable.circle\":\"Круг\",\"pricingTable.classic\":\"Классический\",\"pricingTable.dark\":\"Темный\",\"pricingTable.personal\":\"ПЕРСОНАЛЬНЫЙ\",\"pricingTable.easyTranslation\":\"Easy Translation\",\"pricingTable.awesomeGoogleFonts\":\"Awesome Google Fonts\",\"pricingTable.hotelBookingSystem\":\"Hotel Booking System\",\"pricingTable.emailComposeInterface\":\"Email Compose Interface\",\"pricingTable.locationFinderApp\":\"Location Finder App\",\"pricingTable.buyNow\":\"купить сейчас\",\"pricingTable.business\":\"БИЗНЕС\",\"pricingTable.professional\":\"ПРОФЕССИОНАЛ\",\"button.yes\":\"Да\",\"button.no\":\"Нет\",\"extraPages.404Msg\":\"К сожалению, произошла ошибка. Страница не найдена!\",\"extraPages.500Msg\":\"Извините, сервер работает неправильно\",\"extraPages.goHome\":\"Перейти на главную\",\"extension.sweetAlerts\":\"Sweet Alerts\",\"sweetAlerts.basic\":\"Основной\",\"sweetAlerts.description\":\"С описанием\",\"sweetAlerts.success\":\"Success\",\"sweetAlerts.warning\":\"Warning\",\"sweetAlerts.custom\":\"Custom\",\"sweetAlerts.htmlTag\":\"Html Tag\",\"sweetAlerts.prompt\":\"Prompt\",\"sweetAlerts.itsBlue\":\"It's Green!\",\"sweetAlerts.passwordPrompt\":\"Password Prompt\",\"sweetAlerts.customStyle\":\"Custom Style\",\"sweetAlerts.itPretty\":\"It's pretty, isn't it?\",\"sweetAlerts.btnClicked\":\"You clicked the button!\",\"sweetAlerts.youWillFind\":\"You will find they are up!\",\"sweetAlerts.youWillNotAble\":\"You will not be able to recover this imaginary file!\",\"sweetAlerts.hereIsaMessage\":\"Here's a message!\",\"sweetAlerts.goodJob\":\"Good job!\",\"sweetAlerts.yesDeleteIt\":\"Да, delete it!\",\"sweetAlerts.areYouSure\":\"Are you sure?\",\"sweetAlerts.doYouLikeThumb\":\"Do you like thumbs?\",\"sweetAlerts.anInput\":\"An input!\",\"sweetAlerts.writeSomethingInteresting\":\"Write something interesting:\",\"sweetAlerts.writeSomething\":\"Write something\",\"sweetAlerts.youMustEnterPassword\":\"You must enter your password!\",\"sweetAlerts.enterPassword\":\"Enter Password\",\"extension.notification\":\"Notification\",\"notification.infoMsg\":\"Инфо сообщение\",\"notification.successMessage\":\"Success message\",\"notification.warningMessage\":\"Warning message\",\"notification.closeAfter3000ms\":\"Close after 3000ms\",\"notification.errorMessage\":\"Error message\",\"notification.titleHere\":\"Title here\",\"notification.clickMe\":\"Click me!\",\"notification.info\":\"Info\",\"notification.success\":\"Success\",\"notification.warning\":\"Warning\",\"notification.error\":\"Error\",\"sidebar.editors\":\"Editors\",\"sidebar.editors.CKEditor\":\"CKEditor\",\"sidebar.editors.WYSISWYGEditor\":\"WYSISWYG Editor\",\"picker.color.alpha\":\"Alpha Pickers\",\"picker.color.hue\":\"Hue Pickers\",\"picker.color.circle\":\"Круг Pickers\",\"picker.color.compact\":\"Compact Pickers\",\"picker.color.block\":\"Темный Pickers\",\"picker.color.chrome\":\"ПЕРСОНАЛЬНЫЙ Pickers\",\"picker.color.github\":\"Github Pickers\",\"picker.color.twitter\":\"Twitter Pickers\",\"picker.color.withRedux\":\"With Redux\",\"picker.color.sketch\":\"Sketch Pickers\",\"picker.color.material\":\"Material Pickers\",\"picker.color.slider\":\"купить сейчасkers\",\"picker.color.basic\":\"Основной Pickers\",\"picker.color.basicToggle\":\"Основной Toggle\",\"picker.color.custom\":\"Custom Pickers\",\"picker.color.customPointer\":\"Custom Pointer\",\"picker.color.photoshop\":\"Photoshop Pickers\",\"picker.color.swatches\":\"Swatches Pickers\",\"picker.color.basicPositioning\":\"Основной Positioning\",\"sidebar.documents\":\"Documents\",\"sidebar.documents.changelog\":\"Changelog\",\"sidebar.documents.installation\":\"Installation\",\"sidebar.dashboard.listing\":\"Listing\",\"sidebar.dashboard.crypto\":\"Crypto\",\"sidebar.map\":\"Карта\",\"sidebar.algolia\":\"Algolia\",\"sidebar.firebase.crud\":\"Firebase Curd\",\"sidebar.components.rechart\":\"ReChart\",\"sidebar.components.amchart\":\"AmChart\",\"sidebar.google.map\":\"Google Карта\",\"sidebar.ammap\":\"AmMap\",\"sidebar.map.animations.lines\":\"With Animations\",\"sidebar.map.curved.lines\":\"With Curved Lines\",\"sidebar.map.zooming.countries\":\"Zooming Countries\",\"sidebar.map.patterns\":\"Map With Patterns\",\"sidebar.map.capitals.map\":\"Capitals Map\",\"sidebar.map.markers\":\"Map Markers\",\"sidebar.map.flight.routes\":\"Flight Routes\",\"sidebar.map.choropleth\":\"Heat Map\",\"sidebar.map.grouped.countries\":\"Grouped Countries\",\"sidebar.map.bubbles\":\"Map with Bubbles\",\"sidebar.map.drill.down\":\"Drill Down Map\",\"sidebar.map.multiple.areas\":\"Multiple Areas\",\"sidebar.map.weather\":\"Weather map\",\"sidebar.extensions.shuffle\":\"Shuffle\",\"sidebar.extensions.profile\":\"Профиль\",\"sidebar.social\":\"Социальные приложения\"}");

/***/ }),

/***/ "./lngProvider/locales/zh-Hans.json":
/*!******************************************!*\
  !*** ./lngProvider/locales/zh-Hans.json ***!
  \******************************************/
/*! exports provided: app.announced, sidebar.main, sidebar.dashboard, sidebar.dashboard.crm, sidebar.layouts, sidebar.components, sidebar.components.general, sidebar.general.button, sidebar.general.icon, sidebar.components.navigation, sidebar.navigation.affix, sidebar.navigation.breadcrumb, sidebar.navigation.dropdown, sidebar.navigation.menu, sidebar.navigation.pagination, sidebar.navigation.steps, sidebar.components.dataEntry, sidebar.dataEntry.autoComplete, sidebar.dataEntry.checkbox, sidebar.dataEntry.cascader, sidebar.dataEntry.datePicker, sidebar.dataEntry.form, sidebar.dataEntry.inputNumber, sidebar.dataEntry.input, sidebar.dataEntry.mention, sidebar.dataEntry.rate, sidebar.dataEntry.radio, sidebar.dataEntry.switch, sidebar.dataEntry.slider, sidebar.dataEntry.select, sidebar.dataEntry.treeSelect, sidebar.dataEntry.transfer, sidebar.dataEntry.timePicker, sidebar.dataEntry.upload, sidebar.components.dataDisplay, sidebar.dataDisplay.avatar, sidebar.dataDisplay.badge, sidebar.dataDisplay.collapse, sidebar.dataDisplay.carousel, sidebar.dataDisplay.card, sidebar.dataDisplay.calender, sidebar.dataDisplay.list, sidebar.dataDisplay.popover, sidebar.dataDisplay.tree, sidebar.dataDisplay.toolTips, sidebar.dataDisplay.timeLine, sidebar.dataDisplay.tag, sidebar.dataDisplay.tabs, sidebar.dataDisplay.table, sidebar.components.feedBack, sidebar.feedBack.alert, sidebar.feedBack.modal, sidebar.feedBack.message, sidebar.feedBack.notification, sidebar.feedBack.progress, sidebar.feedBack.popConfirm, sidebar.feedBack.spin, sidebar.components.other, sidebar.other.anchor, sidebar.other.backTop, sidebar.other.divider, sidebar.widgets, sidebar.metrics, sidebar.view, sidebar.view.basicTable, sidebar.view.dataTable, sidebar.extensions, sidebar.extensions.editior, sidebar.extensions.dragNDrop, sidebar.extensions.sweetAlert, sidebar.extensions.notification, sidebar.extensions.reactDates, sidebar.extensions.dropZone, sidebar.googleMap, sidebar.charts, sidebar.apps, sidebar.mailApp, sidebar.todoApp, sidebar.contactsApp, sidebar.chatApp, sidebar.notes, sidebar.pickers, sidebar.crud, sidebar.pickers.dateTimePickers, sidebar.pickers.colorPickers, sidebar.chart, sidebar.chart.line, sidebar.chart.bar, sidebar.chart.area, sidebar.chart.composed, sidebar.chart.scatter, sidebar.chart.pie, sidebar.chart.radial, sidebar.chart.radar, sidebar.chart.tree, sidebar.map, sidebar.map.simple, sidebar.map.styled, sidebar.map.geoLocation, sidebar.map.mapDirection, sidebar.map.overlay, sidebar.map.kmLayer, sidebar.map.popupInfo, sidebar.map.trafficLayer, sidebar.map.streetView, sidebar.map.eventListener, sidebar.map.mapDrawing, sidebar.map.mapClustering, sidebar.modules, sidebar.calendar, sidebar.calendar.basic, sidebar.calendar.cultures, sidebar.calendar.dnd, sidebar.calendar.popup, sidebar.calendar.rendering, sidebar.calendar.selectable, sidebar.calendar.timeslots, sidebar.mail.title, sidebar.mail.compose, sidebar.mail.mailbox, sidebar.mail.filters, sidebar.mail.labels, sidebar.eCommerce, sidebar.eCommerce.productList, sidebar.eCommerce.productGrid, sidebar.extraComponents, sidebar.inBuiltApp, sidebar.extraElements.callouts, sidebar.extraElements.testimonials, sidebar.timeLine, sidebar.timeLine.default, sidebar.timeLine.defaultwithIcons, sidebar.timeLine.leftAligned, sidebar.extraElements.pricingTable, sidebar.customViews, sidebar.listType.extras, sidebar.listType, sidebar.listType.plainListView, sidebar.listType.withDivider, sidebar.listType.cardListView, sidebar.extraPages.404, sidebar.extraPages.500, sidebar.extraPages, app.userAuth, app.userAuth.login, app.userAuth.signIn, app.userAuth.send, app.userAuth.bySigning, app.userAuth.or, app.userAuth.forgotPassword, app.userAuth.forgot, app.userAuth.signUp, app.userAuth.getAccount, app.userAuth.resetPassword, app.userAuth.reset, app.userAuth.lockScreen, app.userAuth.unLock, appModule.enterPasswordUnlock, appModule.enterPasswordReset, appModule.loginSuccessfully, appModule.password, appModule.email, appModule.name, appModule.phone, appModule.designation, appModule.regsiter, appModule.regsiterNow, appModule.hvAccount, appModule.createAccount, appModule.termAndCondition, appModule.iAccept, todo, todo.addTask, todo.all, todo.filters, todo.labels, chat.selectUserChat, chat.selectContactChat, chat.chatUser, chat.contacts, chat.searchStartNewChat, chat.typeMessage, chat.status, contact.saveContact, contact.addContact, contact.searchContact, mail.mailbox, mail.compose, mail.filters, mail.labels, mail.title, eCommerce.buyNow, eCommerce.addToCart, eCommerce.readMore, callouts.viewRange, callouts.basic, extraElements.callout, testimonials.basic, testimonials.classic, testimonials.standard, extraElements.testimonials, button.modify, button.delete, pricingTable.basic, pricingTable.circle, pricingTable.classic, pricingTable.dark, pricingTable.personal, pricingTable.easyTranslation, pricingTable.awesomeGoogleFonts, pricingTable.hotelBookingSystem, pricingTable.emailComposeInterface, pricingTable.locationFinderApp, pricingTable.buyNow, pricingTable.business, pricingTable.professional, button.yes, button.no, extraPages.404Msg, extraPages.500Msg, extraPages.goHome, extension.sweetAlerts, sweetAlerts.basic, sweetAlerts.description, sweetAlerts.success, sweetAlerts.warning, sweetAlerts.custom, sweetAlerts.htmlTag, sweetAlerts.prompt, sweetAlerts.itsBlue, sweetAlerts.passwordPrompt, sweetAlerts.customStyle, sweetAlerts.itPretty, sweetAlerts.btnClicked, sweetAlerts.youWillFind, sweetAlerts.youWillNotAble, sweetAlerts.hereIsaMessage, sweetAlerts.goodJob, sweetAlerts.yesDeleteIt, sweetAlerts.areYouSure, sweetAlerts.doYouLikeThumb, sweetAlerts.anInput, sweetAlerts.writeSomethingInteresting, sweetAlerts.writeSomething, sweetAlerts.youMustEnterPassword, sweetAlerts.enterPassword, extension.notification, notification.infoMsg, notification.successMessage, notification.warningMessage, notification.closeAfter3000ms, notification.errorMessage, notification.titleHere, notification.clickMe, notification.info, notification.success, notification.warning, notification.error, sidebar.editors, sidebar.editors.CKEditor, sidebar.editors.WYSISWYGEditor, picker.color.alpha, picker.color.hue, picker.color.circle, picker.color.compact, picker.color.block, picker.color.chrome, picker.color.github, picker.color.twitter, picker.color.withRedux, picker.color.sketch, picker.color.material, picker.color.slider, picker.color.basic, picker.color.basicToggle, picker.color.custom, picker.color.customPointer, picker.color.photoshop, picker.color.swatches, picker.color.basicPositioning, sidebar.documents, sidebar.documents.changelog, sidebar.documents.installation, sidebar.dashboard.listing, sidebar.dashboard.crypto, sidebar.algolia, sidebar.components.rechart, sidebar.components.amchart, sidebar.google.map, sidebar.ammap, sidebar.map.animations.lines, sidebar.map.curved.lines, sidebar.map.zooming.countries, sidebar.map.patterns, sidebar.map.capitals.map, sidebar.map.markers, sidebar.map.flight.routes, sidebar.map.choropleth, sidebar.map.grouped.countries, sidebar.map.bubbles, sidebar.map.drill.down, sidebar.map.multiple.areas, sidebar.map.weather, sidebar.extensions.shuffle, sidebar.extensions.profile, sidebar.social, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"app.announced\":\"新版本将于12月25日发布。 敬请关注！\",\"sidebar.main\":\"主要\",\"sidebar.dashboard\":\"仪表板\",\"sidebar.dashboard.crm\":\"Crm\",\"sidebar.layouts\":\"布局\",\"sidebar.components\":\"组件\",\"sidebar.components.general\":\"一般\",\"sidebar.general.button\":\"按键\",\"sidebar.general.icon\":\"图标\",\"sidebar.components.navigation\":\"导航\",\"sidebar.navigation.affix\":\"词缀\",\"sidebar.navigation.breadcrumb\":\"面包屑\",\"sidebar.navigation.dropdown\":\"落下\",\"sidebar.navigation.menu\":\"菜单\",\"sidebar.navigation.pagination\":\"分页\",\"sidebar.navigation.steps\":\"脚步\",\"sidebar.components.dataEntry\":\"数据输入\",\"sidebar.dataEntry.autoComplete\":\"自动完成\",\"sidebar.dataEntry.checkbox\":\"复选框\",\"sidebar.dataEntry.cascader\":\"卡斯卡德\",\"sidebar.dataEntry.datePicker\":\"日期选择器\",\"sidebar.dataEntry.form\":\"形成\",\"sidebar.dataEntry.inputNumber\":\"输入号码\",\"sidebar.dataEntry.input\":\"输入\",\"sidebar.dataEntry.mention\":\"提到\",\"sidebar.dataEntry.rate\":\"率\",\"sidebar.dataEntry.radio\":\"无线电\",\"sidebar.dataEntry.switch\":\"开关\",\"sidebar.dataEntry.slider\":\"滑块\",\"sidebar.dataEntry.select\":\"选择\",\"sidebar.dataEntry.treeSelect\":\"树选择\",\"sidebar.dataEntry.transfer\":\"转让\",\"sidebar.dataEntry.timePicker\":\"时间选择器\",\"sidebar.dataEntry.upload\":\"上传\",\"sidebar.components.dataDisplay\":\"数据显示\",\"sidebar.dataDisplay.avatar\":\"阿凡达\",\"sidebar.dataDisplay.badge\":\"徽章\",\"sidebar.dataDisplay.collapse\":\"坍方\",\"sidebar.dataDisplay.carousel\":\"圆盘传送带\",\"sidebar.dataDisplay.card\":\"卡\",\"sidebar.dataDisplay.calender\":\"日历\",\"sidebar.dataDisplay.list\":\"名单\",\"sidebar.dataDisplay.popover\":\"酥料饼\",\"sidebar.dataDisplay.tree\":\"树\",\"sidebar.dataDisplay.toolTips\":\"提示\",\"sidebar.dataDisplay.timeLine\":\"时间线\",\"sidebar.dataDisplay.tag\":\"标签\",\"sidebar.dataDisplay.tabs\":\"标签\",\"sidebar.dataDisplay.table\":\"表\",\"sidebar.components.feedBack\":\"反馈\",\"sidebar.feedBack.alert\":\"警报\",\"sidebar.feedBack.modal\":\"语气\",\"sidebar.feedBack.message\":\"信息\",\"sidebar.feedBack.notification\":\"通知\",\"sidebar.feedBack.progress\":\"进展\",\"sidebar.feedBack.popConfirm\":\"流行确认\",\"sidebar.feedBack.spin\":\"纺\",\"sidebar.components.other\":\"其他\",\"sidebar.other.anchor\":\"锚\",\"sidebar.other.backTop\":\"返回顶部\",\"sidebar.other.divider\":\"分频器\",\"sidebar.widgets\":\"小工具\",\"sidebar.metrics\":\"度量\",\"sidebar.view\":\"视图\",\"sidebar.view.basicTable\":\"基本表\",\"sidebar.view.dataTable\":\"数据表\",\"sidebar.extensions\":\"扩展\",\"sidebar.extensions.editior\":\"编辑\",\"sidebar.extensions.dragNDrop\":\"拖放\",\"sidebar.extensions.sweetAlert\":\"甜蜜警报\",\"sidebar.extensions.notification\":\"通知\",\"sidebar.extensions.reactDates\":\"反应日期\",\"sidebar.extensions.dropZone\":\"拖放区\",\"sidebar.googleMap\":\"谷歌地图\",\"sidebar.charts\":\"图表\",\"sidebar.apps\":\"应用\",\"sidebar.mailApp\":\"邮件应用\",\"sidebar.todoApp\":\"做应用程序\",\"sidebar.contactsApp\":\"联系人应用\",\"sidebar.chatApp\":\"聊天应用\",\"sidebar.notes\":\"笔记\",\"sidebar.pickers\":\"拾荒者\",\"sidebar.crud\":\"Firebase CRUD\",\"sidebar.pickers.dateTimePickers\":\"日期和时间选择器\",\"sidebar.pickers.colorPickers\":\"颜色选择器\",\"sidebar.chart\":\"图表\",\"sidebar.chart.line\":\"折线图\",\"sidebar.chart.bar\":\"条形图\",\"sidebar.chart.area\":\"面积图\",\"sidebar.chart.composed\":\"组成图表\",\"sidebar.chart.scatter\":\"散点图\",\"sidebar.chart.pie\":\"饼形图\",\"sidebar.chart.radial\":\"径向图\",\"sidebar.chart.radar\":\"雷达图\",\"sidebar.chart.tree\":\"树图\",\"sidebar.map\":\"谷歌地图\",\"sidebar.map.simple\":\"简单的地图\",\"sidebar.map.styled\":\"风格地图\",\"sidebar.map.geoLocation\":\"地理位置\",\"sidebar.map.mapDirection\":\"地图方向\",\"sidebar.map.overlay\":\"地图覆盖\",\"sidebar.map.kmLayer\":\"地图Km层\",\"sidebar.map.popupInfo\":\"地图弹出信息\",\"sidebar.map.trafficLayer\":\"映射流量层\",\"sidebar.map.streetView\":\"街景\",\"sidebar.map.eventListener\":\"事件监听器\",\"sidebar.map.mapDrawing\":\"地图绘制\",\"sidebar.map.mapClustering\":\"地图集群\",\"sidebar.modules\":\"模块\",\"sidebar.calendar\":\"日历\",\"sidebar.calendar.basic\":\"基本\",\"sidebar.calendar.cultures\":\"文化\",\"sidebar.calendar.dnd\":\"DND\",\"sidebar.calendar.popup\":\"弹出\",\"sidebar.calendar.rendering\":\"渲染\",\"sidebar.calendar.selectable\":\"可选\",\"sidebar.calendar.timeslots\":\"时隙\",\"sidebar.mail.title\":\"邮件\",\"sidebar.mail.compose\":\"撰写\",\"sidebar.mail.mailbox\":\"邮箱\",\"sidebar.mail.filters\":\"过滤器\",\"sidebar.mail.labels\":\"标签\",\"sidebar.eCommerce\":\"电子商务\",\"sidebar.eCommerce.productList\":\"产品列表\",\"sidebar.eCommerce.productGrid\":\"产品网格\",\"sidebar.extraComponents\":\"额外的组件\",\"sidebar.inBuiltApp\":\"内置应用程序\",\"sidebar.extraElements.callouts\":\"大喊\",\"sidebar.extraElements.testimonials\":\"褒奖\",\"sidebar.timeLine\":\"时间线\",\"sidebar.timeLine.default\":\"默认\",\"sidebar.timeLine.defaultwithIcons\":\"默认使用图标\",\"sidebar.timeLine.leftAligned\":\"左对齐\",\"sidebar.extraElements.pricingTable\":\"定价表\",\"sidebar.customViews\":\"自定义视图\",\"sidebar.listType.extras\":\"附加功能\",\"sidebar.listType\":\"列表类型\",\"sidebar.listType.plainListView\":\"普通列表视图\",\"sidebar.listType.withDivider\":\"带分隔线的普通列表\",\"sidebar.listType.cardListView\":\"卡列表视图\",\"sidebar.extraPages.404\":\"404错误页面\",\"sidebar.extraPages.500\":\"500错误页面\",\"sidebar.extraPages\":\"额外页面\",\"app.userAuth\":\"用户身份验证\",\"app.userAuth.login\":\"登录\",\"app.userAuth.signIn\":\"签到\",\"app.userAuth.send\":\"发送\",\"app.userAuth.bySigning\":\"通过注册，您可以利用我们服务的全部功能。\",\"app.userAuth.or\":\"要么\",\"app.userAuth.forgotPassword\":\"忘记密码\",\"app.userAuth.forgot\":\"别担心。 恢复密码很简单。只需告诉我们您已经注册过的超大型电子邮件\",\"app.userAuth.signUp\":\"注册\",\"app.userAuth.getAccount\":\"获得一个帐户！\",\"app.userAuth.resetPassword\":\"重设密码\",\"app.userAuth.reset\":\"重启\",\"app.userAuth.lockScreen\":\"锁屏\",\"app.userAuth.unLock\":\"开锁\",\"appModule.enterPasswordUnlock\":\"输入您的密码解锁屏幕！\",\"appModule.enterPasswordReset\":\"为您的帐户输入新密码\",\"appModule.loginSuccessfully\":\"成功登录\",\"appModule.password\":\"密码\",\"appModule.email\":\"电子邮件\",\"appModule.name\":\"名称\",\"appModule.phone\":\"电话\",\"appModule.designation\":\"指定\",\"appModule.regsiter\":\"寄存器\",\"appModule.regsiterNow\":\"注册编号\",\"appModule.hvAccount\":\"有一个账户\",\"appModule.createAccount\":\"创建一个帐户\",\"appModule.termAndCondition\":\"期限和条件\",\"appModule.iAccept\":\"通过注册，我接受\",\"todo\":\"去做\",\"todo.addTask\":\"添加任务\",\"todo.all\":\"所有\",\"todo.filters\":\"过滤器\",\"todo.labels\":\"标签\",\"chat.selectUserChat\":\"选择用户开始聊天\",\"chat.selectContactChat\":\"选择联系人即可开始聊天\",\"chat.chatUser\":\"聊天\",\"chat.contacts\":\"往来\",\"chat.searchStartNewChat\":\"搜索或开始新的聊天\",\"chat.typeMessage\":\"键入并按回车键发送消息\",\"chat.status\":\"这是一个地位....不是你的日记...\",\"contact.saveContact\":\"保存联系人\",\"contact.addContact\":\"增加联系人\",\"contact.searchContact\":\"搜索联系人\",\"mail.mailbox\":\"邮箱\",\"mail.compose\":\"撰写\",\"mail.filters\":\"过滤器\",\"mail.labels\":\"标签\",\"mail.title\":\"新消息\",\"eCommerce.buyNow\":\"立即购买\",\"eCommerce.addToCart\":\"添加到购物车\",\"eCommerce.readMore\":\"阅读更多\",\"callouts.viewRange\":\"查看范围\",\"callouts.basic\":\"基本\",\"extraElements.callout\":\"额外元素\",\"testimonials.basic\":\"基本\",\"testimonials.classic\":\"经典\",\"testimonials.standard\":\"标准\",\"extraElements.testimonials\":\"褒奖\",\"button.modify\":\"修改\",\"button.delete\":\"删除\",\"pricingTable.basic\":\"基本\",\"pricingTable.circle\":\"圈\",\"pricingTable.classic\":\"经典\",\"pricingTable.dark\":\"黑暗\",\"pricingTable.personal\":\"个人\",\"pricingTable.easyTranslation\":\"易于翻译\",\"pricingTable.awesomeGoogleFonts\":\"令人敬畏的Google字体\",\"pricingTable.hotelBookingSystem\":\"酒店预订系统\",\"pricingTable.emailComposeInterface\":\"电子邮件撰写界面\",\"pricingTable.locationFinderApp\":\"位置搜索器应用程序\",\"pricingTable.buyNow\":\"立即购买\",\"pricingTable.business\":\"商业\",\"pricingTable.professional\":\"专业的\",\"button.yes\":\"是\",\"button.no\":\"没有\",\"extraPages.404Msg\":\"糟糕，发生错误。 找不到网页！\",\"extraPages.500Msg\":\"对不起，服务器出错了\",\"extraPages.goHome\":\"回家\",\"extension.sweetAlerts\":\"甜蜜警报\",\"sweetAlerts.basic\":\"基本\",\"sweetAlerts.description\":\"带说明\",\"sweetAlerts.success\":\"成功\",\"sweetAlerts.warning\":\"警告\",\"sweetAlerts.custom\":\"习惯\",\"sweetAlerts.htmlTag\":\"HTML标记\",\"sweetAlerts.prompt\":\"提示\",\"sweetAlerts.itsBlue\":\"它是蓝色的！\",\"sweetAlerts.passwordPrompt\":\"密码提示\",\"sweetAlerts.customStyle\":\"自定义样式\",\"sweetAlerts.itPretty\":\"真漂亮，不是吗？\",\"sweetAlerts.btnClicked\":\"你点击了按钮！\",\"sweetAlerts.youWillFind\":\"你会发现他们已经起来了！\",\"sweetAlerts.youWillNotAble\":\"你将无法恢复这个虚构的文件！\",\"sweetAlerts.hereIsaMessage\":\"这是一条消息！\",\"sweetAlerts.goodJob\":\"做得好！\",\"sweetAlerts.yesDeleteIt\":\"是的，删除它！\",\"sweetAlerts.areYouSure\":\"你确定？\",\"sweetAlerts.doYouLikeThumb\":\"你喜欢大拇指吗？\",\"sweetAlerts.anInput\":\"一个输入！\",\"sweetAlerts.writeSomethingInteresting\":\"写点有趣的东西：\",\"sweetAlerts.writeSomething\":\"写一些东西\",\"sweetAlerts.youMustEnterPassword\":\"你必须输入你的密码！\",\"sweetAlerts.enterPassword\":\"输入密码\",\"extension.notification\":\"通知\",\"notification.infoMsg\":\"信息消息\",\"notification.successMessage\":\"成功消息\",\"notification.warningMessage\":\"警告信息\",\"notification.closeAfter3000ms\":\"3000ms后关闭\",\"notification.errorMessage\":\"错误信息\",\"notification.titleHere\":\"标题在这里\",\"notification.clickMe\":\"点击我！\",\"notification.info\":\"信息\",\"notification.success\":\"成功\",\"notification.warning\":\"警告\",\"notification.error\":\"错误\",\"sidebar.editors\":\"编者\",\"sidebar.editors.CKEditor\":\"CK编辑器的\",\"sidebar.editors.WYSISWYGEditor\":\"所见即所得的编辑器\",\"picker.color.alpha\":\"阿尔法挑选者\",\"picker.color.hue\":\"色相选择器\",\"picker.color.circle\":\"圈选手\",\"picker.color.compact\":\"紧凑型拾取器\",\"picker.color.block\":\"块挑选器\",\"picker.color.chrome\":\"铬挑选器\",\"picker.color.github\":\"Github捡拾器\",\"picker.color.twitter\":\"推特挑选者\",\"picker.color.withRedux\":\"与Redux\",\"picker.color.sketch\":\"素描选择器\",\"picker.color.material\":\"材料捡拾器\",\"picker.color.slider\":\"滑块挑选器\",\"picker.color.basic\":\"基本拾取器\",\"picker.color.basicToggle\":\"基本切换\",\"picker.color.custom\":\"自定义选取器\",\"picker.color.customPointer\":\"自定义指针\",\"picker.color.photoshop\":\"照片店采摘\",\"picker.color.swatches\":\"色板拾取器\",\"picker.color.basicPositioning\":\"基本定位\",\"sidebar.documents\":\"文件\",\"sidebar.documents.changelog\":\"更新日志\",\"sidebar.documents.installation\":\"安装\",\"sidebar.dashboard.listing\":\"清單\",\"sidebar.dashboard.crypto\":\"加密\",\"sidebar.algolia\":\"Algolia\",\"sidebar.components.rechart\":\"ReChart\",\"sidebar.components.amchart\":\"AmChart\",\"sidebar.google.map\":\"谷歌地圖\",\"sidebar.ammap\":\"AmMap\",\"sidebar.map.animations.lines\":\"隨著動畫\",\"sidebar.map.curved.lines\":\"有曲線\",\"sidebar.map.zooming.countries\":\"縮放國家\",\"sidebar.map.patterns\":\"地圖與模式\",\"sidebar.map.capitals.map\":\"首都地圖\",\"sidebar.map.markers\":\"地圖標記\",\"sidebar.map.flight.routes\":\"航線\",\"sidebar.map.choropleth\":\"熱圖\",\"sidebar.map.grouped.countries\":\"分組國家\",\"sidebar.map.bubbles\":\"映射與泡沫\",\"sidebar.map.drill.down\":\"深入研究地圖\",\"sidebar.map.multiple.areas\":\"多個領域\",\"sidebar.map.weather\":\"天氣圖\",\"sidebar.extensions.shuffle\":\"拖曳\",\"sidebar.extensions.profile\":\"輪廓\",\"sidebar.social\":\"社交應用\"}");

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");
/**
* Detects whether a given url is from the same origin as the current page (browser only).
*/


function isLocal(url) {
  const locationOrigin = (0, _utils.getLocationOrigin)();
  const resolved = new URL(url, locationOrigin);
  return resolved.origin === locationOrigin;
}

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName,
    target
  } = e.currentTarget;

  if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
    // ignore click for new tab / new window behavior
    return;
  }

  if (!isLocal(href)) {
    // ignore click if it's outside our scope (e.g. https://google.com)
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router.useRouter)();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router2.resolveHref)(router.pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router2.resolveHref)(router.pathname, props.as) : resolvedHref
    };
  }, [router.pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router2.addBasePath)(as);
  } // Add the ending slash to the paths. So, we can serve the
  // "<page>/index.html" directly.


  if (false) {}

  return _react.default.cloneElement(child, childProps);
}

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _searchParamsToUrlQuery = __webpack_require__(/*! ./utils/search-params-to-url-query */ "./node_modules/next/dist/next-server/lib/router/utils/search-params-to-url-query.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addBasePath(path) {
  return basePath ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);
  const finalUrl = new URL(urlAsString, base);
  finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

  return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

function tryParseRelativeUrl(url) {
  try {
    return (0, _parseRelativeUrl.parseRelativeUrl)(url);
  } catch (err) {
    if (true) {
      throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
    }

    return null;
  }
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/vercel/next.js/popstate-state-empty');
        }
      }

      this.change('replaceState', url, as, options);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly for the SSR page.


    if (false) {}

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = delBasePath(as);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as);
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return false;
    let {
      pathname,
      searchParams
    } = parsed;
    const query = (0, _searchParamsToUrlQuery.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options;

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(cleanedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      const {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo);

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), as, __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return;
    const {
      pathname
    } = parsed; // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var _querystring = __webpack_require__(/*! querystring */ "querystring"); // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    // query = '' + new URLSearchParams(query);
    query = (0, _querystring.encode)(query);
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;
const DUMMY_BASE = new URL('http://n');
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected.
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin) {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/search-params-to-url-query.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/search-params-to-url-query.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./pages/components/data-entry/form.js":
/*!*********************************************!*\
  !*** ./pages/components/data-entry/form.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_hoc_securedPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app/hoc/securedPage */ "./app/hoc/securedPage/index.js");
/* harmony import */ var _routes_components_dataEntry_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../routes/components/dataEntry/Form */ "./routes/components/dataEntry/Form/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (Object(_app_hoc_securedPage__WEBPACK_IMPORTED_MODULE_2__["default"])(() => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "Form")), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_routes_components_dataEntry_Form__WEBPACK_IMPORTED_MODULE_3__["default"], null)))));

/***/ }),

/***/ "./redux/actions/Auth.js":
/*!*******************************!*\
  !*** ./redux/actions/Auth.js ***!
  \*******************************/
/*! exports provided: userSignUp, userSignIn, userSignOut, userSignUpSuccess, userSignInSuccess, userSignOutSuccess, showAuthMessage, userGoogleSignIn, userGoogleSignInSuccess, userFacebookSignIn, userFacebookSignInSuccess, setInitUrl, userTwitterSignIn, userTwitterSignInSuccess, userGithubSignIn, userGithubSignInSuccess, showAuthLoader, hideMessage, hideAuthLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userSignUp", function() { return userSignUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userSignIn", function() { return userSignIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userSignOut", function() { return userSignOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userSignUpSuccess", function() { return userSignUpSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userSignInSuccess", function() { return userSignInSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userSignOutSuccess", function() { return userSignOutSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAuthMessage", function() { return showAuthMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userGoogleSignIn", function() { return userGoogleSignIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userGoogleSignInSuccess", function() { return userGoogleSignInSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userFacebookSignIn", function() { return userFacebookSignIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userFacebookSignInSuccess", function() { return userFacebookSignInSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInitUrl", function() { return setInitUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userTwitterSignIn", function() { return userTwitterSignIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userTwitterSignInSuccess", function() { return userTwitterSignInSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userGithubSignIn", function() { return userGithubSignIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userGithubSignInSuccess", function() { return userGithubSignInSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAuthLoader", function() { return showAuthLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideMessage", function() { return hideMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideAuthLoader", function() { return hideAuthLoader; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/ActionTypes */ "./constants/ActionTypes.js");


const userSignUp = user => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["SIGNUP_USER"],
    payload: user
  };
};
const userSignIn = user => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["SIGNIN_USER"],
    payload: user
  };
};
const userSignOut = () => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["SIGNOUT_USER"]
  };
};
const userSignUpSuccess = authUser => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["SIGNUP_USER_SUCCESS"],
    payload: authUser
  };
};
const userSignInSuccess = authUser => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["SIGNIN_USER_SUCCESS"],
    payload: authUser
  };
};
const userSignOutSuccess = () => {
  next_router__WEBPACK_IMPORTED_MODULE_0___default.a.replace("/");
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["SIGNOUT_USER_SUCCESS"]
  };
};
const showAuthMessage = message => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["SHOW_MESSAGE"],
    payload: message
  };
};
const userGoogleSignIn = () => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["SIGNIN_GOOGLE_USER"]
  };
};
const userGoogleSignInSuccess = authUser => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["SIGNIN_GOOGLE_USER_SUCCESS"],
    payload: authUser
  };
};
const userFacebookSignIn = () => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["SIGNIN_FACEBOOK_USER"]
  };
};
const userFacebookSignInSuccess = authUser => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["SIGNIN_FACEBOOK_USER_SUCCESS"],
    payload: authUser
  };
};
const setInitUrl = url => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["INIT_URL"],
    payload: url
  };
};
const userTwitterSignIn = () => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["SIGNIN_TWITTER_USER"]
  };
};
const userTwitterSignInSuccess = authUser => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["SIGNIN_TWITTER_USER_SUCCESS"],
    payload: authUser
  };
};
const userGithubSignIn = () => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["SIGNIN_GITHUB_USER"]
  };
};
const userGithubSignInSuccess = authUser => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["SIGNIN_GITHUB_USER_SUCCESS"],
    payload: authUser
  };
};
const showAuthLoader = () => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["ON_SHOW_LOADER"]
  };
};
const hideMessage = () => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["HIDE_MESSAGE"]
  };
};
const hideAuthLoader = () => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["ON_HIDE_LOADER"]
  };
};

/***/ }),

/***/ "./redux/actions/Common.js":
/*!*********************************!*\
  !*** ./redux/actions/Common.js ***!
  \*********************************/
/*! exports provided: fetchStart, fetchSuccess, fetchError, showMessage, hideMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchStart", function() { return fetchStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSuccess", function() { return fetchSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchError", function() { return fetchError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showMessage", function() { return showMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideMessage", function() { return hideMessage; });
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/ActionTypes */ "./constants/ActionTypes.js");

const fetchStart = () => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_START"]
  };
};
const fetchSuccess = () => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_SUCCESS"]
  };
};
const fetchError = error => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_ERROR"],
    payload: error
  };
};
const showMessage = message => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOW_MESSAGE"],
    payload: message
  };
};
const hideMessage = () => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["HIDE_MESSAGE"]
  };
};

/***/ }),

/***/ "./redux/actions/Contact.js":
/*!**********************************!*\
  !*** ./redux/actions/Contact.js ***!
  \**********************************/
/*! exports provided: onGetAllContact, onAddContact, onUpdateContact, onDeleteContact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onGetAllContact", function() { return onGetAllContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAddContact", function() { return onAddContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onUpdateContact", function() { return onUpdateContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDeleteContact", function() { return onDeleteContact; });
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/ActionTypes */ "./constants/ActionTypes.js");
/* harmony import */ var _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../firebaseConfig/index */ "./firebaseConfig/index.js");


const onGetAllContact = () => {
  return dispatch => {
    dispatch({
      type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_START"]
    });
    _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__["database"].ref('/contact').on('value', snapshot => {
      dispatch({
        type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_SUCCESS"]
      });
      dispatch({
        type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_All_CONTACT_SUCCESS"],
        payload: snapshot.val()
      });
    });
  };
};
const onAddContact = contact => {
  return dispatch => _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__["database"].ref('/contact').push(contact);
};
const onUpdateContact = (id, contact) => {
  return dispatch => _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__["database"].ref('/contact').child(id).update(contact);
};
const onDeleteContact = id => {
  return dispatch => _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__["database"].ref('/contact').child(id).remove();
};

/***/ }),

/***/ "./redux/actions/Notes.js":
/*!********************************!*\
  !*** ./redux/actions/Notes.js ***!
  \********************************/
/*! exports provided: onGetSticky, fetchStickySuccess, onUpdateSticky, updateStickySuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onGetSticky", function() { return onGetSticky; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchStickySuccess", function() { return fetchStickySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onUpdateSticky", function() { return onUpdateSticky; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStickySuccess", function() { return updateStickySuccess; });
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/ActionTypes */ "./constants/ActionTypes.js");

const onGetSticky = notesList => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_STICKY"],
    notesList
  };
};
const fetchStickySuccess = notesList => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_ALL_NOTES_SUCCESS"],
    payload: notesList
  };
};
const onUpdateSticky = notesList => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["NOTES_UPDATE"],
    notesList
  };
};
const updateStickySuccess = notesList => {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["UPDATE_ALL_NOTES_SUCCESS"],
    payload: notesList
  };
};

/***/ }),

/***/ "./redux/actions/Setting.js":
/*!**********************************!*\
  !*** ./redux/actions/Setting.js ***!
  \**********************************/
/*! exports provided: toggleCollapsedSideNav, updateWindowWidth, setThemeType, onNavStyleChange, setPathName, switchLanguage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleCollapsedSideNav", function() { return toggleCollapsedSideNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateWindowWidth", function() { return updateWindowWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setThemeType", function() { return setThemeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onNavStyleChange", function() { return onNavStyleChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPathName", function() { return setPathName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchLanguage", function() { return switchLanguage; });
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/ActionTypes */ "./constants/ActionTypes.js");
/* harmony import */ var _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/ThemeSetting */ "./constants/ThemeSetting.js");


function toggleCollapsedSideNav(navCollapsed) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_COLLAPSED_NAV"],
    navCollapsed
  };
}
function updateWindowWidth(width) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["WINDOW_WIDTH"],
    width
  };
}
function setThemeType(themeType) {
  return {
    type: _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__["THEME_TYPE"],
    themeType
  };
}
function onNavStyleChange(navStyle) {
  return {
    type: _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__["NAV_STYLE"],
    navStyle
  };
}
function setPathName(pathname) {
  return {
    type: _constants_ThemeSetting__WEBPACK_IMPORTED_MODULE_1__["SET_PATH_NAME"],
    pathname
  };
}
function switchLanguage(locale) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["SWITCH_LANGUAGE"],
    payload: locale
  };
}

/***/ }),

/***/ "./redux/actions/index.js":
/*!********************************!*\
  !*** ./redux/actions/index.js ***!
  \********************************/
/*! exports provided: toggleCollapsedSideNav, updateWindowWidth, setThemeType, onNavStyleChange, setPathName, switchLanguage, userSignUp, userSignIn, userSignOut, userSignUpSuccess, userSignInSuccess, userSignOutSuccess, showAuthMessage, userGoogleSignIn, userGoogleSignInSuccess, userFacebookSignIn, userFacebookSignInSuccess, setInitUrl, userTwitterSignIn, userTwitterSignInSuccess, userGithubSignIn, userGithubSignInSuccess, showAuthLoader, hideMessage, hideAuthLoader, onGetSticky, fetchStickySuccess, onUpdateSticky, updateStickySuccess, fetchStart, fetchSuccess, fetchError, showMessage, onGetAllContact, onAddContact, onUpdateContact, onDeleteContact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Setting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Setting */ "./redux/actions/Setting.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleCollapsedSideNav", function() { return _Setting__WEBPACK_IMPORTED_MODULE_0__["toggleCollapsedSideNav"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateWindowWidth", function() { return _Setting__WEBPACK_IMPORTED_MODULE_0__["updateWindowWidth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setThemeType", function() { return _Setting__WEBPACK_IMPORTED_MODULE_0__["setThemeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onNavStyleChange", function() { return _Setting__WEBPACK_IMPORTED_MODULE_0__["onNavStyleChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setPathName", function() { return _Setting__WEBPACK_IMPORTED_MODULE_0__["setPathName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchLanguage", function() { return _Setting__WEBPACK_IMPORTED_MODULE_0__["switchLanguage"]; });

/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Auth */ "./redux/actions/Auth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userSignUp", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["userSignUp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userSignIn", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["userSignIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userSignOut", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["userSignOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userSignUpSuccess", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["userSignUpSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userSignInSuccess", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["userSignInSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userSignOutSuccess", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["userSignOutSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showAuthMessage", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["showAuthMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userGoogleSignIn", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["userGoogleSignIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userGoogleSignInSuccess", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["userGoogleSignInSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userFacebookSignIn", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["userFacebookSignIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userFacebookSignInSuccess", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["userFacebookSignInSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setInitUrl", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["setInitUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userTwitterSignIn", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["userTwitterSignIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userTwitterSignInSuccess", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["userTwitterSignInSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userGithubSignIn", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["userGithubSignIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userGithubSignInSuccess", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["userGithubSignInSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showAuthLoader", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["showAuthLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideMessage", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["hideMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideAuthLoader", function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__["hideAuthLoader"]; });

/* harmony import */ var _Notes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Notes */ "./redux/actions/Notes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onGetSticky", function() { return _Notes__WEBPACK_IMPORTED_MODULE_2__["onGetSticky"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchStickySuccess", function() { return _Notes__WEBPACK_IMPORTED_MODULE_2__["fetchStickySuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onUpdateSticky", function() { return _Notes__WEBPACK_IMPORTED_MODULE_2__["onUpdateSticky"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateStickySuccess", function() { return _Notes__WEBPACK_IMPORTED_MODULE_2__["updateStickySuccess"]; });

/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Common */ "./redux/actions/Common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchStart", function() { return _Common__WEBPACK_IMPORTED_MODULE_3__["fetchStart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchSuccess", function() { return _Common__WEBPACK_IMPORTED_MODULE_3__["fetchSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchError", function() { return _Common__WEBPACK_IMPORTED_MODULE_3__["fetchError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showMessage", function() { return _Common__WEBPACK_IMPORTED_MODULE_3__["showMessage"]; });

/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Contact */ "./redux/actions/Contact.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onGetAllContact", function() { return _Contact__WEBPACK_IMPORTED_MODULE_4__["onGetAllContact"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onAddContact", function() { return _Contact__WEBPACK_IMPORTED_MODULE_4__["onAddContact"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onUpdateContact", function() { return _Contact__WEBPACK_IMPORTED_MODULE_4__["onUpdateContact"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onDeleteContact", function() { return _Contact__WEBPACK_IMPORTED_MODULE_4__["onDeleteContact"]; });







/***/ }),

/***/ "./routes/components/dataEntry/Form/AdvancedSearch.js":
/*!************************************************************!*\
  !*** ./routes/components/dataEntry/Form/AdvancedSearch.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const AdvancedSearch = () => {
  const {
    0: expand,
    1: setExpand
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [form] = antd__WEBPACK_IMPORTED_MODULE_1__["Form"].useForm();

  const getFields = () => {
    const count = expand ? 10 : 6;
    const children = [];

    for (let i = 0; i < count; i++) {
      children.push(__jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        lg: 8,
        md: 8,
        sm: 12,
        xs: 24,
        key: i,
        style: {
          display: i < count ? 'block' : 'none'
        }
      }, __jsx("div", {
        className: "gx-form-row0"
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
        name: `field-${i}`,
        label: `Field ${i}`,
        rules: [{
          required: true,
          message: 'Input something!'
        }]
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        placeholder: "placeholder"
      })))));
    }

    return children;
  };

  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: "gx-card",
    title: "Advanced Search"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    form: form,
    name: "advanced_search",
    className: "ant-advanced-search-form",
    onFinish: onFinish
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: 24
  }, getFields()), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24,
    style: {
      textAlign: 'right'
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit"
  }, "Search"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => {
      form.resetFields();
    }
  }, "Clear"), __jsx("a", {
    style: {
      display: 'inline-block',
      verticalAlign: 'middle',
      marginBottom: 15
    },
    onClick: () => {
      setExpand(!expand);
    }
  }, expand ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["UpOutlined"], null) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["DownOutlined"], null), " Collapse")))));
};

/* harmony default export */ __webpack_exports__["default"] = (AdvancedSearch);

/***/ }),

/***/ "./routes/components/dataEntry/Form/Basic.js":
/*!***************************************************!*\
  !*** ./routes/components/dataEntry/Form/Basic.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons/lib/icons/UserOutlined */ "@ant-design/icons/lib/icons/UserOutlined");
/* harmony import */ var _ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons_lib_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons/lib/icons/LockOutlined */ "@ant-design/icons/lib/icons/LockOutlined");
/* harmony import */ var _ant_design_icons_lib_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const FormItem = antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class Basic extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onFinishFailed", errorInfo => {
      console.log('Failed:', errorInfo);
    });

    _defineProperty(this, "onFinish", values => {
      console.log('Received values of form: ', values);
    });
  }

  render() {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      className: "gx-card",
      title: "Basic"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      initialValues: {
        remember: true
      },
      name: "basic",
      onFinish: this.onFinish,
      onFinishFailed: this.onFinishFailed,
      layout: "inline"
    }, __jsx(FormItem, {
      rules: [{
        required: true,
        message: 'Please input your username!\'}'
      }],
      name: "uaername"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      prefix: __jsx(_ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_2___default.a, {
        style: {
          color: 'rgba(0,0,0,.25)'
        }
      }),
      placeholder: "Username"
    })), __jsx(FormItem, {
      rules: [{
        required: true,
        message: 'Please input your Password!'
      }],
      name: "password"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      prefix: __jsx(_ant_design_icons_lib_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_3___default.a, {
        style: {
          color: 'rgba(0,0,0,.25)'
        }
      }),
      type: "password",
      placeholder: "Password"
    })), __jsx(FormItem, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: "gx-mb-0",
      type: "primary",
      htmlType: "submit"
    }, "Log in"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Basic);

/***/ }),

/***/ "./routes/components/dataEntry/Form/CoordinatedControls.js":
/*!*****************************************************************!*\
  !*** ./routes/components/dataEntry/Form/CoordinatedControls.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_0__["Select"];
const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
};

const CoordinatedControls = () => {
  const [form] = antd__WEBPACK_IMPORTED_MODULE_0__["Form"].useForm();

  const onGenderChange = value => {
    switch (value) {
      case 'male':
        form.setFieldsValue({
          note: 'Hi, man!'
        });
        return;

      case 'female':
        form.setFieldsValue({
          note: 'Hi, lady!'
        });
        return;

      case 'other':
        form.setFieldsValue({
          note: 'Hi there!'
        });
    }
  };

  const onFinish = values => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      note: 'Hello world!',
      gender: 'male'
    });
  };

  return __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Card"], {
    className: "gx-card",
    title: "Coordinated Controls"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Form"], _extends({}, layout, {
    form: form,
    name: "control-hooks",
    onFinish: onFinish
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "note",
    label: "Note",
    rules: [{
      required: true
    }]
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "gender",
    label: "Gender",
    rules: [{
      required: true
    }]
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Select"], {
    placeholder: "Select a option and change input text above",
    onChange: onGenderChange,
    allowClear: true
  }, __jsx(Option, {
    value: "male"
  }, "male"), __jsx(Option, {
    value: "female"
  }, "female"), __jsx(Option, {
    value: "other"
  }, "other"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    noStyle: true,
    shouldUpdate: (prevValues, currentValues) => prevValues.gender !== currentValues.gender
  }, ({
    getFieldValue
  }) => getFieldValue('gender') === 'other' ? __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "customizeGender",
    label: "Customize Gender",
    rules: [{
      required: true
    }]
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], null)) : null), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, tailLayout, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    type: "primary",
    htmlType: "submit"
  }, "Submit"), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    htmlType: "button",
    onClick: onReset
  }, "Reset"), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    type: "link",
    htmlType: "button",
    onClick: onFill
  }, "Fill form"))));
};

/* harmony default export */ __webpack_exports__["default"] = (CoordinatedControls);

/***/ }),

/***/ "./routes/components/dataEntry/Form/CustomizedFormControls.js":
/*!********************************************************************!*\
  !*** ./routes/components/dataEntry/Form/CustomizedFormControls.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];

const PriceInput = ({
  value = {},
  onChange
}) => {
  const {
    0: number,
    1: setNumber
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: currency,
    1: setCurrency
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('rmb');

  const triggerChange = changedValue => {
    if (onChange) {
      onChange(_objectSpread(_objectSpread({
        number,
        currency
      }, value), changedValue));
    }
  };

  const onNumberChange = e => {
    const newNumber = parseInt(e.target.value || 0, 10);

    if (Number.isNaN(number)) {
      return;
    }

    if (!('number' in value)) {
      setNumber(newNumber);
    }

    triggerChange({
      number: newNumber
    });
  };

  const onCurrencyChange = newCurrency => {
    if (!('currency' in value)) {
      setCurrency(newCurrency);
    }

    triggerChange({
      currency: newCurrency
    });
  };

  return __jsx("span", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    value: value.number || number,
    onChange: onNumberChange,
    style: {
      width: '63%',
      marginRight: '5%'
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    value: value.currency || currency,
    style: {
      width: '32%'
    },
    onChange: onCurrencyChange
  }, __jsx(Option, {
    value: "rmb"
  }, "RMB"), __jsx(Option, {
    value: "dollar"
  }, "Dollar")));
};

const CustomizedFormControls = () => {
  const onFinish = values => {
    console.log('Received values from form: ', values);
  };

  const checkPrice = (rule, value) => {
    if (value.number > 0) {
      return Promise.resolve();
    }

    return Promise.reject('Price must be greater than zero!');
  };

  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: "gx-card",
    title: "Customized Form Controls"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    name: "customized_form_controls",
    layout: "inline",
    onFinish: onFinish,
    initialValues: {
      price: {
        number: 0,
        currency: 'rmb'
      }
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "price",
    label: "Price",
    rules: [{
      validator: checkPrice
    }]
  }, __jsx(PriceInput, null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit"
  }, "Submit"))));
};

/* harmony default export */ __webpack_exports__["default"] = (CustomizedFormControls);

/***/ }),

/***/ "./routes/components/dataEntry/Form/CustomizedValidation.js":
/*!******************************************************************!*\
  !*** ./routes/components/dataEntry/Form/CustomizedValidation.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const FormItem = antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item;
const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 5
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 18
    },
    md: {
      span: 16
    },
    lg: {
      span: 12
    }
  }
};

const CustomizedValidation = () => {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: "gx-card",
    title: "CUSTOMIZED VALIDATION"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({}, formItemLayout, {
    label: "Fail",
    validateStatus: "error",
    help: "Should be combination of numbers & alphabets"
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "unavailable choice",
    id: "error"
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({
    label: "Warning",
    validateStatus: "warning"
  }, formItemLayout), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "Warning",
    id: "warning",
    prefix: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["SmileOutlined"], null)
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({}, formItemLayout, {
    label: "Validating",
    hasFeedback: true,
    validateStatus: "validating",
    help: "The information is being validated..."
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "I'm the content is being validated",
    id: "validating"
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({
    label: "Success",
    hasFeedback: true,
    validateStatus: "success"
  }, formItemLayout), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "I'm the content",
    id: "success"
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({
    label: "Warning",
    hasFeedback: true,
    validateStatus: "warning"
  }, formItemLayout), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "Warning",
    id: "warning2"
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({}, formItemLayout, {
    label: "Fail",
    hasFeedback: true,
    validateStatus: "error",
    help: "Should be combination of numbers & alphabets"
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "unavailable choice",
    id: "error2"
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({
    label: "Success",
    hasFeedback: true,
    validateStatus: "success"
  }, formItemLayout), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["DatePicker"], {
    style: {
      width: '100%'
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({
    label: "Warning",
    hasFeedback: true,
    validateStatus: "warning"
  }, formItemLayout), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["TimePicker"], {
    style: {
      width: '100%'
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({
    label: "Error",
    hasFeedback: true,
    validateStatus: "error"
  }, formItemLayout), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], null, __jsx(Option, {
    value: "1"
  }, "Option 1"), __jsx(Option, {
    value: "2"
  }, "Option 2"), __jsx(Option, {
    value: "3"
  }, "Option 3"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({}, formItemLayout, {
    label: "Validating",
    hasFeedback: true,
    validateStatus: "validating",
    help: "The information is being validated..."
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Cascader"], {
    options: []
  })), __jsx(FormItem, _extends({
    label: "inline"
  }, formItemLayout), __jsx("div", {
    className: "ant-row gx-form-row0"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    sm: 11
  }, __jsx(FormItem, {
    validateStatus: "error",
    help: "Please select the correct date"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["DatePicker"], null))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    sm: 2
  }, __jsx("span", {
    style: {
      display: 'inline-block',
      width: '100%',
      textAlign: 'center'
    }
  }, "-")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    sm: 11
  }, __jsx(FormItem, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["DatePicker"], null))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({
    label: "Success",
    hasFeedback: true,
    validateStatus: "success"
  }, formItemLayout), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["InputNumber"], {
    style: {
      width: '100%'
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({
    label: "Success",
    hasFeedback: true,
    validateStatus: "success"
  }, formItemLayout), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    allowClear: true,
    placeholder: "with allowClear"
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({
    label: "Warning",
    hasFeedback: true,
    validateStatus: "warning"
  }, formItemLayout), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, {
    placeholder: "with input password"
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({
    label: "Error",
    hasFeedback: true,
    validateStatus: "error"
  }, formItemLayout), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, {
    allowClear: true,
    placeholder: "with input password and allowClear"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (CustomizedValidation);

/***/ }),

/***/ "./routes/components/dataEntry/Form/DynamicFormItem.js":
/*!*************************************************************!*\
  !*** ./routes/components/dataEntry/Form/DynamicFormItem.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 4
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 20
    }
  }
};
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 20,
      offset: 4
    }
  }
};

const DynamicFormItem = () => {
  const onFinish = values => {
    console.log('Received values of form:', values);
  };

  return __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Card"], {
    className: "gx-card",
    title: "Dynamic Form Item"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Form"], _extends({
    name: "dynamic_form_item"
  }, formItemLayoutWithOutLabel, {
    onFinish: onFinish
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].List, {
    name: "names"
  }, (fields, {
    add,
    remove
  }) => {
    return __jsx("div", null, fields.map((field, index) => __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, _extends({}, index === 0 ? formItemLayout : formItemLayoutWithOutLabel, {
      label: index === 0 ? 'Passengers' : '',
      required: false,
      key: field.key
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, _extends({}, field, {
      validateTrigger: ['onChange', 'onBlur'],
      rules: [{
        required: true,
        whitespace: true,
        message: "Please input passenger's name or delete this field."
      }],
      noStyle: true
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], {
      placeholder: "passenger name",
      style: {
        width: '60%'
      }
    })), fields.length > 1 ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["MinusCircleOutlined"], {
      className: "dynamic-delete-button",
      style: {
        margin: '0 8px'
      },
      onClick: () => {
        remove(field.name);
      }
    }) : null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      type: "dashed",
      onClick: () => {
        add();
      },
      style: {
        width: '60%'
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["PlusOutlined"], null), " Add field")));
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    type: "primary",
    htmlType: "submit"
  }, "Submit"))));
};

/* harmony default export */ __webpack_exports__["default"] = (DynamicFormItem);

/***/ }),

/***/ "./routes/components/dataEntry/Form/DynamicRules.js":
/*!**********************************************************!*\
  !*** ./routes/components/dataEntry/Form/DynamicRules.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 6
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 14
    }
  }
};
const formTailLayout = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    span: 8,
    offset: 4
  }
};

const DynamicRules = () => {
  const [form] = antd__WEBPACK_IMPORTED_MODULE_1__["Form"].useForm();
  const {
    0: checkNick,
    1: setCheckNick
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    form.validateFields(['nickname']);
  }, [checkNick]);

  const onCheckboxChange = e => {
    setCheckNick(e.target.checked);
  };

  const onCheck = async () => {
    try {
      const values = await form.validateFields();
      console.log('Success:', values);
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  };

  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: "gx-card",
    title: "DYNAMIC RULES"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    form: form,
    name: "dynamic_rule"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({}, formItemLayout, {
    name: "username",
    label: "Name",
    rules: [{
      required: true,
      message: 'Please input your name'
    }]
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "Please input your name"
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({}, formItemLayout, {
    name: "nickname",
    label: "Nickname",
    rules: [{
      required: checkNick,
      message: 'Please input your nickname'
    }]
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "Please input your nickname"
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, formTailLayout, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    checked: checkNick,
    onChange: onCheckboxChange
  }, "Nickname is required")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, formTailLayout, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    onClick: onCheck
  }, "Check"))));
};

/* harmony default export */ __webpack_exports__["default"] = (DynamicRules);

/***/ }),

/***/ "./routes/components/dataEntry/Form/FormLayout.js":
/*!********************************************************!*\
  !*** ./routes/components/dataEntry/Form/FormLayout.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const FormLayout = () => {
  const [form] = antd__WEBPACK_IMPORTED_MODULE_1__["Form"].useForm();
  const {
    0: formLayout,
    1: setFormLayout
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('horizontal');

  const onFormLayoutChange = ({
    layout
  }) => {
    setFormLayout(layout);
  };

  const formItemLayout = formLayout === 'horizontal' ? {
    labelCol: {
      xs: {
        span: 24
      },
      sm: {
        span: 6
      }
    },
    wrapperCol: {
      xs: {
        span: 24
      },
      sm: {
        span: 14
      }
    }
  } : null;
  const buttonItemLayout = formLayout === 'horizontal' ? {
    wrapperCol: {
      span: 14,
      offset: 4
    }
  } : null;
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: "gx-card",
    title: "FORM LAYOUT"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], _extends({}, formItemLayout, {
    layout: formLayout,
    form: form,
    initialValues: {
      layout: formLayout
    },
    onValuesChange: onFormLayoutChange
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Form Layout",
    name: "layout"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Group, {
    value: formLayout
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button, {
    value: "horizontal"
  }, "Horizontal"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button, {
    value: "vertical"
  }, "Vertical"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button, {
    value: "inline"
  }, "Inline"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Field A"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "input placeholder"
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Field B"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "input placeholder"
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, buttonItemLayout, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary"
  }, "Submit"))));
};

/* harmony default export */ __webpack_exports__["default"] = (FormLayout);

/***/ }),

/***/ "./routes/components/dataEntry/Form/HorizontalLoginForm.js":
/*!*****************************************************************!*\
  !*** ./routes/components/dataEntry/Form/HorizontalLoginForm.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions_Auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../redux/actions/Auth */ "./redux/actions/Auth.js");
/* harmony import */ var _horizontalLoginForm_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./horizontalLoginForm.css */ "./routes/components/dataEntry/Form/horizontalLoginForm.css");
/* harmony import */ var _horizontalLoginForm_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_horizontalLoginForm_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_components_CircularProgress_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../app/components/CircularProgress/index */ "./app/components/CircularProgress/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const FormItem = antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item;

class HorizontalLoginForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.state = {
      email: 'demo@example.com',
      password: 'demo#123'
    };
  }

  render() {
    const {
      showMessage,
      loader,
      alertMessage
    } = this.props;
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      className: "gx-card",
      title: "Horizontal Login Form"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      initialValues: {
        remember: true
      },
      name: "basic",
      onFinish: this.onFinish,
      onFinishFailed: this.onFinishFailed,
      className: "gx-login-form gx-form-row0"
    }, __jsx(FormItem, {
      rules: [{
        required: true,
        message: 'Please input your E-mail!'
      }],
      name: "email",
      initialValue: "demo@example.com"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      prefix: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["UserOutlined"], {
        style: {
          color: 'rgba(0,0,0,.25)'
        }
      }),
      placeholder: "Email"
    })), __jsx(FormItem, {
      rules: [{
        required: true,
        message: 'Please input your Password!'
      }],
      name: "password",
      initialValue: "demo#123"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      prefix: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["LockOutlined"], {
        style: {
          color: 'rgba(0,0,0,.25)'
        }
      }),
      type: "password",
      placeholder: "Password"
    })), __jsx(FormItem, {
      name: "remember",
      valuePropName: "checked"
    }, __jsx("span", {
      className: "gx-d-block gx-mb-2"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], null, "Remember me"), __jsx("span", {
      className: "gx-link login-form-forgot"
    }, "Forgot password")), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      type: "primary",
      htmlType: "submit",
      className: "login-form-button gx-mt-1"
    }, "Log in"), __jsx("span", {
      className: "gx-d-block gx-mt-2"
    }, "Or ", __jsx("span", {
      className: "gx-link"
    }, "register now!")))), loader && __jsx("div", {
      className: "gx-loader-view"
    }, __jsx(_app_components_CircularProgress_index__WEBPACK_IMPORTED_MODULE_6__["default"], null)), showMessage && antd__WEBPACK_IMPORTED_MODULE_2__["message"].error(alertMessage));
  }

}

const mapStateToProps = ({
  auth
}) => {
  const {
    loader,
    alertMessage,
    showMessage,
    authUser
  } = auth;
  return {
    loader,
    alertMessage,
    showMessage,
    authUser
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  userSignIn: _redux_actions_Auth__WEBPACK_IMPORTED_MODULE_4__["userSignIn"],
  hideMessage: _redux_actions_Auth__WEBPACK_IMPORTED_MODULE_4__["hideMessage"],
  showAuthLoader: _redux_actions_Auth__WEBPACK_IMPORTED_MODULE_4__["showAuthLoader"],
  userFacebookSignIn: _redux_actions_Auth__WEBPACK_IMPORTED_MODULE_4__["userFacebookSignIn"],
  userGoogleSignIn: _redux_actions_Auth__WEBPACK_IMPORTED_MODULE_4__["userGoogleSignIn"],
  userGithubSignIn: _redux_actions_Auth__WEBPACK_IMPORTED_MODULE_4__["userGithubSignIn"],
  userTwitterSignIn: _redux_actions_Auth__WEBPACK_IMPORTED_MODULE_4__["userTwitterSignIn"]
})(HorizontalLoginForm));

/***/ }),

/***/ "./routes/components/dataEntry/Form/OtherFormControls.js":
/*!***************************************************************!*\
  !*** ./routes/components/dataEntry/Form/OtherFormControls.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];
const formItemLayout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 14
  }
};

const normFile = e => {
  console.log('Upload event:', e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

const OtherFormControls = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: "gx-card",
    title: "OTHER FORM CONTROLS"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], _extends({
    name: "validate_other"
  }, formItemLayout, {
    onFinish: onFinish,
    initialValues: {
      'input-number': 3,
      'checkbox-group': ['A', 'B'],
      rate: 3.5
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Plain Text"
  }, __jsx("span", {
    className: "ant-form-text"
  }, "China")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "select",
    label: "Select",
    hasFeedback: true,
    rules: [{
      required: true,
      message: 'Please select your country!'
    }]
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    placeholder: "Please select a country"
  }, __jsx(Option, {
    value: "china"
  }, "China"), __jsx(Option, {
    value: "usa"
  }, "U.S.A"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "select-multiple",
    label: "Select[multiple]",
    rules: [{
      required: true,
      message: 'Please select your favourite colors!',
      type: 'array'
    }]
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    mode: "multiple",
    placeholder: "Please select favourite colors"
  }, __jsx(Option, {
    value: "red"
  }, "Red"), __jsx(Option, {
    value: "green"
  }, "Green"), __jsx(Option, {
    value: "blue"
  }, "Blue"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "InputNumber"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "input-number",
    noStyle: true
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["InputNumber"], {
    min: 1,
    max: 10
  })), __jsx("span", {
    className: "ant-form-text"
  }, " machines")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "switch",
    label: "Switch",
    valuePropName: "checked"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Switch"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "slider",
    label: "Slider"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Slider"], {
    marks: {
      0: 'A',
      20: 'B',
      40: 'C',
      60: 'D',
      80: 'E',
      100: 'F'
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "radio-group",
    label: "Radio.Group"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Group, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
    value: "a"
  }, "item 1"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
    value: "b"
  }, "item 2"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
    value: "c"
  }, "item 3"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "radio-button",
    label: "Radio.Button"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Group, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button, {
    value: "a"
  }, "item 1"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button, {
    value: "b"
  }, "item 2"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button, {
    value: "c"
  }, "item 3"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "checkbox-group",
    label: "Checkbox.Group"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"].Group, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 8
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    value: "A",
    style: {
      lineHeight: '32px'
    }
  }, "A")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 8
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    value: "B",
    style: {
      lineHeight: '32px'
    },
    disabled: true
  }, "B")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 8
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    value: "C",
    style: {
      lineHeight: '32px'
    }
  }, "C")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 8
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    value: "D",
    style: {
      lineHeight: '32px'
    }
  }, "D")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 8
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    value: "E",
    style: {
      lineHeight: '32px'
    }
  }, "E")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 8
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    value: "F",
    style: {
      lineHeight: '32px'
    }
  }, "F"))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "rate",
    label: "Rate"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Rate"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "upload",
    label: "Upload",
    valuePropName: "fileList",
    getValueFromEvent: normFile,
    extra: "longgggggggggggggggggggggggggggggggggg"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Upload"], {
    name: "logo",
    action: "/upload.do",
    listType: "picture"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], null, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["UploadOutlined"], null), " Click to upload"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Dragger"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "dragger",
    valuePropName: "fileList",
    getValueFromEvent: normFile,
    noStyle: true
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Upload"].Dragger, {
    name: "files",
    action: "/upload.do"
  }, __jsx("p", {
    className: "ant-upload-drag-icon"
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["InboxOutlined"], null)), __jsx("p", {
    className: "ant-upload-text"
  }, "Click or drag file to this area to upload"), __jsx("p", {
    className: "ant-upload-hint"
  }, "Support for a single or bulk upload.")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    wrapperCol: {
      span: 12,
      offset: 6
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit"
  }, "Submit"))));
};

/* harmony default export */ __webpack_exports__["default"] = (OtherFormControls);

/***/ }),

/***/ "./routes/components/dataEntry/Form/Registration.js":
/*!**********************************************************!*\
  !*** ./routes/components/dataEntry/Form/Registration.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];
const residences = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake'
    }]
  }]
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men'
    }]
  }]
}];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 8
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 16
    }
  }
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
};

const Registration = () => {
  const [form] = antd__WEBPACK_IMPORTED_MODULE_1__["Form"].useForm();

  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  const prefixSelector = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "prefix",
    noStyle: true
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    style: {
      width: 70
    }
  }, __jsx(Option, {
    value: "86"
  }, "+86"), __jsx(Option, {
    value: "87"
  }, "+87")));

  const {
    0: autoCompleteResult,
    1: setAutoCompleteResult
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  const onWebsiteChange = value => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map(domain => `${value}${domain}`));
    }
  };

  const websiteOptions = autoCompleteResult.map(website => ({
    label: website,
    value: website
  }));
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: "gx-card",
    title: "Registration Form"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], _extends({}, formItemLayout, {
    form: form,
    name: "register",
    onFinish: onFinish,
    initialValues: {
      residence: ['zhejiang', 'hangzhou', 'xihu'],
      prefix: '86'
    },
    scrollToFirstError: true
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "email",
    label: "E-mail",
    rules: [{
      type: 'email',
      message: 'The input is not valid E-mail!'
    }, {
      required: true,
      message: 'Please input your E-mail!'
    }]
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "password",
    label: "Password",
    rules: [{
      required: true,
      message: 'Please input your password!'
    }],
    hasFeedback: true
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "confirm",
    label: "Confirm Password",
    dependencies: ['password'],
    hasFeedback: true,
    rules: [{
      required: true,
      message: 'Please confirm your password!'
    }, ({
      getFieldValue
    }) => ({
      validator(rule, value) {
        if (!value || getFieldValue('password') === value) {
          return Promise.resolve();
        }

        return Promise.reject('The two passwords that you entered do not match!');
      }

    })]
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "nickname",
    label: __jsx("span", null, "Nickname\xA0", __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
      title: "What do you want others to call you?"
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["QuestionCircleOutlined"], null))),
    rules: [{
      required: true,
      message: 'Please input your nickname!',
      whitespace: true
    }]
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "residence",
    label: "Habitual Residence",
    rules: [{
      type: 'array',
      required: true,
      message: 'Please select your habitual residence!'
    }]
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Cascader"], {
    options: residences
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "phone",
    label: "Phone Number",
    rules: [{
      required: true,
      message: 'Please input your phone number!'
    }]
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    addonBefore: prefixSelector,
    style: {
      width: '100%'
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "website",
    label: "Website",
    rules: [{
      required: true,
      message: 'Please input website!'
    }]
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["AutoComplete"], {
    options: websiteOptions,
    onChange: onWebsiteChange,
    placeholder: "website"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], null))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "Captcha",
    extra: "We must make sure that your are a human."
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: 8
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 12
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "captcha",
    noStyle: true,
    rules: [{
      required: true,
      message: 'Please input the captcha you got!'
    }]
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], null))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 12
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], null, "Get captcha")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({
    name: "agreement",
    valuePropName: "checked",
    rules: [{
      validator: (_, value) => value ? Promise.resolve() : Promise.reject('Should accept agreement')
    }]
  }, tailFormItemLayout), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], null, "I have read the ", __jsx("a", {
    href: ""
  }, "agreement"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, tailFormItemLayout, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit"
  }, "Register"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Registration);

/***/ }),

/***/ "./routes/components/dataEntry/Form/StoreFormData.js":
/*!***********************************************************!*\
  !*** ./routes/components/dataEntry/Form/StoreFormData.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CustomizedForm = ({
  onChange,
  fields
}) => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
  name: "global_state",
  layout: "inline",
  fields: fields,
  onFieldsChange: (changedFields, allFields) => {
    onChange(allFields);
  }
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
  name: "username",
  label: "Username",
  rules: [{
    required: true,
    message: 'Username is required!'
  }]
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], null)));

const StoreFormData = () => {
  const {
    0: fields,
    1: setFields
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    name: ['username'],
    value: 'Ant Design'
  }]);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: "gx-card",
    title: "Store Form Data"
  }, __jsx(CustomizedForm, {
    fields: fields,
    onChange: newFields => {
      setFields(newFields);
    }
  }), __jsx("pre", {
    className: "language-bash"
  }, JSON.stringify(fields, null, 2)));
};

/* harmony default export */ __webpack_exports__["default"] = (StoreFormData);

/***/ }),

/***/ "./routes/components/dataEntry/Form/TimeRelatedControls.js":
/*!*****************************************************************!*\
  !*** ./routes/components/dataEntry/Form/TimeRelatedControls.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const {
  MonthPicker,
  RangePicker
} = antd__WEBPACK_IMPORTED_MODULE_1__["DatePicker"];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 8
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 16
    }
  }
};
const config = {
  rules: [{
    type: 'object',
    required: true,
    message: 'Please select time!'
  }]
};
const rangeConfig = {
  rules: [{
    type: 'array',
    required: true,
    message: 'Please select time!'
  }]
};

const TimeRelatedControls = () => {
  const onFinish = fieldsValue => {
    // Should format date value before submit.
    const rangeValue = fieldsValue['range-picker'];
    const rangeTimeValue = fieldsValue['range-time-picker'];

    const values = _objectSpread(_objectSpread({}, fieldsValue), {}, {
      'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
      'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
      'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
      'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
      'range-time-picker': [rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'), rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss')],
      'time-picker': fieldsValue['time-picker'].format('HH:mm:ss')
    });

    console.log('Received values of form: ', values);
  };

  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: "gx-card",
    title: "Time Related Controls"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], _extends({
    name: "time_related_controls"
  }, formItemLayout, {
    onFinish: onFinish
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({
    name: "date-picker",
    label: "DatePicker"
  }, config), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["DatePicker"], {
    className: "gx-mb-3 gx-w-100"
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({
    name: "date-time-picker",
    label: "DatePicker[showTime]"
  }, config), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["DatePicker"], {
    className: "gx-mb-3 gx-w-100",
    showTime: true,
    format: "YYYY-MM-DD HH:mm:ss"
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({
    name: "month-picker",
    label: "MonthPicker"
  }, config), __jsx(MonthPicker, {
    className: "gx-mb-3 gx-w-100"
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({
    name: "range-picker",
    label: "RangePicker"
  }, rangeConfig), __jsx(RangePicker, {
    className: "gx-mb-3 gx-w-100"
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({
    name: "range-time-picker",
    label: "RangePicker[showTime]"
  }, rangeConfig), __jsx(RangePicker, {
    className: "gx-mb-3 gx-w-100",
    showTime: true,
    format: "YYYY-MM-DD HH:mm:ss"
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({
    name: "time-picker",
    label: "TimePicker"
  }, config), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["TimePicker"], {
    className: "gx-mb-3 gx-w-100"
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0
      },
      sm: {
        span: 16,
        offset: 8
      }
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit"
  }, "Submit"))));
};

/* harmony default export */ __webpack_exports__["default"] = (TimeRelatedControls);

/***/ }),

/***/ "./routes/components/dataEntry/Form/horizontalLoginForm.css":
/*!******************************************************************!*\
  !*** ./routes/components/dataEntry/Form/horizontalLoginForm.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./routes/components/dataEntry/Form/index.js":
/*!***************************************************!*\
  !*** ./routes/components/dataEntry/Form/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Basic */ "./routes/components/dataEntry/Form/Basic.js");
/* harmony import */ var _HorizontalLoginForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HorizontalLoginForm */ "./routes/components/dataEntry/Form/HorizontalLoginForm.js");
/* harmony import */ var _Registration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Registration */ "./routes/components/dataEntry/Form/Registration.js");
/* harmony import */ var _AdvancedSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AdvancedSearch */ "./routes/components/dataEntry/Form/AdvancedSearch.js");
/* harmony import */ var _DynamicFormItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DynamicFormItem */ "./routes/components/dataEntry/Form/DynamicFormItem.js");
/* harmony import */ var _TimeRelatedControls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TimeRelatedControls */ "./routes/components/dataEntry/Form/TimeRelatedControls.js");
/* harmony import */ var _CustomizedFormControls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CustomizedFormControls */ "./routes/components/dataEntry/Form/CustomizedFormControls.js");
/* harmony import */ var _StoreFormData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./StoreFormData */ "./routes/components/dataEntry/Form/StoreFormData.js");
/* harmony import */ var _CustomizedValidation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CustomizedValidation */ "./routes/components/dataEntry/Form/CustomizedValidation.js");
/* harmony import */ var _CoordinatedControls__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CoordinatedControls */ "./routes/components/dataEntry/Form/CoordinatedControls.js");
/* harmony import */ var _FormLayout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FormLayout */ "./routes/components/dataEntry/Form/FormLayout.js");
/* harmony import */ var _DynamicRules__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./DynamicRules */ "./routes/components/dataEntry/Form/DynamicRules.js");
/* harmony import */ var _OtherFormControls__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./OtherFormControls */ "./routes/components/dataEntry/Form/OtherFormControls.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















const Form = () => {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24
  }, __jsx(_Basic__WEBPACK_IMPORTED_MODULE_2__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24
  }, __jsx(_HorizontalLoginForm__WEBPACK_IMPORTED_MODULE_3__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24
  }, __jsx(_Registration__WEBPACK_IMPORTED_MODULE_4__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24
  }, __jsx(_AdvancedSearch__WEBPACK_IMPORTED_MODULE_5__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24
  }, __jsx(_DynamicFormItem__WEBPACK_IMPORTED_MODULE_6__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24
  }, __jsx(_TimeRelatedControls__WEBPACK_IMPORTED_MODULE_7__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24
  }, __jsx(_CustomizedFormControls__WEBPACK_IMPORTED_MODULE_8__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24
  }, __jsx(_StoreFormData__WEBPACK_IMPORTED_MODULE_9__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24
  }, __jsx(_CustomizedValidation__WEBPACK_IMPORTED_MODULE_10__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24
  }, __jsx(_CoordinatedControls__WEBPACK_IMPORTED_MODULE_11__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24
  }, __jsx(_FormLayout__WEBPACK_IMPORTED_MODULE_12__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24
  }, __jsx(_DynamicRules__WEBPACK_IMPORTED_MODULE_13__["default"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24
  }, __jsx(_OtherFormControls__WEBPACK_IMPORTED_MODULE_14__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./util/CustomScrollbars.js":
/*!**********************************!*\
  !*** ./util/CustomScrollbars.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-custom-scrollbars */ "react-custom-scrollbars");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const CustomScrollbars = props => __jsx(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_1__["Scrollbars"], _extends({}, props, {
  autoHide: true,
  universal: true,
  renderTrackHorizontal: props => __jsx("div", _extends({}, props, {
    style: {
      display: 'none'
    },
    className: "track-horizontal"
  }))
}));

/* harmony default export */ __webpack_exports__["default"] = (CustomScrollbars);

/***/ }),

/***/ "./util/IntlMessages.js":
/*!******************************!*\
  !*** ./util/IntlMessages.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const InjectMassage = props => __jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], props);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["injectIntl"])(InjectMassage, {
  withRef: false
}));

/***/ }),

/***/ "./util/config.js":
/*!************************!*\
  !*** ./util/config.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  footerText: 'Copyright Company Name © 2019'
};

/***/ }),

/***/ "./util/redirect.js":
/*!**************************!*\
  !*** ./util/redirect.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((context = {}, target) => {
  console.log(context, target);

  if (context.res) {
    context.res.writeHead(303, {
      Location: target
    });
    context.res.end();
  } else {
    next_router__WEBPACK_IMPORTED_MODULE_0___default.a.replace(target);
  }
});

/***/ }),

/***/ "./util/session.js":
/*!*************************!*\
  !*** ./util/session.js ***!
  \*************************/
/*! exports provided: setCookie, removeCookie, getCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCookie", function() { return removeCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);

const setCookie = (key, value) => {
  if (false) {}
};
const removeCookie = key => {
  if (false) {}
};
const getCookie = (key, req) => {
  return false ? undefined : getCookieFromServer(key, req);
};

const getCookieFromBrowser = key => {
  return js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get(key);
};

const getCookieFromServer = (key, req) => {
  if (!req.headers.cookie) {
    return undefined;
  }

  const rawCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith(`${key}=`));

  if (!rawCookie) {
    return undefined;
  }

  return rawCookie.split('=')[1];
};

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "@ant-design/icons/lib/icons/LockOutlined":
/*!***********************************************************!*\
  !*** external "@ant-design/icons/lib/icons/LockOutlined" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons/lib/icons/LockOutlined");

/***/ }),

/***/ "@ant-design/icons/lib/icons/UserOutlined":
/*!***********************************************************!*\
  !*** external "@ant-design/icons/lib/icons/UserOutlined" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons/lib/icons/UserOutlined");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "antd/lib/locale-provider/ca_ES":
/*!*************************************************!*\
  !*** external "antd/lib/locale-provider/ca_ES" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider/ca_ES");

/***/ }),

/***/ "antd/lib/locale-provider/en_US":
/*!*************************************************!*\
  !*** external "antd/lib/locale-provider/en_US" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider/en_US");

/***/ }),

/***/ "antd/lib/locale-provider/fr_FR":
/*!*************************************************!*\
  !*** external "antd/lib/locale-provider/fr_FR" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider/fr_FR");

/***/ }),

/***/ "antd/lib/locale-provider/it_IT":
/*!*************************************************!*\
  !*** external "antd/lib/locale-provider/it_IT" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider/it_IT");

/***/ }),

/***/ "antd/lib/locale-provider/ru_RU":
/*!*************************************************!*\
  !*** external "antd/lib/locale-provider/ru_RU" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider/ru_RU");

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-custom-scrollbars":
/*!******************************************!*\
  !*** external "react-custom-scrollbars" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-custom-scrollbars");

/***/ }),

/***/ "react-intl":
/*!*****************************!*\
  !*** external "react-intl" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });