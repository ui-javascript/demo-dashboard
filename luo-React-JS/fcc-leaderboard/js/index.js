"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * The page header
 */

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Header.prototype.render = function render() {
    return React.createElement(
      "header",
      null,
      React.createElement(
        "a",
        { href: "http://www.freecodecamp.com" },
        React.createElement("img", { className: "fcclogo", src: "https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg", alt: "FreeCodeCamp logo" })
      )
    );
  };

  return Header;
}(React.Component);

/*
 * The page footer
 */

var Footer = function (_React$Component2) {
  _inherits(Footer, _React$Component2);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  Footer.prototype.render = function render() {
    return React.createElement(
      "footer",
      null,
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "p",
          null,
          "*** By ",
          React.createElement(
            "a",
            { href: "http://www.freecodecamp.com/roelver" },
            "@roelver"
          ),
          " ***"
        )
      )
    );
  };

  return Footer;
}(React.Component);

/*
 *  Component for column headers including basic sort mechanism 
 */

var ColumnHeadings = function (_React$Component3) {
  _inherits(ColumnHeadings, _React$Component3);

  function ColumnHeadings() {
    _classCallCheck(this, ColumnHeadings);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  }

  ColumnHeadings.prototype.render = function render() {
    return React.createElement(
      "thead",
      null,
      React.createElement(
        "tr",
        { id: "colheaders", className: "top100" },
        React.createElement(
          "th",
          { className: "idcol" },
          "#"
        ),
        React.createElement(
          "th",
          null,
          "Camper Name"
        ),
        React.createElement(
          "th",
          { id: "defaultsort", className: "sortable sorted true", onClick: this.handleClickNum.bind(this, "recent") },
          "Points in past 30 days"
        ),
        React.createElement(
          "th",
          { className: "sortable", onClick: this.handleClickNum.bind(this, "alltime") },
          "All time points "
        )
      )
    );
  };

  ColumnHeadings.prototype.removeSortClasses = function removeSortClasses() {
    var nodes = document.getElementsByClassName('sortable');
    for (var i = 0; i < nodes.length; i++) {
      nodes.item(i).className = "sortable";
    };
  };

  ColumnHeadings.prototype.handleClickNum = function handleClickNum(fieldname, evt) {
    if (!evt.target.classList.contains('sorted')) {
      this.removeSortClasses();
      evt.target.className = 'sortable sorted true'; // true means descending
      this.props.sortTableNum(fieldname);
    }
  };

  return ColumnHeadings;
}(React.Component);

/*
 *  Component represents a user row in the table and a handler for user updates
 */

var User = function (_React$Component4) {
  _inherits(User, _React$Component4);

  function User() {
    _classCallCheck(this, User);

    return _possibleConstructorReturn(this, _React$Component4.apply(this, arguments));
  }

  User.prototype.render = function render() {
    var showDate = moment(this.props.user.lastUpdate).format("YYYY-MM-DD HH:mm:ss");
    return React.createElement(
      "tr",
      { className: "top100" },
      React.createElement(
        "td",
        { className: "idcol" },
        this.props.count
      ),
      React.createElement(
        "td",
        null,
        React.createElement(
          "a",
          { href: "http://www.freecodecamp.com/" + this.props.user.username, target: "_blank" },
          React.createElement("img", { src: this.props.user.img, className: "userimg" }),
          React.createElement(
            "span",
            null,
            this.props.user.username
          )
        )
      ),
      React.createElement(
        "td",
        { className: "numbercol" },
        this.props.user.recent
      ),
      React.createElement(
        "td",
        { className: "numbercol" },
        this.props.user.alltime
      )
    );
  };

  User.prototype.handleClickUpdateUser = function handleClickUpdateUser() {
    $.get(this.props.apiroot + "update/" + this.props.user.username, function (data) {
      setTimeout(this.props.updatePage, 3000);
    }.bind(this)).fail(function () {
      console.error(this.props.apiroot, status, err.toString());
    });
  };

  return User;
}(React.Component);

/*
 *  Component for  
 */

var Leaderboard = function (_React$Component5) {
  _inherits(Leaderboard, _React$Component5);

  function Leaderboard() {
    _classCallCheck(this, Leaderboard);

    return _possibleConstructorReturn(this, _React$Component5.apply(this, arguments));
  }

  Leaderboard.prototype.render = function render() {
    var count = 0;
    var self = this;
    var userlist = this.props.users.map(function (user) {
      count++;
      return React.createElement(User, { user: user, key: user.username, count: count, apiroot: this.props.apiroot, updatePage: this.props.updatePage });
    }.bind(this));

    return React.createElement(
      "table",
      { className: "table table-striped table-bordered" },
      React.createElement(ColumnHeadings, { sortTableNum: this.props.sortTableNum }),
      React.createElement(
        "tbody",
        null,
        userlist
      )
    );
  };

  return Leaderboard;
}(React.Component);

/* 
 * The page body, with state and status handlers for switching the mode (recent/all time) 
 * and handlers for sorting 
 */

var Body = function (_React$Component6) {
  _inherits(Body, _React$Component6);

  function Body() {
    _classCallCheck(this, Body);

    var _this6 = _possibleConstructorReturn(this, _React$Component6.call(this));

    _this6.state = {
      users: [],
      reverse: true,
      column: "recent"
    };
    return _this6;
  }

  Body.prototype.getData = function getData() {
    $.ajax({
      url: this.props.apiroot + "top/" + this.state.column,
      dataType: 'json',
      cache: false,
      success: function (data) {
        var users = data;
        this.setState({ users: users });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.apiroot, status, err.toString());
      }.bind(this)
    });
  };

  Body.prototype.componentDidMount = function componentDidMount() {
    this.getData();
  };

  Body.prototype.render = function render() {
    return React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-lg-12" },
          React.createElement(
            "div",
            { id: "header" },
            React.createElement(
              "h3",
              null,
              "Leaderboard"
            )
          )
        )
      ),
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-lg-12" },
          React.createElement(Leaderboard, {
            users: this.state.users,
            apiroot: this.props.apiroot,
            updatePage: this.getData.bind(this),
            sortTableNum: this.sortTableNum.bind(this)
          })
        )
      )
    );
  };

  Body.prototype.removeSortClasses = function removeSortClasses() {
    var nodes = document.getElementsByClassName('sortable');
    for (var i = 0; i < nodes.length; i++) {
      nodes.item(i).className = "sortable";
    };
  };

  Body.prototype.sortTableNum = function sortTableNum(column) {
    // only sort descending. After all it's a top100
    // Ignore click if the list was already sorted on that item
    if (column !== this.state.column) {
      this.setState({ reverse: true, column: column }, this.getData);
    }
  };

  return Body;
}(React.Component);

/*
 * The application level component
 */

var Application = function (_React$Component7) {
  _inherits(Application, _React$Component7);

  function Application() {
    _classCallCheck(this, Application);

    return _possibleConstructorReturn(this, _React$Component7.apply(this, arguments));
  }

  Application.prototype.render = function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(Header, null),
      React.createElement(Body, { apiroot: this.props.apiroot }),
      React.createElement(Footer, null)
    );
  };

  return Application;
}(React.Component);

/* 
 * Put it all into the HTML
 */

ReactDOM.render(React.createElement(Application, { apiroot: "http://fcctop100.herokuapp.com/api/fccusers/" }), document.getElementById('fcctop'));