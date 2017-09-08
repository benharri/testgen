function cartesian(arr) {
    return arr.reduce(function (a, b) {
    return a.map(function (x) {
        return b.map(function (y) {
            return x.concat(y);
        })
    }).reduce(function (a, b) { return a.concat(b) }, [])
    }, [[]])
}

const vm = new Vue({

    el: '#app',
    data: {
        n:
`DTUS
DTCAN

Valid Routing number
Invalid Routing number

In service call
Not in service call

One time (Payment Central)
Pay plan (Pay Plan Maintenance Screen)
Scan/Import Screen`
    },
    methods: {
        pluralize: function(noun, count) {
            return `${noun}${count == 1 ? '' : 's'}`
        }
    },
    computed: {
        combos: function() {
            return cartesian(
                this.n.split('\n\n').map((v) => v.split('\n'))
            ).map(
                (e) => "* " + e.join(" \\\\ ") + " \\\\ \\\\"
            )
        }
    }

})
