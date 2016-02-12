(function (exports) {
    'use strict';

    var Typing = function (element, options) {
        // secure mode in case of forgetting to write 'new'
        if (!(this instanceof Typing)) {
            return new Typing(element, options);
        } else {
            this.el = element;
            this.opts = options;
        }
    };


    // construct queue for functions, context and arguments
    var fnQueue = [],
        contextQueue = [],
        argsQueue = [],
        isRunning = false;

    function enQueue(fn, context, args) {
        fnQueue.push(fn);
        contextQueue.push(context);
        argsQueue.push(args);

        if (!isRunning) {
            isRunning = true;
            coreFunction();
        }
    }

    // excute functions
    function coreFunction() {
        if (fnQueue.length) {
            fnQueue.shift().apply(contextQueue.shift(), [].concat(argsQueue.shift()));
        }
    }


    // protected functions
    function getRandomSpeed(speed) {
        return Math.floor(Math.random() * speed);
    }

    function _add(toAddText) {
        var self = this,
            realSpeed = self.opts.speed || 100,
            toAddChar;

        (function addChar() {
            setTimeout(function () {
                var randomSpeed = getRandomSpeed(self.opts.speed);
                realSpeed = self.opts.isRandomSpeed ? randomSpeed : self.opts.speed;

                if (toAddText.length) {
                    toAddChar = toAddText.charAt(0);
                    self.el.textContent = self.el.textContent + toAddChar;
                    toAddText = toAddText.substring(1);
                    addChar();
                } else {
                    coreFunction();
                }
            }, realSpeed);
        })();
    }

    function _delete(deleteLength) {
        var self = this,
            realSpeed = self.opts.speed || 100;

        (function deleteChar() {
            setTimeout(function () {
                var randomSpeed = getRandomSpeed(self.opts.speed),
                    nowText = self.el.textContent;
                realSpeed = self.opts.isRandomSpeed ? randomSpeed : self.opts.speed;

                if (deleteLength) {

                    self.el.textContent = nowText.substring(0, nowText.length - 1);
                    deleteChar();
                    deleteLength = deleteLength - 1;
                } else {
                    coreFunction();
                }
            }, realSpeed);
        })();
    }

    function _pause(pauseTime) {
        setTimeout(coreFunction, pauseTime);
    }


    // exposed functions
    Typing.prototype = {
        add: function (toAddText) {
            enQueue(_add, this, toAddText);
            return this;
        },

        delete: function (deleteLength) {
            enQueue(_delete, this, deleteLength);
            return this;
        },

        pause: function (pauseTime) {
            enQueue(_pause, this, pauseTime);
            return this;
        }

    };

    // mount Typing on global object
    exports.Typing = Typing;
})(window);