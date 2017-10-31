var cartesian = function cartesian(arr) {
    return arr.reduce(function (a, b) {
        return a.map(function (x) {
            return b.map(function (y) {
                return x.concat(y);
            });
        }).reduce(function (a, b) {
            return a.concat(b);
        }, []);
    }, [[]]);
};
var vm = new Vue({
    el: '#app',
    data: {
        prefix: "",
        delimiter: ", ",
        suffix: "",
        n: "# Country\nDTUS\nDTCAN\n\n# Routing number\nValid routing number\nInvalid routing number\n\n# Service call\nIncluded in service call\nNot included in service call\n\n# Payment type/source\nOne time (Payment Central)\nPay plan (Pay Plan Maintenance Screen)\nScan/Import Screen"
    },
    methods: {
        pluralize: function pluralize(noun, count) {
            return "" + noun + (count == 1 ? '' : 's');
        },
        preset_export: function (f_export) {
            this.prefix = f_export ? "" : "* ";
            this.delimiter = f_export ? ", " : " \\\\ ";
            this.suffix = f_export ? "" : " \\\\ \\\\";
        }
    },
    computed: {
        combos: function combos() {
            var _this = this;

            return cartesian(this.n.trim().split('\n\n').map(function (e) {
                return e.split('\n').map(function (e) {
                    return e.trim();
                }).filter(function (e) {
                    return e[0] !== '#';
                });
            })).map(function (e) {
                return "" + _this.prefix + e.join(_this.delimiter) + _this.suffix;
            });
        }
    }
});
