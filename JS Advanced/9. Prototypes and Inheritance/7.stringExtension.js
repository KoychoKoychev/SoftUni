(function extendString() {
    String.prototype.ensureStart = function (str) {
        if (this.startsWith(str)) {
            return this.toString();
        } else {
            return str + this.toString();
        }
    }
    String.prototype.ensureEnd = function (str) {
        if (this.endsWith(str)) {
            return this.toString();
        } else {
            return this.toString() + str;
        }
    }
    String.prototype.isEmpty = function () {
        if (this.toString().length == 0) {
            return true;
        } else {
            return false;
        }
    }
    String.prototype.truncate = function (n) {
        if (n < 4) {
            return ".".repeat(n);
        }
        if (this.toString().length <= n) {
            return this.toString();
        }
        if (!this.toString().includes(" ")) {
            return this.toString().substring(0, n - 3) + "...";
        } else {
            let result = this.toString();
            for (let i = 0; i < this.toString().length; i++) {
                let index = result.lastIndexOf(" ");
                if (index == -1) {
                    return result.substring(0,n-3)+"...";
                } else {
                    result = result.substring(0, index);
                    if (result.length + 3 <= n) {
                        return result + "...";
                    }
                }
            }
        }
    }
    String.format = function (str, ...params) {
        for (let i = 0; i < params.length; i++) {
            str = str.replace(`{${i}}`, params[i]);
        }
        return str;
    }
})();
