'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Coder = function () {
    _createClass(Coder, [{
        key: 'name',
        value: function name(val) {
            console.log(val);
            return val;
        }
    }, {
        key: 'skill',
        value: function skill(val) {
            console.log(this.name('jspang') + ':' + 'Skill:' + val);
        }
    }]);

    function Coder(a, b) {
        _classCallCheck(this, Coder);

        this.a = a;
        this.b = b;
    }

    _createClass(Coder, [{
        key: 'add',
        value: function add() {
            return this.a + this.b;
        }
    }]);

    return Coder;
}();

var jspang = new Coder('1', '2');
console.log(jspang.add());
