cartesian = (arr) ->
    arr.reduce((a, b) -> a.map((x) -> b.map((y) -> x.concat(y))).reduce((a, b) -> a.concat(b), []), [[]])

Vue = require 'vue'
new Vue
    el: '#app'
    data:
        n: "DTUS
            DTCAN

            Valid Routing number
            Invalid Routing number

            In service call
            Not in service call

            One time (Payment Central)
            Pay plan (Pay Plan Maintenance Screen)
            Scan/Import Screen"
    methods:
        pluralize: (noun, count = 1) ->
            "#{noun}#{count == 1 ? '' : 's'}"
    computed:
        combos: () ->
            cartesian(
                this.n.split('\n\n')
                    .map((v) => v.split('\n'))
                ).map((e) => "* #{e.join(" \\\\ ")} \\\\ \\\\")
