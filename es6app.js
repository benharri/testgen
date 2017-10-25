const cartesian = arr => arr.reduce((a, b) => a.map(x => b.map(y => x.concat(y))).reduce((a, b) => a.concat(b), []), [[]])
const vm = new Vue({
    el: '#app',
    data: {
        prefix: "* ",
        delimiter: " \\\\ ",
        suffix: " \\\\ \\\\",
        n: "# Country\nDTUS\nDTCAN\n\n# Routing number\nValid routing number\nInvalid routing number\n\n# Service call\nIncluded in service call\nNot included in service call\n\n# Payment type/source\nOne time (Payment Central)\nPay plan (Pay Plan Maintenance Screen)\nScan/Import Screen"
    },
    methods: {
        pluralize: (noun, count) =>
            `${noun}${count == 1 ? '' : 's'}`
    },
    computed: {
        combos() {
            return cartesian(
                this.n.trim().split('\n\n')
                .map(e =>
                    e.split('\n')
                    .map(e => e.trim())
                    .filter(e => e[0] !== '#')
                )
            ).map(e => `${this.prefix}${e.join(this.delimiter)}${this.suffix}`)
        }
    }
})

