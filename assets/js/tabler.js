!function(t) {
    "function" == typeof define && define.amd ? define(t) : t()
}((function() {
    "use strict";
    var t = new Map;
    function e(e) {
        var s = t.get(e);
        s && s.destroy()
    }
    function s(e) {
        var s = t.get(e);
        s && s.update()
    }
    var i = null;
    "undefined" == typeof window ? ((i = function(t) {
        return t
    }
    ).destroy = function(t) {
        return t
    }
    ,
    i.update = function(t) {
        return t
    }
    ) : ((i = function(e, s) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], (function(e) {
            return function(e) {
                if (e && e.nodeName && "TEXTAREA" === e.nodeName && !t.has(e)) {
                    var s, i = null, n = window.getComputedStyle(e), r = (s = e.value,
                    function() {
                        a({
                            testForHeightReduction: "" === s || !e.value.startsWith(s),
                            restoreTextAlign: null
                        }),
                        s = e.value
                    }
                    ), o = function(s) {
                        e.removeEventListener("autosize:destroy", o),
                        e.removeEventListener("autosize:update", l),
                        e.removeEventListener("input", r),
                        window.removeEventListener("resize", l),
                        Object.keys(s).forEach((function(t) {
                            return e.style[t] = s[t]
                        }
                        )),
                        t.delete(e)
                    }
                    .bind(e, {
                        height: e.style.height,
                        resize: e.style.resize,
                        textAlign: e.style.textAlign,
                        overflowY: e.style.overflowY,
                        overflowX: e.style.overflowX,
                        wordWrap: e.style.wordWrap
                    });
                    e.addEventListener("autosize:destroy", o),
                    e.addEventListener("autosize:update", l),
                    e.addEventListener("input", r),
                    window.addEventListener("resize", l),
                    e.style.overflowX = "hidden",
                    e.style.wordWrap = "break-word",
                    t.set(e, {
                        destroy: o,
                        update: l
                    }),
                    l()
                }
                function a(t) {
                    var s, r, o = t.restoreTextAlign, l = void 0 === o ? null : o, u = t.testForHeightReduction, h = void 0 === u || u, c = n.overflowY;
                    if (0 !== e.scrollHeight && ("vertical" === n.resize ? e.style.resize = "none" : "both" === n.resize && (e.style.resize = "horizontal"),
                    h && (s = function(t) {
                        for (var e = []; t && t.parentNode && t.parentNode instanceof Element; )
                            t.parentNode.scrollTop && e.push([t.parentNode, t.parentNode.scrollTop]),
                            t = t.parentNode;
                        return function() {
                            return e.forEach((function(t) {
                                var e = t[0]
                                  , s = t[1];
                                e.style.scrollBehavior = "auto",
                                e.scrollTop = s,
                                e.style.scrollBehavior = null
                            }
                            ))
                        }
                    }(e),
                    e.style.height = ""),
                    r = "content-box" === n.boxSizing ? e.scrollHeight - (parseFloat(n.paddingTop) + parseFloat(n.paddingBottom)) : e.scrollHeight + parseFloat(n.borderTopWidth) + parseFloat(n.borderBottomWidth),
                    "none" !== n.maxHeight && r > parseFloat(n.maxHeight) ? ("hidden" === n.overflowY && (e.style.overflow = "scroll"),
                    r = parseFloat(n.maxHeight)) : "hidden" !== n.overflowY && (e.style.overflow = "hidden"),
                    e.style.height = r + "px",
                    l && (e.style.textAlign = l),
                    s && s(),
                    i !== r && (e.dispatchEvent(new Event("autosize:resized",{
                        bubbles: !0
                    })),
                    i = r),
                    c !== n.overflow && !l)) {
                        var d = n.textAlign;
                        "hidden" === n.overflow && (e.style.textAlign = "start" === d ? "end" : "start"),
                        a({
                            restoreTextAlign: d,
                            testForHeightReduction: !0
                        })
                    }
                }
                function l() {
                    a({
                        testForHeightReduction: !0,
                        restoreTextAlign: null
                    })
                }
            }(e)
        }
        )),
        e
    }
    ).destroy = function(t) {
        return t && Array.prototype.forEach.call(t.length ? t : [t], e),
        t
    }
    ,
    i.update = function(t) {
        return t && Array.prototype.forEach.call(t.length ? t : [t], s),
        t
    }
    );
    var n = i
      , r = document.querySelectorAll('[data-bs-toggle="autosize"]');
    function o(t) {
        return "string" == typeof t || t instanceof String
    }
    function a(t) {
        var e;
        return "object" == typeof t && null != t && "Object" === (null == t || null == (e = t.constructor) ? void 0 : e.name)
    }
    function l(t, e) {
        return Array.isArray(e) ? l(t, ((t,s)=>e.includes(s))) : Object.entries(t).reduce(((t,s)=>{
            let[i,n] = s;
            return e(n, i) && (t[i] = n),
            t
        }
        ), {})
    }
    r.length && r.forEach((function(t) {
        n(t)
    }
    ));
    const u = "NONE"
      , h = "LEFT"
      , c = "FORCE_LEFT"
      , d = "RIGHT"
      , p = "FORCE_RIGHT";
    function f(t) {
        return t.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1")
    }
    function g(t, e) {
        if (e === t)
            return !0;
        const s = Array.isArray(e)
          , i = Array.isArray(t);
        let n;
        if (s && i) {
            if (e.length != t.length)
                return !1;
            for (n = 0; n < e.length; n++)
                if (!g(e[n], t[n]))
                    return !1;
            return !0
        }
        if (s != i)
            return !1;
        if (e && t && "object" == typeof e && "object" == typeof t) {
            const s = e instanceof Date
              , i = t instanceof Date;
            if (s && i)
                return e.getTime() == t.getTime();
            if (s != i)
                return !1;
            const r = e instanceof RegExp
              , o = t instanceof RegExp;
            if (r && o)
                return e.toString() == t.toString();
            if (r != o)
                return !1;
            const a = Object.keys(e);
            for (n = 0; n < a.length; n++)
                if (!Object.prototype.hasOwnProperty.call(t, a[n]))
                    return !1;
            for (n = 0; n < a.length; n++)
                if (!g(t[a[n]], e[a[n]]))
                    return !1;
            return !0
        }
        return !(!e || !t || "function" != typeof e || "function" != typeof t) && e.toString() === t.toString()
    }
    class m {
        constructor(t) {
            for (Object.assign(this, t); this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos); )
                --this.oldSelection.start;
            if (this.insertedCount)
                for (; this.value.slice(this.cursorPos) !== this.oldValue.slice(this.oldSelection.end); )
                    this.value.length - this.cursorPos < this.oldValue.length - this.oldSelection.end ? ++this.oldSelection.end : ++this.cursorPos
        }
        get startChangePos() {
            return Math.min(this.cursorPos, this.oldSelection.start)
        }
        get insertedCount() {
            return this.cursorPos - this.startChangePos
        }
        get inserted() {
            return this.value.substr(this.startChangePos, this.insertedCount)
        }
        get removedCount() {
            return Math.max(this.oldSelection.end - this.startChangePos || this.oldValue.length - this.value.length, 0)
        }
        get removed() {
            return this.oldValue.substr(this.startChangePos, this.removedCount)
        }
        get head() {
            return this.value.substring(0, this.startChangePos)
        }
        get tail() {
            return this.value.substring(this.startChangePos + this.insertedCount)
        }
        get removeDirection() {
            return !this.removedCount || this.insertedCount ? u : this.oldSelection.end !== this.cursorPos && this.oldSelection.start !== this.cursorPos || this.oldSelection.end !== this.oldSelection.start ? h : d
        }
    }
    function _(t, e) {
        return new _.InputMask(t,e)
    }
    function v(t) {
        if (null == t)
            throw new Error("mask property should be defined");
        return t instanceof RegExp ? _.MaskedRegExp : o(t) ? _.MaskedPattern : t === Date ? _.MaskedDate : t === Number ? _.MaskedNumber : Array.isArray(t) || t === Array ? _.MaskedDynamic : _.Masked && t.prototype instanceof _.Masked ? t : _.Masked && t instanceof _.Masked ? t.constructor : t instanceof Function ? _.MaskedFunction : (console.warn("Mask not found for mask", t),
        _.Masked)
    }
    function b(t) {
        if (!t)
            throw new Error("Options in not defined");
        if (_.Masked) {
            if (t.prototype instanceof _.Masked)
                return {
                    mask: t
                };
            const {mask: e, ...s} = t instanceof _.Masked ? {
                mask: t
            } : a(t) && t.mask instanceof _.Masked ? t : {};
            if (e) {
                const t = e.mask;
                return {
                    ...l(e, ((t,e)=>!e.startsWith("_"))),
                    mask: e.constructor,
                    _mask: t,
                    ...s
                }
            }
        }
        return a(t) ? {
            ...t
        } : {
            mask: t
        }
    }
    function k(t) {
        if (_.Masked && t instanceof _.Masked)
            return t;
        const e = b(t)
          , s = v(e.mask);
        if (!s)
            throw new Error("Masked class is not found for provided mask " + e.mask + ", appropriate module needs to be imported manually before creating mask.");
        return e.mask === s && delete e.mask,
        e._mask && (e.mask = e._mask,
        delete e._mask),
        new s(e)
    }
    _.createMask = k;
    class y {
        get selectionStart() {
            let t;
            try {
                t = this._unsafeSelectionStart
            } catch {}
            return null != t ? t : this.value.length
        }
        get selectionEnd() {
            let t;
            try {
                t = this._unsafeSelectionEnd
            } catch {}
            return null != t ? t : this.value.length
        }
        select(t, e) {
            if (null != t && null != e && (t !== this.selectionStart || e !== this.selectionEnd))
                try {
                    this._unsafeSelect(t, e)
                } catch {}
        }
        get isActive() {
            return !1
        }
    }
    _.MaskElement = y;
    class w extends y {
        constructor(t) {
            super(),
            this.input = t,
            this._onKeydown = this._onKeydown.bind(this),
            this._onInput = this._onInput.bind(this),
            this._onBeforeinput = this._onBeforeinput.bind(this),
            this._onCompositionEnd = this._onCompositionEnd.bind(this)
        }
        get rootElement() {
            var t, e, s;
            return null != (t = null == (e = (s = this.input).getRootNode) ? void 0 : e.call(s)) ? t : document
        }
        get isActive() {
            return this.input === this.rootElement.activeElement
        }
        bindEvents(t) {
            this.input.addEventListener("keydown", this._onKeydown),
            this.input.addEventListener("input", this._onInput),
            this.input.addEventListener("beforeinput", this._onBeforeinput),
            this.input.addEventListener("compositionend", this._onCompositionEnd),
            this.input.addEventListener("drop", t.drop),
            this.input.addEventListener("click", t.click),
            this.input.addEventListener("focus", t.focus),
            this.input.addEventListener("blur", t.commit),
            this._handlers = t
        }
        _onKeydown(t) {
            return this._handlers.redo && (90 === t.keyCode && t.shiftKey && (t.metaKey || t.ctrlKey) || 89 === t.keyCode && t.ctrlKey) ? (t.preventDefault(),
            this._handlers.redo(t)) : this._handlers.undo && 90 === t.keyCode && (t.metaKey || t.ctrlKey) ? (t.preventDefault(),
            this._handlers.undo(t)) : void (t.isComposing || this._handlers.selectionChange(t))
        }
        _onBeforeinput(t) {
            return "historyUndo" === t.inputType && this._handlers.undo ? (t.preventDefault(),
            this._handlers.undo(t)) : "historyRedo" === t.inputType && this._handlers.redo ? (t.preventDefault(),
            this._handlers.redo(t)) : void 0
        }
        _onCompositionEnd(t) {
            this._handlers.input(t)
        }
        _onInput(t) {
            t.isComposing || this._handlers.input(t)
        }
        unbindEvents() {
            this.input.removeEventListener("keydown", this._onKeydown),
            this.input.removeEventListener("input", this._onInput),
            this.input.removeEventListener("beforeinput", this._onBeforeinput),
            this.input.removeEventListener("compositionend", this._onCompositionEnd),
            this.input.removeEventListener("drop", this._handlers.drop),
            this.input.removeEventListener("click", this._handlers.click),
            this.input.removeEventListener("focus", this._handlers.focus),
            this.input.removeEventListener("blur", this._handlers.commit),
            this._handlers = {}
        }
    }
    _.HTMLMaskElement = w;
    class A extends w {
        constructor(t) {
            super(t),
            this.input = t
        }
        get _unsafeSelectionStart() {
            return null != this.input.selectionStart ? this.input.selectionStart : this.value.length
        }
        get _unsafeSelectionEnd() {
            return this.input.selectionEnd
        }
        _unsafeSelect(t, e) {
            this.input.setSelectionRange(t, e)
        }
        get value() {
            return this.input.value
        }
        set value(t) {
            this.input.value = t
        }
    }
    _.HTMLMaskElement = w;
    class E extends w {
        get _unsafeSelectionStart() {
            const t = this.rootElement
              , e = t.getSelection && t.getSelection()
              , s = e && e.anchorOffset
              , i = e && e.focusOffset;
            return null == i || null == s || s < i ? s : i
        }
        get _unsafeSelectionEnd() {
            const t = this.rootElement
              , e = t.getSelection && t.getSelection()
              , s = e && e.anchorOffset
              , i = e && e.focusOffset;
            return null == i || null == s || s > i ? s : i
        }
        _unsafeSelect(t, e) {
            if (!this.rootElement.createRange)
                return;
            const s = this.rootElement.createRange();
            s.setStart(this.input.firstChild || this.input, t),
            s.setEnd(this.input.lastChild || this.input, e);
            const i = this.rootElement
              , n = i.getSelection && i.getSelection();
            n && (n.removeAllRanges(),
            n.addRange(s))
        }
        get value() {
            return this.input.textContent || ""
        }
        set value(t) {
            this.input.textContent = t
        }
    }
    _.HTMLContenteditableMaskElement = E;
    class C {
        constructor() {
            this.states = [],
            this.currentIndex = 0
        }
        get currentState() {
            return this.states[this.currentIndex]
        }
        get isEmpty() {
            return 0 === this.states.length
        }
        push(t) {
            this.currentIndex < this.states.length - 1 && (this.states.length = this.currentIndex + 1),
            this.states.push(t),
            this.states.length > C.MAX_LENGTH && this.states.shift(),
            this.currentIndex = this.states.length - 1
        }
        go(t) {
            return this.currentIndex = Math.min(Math.max(this.currentIndex + t, 0), this.states.length - 1),
            this.currentState
        }
        undo() {
            return this.go(-1)
        }
        redo() {
            return this.go(1)
        }
        clear() {
            this.states.length = 0,
            this.currentIndex = 0
        }
    }
    C.MAX_LENGTH = 100;
    _.InputMask = class {
        constructor(t, e) {
            this.el = t instanceof y ? t : t.isContentEditable && "INPUT" !== t.tagName && "TEXTAREA" !== t.tagName ? new E(t) : new A(t),
            this.masked = k(e),
            this._listeners = {},
            this._value = "",
            this._unmaskedValue = "",
            this._rawInputValue = "",
            this.history = new C,
            this._saveSelection = this._saveSelection.bind(this),
            this._onInput = this._onInput.bind(this),
            this._onChange = this._onChange.bind(this),
            this._onDrop = this._onDrop.bind(this),
            this._onFocus = this._onFocus.bind(this),
            this._onClick = this._onClick.bind(this),
            this._onUndo = this._onUndo.bind(this),
            this._onRedo = this._onRedo.bind(this),
            this.alignCursor = this.alignCursor.bind(this),
            this.alignCursorFriendly = this.alignCursorFriendly.bind(this),
            this._bindEvents(),
            this.updateValue(),
            this._onChange()
        }
        maskEquals(t) {
            var e;
            return null == t || (null == (e = this.masked) ? void 0 : e.maskEquals(t))
        }
        get mask() {
            return this.masked.mask
        }
        set mask(t) {
            if (this.maskEquals(t))
                return;
            if (!(t instanceof _.Masked) && this.masked.constructor === v(t))
                return void this.masked.updateOptions({
                    mask: t
                });
            const e = t instanceof _.Masked ? t : k({
                mask: t
            });
            e.unmaskedValue = this.masked.unmaskedValue,
            this.masked = e
        }
        get value() {
            return this._value
        }
        set value(t) {
            this.value !== t && (this.masked.value = t,
            this.updateControl("auto"))
        }
        get unmaskedValue() {
            return this._unmaskedValue
        }
        set unmaskedValue(t) {
            this.unmaskedValue !== t && (this.masked.unmaskedValue = t,
            this.updateControl("auto"))
        }
        get rawInputValue() {
            return this._rawInputValue
        }
        set rawInputValue(t) {
            this.rawInputValue !== t && (this.masked.rawInputValue = t,
            this.updateControl(),
            this.alignCursor())
        }
        get typedValue() {
            return this.masked.typedValue
        }
        set typedValue(t) {
            this.masked.typedValueEquals(t) || (this.masked.typedValue = t,
            this.updateControl("auto"))
        }
        get displayValue() {
            return this.masked.displayValue
        }
        _bindEvents() {
            this.el.bindEvents({
                selectionChange: this._saveSelection,
                input: this._onInput,
                drop: this._onDrop,
                click: this._onClick,
                focus: this._onFocus,
                commit: this._onChange,
                undo: this._onUndo,
                redo: this._onRedo
            })
        }
        _unbindEvents() {
            this.el && this.el.unbindEvents()
        }
        _fireEvent(t, e) {
            const s = this._listeners[t];
            s && s.forEach((t=>t(e)))
        }
        get selectionStart() {
            return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart
        }
        get cursorPos() {
            return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd
        }
        set cursorPos(t) {
            this.el && this.el.isActive && (this.el.select(t, t),
            this._saveSelection())
        }
        _saveSelection() {
            this.displayValue !== this.el.value && console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."),
            this._selection = {
                start: this.selectionStart,
                end: this.cursorPos
            }
        }
        updateValue() {
            this.masked.value = this.el.value,
            this._value = this.masked.value,
            this._unmaskedValue = this.masked.unmaskedValue,
            this._rawInputValue = this.masked.rawInputValue
        }
        updateControl(t) {
            const e = this.masked.unmaskedValue
              , s = this.masked.value
              , i = this.masked.rawInputValue
              , n = this.displayValue
              , r = this.unmaskedValue !== e || this.value !== s || this._rawInputValue !== i;
            this._unmaskedValue = e,
            this._value = s,
            this._rawInputValue = i,
            this.el.value !== n && (this.el.value = n),
            "auto" === t ? this.alignCursor() : null != t && (this.cursorPos = t),
            r && this._fireChangeEvents(),
            this._historyChanging || !r && !this.history.isEmpty || this.history.push({
                unmaskedValue: e,
                selection: {
                    start: this.selectionStart,
                    end: this.cursorPos
                }
            })
        }
        updateOptions(t) {
            const {mask: e, ...s} = t
              , i = !this.maskEquals(e)
              , n = this.masked.optionsIsChanged(s);
            i && (this.mask = e),
            n && this.masked.updateOptions(s),
            (i || n) && this.updateControl()
        }
        updateCursor(t) {
            null != t && (this.cursorPos = t,
            this._delayUpdateCursor(t))
        }
        _delayUpdateCursor(t) {
            this._abortUpdateCursor(),
            this._changingCursorPos = t,
            this._cursorChanging = setTimeout((()=>{
                this.el && (this.cursorPos = this._changingCursorPos,
                this._abortUpdateCursor())
            }
            ), 10)
        }
        _fireChangeEvents() {
            this._fireEvent("accept", this._inputEvent),
            this.masked.isComplete && this._fireEvent("complete", this._inputEvent)
        }
        _abortUpdateCursor() {
            this._cursorChanging && (clearTimeout(this._cursorChanging),
            delete this._cursorChanging)
        }
        alignCursor() {
            this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, h))
        }
        alignCursorFriendly() {
            this.selectionStart === this.cursorPos && this.alignCursor()
        }
        on(t, e) {
            return this._listeners[t] || (this._listeners[t] = []),
            this._listeners[t].push(e),
            this
        }
        off(t, e) {
            if (!this._listeners[t])
                return this;
            if (!e)
                return delete this._listeners[t],
                this;
            const s = this._listeners[t].indexOf(e);
            return s >= 0 && this._listeners[t].splice(s, 1),
            this
        }
        _onInput(t) {
            this._inputEvent = t,
            this._abortUpdateCursor();
            const e = new m({
                value: this.el.value,
                cursorPos: this.cursorPos,
                oldValue: this.displayValue,
                oldSelection: this._selection
            })
              , s = this.masked.rawInputValue
              , i = this.masked.splice(e.startChangePos, e.removed.length, e.inserted, e.removeDirection, {
                input: !0,
                raw: !0
            }).offset
              , n = s === this.masked.rawInputValue ? e.removeDirection : u;
            let r = this.masked.nearestInputPos(e.startChangePos + i, n);
            n !== u && (r = this.masked.nearestInputPos(r, u)),
            this.updateControl(r),
            delete this._inputEvent
        }
        _onChange() {
            this.displayValue !== this.el.value && this.updateValue(),
            this.masked.doCommit(),
            this.updateControl(),
            this._saveSelection()
        }
        _onDrop(t) {
            t.preventDefault(),
            t.stopPropagation()
        }
        _onFocus(t) {
            this.alignCursorFriendly()
        }
        _onClick(t) {
            this.alignCursorFriendly()
        }
        _onUndo() {
            this._applyHistoryState(this.history.undo())
        }
        _onRedo() {
            this._applyHistoryState(this.history.redo())
        }
        _applyHistoryState(t) {
            t && (this._historyChanging = !0,
            this.unmaskedValue = t.unmaskedValue,
            this.el.select(t.selection.start, t.selection.end),
            this._saveSelection(),
            this._historyChanging = !1)
        }
        destroy() {
            this._unbindEvents(),
            this._listeners.length = 0,
            delete this.el
        }
    }
    ;
    class x {
        static normalize(t) {
            return Array.isArray(t) ? t : [t, new x]
        }
        constructor(t) {
            Object.assign(this, {
                inserted: "",
                rawInserted: "",
                tailShift: 0,
                skip: !1
            }, t)
        }
        aggregate(t) {
            return this.inserted += t.inserted,
            this.rawInserted += t.rawInserted,
            this.tailShift += t.tailShift,
            this.skip = this.skip || t.skip,
            this
        }
        get offset() {
            return this.tailShift + this.inserted.length
        }
        get consumed() {
            return Boolean(this.rawInserted) || this.skip
        }
        equals(t) {
            return this.inserted === t.inserted && this.tailShift === t.tailShift && this.rawInserted === t.rawInserted && this.skip === t.skip
        }
    }
    _.ChangeDetails = x;
    class S {
        constructor(t, e, s) {
            void 0 === t && (t = ""),
            void 0 === e && (e = 0),
            this.value = t,
            this.from = e,
            this.stop = s
        }
        toString() {
            return this.value
        }
        extend(t) {
            this.value += String(t)
        }
        appendTo(t) {
            return t.append(this.toString(), {
                tail: !0
            }).aggregate(t._appendPlaceholder())
        }
        get state() {
            return {
                value: this.value,
                from: this.from,
                stop: this.stop
            }
        }
        set state(t) {
            Object.assign(this, t)
        }
        unshift(t) {
            if (!this.value.length || null != t && this.from >= t)
                return "";
            const e = this.value[0];
            return this.value = this.value.slice(1),
            e
        }
        shift() {
            if (!this.value.length)
                return "";
            const t = this.value[this.value.length - 1];
            return this.value = this.value.slice(0, -1),
            t
        }
    }
    class T {
        constructor(t) {
            this._value = "",
            this._update({
                ...T.DEFAULTS,
                ...t
            }),
            this._initialized = !0
        }
        updateOptions(t) {
            this.optionsIsChanged(t) && this.withValueRefresh(this._update.bind(this, t))
        }
        _update(t) {
            Object.assign(this, t)
        }
        get state() {
            return {
                _value: this.value,
                _rawInputValue: this.rawInputValue
            }
        }
        set state(t) {
            this._value = t._value
        }
        reset() {
            this._value = ""
        }
        get value() {
            return this._value
        }
        set value(t) {
            this.resolve(t, {
                input: !0
            })
        }
        resolve(t, e) {
            void 0 === e && (e = {
                input: !0
            }),
            this.reset(),
            this.append(t, e, ""),
            this.doCommit()
        }
        get unmaskedValue() {
            return this.value
        }
        set unmaskedValue(t) {
            this.resolve(t, {})
        }
        get typedValue() {
            return this.parse ? this.parse(this.value, this) : this.unmaskedValue
        }
        set typedValue(t) {
            this.format ? this.value = this.format(t, this) : this.unmaskedValue = String(t)
        }
        get rawInputValue() {
            return this.extractInput(0, this.displayValue.length, {
                raw: !0
            })
        }
        set rawInputValue(t) {
            this.resolve(t, {
                raw: !0
            })
        }
        get displayValue() {
            return this.value
        }
        get isComplete() {
            return !0
        }
        get isFilled() {
            return this.isComplete
        }
        nearestInputPos(t, e) {
            return t
        }
        totalInputPositions(t, e) {
            return void 0 === t && (t = 0),
            void 0 === e && (e = this.displayValue.length),
            Math.min(this.displayValue.length, e - t)
        }
        extractInput(t, e, s) {
            return void 0 === t && (t = 0),
            void 0 === e && (e = this.displayValue.length),
            this.displayValue.slice(t, e)
        }
        extractTail(t, e) {
            return void 0 === t && (t = 0),
            void 0 === e && (e = this.displayValue.length),
            new S(this.extractInput(t, e),t)
        }
        appendTail(t) {
            return o(t) && (t = new S(String(t))),
            t.appendTo(this)
        }
        _appendCharRaw(t, e) {
            return t ? (this._value += t,
            new x({
                inserted: t,
                rawInserted: t
            })) : new x
        }
        _appendChar(t, e, s) {
            void 0 === e && (e = {});
            const i = this.state;
            let n;
            if ([t,n] = this.doPrepareChar(t, e),
            t && (n = n.aggregate(this._appendCharRaw(t, e)),
            !n.rawInserted && "pad" === this.autofix)) {
                const s = this.state;
                this.state = i;
                let r = this.pad(e);
                const o = this._appendCharRaw(t, e);
                r = r.aggregate(o),
                o.rawInserted || r.equals(n) ? n = r : this.state = s
            }
            if (n.inserted) {
                let t, r = !1 !== this.doValidate(e);
                if (r && null != s) {
                    const e = this.state;
                    if (!0 === this.overwrite) {
                        t = s.state;
                        for (let t = 0; t < n.rawInserted.length; ++t)
                            s.unshift(this.displayValue.length - n.tailShift)
                    }
                    let i = this.appendTail(s);
                    if (r = i.rawInserted.length === s.toString().length,
                    !(r && i.inserted || "shift" !== this.overwrite)) {
                        this.state = e,
                        t = s.state;
                        for (let t = 0; t < n.rawInserted.length; ++t)
                            s.shift();
                        i = this.appendTail(s),
                        r = i.rawInserted.length === s.toString().length
                    }
                    r && i.inserted && (this.state = e)
                }
                r || (n = new x,
                this.state = i,
                s && t && (s.state = t))
            }
            return n
        }
        _appendPlaceholder() {
            return new x
        }
        _appendEager() {
            return new x
        }
        append(t, e, s) {
            if (!o(t))
                throw new Error("value should be string");
            const i = o(s) ? new S(String(s)) : s;
            let n;
            null != e && e.tail && (e._beforeTailState = this.state),
            [t,n] = this.doPrepare(t, e);
            for (let s = 0; s < t.length; ++s) {
                const r = this._appendChar(t[s], e, i);
                if (!r.rawInserted && !this.doSkipInvalid(t[s], e, i))
                    break;
                n.aggregate(r)
            }
            return (!0 === this.eager || "append" === this.eager) && null != e && e.input && t && n.aggregate(this._appendEager()),
            null != i && (n.tailShift += this.appendTail(i).tailShift),
            n
        }
        remove(t, e) {
            return void 0 === t && (t = 0),
            void 0 === e && (e = this.displayValue.length),
            this._value = this.displayValue.slice(0, t) + this.displayValue.slice(e),
            new x
        }
        withValueRefresh(t) {
            if (this._refreshing || !this._initialized)
                return t();
            this._refreshing = !0;
            const e = this.rawInputValue
              , s = this.value
              , i = t();
            return this.rawInputValue = e,
            this.value && this.value !== s && 0 === s.indexOf(this.value) && (this.append(s.slice(this.displayValue.length), {}, ""),
            this.doCommit()),
            delete this._refreshing,
            i
        }
        runIsolated(t) {
            if (this._isolated || !this._initialized)
                return t(this);
            this._isolated = !0;
            const e = this.state
              , s = t(this);
            return this.state = e,
            delete this._isolated,
            s
        }
        doSkipInvalid(t, e, s) {
            return Boolean(this.skipInvalid)
        }
        doPrepare(t, e) {
            return void 0 === e && (e = {}),
            x.normalize(this.prepare ? this.prepare(t, this, e) : t)
        }
        doPrepareChar(t, e) {
            return void 0 === e && (e = {}),
            x.normalize(this.prepareChar ? this.prepareChar(t, this, e) : t)
        }
        doValidate(t) {
            return (!this.validate || this.validate(this.value, this, t)) && (!this.parent || this.parent.doValidate(t))
        }
        doCommit() {
            this.commit && this.commit(this.value, this)
        }
        splice(t, e, s, i, n) {
            void 0 === s && (s = ""),
            void 0 === i && (i = u),
            void 0 === n && (n = {
                input: !0
            });
            const r = t + e
              , o = this.extractTail(r)
              , a = !0 === this.eager || "remove" === this.eager;
            let l;
            a && (i = function(t) {
                switch (t) {
                case h:
                    return c;
                case d:
                    return p;
                default:
                    return t
                }
            }(i),
            l = this.extractInput(0, r, {
                raw: !0
            }));
            let f = t;
            const g = new x;
            if (i !== u && (f = this.nearestInputPos(t, e > 1 && 0 !== t && !a ? u : i),
            g.tailShift = f - t),
            g.aggregate(this.remove(f)),
            a && i !== u && l === this.rawInputValue)
                if (i === c) {
                    let t;
                    for (; l === this.rawInputValue && (t = this.displayValue.length); )
                        g.aggregate(new x({
                            tailShift: -1
                        })).aggregate(this.remove(t - 1))
                } else
                    i === p && o.unshift();
            return g.aggregate(this.append(s, n, o))
        }
        maskEquals(t) {
            return this.mask === t
        }
        optionsIsChanged(t) {
            return !g(this, t)
        }
        typedValueEquals(t) {
            const e = this.typedValue;
            return t === e || T.EMPTY_VALUES.includes(t) && T.EMPTY_VALUES.includes(e) || !!this.format && this.format(t, this) === this.format(this.typedValue, this)
        }
        pad(t) {
            return new x
        }
    }
    T.DEFAULTS = {
        skipInvalid: !0
    },
    T.EMPTY_VALUES = [void 0, null, ""],
    _.Masked = T;
    class D {
        constructor(t, e) {
            void 0 === t && (t = []),
            void 0 === e && (e = 0),
            this.chunks = t,
            this.from = e
        }
        toString() {
            return this.chunks.map(String).join("")
        }
        extend(t) {
            if (!String(t))
                return;
            t = o(t) ? new S(String(t)) : t;
            const e = this.chunks[this.chunks.length - 1]
              , s = e && (e.stop === t.stop || null == t.stop) && t.from === e.from + e.toString().length;
            if (t instanceof S)
                s ? e.extend(t.toString()) : this.chunks.push(t);
            else if (t instanceof D) {
                if (null == t.stop) {
                    let e;
                    for (; t.chunks.length && null == t.chunks[0].stop; )
                        e = t.chunks.shift(),
                        e.from += t.from,
                        this.extend(e)
                }
                t.toString() && (t.stop = t.blockIndex,
                this.chunks.push(t))
            }
        }
        appendTo(t) {
            if (!(t instanceof _.MaskedPattern)) {
                return new S(this.toString()).appendTo(t)
            }
            const e = new x;
            for (let s = 0; s < this.chunks.length; ++s) {
                const i = this.chunks[s]
                  , n = t._mapPosToBlock(t.displayValue.length)
                  , r = i.stop;
                let o;
                if (null != r && (!n || n.index <= r) && ((i instanceof D || t._stops.indexOf(r) >= 0) && e.aggregate(t._appendPlaceholder(r)),
                o = i instanceof D && t._blocks[r]),
                o) {
                    const s = o.appendTail(i);
                    e.aggregate(s);
                    const n = i.toString().slice(s.rawInserted.length);
                    n && e.aggregate(t.append(n, {
                        tail: !0
                    }))
                } else
                    e.aggregate(t.append(i.toString(), {
                        tail: !0
                    }))
            }
            return e
        }
        get state() {
            return {
                chunks: this.chunks.map((t=>t.state)),
                from: this.from,
                stop: this.stop,
                blockIndex: this.blockIndex
            }
        }
        set state(t) {
            const {chunks: e, ...s} = t;
            Object.assign(this, s),
            this.chunks = e.map((t=>{
                const e = "chunks"in t ? new D : new S;
                return e.state = t,
                e
            }
            ))
        }
        unshift(t) {
            if (!this.chunks.length || null != t && this.from >= t)
                return "";
            const e = null != t ? t - this.from : t;
            let s = 0;
            for (; s < this.chunks.length; ) {
                const t = this.chunks[s]
                  , i = t.unshift(e);
                if (t.toString()) {
                    if (!i)
                        break;
                    ++s
                } else
                    this.chunks.splice(s, 1);
                if (i)
                    return i
            }
            return ""
        }
        shift() {
            if (!this.chunks.length)
                return "";
            let t = this.chunks.length - 1;
            for (; 0 <= t; ) {
                const e = this.chunks[t]
                  , s = e.shift();
                if (e.toString()) {
                    if (!s)
                        break;
                    --t
                } else
                    this.chunks.splice(t, 1);
                if (s)
                    return s
            }
            return ""
        }
    }
    class F {
        constructor(t, e) {
            this.masked = t,
            this._log = [];
            const {offset: s, index: i} = t._mapPosToBlock(e) || (e < 0 ? {
                index: 0,
                offset: 0
            } : {
                index: this.masked._blocks.length,
                offset: 0
            });
            this.offset = s,
            this.index = i,
            this.ok = !1
        }
        get block() {
            return this.masked._blocks[this.index]
        }
        get pos() {
            return this.masked._blockStartPos(this.index) + this.offset
        }
        get state() {
            return {
                index: this.index,
                offset: this.offset,
                ok: this.ok
            }
        }
        set state(t) {
            Object.assign(this, t)
        }
        pushState() {
            this._log.push(this.state)
        }
        popState() {
            const t = this._log.pop();
            return t && (this.state = t),
            t
        }
        bindBlock() {
            this.block || (this.index < 0 && (this.index = 0,
            this.offset = 0),
            this.index >= this.masked._blocks.length && (this.index = this.masked._blocks.length - 1,
            this.offset = this.block.displayValue.length))
        }
        _pushLeft(t) {
            for (this.pushState(),
            this.bindBlock(); 0 <= this.index; --this.index,
            this.offset = (null == (e = this.block) ? void 0 : e.displayValue.length) || 0) {
                var e;
                if (t())
                    return this.ok = !0
            }
            return this.ok = !1
        }
        _pushRight(t) {
            for (this.pushState(),
            this.bindBlock(); this.index < this.masked._blocks.length; ++this.index,
            this.offset = 0)
                if (t())
                    return this.ok = !0;
            return this.ok = !1
        }
        pushLeftBeforeFilled() {
            return this._pushLeft((()=>{
                if (!this.block.isFixed && this.block.value)
                    return this.offset = this.block.nearestInputPos(this.offset, c),
                    0 !== this.offset || void 0
            }
            ))
        }
        pushLeftBeforeInput() {
            return this._pushLeft((()=>{
                if (!this.block.isFixed)
                    return this.offset = this.block.nearestInputPos(this.offset, h),
                    !0
            }
            ))
        }
        pushLeftBeforeRequired() {
            return this._pushLeft((()=>{
                if (!(this.block.isFixed || this.block.isOptional && !this.block.value))
                    return this.offset = this.block.nearestInputPos(this.offset, h),
                    !0
            }
            ))
        }
        pushRightBeforeFilled() {
            return this._pushRight((()=>{
                if (!this.block.isFixed && this.block.value)
                    return this.offset = this.block.nearestInputPos(this.offset, p),
                    this.offset !== this.block.value.length || void 0
            }
            ))
        }
        pushRightBeforeInput() {
            return this._pushRight((()=>{
                if (!this.block.isFixed)
                    return this.offset = this.block.nearestInputPos(this.offset, u),
                    !0
            }
            ))
        }
        pushRightBeforeRequired() {
            return this._pushRight((()=>{
                if (!(this.block.isFixed || this.block.isOptional && !this.block.value))
                    return this.offset = this.block.nearestInputPos(this.offset, u),
                    !0
            }
            ))
        }
    }
    class I {
        constructor(t) {
            Object.assign(this, t),
            this._value = "",
            this.isFixed = !0
        }
        get value() {
            return this._value
        }
        get unmaskedValue() {
            return this.isUnmasking ? this.value : ""
        }
        get rawInputValue() {
            return this._isRawInput ? this.value : ""
        }
        get displayValue() {
            return this.value
        }
        reset() {
            this._isRawInput = !1,
            this._value = ""
        }
        remove(t, e) {
            return void 0 === t && (t = 0),
            void 0 === e && (e = this._value.length),
            this._value = this._value.slice(0, t) + this._value.slice(e),
            this._value || (this._isRawInput = !1),
            new x
        }
        nearestInputPos(t, e) {
            void 0 === e && (e = u);
            const s = this._value.length;
            switch (e) {
            case h:
            case c:
                return 0;
            default:
                return s
            }
        }
        totalInputPositions(t, e) {
            return void 0 === t && (t = 0),
            void 0 === e && (e = this._value.length),
            this._isRawInput ? e - t : 0
        }
        extractInput(t, e, s) {
            return void 0 === t && (t = 0),
            void 0 === e && (e = this._value.length),
            void 0 === s && (s = {}),
            s.raw && this._isRawInput && this._value.slice(t, e) || ""
        }
        get isComplete() {
            return !0
        }
        get isFilled() {
            return Boolean(this._value)
        }
        _appendChar(t, e) {
            if (void 0 === e && (e = {}),
            this.isFilled)
                return new x;
            const s = !0 === this.eager || "append" === this.eager
              , i = this.char === t && (this.isUnmasking || e.input || e.raw) && (!e.raw || !s) && !e.tail
              , n = new x({
                inserted: this.char,
                rawInserted: i ? this.char : ""
            });
            return this._value = this.char,
            this._isRawInput = i && (e.raw || e.input),
            n
        }
        _appendEager() {
            return this._appendChar(this.char, {
                tail: !0
            })
        }
        _appendPlaceholder() {
            const t = new x;
            return this.isFilled || (this._value = t.inserted = this.char),
            t
        }
        extractTail() {
            return new S("")
        }
        appendTail(t) {
            return o(t) && (t = new S(String(t))),
            t.appendTo(this)
        }
        append(t, e, s) {
            const i = this._appendChar(t[0], e);
            return null != s && (i.tailShift += this.appendTail(s).tailShift),
            i
        }
        doCommit() {}
        get state() {
            return {
                _value: this._value,
                _rawInputValue: this.rawInputValue
            }
        }
        set state(t) {
            this._value = t._value,
            this._isRawInput = Boolean(t._rawInputValue)
        }
        pad(t) {
            return this._appendPlaceholder()
        }
    }
    class M {
        constructor(t) {
            const {parent: e, isOptional: s, placeholderChar: i, displayChar: n, lazy: r, eager: o, ...a} = t;
            this.masked = k(a),
            Object.assign(this, {
                parent: e,
                isOptional: s,
                placeholderChar: i,
                displayChar: n,
                lazy: r,
                eager: o
            })
        }
        reset() {
            this.isFilled = !1,
            this.masked.reset()
        }
        remove(t, e) {
            return void 0 === t && (t = 0),
            void 0 === e && (e = this.value.length),
            0 === t && e >= 1 ? (this.isFilled = !1,
            this.masked.remove(t, e)) : new x
        }
        get value() {
            return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : "")
        }
        get unmaskedValue() {
            return this.masked.unmaskedValue
        }
        get rawInputValue() {
            return this.masked.rawInputValue
        }
        get displayValue() {
            return this.masked.value && this.displayChar || this.value
        }
        get isComplete() {
            return Boolean(this.masked.value) || this.isOptional
        }
        _appendChar(t, e) {
            if (void 0 === e && (e = {}),
            this.isFilled)
                return new x;
            const s = this.masked.state;
            let i = this.masked._appendChar(t, this.currentMaskFlags(e));
            return i.inserted && !1 === this.doValidate(e) && (i = new x,
            this.masked.state = s),
            i.inserted || this.isOptional || this.lazy || e.input || (i.inserted = this.placeholderChar),
            i.skip = !i.inserted && !this.isOptional,
            this.isFilled = Boolean(i.inserted),
            i
        }
        append(t, e, s) {
            return this.masked.append(t, this.currentMaskFlags(e), s)
        }
        _appendPlaceholder() {
            return this.isFilled || this.isOptional ? new x : (this.isFilled = !0,
            new x({
                inserted: this.placeholderChar
            }))
        }
        _appendEager() {
            return new x
        }
        extractTail(t, e) {
            return this.masked.extractTail(t, e)
        }
        appendTail(t) {
            return this.masked.appendTail(t)
        }
        extractInput(t, e, s) {
            return void 0 === t && (t = 0),
            void 0 === e && (e = this.value.length),
            this.masked.extractInput(t, e, s)
        }
        nearestInputPos(t, e) {
            void 0 === e && (e = u);
            const s = this.value.length
              , i = Math.min(Math.max(t, 0), s);
            switch (e) {
            case h:
            case c:
                return this.isComplete ? i : 0;
            case d:
            case p:
                return this.isComplete ? i : s;
            default:
                return i
            }
        }
        totalInputPositions(t, e) {
            return void 0 === t && (t = 0),
            void 0 === e && (e = this.value.length),
            this.value.slice(t, e).length
        }
        doValidate(t) {
            return this.masked.doValidate(this.currentMaskFlags(t)) && (!this.parent || this.parent.doValidate(this.currentMaskFlags(t)))
        }
        doCommit() {
            this.masked.doCommit()
        }
        get state() {
            return {
                _value: this.value,
                _rawInputValue: this.rawInputValue,
                masked: this.masked.state,
                isFilled: this.isFilled
            }
        }
        set state(t) {
            this.masked.state = t.masked,
            this.isFilled = t.isFilled
        }
        currentMaskFlags(t) {
            var e;
            return {
                ...t,
                _beforeTailState: (null == t || null == (e = t._beforeTailState) ? void 0 : e.masked) || (null == t ? void 0 : t._beforeTailState)
            }
        }
        pad(t) {
            return new x
        }
    }
    M.DEFAULT_DEFINITIONS = {
        0: /\d/,
        a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
        "*": /./
    };
    _.MaskedRegExp = class extends T {
        updateOptions(t) {
            super.updateOptions(t)
        }
        _update(t) {
            const e = t.mask;
            e && (t.validate = t=>t.search(e) >= 0),
            super._update(t)
        }
    }
    ;
    class B extends T {
        constructor(t) {
            super({
                ...B.DEFAULTS,
                ...t,
                definitions: Object.assign({}, M.DEFAULT_DEFINITIONS, null == t ? void 0 : t.definitions)
            })
        }
        updateOptions(t) {
            super.updateOptions(t)
        }
        _update(t) {
            t.definitions = Object.assign({}, this.definitions, t.definitions),
            super._update(t),
            this._rebuildMask()
        }
        _rebuildMask() {
            const t = this.definitions;
            this._blocks = [],
            this.exposeBlock = void 0,
            this._stops = [],
            this._maskedBlocks = {};
            const e = this.mask;
            if (!e || !t)
                return;
            let s = !1
              , i = !1;
            for (let n = 0; n < e.length; ++n) {
                if (this.blocks) {
                    const t = e.slice(n)
                      , s = Object.keys(this.blocks).filter((e=>0 === t.indexOf(e)));
                    s.sort(((t,e)=>e.length - t.length));
                    const i = s[0];
                    if (i) {
                        const {expose: t, repeat: e, ...s} = b(this.blocks[i])
                          , r = {
                            lazy: this.lazy,
                            eager: this.eager,
                            placeholderChar: this.placeholderChar,
                            displayChar: this.displayChar,
                            overwrite: this.overwrite,
                            autofix: this.autofix,
                            ...s,
                            repeat: e,
                            parent: this
                        }
                          , o = null != e ? new _.RepeatBlock(r) : k(r);
                        o && (this._blocks.push(o),
                        t && (this.exposeBlock = o),
                        this._maskedBlocks[i] || (this._maskedBlocks[i] = []),
                        this._maskedBlocks[i].push(this._blocks.length - 1)),
                        n += i.length - 1;
                        continue
                    }
                }
                let r = e[n]
                  , o = r in t;
                if (r === B.STOP_CHAR) {
                    this._stops.push(this._blocks.length);
                    continue
                }
                if ("{" === r || "}" === r) {
                    s = !s;
                    continue
                }
                if ("[" === r || "]" === r) {
                    i = !i;
                    continue
                }
                if (r === B.ESCAPE_CHAR) {
                    if (++n,
                    r = e[n],
                    !r)
                        break;
                    o = !1
                }
                const a = o ? new M({
                    isOptional: i,
                    lazy: this.lazy,
                    eager: this.eager,
                    placeholderChar: this.placeholderChar,
                    displayChar: this.displayChar,
                    ...b(t[r]),
                    parent: this
                }) : new I({
                    char: r,
                    eager: this.eager,
                    isUnmasking: s
                });
                this._blocks.push(a)
            }
        }
        get state() {
            return {
                ...super.state,
                _blocks: this._blocks.map((t=>t.state))
            }
        }
        set state(t) {
            if (!t)
                return void this.reset();
            const {_blocks: e, ...s} = t;
            this._blocks.forEach(((t,s)=>t.state = e[s])),
            super.state = s
        }
        reset() {
            super.reset(),
            this._blocks.forEach((t=>t.reset()))
        }
        get isComplete() {
            return this.exposeBlock ? this.exposeBlock.isComplete : this._blocks.every((t=>t.isComplete))
        }
        get isFilled() {
            return this._blocks.every((t=>t.isFilled))
        }
        get isFixed() {
            return this._blocks.every((t=>t.isFixed))
        }
        get isOptional() {
            return this._blocks.every((t=>t.isOptional))
        }
        doCommit() {
            this._blocks.forEach((t=>t.doCommit())),
            super.doCommit()
        }
        get unmaskedValue() {
            return this.exposeBlock ? this.exposeBlock.unmaskedValue : this._blocks.reduce(((t,e)=>t + e.unmaskedValue), "")
        }
        set unmaskedValue(t) {
            if (this.exposeBlock) {
                const e = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
                this.exposeBlock.unmaskedValue = t,
                this.appendTail(e),
                this.doCommit()
            } else
                super.unmaskedValue = t
        }
        get value() {
            return this.exposeBlock ? this.exposeBlock.value : this._blocks.reduce(((t,e)=>t + e.value), "")
        }
        set value(t) {
            if (this.exposeBlock) {
                const e = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
                this.exposeBlock.value = t,
                this.appendTail(e),
                this.doCommit()
            } else
                super.value = t
        }
        get typedValue() {
            return this.exposeBlock ? this.exposeBlock.typedValue : super.typedValue
        }
        set typedValue(t) {
            if (this.exposeBlock) {
                const e = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
                this.exposeBlock.typedValue = t,
                this.appendTail(e),
                this.doCommit()
            } else
                super.typedValue = t
        }
        get displayValue() {
            return this._blocks.reduce(((t,e)=>t + e.displayValue), "")
        }
        appendTail(t) {
            return super.appendTail(t).aggregate(this._appendPlaceholder())
        }
        _appendEager() {
            var t;
            const e = new x;
            let s = null == (t = this._mapPosToBlock(this.displayValue.length)) ? void 0 : t.index;
            if (null == s)
                return e;
            this._blocks[s].isFilled && ++s;
            for (let t = s; t < this._blocks.length; ++t) {
                const s = this._blocks[t]._appendEager();
                if (!s.inserted)
                    break;
                e.aggregate(s)
            }
            return e
        }
        _appendCharRaw(t, e) {
            void 0 === e && (e = {});
            const s = this._mapPosToBlock(this.displayValue.length)
              , i = new x;
            if (!s)
                return i;
            for (let r, o = s.index; r = this._blocks[o]; ++o) {
                var n;
                const s = r._appendChar(t, {
                    ...e,
                    _beforeTailState: null == (n = e._beforeTailState) || null == (n = n._blocks) ? void 0 : n[o]
                });
                if (i.aggregate(s),
                s.consumed)
                    break
            }
            return i
        }
        extractTail(t, e) {
            void 0 === t && (t = 0),
            void 0 === e && (e = this.displayValue.length);
            const s = new D;
            return t === e || this._forEachBlocksInRange(t, e, ((t,e,i,n)=>{
                const r = t.extractTail(i, n);
                r.stop = this._findStopBefore(e),
                r.from = this._blockStartPos(e),
                r instanceof D && (r.blockIndex = e),
                s.extend(r)
            }
            )),
            s
        }
        extractInput(t, e, s) {
            if (void 0 === t && (t = 0),
            void 0 === e && (e = this.displayValue.length),
            void 0 === s && (s = {}),
            t === e)
                return "";
            let i = "";
            return this._forEachBlocksInRange(t, e, ((t,e,n,r)=>{
                i += t.extractInput(n, r, s)
            }
            )),
            i
        }
        _findStopBefore(t) {
            let e;
            for (let s = 0; s < this._stops.length; ++s) {
                const i = this._stops[s];
                if (!(i <= t))
                    break;
                e = i
            }
            return e
        }
        _appendPlaceholder(t) {
            const e = new x;
            if (this.lazy && null == t)
                return e;
            const s = this._mapPosToBlock(this.displayValue.length);
            if (!s)
                return e;
            const i = s.index
              , n = null != t ? t : this._blocks.length;
            return this._blocks.slice(i, n).forEach((s=>{
                var i;
                s.lazy && null == t || e.aggregate(s._appendPlaceholder(null == (i = s._blocks) ? void 0 : i.length))
            }
            )),
            e
        }
        _mapPosToBlock(t) {
            let e = "";
            for (let s = 0; s < this._blocks.length; ++s) {
                const i = this._blocks[s]
                  , n = e.length;
                if (e += i.displayValue,
                t <= e.length)
                    return {
                        index: s,
                        offset: t - n
                    }
            }
        }
        _blockStartPos(t) {
            return this._blocks.slice(0, t).reduce(((t,e)=>t + e.displayValue.length), 0)
        }
        _forEachBlocksInRange(t, e, s) {
            void 0 === e && (e = this.displayValue.length);
            const i = this._mapPosToBlock(t);
            if (i) {
                const t = this._mapPosToBlock(e)
                  , n = t && i.index === t.index
                  , r = i.offset
                  , o = t && n ? t.offset : this._blocks[i.index].displayValue.length;
                if (s(this._blocks[i.index], i.index, r, o),
                t && !n) {
                    for (let e = i.index + 1; e < t.index; ++e)
                        s(this._blocks[e], e, 0, this._blocks[e].displayValue.length);
                    s(this._blocks[t.index], t.index, 0, t.offset)
                }
            }
        }
        remove(t, e) {
            void 0 === t && (t = 0),
            void 0 === e && (e = this.displayValue.length);
            const s = super.remove(t, e);
            return this._forEachBlocksInRange(t, e, ((t,e,i,n)=>{
                s.aggregate(t.remove(i, n))
            }
            )),
            s
        }
        nearestInputPos(t, e) {
            if (void 0 === e && (e = u),
            !this._blocks.length)
                return 0;
            const s = new F(this,t);
            if (e === u)
                return s.pushRightBeforeInput() ? s.pos : (s.popState(),
                s.pushLeftBeforeInput() ? s.pos : this.displayValue.length);
            if (e === h || e === c) {
                if (e === h) {
                    if (s.pushRightBeforeFilled(),
                    s.ok && s.pos === t)
                        return t;
                    s.popState()
                }
                if (s.pushLeftBeforeInput(),
                s.pushLeftBeforeRequired(),
                s.pushLeftBeforeFilled(),
                e === h) {
                    if (s.pushRightBeforeInput(),
                    s.pushRightBeforeRequired(),
                    s.ok && s.pos <= t)
                        return s.pos;
                    if (s.popState(),
                    s.ok && s.pos <= t)
                        return s.pos;
                    s.popState()
                }
                return s.ok ? s.pos : e === c ? 0 : (s.popState(),
                s.ok ? s.pos : (s.popState(),
                s.ok ? s.pos : 0))
            }
            return e === d || e === p ? (s.pushRightBeforeInput(),
            s.pushRightBeforeRequired(),
            s.pushRightBeforeFilled() ? s.pos : e === p ? this.displayValue.length : (s.popState(),
            s.ok ? s.pos : (s.popState(),
            s.ok ? s.pos : this.nearestInputPos(t, h)))) : t
        }
        totalInputPositions(t, e) {
            void 0 === t && (t = 0),
            void 0 === e && (e = this.displayValue.length);
            let s = 0;
            return this._forEachBlocksInRange(t, e, ((t,e,i,n)=>{
                s += t.totalInputPositions(i, n)
            }
            )),
            s
        }
        maskedBlock(t) {
            return this.maskedBlocks(t)[0]
        }
        maskedBlocks(t) {
            const e = this._maskedBlocks[t];
            return e ? e.map((t=>this._blocks[t])) : []
        }
        pad(t) {
            const e = new x;
            return this._forEachBlocksInRange(0, this.displayValue.length, (s=>e.aggregate(s.pad(t)))),
            e
        }
    }
    B.DEFAULTS = {
        ...T.DEFAULTS,
        lazy: !0,
        placeholderChar: "_"
    },
    B.STOP_CHAR = "`",
    B.ESCAPE_CHAR = "\\",
    B.InputDefinition = M,
    B.FixedDefinition = I,
    _.MaskedPattern = B;
    class O extends B {
        get _matchFrom() {
            return this.maxLength - String(this.from).length
        }
        constructor(t) {
            super(t)
        }
        updateOptions(t) {
            super.updateOptions(t)
        }
        _update(t) {
            const {to: e=this.to || 0, from: s=this.from || 0, maxLength: i=this.maxLength || 0, autofix: n=this.autofix, ...r} = t;
            this.to = e,
            this.from = s,
            this.maxLength = Math.max(String(e).length, i),
            this.autofix = n;
            const o = String(this.from).padStart(this.maxLength, "0")
              , a = String(this.to).padStart(this.maxLength, "0");
            let l = 0;
            for (; l < a.length && a[l] === o[l]; )
                ++l;
            r.mask = a.slice(0, l).replace(/0/g, "\\0") + "0".repeat(this.maxLength - l),
            super._update(r)
        }
        get isComplete() {
            return super.isComplete && Boolean(this.value)
        }
        boundaries(t) {
            let e = ""
              , s = "";
            const [,i,n] = t.match(/^(\D*)(\d*)(\D*)/) || [];
            return n && (e = "0".repeat(i.length) + n,
            s = "9".repeat(i.length) + n),
            e = e.padEnd(this.maxLength, "0"),
            s = s.padEnd(this.maxLength, "9"),
            [e, s]
        }
        doPrepareChar(t, e) {
            let s;
            return void 0 === e && (e = {}),
            [t,s] = super.doPrepareChar(t.replace(/\D/g, ""), e),
            t || (s.skip = !this.isComplete),
            [t, s]
        }
        _appendCharRaw(t, e) {
            if (void 0 === e && (e = {}),
            !this.autofix || this.value.length + 1 > this.maxLength)
                return super._appendCharRaw(t, e);
            const s = String(this.from).padStart(this.maxLength, "0")
              , i = String(this.to).padStart(this.maxLength, "0")
              , [n,r] = this.boundaries(this.value + t);
            return Number(r) < this.from ? super._appendCharRaw(s[this.value.length], e) : Number(n) > this.to ? !e.tail && "pad" === this.autofix && this.value.length + 1 < this.maxLength ? super._appendCharRaw(s[this.value.length], e).aggregate(this._appendCharRaw(t, e)) : super._appendCharRaw(i[this.value.length], e) : super._appendCharRaw(t, e)
        }
        doValidate(t) {
            const e = this.value;
            if (-1 === e.search(/[^0]/) && e.length <= this._matchFrom)
                return !0;
            const [s,i] = this.boundaries(e);
            return this.from <= Number(i) && Number(s) <= this.to && super.doValidate(t)
        }
        pad(t) {
            const e = new x;
            if (this.value.length === this.maxLength)
                return e;
            const s = this.value
              , i = this.maxLength - this.value.length;
            if (i) {
                this.reset();
                for (let s = 0; s < i; ++s)
                    e.aggregate(super._appendCharRaw("0", t));
                s.split("").forEach((t=>this._appendCharRaw(t)))
            }
            return e
        }
    }
    _.MaskedRange = O;
    class P extends B {
        static extractPatternOptions(t) {
            const {mask: e, pattern: s, ...i} = t;
            return {
                ...i,
                mask: o(e) ? e : s
            }
        }
        constructor(t) {
            super(P.extractPatternOptions({
                ...P.DEFAULTS,
                ...t
            }))
        }
        updateOptions(t) {
            super.updateOptions(t)
        }
        _update(t) {
            const {mask: e, pattern: s, blocks: i, ...n} = {
                ...P.DEFAULTS,
                ...t
            }
              , r = Object.assign({}, P.GET_DEFAULT_BLOCKS());
            t.min && (r.Y.from = t.min.getFullYear()),
            t.max && (r.Y.to = t.max.getFullYear()),
            t.min && t.max && r.Y.from === r.Y.to && (r.m.from = t.min.getMonth() + 1,
            r.m.to = t.max.getMonth() + 1,
            r.m.from === r.m.to && (r.d.from = t.min.getDate(),
            r.d.to = t.max.getDate())),
            Object.assign(r, this.blocks, i),
            super._update({
                ...n,
                mask: o(e) ? e : s,
                blocks: r
            })
        }
        doValidate(t) {
            const e = this.date;
            return super.doValidate(t) && (!this.isComplete || this.isDateExist(this.value) && null != e && (null == this.min || this.min <= e) && (null == this.max || e <= this.max))
        }
        isDateExist(t) {
            return this.format(this.parse(t, this), this).indexOf(t) >= 0
        }
        get date() {
            return this.typedValue
        }
        set date(t) {
            this.typedValue = t
        }
        get typedValue() {
            return this.isComplete ? super.typedValue : null
        }
        set typedValue(t) {
            super.typedValue = t
        }
        maskEquals(t) {
            return t === Date || super.maskEquals(t)
        }
        optionsIsChanged(t) {
            return super.optionsIsChanged(P.extractPatternOptions(t))
        }
    }
    P.GET_DEFAULT_BLOCKS = ()=>({
        d: {
            mask: O,
            from: 1,
            to: 31,
            maxLength: 2
        },
        m: {
            mask: O,
            from: 1,
            to: 12,
            maxLength: 2
        },
        Y: {
            mask: O,
            from: 1900,
            to: 9999
        }
    }),
    P.DEFAULTS = {
        ...B.DEFAULTS,
        mask: Date,
        pattern: "d{.}`m{.}`Y",
        format: (t,e)=>{
            if (!t)
                return "";
            return [String(t.getDate()).padStart(2, "0"), String(t.getMonth() + 1).padStart(2, "0"), t.getFullYear()].join(".")
        }
        ,
        parse: (t,e)=>{
            const [s,i,n] = t.split(".").map(Number);
            return new Date(n,i - 1,s)
        }
    },
    _.MaskedDate = P;
    class L extends T {
        constructor(t) {
            super({
                ...L.DEFAULTS,
                ...t
            }),
            this.currentMask = void 0
        }
        updateOptions(t) {
            super.updateOptions(t)
        }
        _update(t) {
            super._update(t),
            "mask"in t && (this.exposeMask = void 0,
            this.compiledMasks = Array.isArray(t.mask) ? t.mask.map((t=>{
                const {expose: e, ...s} = b(t)
                  , i = k({
                    overwrite: this._overwrite,
                    eager: this._eager,
                    skipInvalid: this._skipInvalid,
                    ...s
                });
                return e && (this.exposeMask = i),
                i
            }
            )) : [])
        }
        _appendCharRaw(t, e) {
            void 0 === e && (e = {});
            const s = this._applyDispatch(t, e);
            return this.currentMask && s.aggregate(this.currentMask._appendChar(t, this.currentMaskFlags(e))),
            s
        }
        _applyDispatch(t, e, s) {
            void 0 === t && (t = ""),
            void 0 === e && (e = {}),
            void 0 === s && (s = "");
            const i = e.tail && null != e._beforeTailState ? e._beforeTailState._value : this.value
              , n = this.rawInputValue
              , r = e.tail && null != e._beforeTailState ? e._beforeTailState._rawInputValue : n
              , o = n.slice(r.length)
              , a = this.currentMask
              , l = new x
              , u = null == a ? void 0 : a.state;
            return this.currentMask = this.doDispatch(t, {
                ...e
            }, s),
            this.currentMask && (this.currentMask !== a ? (this.currentMask.reset(),
            r && (this.currentMask.append(r, {
                raw: !0
            }),
            l.tailShift = this.currentMask.value.length - i.length),
            o && (l.tailShift += this.currentMask.append(o, {
                raw: !0,
                tail: !0
            }).tailShift)) : u && (this.currentMask.state = u)),
            l
        }
        _appendPlaceholder() {
            const t = this._applyDispatch();
            return this.currentMask && t.aggregate(this.currentMask._appendPlaceholder()),
            t
        }
        _appendEager() {
            const t = this._applyDispatch();
            return this.currentMask && t.aggregate(this.currentMask._appendEager()),
            t
        }
        appendTail(t) {
            const e = new x;
            return t && e.aggregate(this._applyDispatch("", {}, t)),
            e.aggregate(this.currentMask ? this.currentMask.appendTail(t) : super.appendTail(t))
        }
        currentMaskFlags(t) {
            var e, s;
            return {
                ...t,
                _beforeTailState: (null == (e = t._beforeTailState) ? void 0 : e.currentMaskRef) === this.currentMask && (null == (s = t._beforeTailState) ? void 0 : s.currentMask) || t._beforeTailState
            }
        }
        doDispatch(t, e, s) {
            return void 0 === e && (e = {}),
            void 0 === s && (s = ""),
            this.dispatch(t, this, e, s)
        }
        doValidate(t) {
            return super.doValidate(t) && (!this.currentMask || this.currentMask.doValidate(this.currentMaskFlags(t)))
        }
        doPrepare(t, e) {
            void 0 === e && (e = {});
            let[s,i] = super.doPrepare(t, e);
            if (this.currentMask) {
                let t;
                [s,t] = super.doPrepare(s, this.currentMaskFlags(e)),
                i = i.aggregate(t)
            }
            return [s, i]
        }
        doPrepareChar(t, e) {
            void 0 === e && (e = {});
            let[s,i] = super.doPrepareChar(t, e);
            if (this.currentMask) {
                let t;
                [s,t] = super.doPrepareChar(s, this.currentMaskFlags(e)),
                i = i.aggregate(t)
            }
            return [s, i]
        }
        reset() {
            var t;
            null == (t = this.currentMask) || t.reset(),
            this.compiledMasks.forEach((t=>t.reset()))
        }
        get value() {
            return this.exposeMask ? this.exposeMask.value : this.currentMask ? this.currentMask.value : ""
        }
        set value(t) {
            this.exposeMask ? (this.exposeMask.value = t,
            this.currentMask = this.exposeMask,
            this._applyDispatch()) : super.value = t
        }
        get unmaskedValue() {
            return this.exposeMask ? this.exposeMask.unmaskedValue : this.currentMask ? this.currentMask.unmaskedValue : ""
        }
        set unmaskedValue(t) {
            this.exposeMask ? (this.exposeMask.unmaskedValue = t,
            this.currentMask = this.exposeMask,
            this._applyDispatch()) : super.unmaskedValue = t
        }
        get typedValue() {
            return this.exposeMask ? this.exposeMask.typedValue : this.currentMask ? this.currentMask.typedValue : ""
        }
        set typedValue(t) {
            if (this.exposeMask)
                return this.exposeMask.typedValue = t,
                this.currentMask = this.exposeMask,
                void this._applyDispatch();
            let e = String(t);
            this.currentMask && (this.currentMask.typedValue = t,
            e = this.currentMask.unmaskedValue),
            this.unmaskedValue = e
        }
        get displayValue() {
            return this.currentMask ? this.currentMask.displayValue : ""
        }
        get isComplete() {
            var t;
            return Boolean(null == (t = this.currentMask) ? void 0 : t.isComplete)
        }
        get isFilled() {
            var t;
            return Boolean(null == (t = this.currentMask) ? void 0 : t.isFilled)
        }
        remove(t, e) {
            const s = new x;
            return this.currentMask && s.aggregate(this.currentMask.remove(t, e)).aggregate(this._applyDispatch()),
            s
        }
        get state() {
            var t;
            return {
                ...super.state,
                _rawInputValue: this.rawInputValue,
                compiledMasks: this.compiledMasks.map((t=>t.state)),
                currentMaskRef: this.currentMask,
                currentMask: null == (t = this.currentMask) ? void 0 : t.state
            }
        }
        set state(t) {
            const {compiledMasks: e, currentMaskRef: s, currentMask: i, ...n} = t;
            e && this.compiledMasks.forEach(((t,s)=>t.state = e[s])),
            null != s && (this.currentMask = s,
            this.currentMask.state = i),
            super.state = n
        }
        extractInput(t, e, s) {
            return this.currentMask ? this.currentMask.extractInput(t, e, s) : ""
        }
        extractTail(t, e) {
            return this.currentMask ? this.currentMask.extractTail(t, e) : super.extractTail(t, e)
        }
        doCommit() {
            this.currentMask && this.currentMask.doCommit(),
            super.doCommit()
        }
        nearestInputPos(t, e) {
            return this.currentMask ? this.currentMask.nearestInputPos(t, e) : super.nearestInputPos(t, e)
        }
        get overwrite() {
            return this.currentMask ? this.currentMask.overwrite : this._overwrite
        }
        set overwrite(t) {
            this._overwrite = t
        }
        get eager() {
            return this.currentMask ? this.currentMask.eager : this._eager
        }
        set eager(t) {
            this._eager = t
        }
        get skipInvalid() {
            return this.currentMask ? this.currentMask.skipInvalid : this._skipInvalid
        }
        set skipInvalid(t) {
            this._skipInvalid = t
        }
        get autofix() {
            return this.currentMask ? this.currentMask.autofix : this._autofix
        }
        set autofix(t) {
            this._autofix = t
        }
        maskEquals(t) {
            return Array.isArray(t) ? this.compiledMasks.every(((e,s)=>{
                if (!t[s])
                    return;
                const {mask: i, ...n} = t[s];
                return g(e, n) && e.maskEquals(i)
            }
            )) : super.maskEquals(t)
        }
        typedValueEquals(t) {
            var e;
            return Boolean(null == (e = this.currentMask) ? void 0 : e.typedValueEquals(t))
        }
    }
    L.DEFAULTS = {
        ...T.DEFAULTS,
        dispatch: (t,e,s,i)=>{
            if (!e.compiledMasks.length)
                return;
            const n = e.rawInputValue
              , r = e.compiledMasks.map(((r,o)=>{
                const a = e.currentMask === r
                  , l = a ? r.displayValue.length : r.nearestInputPos(r.displayValue.length, c);
                return r.rawInputValue !== n ? (r.reset(),
                r.append(n, {
                    raw: !0
                })) : a || r.remove(l),
                r.append(t, e.currentMaskFlags(s)),
                r.appendTail(i),
                {
                    index: o,
                    weight: r.rawInputValue.length,
                    totalInputPositions: r.totalInputPositions(0, Math.max(l, r.nearestInputPos(r.displayValue.length, c)))
                }
            }
            ));
            return r.sort(((t,e)=>e.weight - t.weight || e.totalInputPositions - t.totalInputPositions)),
            e.compiledMasks[r[0].index]
        }
    },
    _.MaskedDynamic = L;
    class V extends B {
        constructor(t) {
            super({
                ...V.DEFAULTS,
                ...t
            })
        }
        updateOptions(t) {
            super.updateOptions(t)
        }
        _update(t) {
            const {enum: e, ...s} = t;
            if (e) {
                const t = e.map((t=>t.length))
                  , i = Math.min(...t)
                  , n = Math.max(...t) - i;
                s.mask = "*".repeat(i),
                n && (s.mask += "[" + "*".repeat(n) + "]"),
                this.enum = e
            }
            super._update(s)
        }
        _appendCharRaw(t, e) {
            void 0 === e && (e = {});
            const s = Math.min(this.nearestInputPos(0, p), this.value.length)
              , i = this.enum.filter((e=>this.matchValue(e, this.unmaskedValue + t, s)));
            if (i.length) {
                1 === i.length && this._forEachBlocksInRange(0, this.value.length, ((t,s)=>{
                    const n = i[0][s];
                    s >= this.value.length || n === t.value || (t.reset(),
                    t._appendChar(n, e))
                }
                ));
                const t = super._appendCharRaw(i[0][this.value.length], e);
                return 1 === i.length && i[0].slice(this.unmaskedValue.length).split("").forEach((e=>t.aggregate(super._appendCharRaw(e)))),
                t
            }
            return new x({
                skip: !this.isComplete
            })
        }
        extractTail(t, e) {
            return void 0 === t && (t = 0),
            void 0 === e && (e = this.displayValue.length),
            new S("",t)
        }
        remove(t, e) {
            if (void 0 === t && (t = 0),
            void 0 === e && (e = this.displayValue.length),
            t === e)
                return new x;
            const s = Math.min(super.nearestInputPos(0, p), this.value.length);
            let i;
            for (i = t; i >= 0; --i) {
                const t = this.enum.filter((t=>this.matchValue(t, this.value.slice(s, i), s)));
                if (t.length > 1)
                    break
            }
            const n = super.remove(i, e);
            return n.tailShift += i - t,
            n
        }
        get isComplete() {
            return this.enum.indexOf(this.value) >= 0
        }
    }
    V.DEFAULTS = {
        ...B.DEFAULTS,
        matchValue: (t,e,s)=>t.indexOf(e, s) === s
    },
    _.MaskedEnum = V;
    var N;
    _.MaskedFunction = class extends T {
        updateOptions(t) {
            super.updateOptions(t)
        }
        _update(t) {
            super._update({
                ...t,
                validate: t.mask
            })
        }
    }
    ;
    class R extends T {
        constructor(t) {
            super({
                ...R.DEFAULTS,
                ...t
            })
        }
        updateOptions(t) {
            super.updateOptions(t)
        }
        _update(t) {
            super._update(t),
            this._updateRegExps()
        }
        _updateRegExps() {
            const t = "^" + (this.allowNegative ? "[+|\\-]?" : "")
              , e = (this.scale ? "(" + f(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
            this._numberRegExp = new RegExp(t + "\\d*" + e),
            this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map(f).join("") + "]","g"),
            this._thousandsSeparatorRegExp = new RegExp(f(this.thousandsSeparator),"g")
        }
        _removeThousandsSeparators(t) {
            return t.replace(this._thousandsSeparatorRegExp, "")
        }
        _insertThousandsSeparators(t) {
            const e = t.split(this.radix);
            return e[0] = e[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator),
            e.join(this.radix)
        }
        doPrepareChar(t, e) {
            void 0 === e && (e = {});
            const [s,i] = super.doPrepareChar(this._removeThousandsSeparators(this.scale && this.mapToRadix.length && (e.input && e.raw || !e.input && !e.raw) ? t.replace(this._mapToRadixRegExp, this.radix) : t), e);
            return t && !s && (i.skip = !0),
            !s || this.allowPositive || this.value || "-" === s || i.aggregate(this._appendChar("-")),
            [s, i]
        }
        _separatorsCount(t, e) {
            void 0 === e && (e = !1);
            let s = 0;
            for (let i = 0; i < t; ++i)
                this._value.indexOf(this.thousandsSeparator, i) === i && (++s,
                e && (t += this.thousandsSeparator.length));
            return s
        }
        _separatorsCountFromSlice(t) {
            return void 0 === t && (t = this._value),
            this._separatorsCount(this._removeThousandsSeparators(t).length, !0)
        }
        extractInput(t, e, s) {
            return void 0 === t && (t = 0),
            void 0 === e && (e = this.displayValue.length),
            [t,e] = this._adjustRangeWithSeparators(t, e),
            this._removeThousandsSeparators(super.extractInput(t, e, s))
        }
        _appendCharRaw(t, e) {
            void 0 === e && (e = {});
            const s = e.tail && e._beforeTailState ? e._beforeTailState._value : this._value
              , i = this._separatorsCountFromSlice(s);
            this._value = this._removeThousandsSeparators(this.value);
            const n = this._value;
            this._value += t;
            const r = this.number;
            let o, a = !isNaN(r), l = !1;
            if (a) {
                let t;
                null != this.min && this.min < 0 && this.number < this.min && (t = this.min),
                null != this.max && this.max > 0 && this.number > this.max && (t = this.max),
                null != t && (this.autofix ? (this._value = this.format(t, this).replace(R.UNMASKED_RADIX, this.radix),
                l || (l = n === this._value && !e.tail)) : a = !1),
                a && (a = Boolean(this._value.match(this._numberRegExp)))
            }
            a ? o = new x({
                inserted: this._value.slice(n.length),
                rawInserted: l ? "" : t,
                skip: l
            }) : (this._value = n,
            o = new x),
            this._value = this._insertThousandsSeparators(this._value);
            const u = e.tail && e._beforeTailState ? e._beforeTailState._value : this._value
              , h = this._separatorsCountFromSlice(u);
            return o.tailShift += (h - i) * this.thousandsSeparator.length,
            o
        }
        _findSeparatorAround(t) {
            if (this.thousandsSeparator) {
                const e = t - this.thousandsSeparator.length + 1
                  , s = this.value.indexOf(this.thousandsSeparator, e);
                if (s <= t)
                    return s
            }
            return -1
        }
        _adjustRangeWithSeparators(t, e) {
            const s = this._findSeparatorAround(t);
            s >= 0 && (t = s);
            const i = this._findSeparatorAround(e);
            return i >= 0 && (e = i + this.thousandsSeparator.length),
            [t, e]
        }
        remove(t, e) {
            void 0 === t && (t = 0),
            void 0 === e && (e = this.displayValue.length),
            [t,e] = this._adjustRangeWithSeparators(t, e);
            const s = this.value.slice(0, t)
              , i = this.value.slice(e)
              , n = this._separatorsCount(s.length);
            this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(s + i));
            const r = this._separatorsCountFromSlice(s);
            return new x({
                tailShift: (r - n) * this.thousandsSeparator.length
            })
        }
        nearestInputPos(t, e) {
            if (!this.thousandsSeparator)
                return t;
            switch (e) {
            case u:
            case h:
            case c:
                {
                    const s = this._findSeparatorAround(t - 1);
                    if (s >= 0) {
                        const i = s + this.thousandsSeparator.length;
                        if (t < i || this.value.length <= i || e === c)
                            return s
                    }
                    break
                }
            case d:
            case p:
                {
                    const e = this._findSeparatorAround(t);
                    if (e >= 0)
                        return e + this.thousandsSeparator.length
                }
            }
            return t
        }
        doCommit() {
            if (this.value) {
                const t = this.number;
                let e = t;
                null != this.min && (e = Math.max(e, this.min)),
                null != this.max && (e = Math.min(e, this.max)),
                e !== t && (this.unmaskedValue = this.format(e, this));
                let s = this.value;
                this.normalizeZeros && (s = this._normalizeZeros(s)),
                this.padFractionalZeros && this.scale > 0 && (s = this._padFractionalZeros(s)),
                this._value = s
            }
            super.doCommit()
        }
        _normalizeZeros(t) {
            const e = this._removeThousandsSeparators(t).split(this.radix);
            return e[0] = e[0].replace(/^(\D*)(0*)(\d*)/, ((t,e,s,i)=>e + i)),
            t.length && !/\d$/.test(e[0]) && (e[0] = e[0] + "0"),
            e.length > 1 && (e[1] = e[1].replace(/0*$/, ""),
            e[1].length || (e.length = 1)),
            this._insertThousandsSeparators(e.join(this.radix))
        }
        _padFractionalZeros(t) {
            if (!t)
                return t;
            const e = t.split(this.radix);
            return e.length < 2 && e.push(""),
            e[1] = e[1].padEnd(this.scale, "0"),
            e.join(this.radix)
        }
        doSkipInvalid(t, e, s) {
            void 0 === e && (e = {});
            const i = 0 === this.scale && t !== this.thousandsSeparator && (t === this.radix || t === R.UNMASKED_RADIX || this.mapToRadix.includes(t));
            return super.doSkipInvalid(t, e, s) && !i
        }
        get unmaskedValue() {
            return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, R.UNMASKED_RADIX)
        }
        set unmaskedValue(t) {
            super.unmaskedValue = t
        }
        get typedValue() {
            return this.parse(this.unmaskedValue, this)
        }
        set typedValue(t) {
            this.rawInputValue = this.format(t, this).replace(R.UNMASKED_RADIX, this.radix)
        }
        get number() {
            return this.typedValue
        }
        set number(t) {
            this.typedValue = t
        }
        get allowNegative() {
            return null != this.min && this.min < 0 || null != this.max && this.max < 0
        }
        get allowPositive() {
            return null != this.min && this.min > 0 || null != this.max && this.max > 0
        }
        typedValueEquals(t) {
            return (super.typedValueEquals(t) || R.EMPTY_VALUES.includes(t) && R.EMPTY_VALUES.includes(this.typedValue)) && !(0 === t && "" === this.value)
        }
    }
    N = R,
    R.UNMASKED_RADIX = ".",
    R.EMPTY_VALUES = [...T.EMPTY_VALUES, 0],
    R.DEFAULTS = {
        ...T.DEFAULTS,
        mask: Number,
        radix: ",",
        thousandsSeparator: "",
        mapToRadix: [N.UNMASKED_RADIX],
        min: Number.MIN_SAFE_INTEGER,
        max: Number.MAX_SAFE_INTEGER,
        scale: 2,
        normalizeZeros: !0,
        padFractionalZeros: !1,
        parse: Number,
        format: t=>t.toLocaleString("en-US", {
            useGrouping: !1,
            maximumFractionDigits: 20
        })
    },
    _.MaskedNumber = R;
    const $ = {
        MASKED: "value",
        UNMASKED: "unmaskedValue",
        TYPED: "typedValue"
    };
    function j(t, e, s) {
        void 0 === e && (e = $.MASKED),
        void 0 === s && (s = $.MASKED);
        const i = k(t);
        return t=>i.runIsolated((i=>(i[e] = t,
        i[s])))
    }
    _.PIPE_TYPE = $,
    _.createPipe = j,
    _.pipe = function(t, e, s, i) {
        return j(e, s, i)(t)
    }
    ;
    _.RepeatBlock = class extends B {
        get repeatFrom() {
            var t;
            return null != (t = Array.isArray(this.repeat) ? this.repeat[0] : this.repeat === 1 / 0 ? 0 : this.repeat) ? t : 0
        }
        get repeatTo() {
            var t;
            return null != (t = Array.isArray(this.repeat) ? this.repeat[1] : this.repeat) ? t : 1 / 0
        }
        constructor(t) {
            super(t)
        }
        updateOptions(t) {
            super.updateOptions(t)
        }
        _update(t) {
            var e, s, i;
            const {repeat: n, ...r} = b(t);
            this._blockOpts = Object.assign({}, this._blockOpts, r);
            const o = k(this._blockOpts);
            this.repeat = null != (e = null != (s = null != n ? n : o.repeat) ? s : this.repeat) ? e : 1 / 0,
            super._update({
                mask: "m".repeat(Math.max(this.repeatTo === 1 / 0 && (null == (i = this._blocks) ? void 0 : i.length) || 0, this.repeatFrom)),
                blocks: {
                    m: o
                },
                eager: o.eager,
                overwrite: o.overwrite,
                skipInvalid: o.skipInvalid,
                lazy: o.lazy,
                placeholderChar: o.placeholderChar,
                displayChar: o.displayChar
            })
        }
        _allocateBlock(t) {
            return t < this._blocks.length ? this._blocks[t] : this.repeatTo === 1 / 0 || this._blocks.length < this.repeatTo ? (this._blocks.push(k(this._blockOpts)),
            this.mask += "m",
            this._blocks[this._blocks.length - 1]) : void 0
        }
        _appendCharRaw(t, e) {
            void 0 === e && (e = {});
            const s = new x;
            for (let a, l, u = null != (i = null == (n = this._mapPosToBlock(this.displayValue.length)) ? void 0 : n.index) ? i : Math.max(this._blocks.length - 1, 0); a = null != (r = this._blocks[u]) ? r : l = !l && this._allocateBlock(u); ++u) {
                var i, n, r, o;
                const h = a._appendChar(t, {
                    ...e,
                    _beforeTailState: null == (o = e._beforeTailState) || null == (o = o._blocks) ? void 0 : o[u]
                });
                if (h.skip && l) {
                    this._blocks.pop(),
                    this.mask = this.mask.slice(1);
                    break
                }
                if (s.aggregate(h),
                h.consumed)
                    break
            }
            return s
        }
        _trimEmptyTail(t, e) {
            var s, i;
            void 0 === t && (t = 0);
            const n = Math.max((null == (s = this._mapPosToBlock(t)) ? void 0 : s.index) || 0, this.repeatFrom, 0);
            let r;
            null != e && (r = null == (i = this._mapPosToBlock(e)) ? void 0 : i.index),
            null == r && (r = this._blocks.length - 1);
            let o = 0;
            for (let t = r; n <= t && !this._blocks[t].unmaskedValue; --t,
            ++o)
                ;
            o && (this._blocks.splice(r - o + 1, o),
            this.mask = this.mask.slice(o))
        }
        reset() {
            super.reset(),
            this._trimEmptyTail()
        }
        remove(t, e) {
            void 0 === t && (t = 0),
            void 0 === e && (e = this.displayValue.length);
            const s = super.remove(t, e);
            return this._trimEmptyTail(t, e),
            s
        }
        totalInputPositions(t, e) {
            return void 0 === t && (t = 0),
            null == e && this.repeatTo === 1 / 0 ? 1 / 0 : super.totalInputPositions(t, e)
        }
        get state() {
            return super.state
        }
        set state(t) {
            this._blocks.length = t._blocks.length,
            this.mask = this.mask.slice(0, this._blocks.length),
            super.state = t
        }
    }
    ;
    try {
        globalThis.IMask = _
    } catch {}
    [].slice.call(document.querySelectorAll("[data-mask]")).map((function(t) {
        return new _(t,{
            mask: t.dataset.mask,
            lazy: "true" === t.dataset["mask-visible"]
        })
    }
    ));
    var z = "top"
      , H = "bottom"
      , q = "right"
      , U = "left"
      , W = "auto"
      , K = [z, H, q, U]
      , Y = "start"
      , X = "end"
      , Q = "clippingParents"
      , G = "viewport"
      , Z = "popper"
      , J = "reference"
      , tt = K.reduce((function(t, e) {
        return t.concat([e + "-" + Y, e + "-" + X])
    }
    ), [])
      , et = [].concat(K, [W]).reduce((function(t, e) {
        return t.concat([e, e + "-" + Y, e + "-" + X])
    }
    ), [])
      , st = "beforeRead"
      , it = "read"
      , nt = "afterRead"
      , rt = "beforeMain"
      , ot = "main"
      , at = "afterMain"
      , lt = "beforeWrite"
      , ut = "write"
      , ht = "afterWrite"
      , ct = [st, it, nt, rt, ot, at, lt, ut, ht];
    function dt(t) {
        return t ? (t.nodeName || "").toLowerCase() : null
    }
    function pt(t) {
        if (null == t)
            return window;
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return e && e.defaultView || window
        }
        return t
    }
    function ft(t) {
        return t instanceof pt(t).Element || t instanceof Element
    }
    function gt(t) {
        return t instanceof pt(t).HTMLElement || t instanceof HTMLElement
    }
    function mt(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof pt(t).ShadowRoot || t instanceof ShadowRoot)
    }
    var _t = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(t) {
            var e = t.state;
            Object.keys(e.elements).forEach((function(t) {
                var s = e.styles[t] || {}
                  , i = e.attributes[t] || {}
                  , n = e.elements[t];
                gt(n) && dt(n) && (Object.assign(n.style, s),
                Object.keys(i).forEach((function(t) {
                    var e = i[t];
                    !1 === e ? n.removeAttribute(t) : n.setAttribute(t, !0 === e ? "" : e)
                }
                )))
            }
            ))
        },
        effect: function(t) {
            var e = t.state
              , s = {
                popper: {
                    position: e.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
            return Object.assign(e.elements.popper.style, s.popper),
            e.styles = s,
            e.elements.arrow && Object.assign(e.elements.arrow.style, s.arrow),
            function() {
                Object.keys(e.elements).forEach((function(t) {
                    var i = e.elements[t]
                      , n = e.attributes[t] || {}
                      , r = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : s[t]).reduce((function(t, e) {
                        return t[e] = "",
                        t
                    }
                    ), {});
                    gt(i) && dt(i) && (Object.assign(i.style, r),
                    Object.keys(n).forEach((function(t) {
                        i.removeAttribute(t)
                    }
                    )))
                }
                ))
            }
        },
        requires: ["computeStyles"]
    };
    function vt(t) {
        return t.split("-")[0]
    }
    var bt = Math.max
      , kt = Math.min
      , yt = Math.round;
    function wt() {
        var t = navigator.userAgentData;
        return null != t && t.brands && Array.isArray(t.brands) ? t.brands.map((function(t) {
            return t.brand + "/" + t.version
        }
        )).join(" ") : navigator.userAgent
    }
    function At() {
        return !/^((?!chrome|android).)*safari/i.test(wt())
    }
    function Et(t, e, s) {
        void 0 === e && (e = !1),
        void 0 === s && (s = !1);
        var i = t.getBoundingClientRect()
          , n = 1
          , r = 1;
        e && gt(t) && (n = t.offsetWidth > 0 && yt(i.width) / t.offsetWidth || 1,
        r = t.offsetHeight > 0 && yt(i.height) / t.offsetHeight || 1);
        var o = (ft(t) ? pt(t) : window).visualViewport
          , a = !At() && s
          , l = (i.left + (a && o ? o.offsetLeft : 0)) / n
          , u = (i.top + (a && o ? o.offsetTop : 0)) / r
          , h = i.width / n
          , c = i.height / r;
        return {
            width: h,
            height: c,
            top: u,
            right: l + h,
            bottom: u + c,
            left: l,
            x: l,
            y: u
        }
    }
    function Ct(t) {
        var e = Et(t)
          , s = t.offsetWidth
          , i = t.offsetHeight;
        return Math.abs(e.width - s) <= 1 && (s = e.width),
        Math.abs(e.height - i) <= 1 && (i = e.height),
        {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: s,
            height: i
        }
    }
    function xt(t, e) {
        var s = e.getRootNode && e.getRootNode();
        if (t.contains(e))
            return !0;
        if (s && mt(s)) {
            var i = e;
            do {
                if (i && t.isSameNode(i))
                    return !0;
                i = i.parentNode || i.host
            } while (i)
        }
        return !1
    }
    function St(t) {
        return pt(t).getComputedStyle(t)
    }
    function Tt(t) {
        return ["table", "td", "th"].indexOf(dt(t)) >= 0
    }
    function Dt(t) {
        return ((ft(t) ? t.ownerDocument : t.document) || window.document).documentElement
    }
    function Ft(t) {
        return "html" === dt(t) ? t : t.assignedSlot || t.parentNode || (mt(t) ? t.host : null) || Dt(t)
    }
    function It(t) {
        return gt(t) && "fixed" !== St(t).position ? t.offsetParent : null
    }
    function Mt(t) {
        for (var e = pt(t), s = It(t); s && Tt(s) && "static" === St(s).position; )
            s = It(s);
        return s && ("html" === dt(s) || "body" === dt(s) && "static" === St(s).position) ? e : s || function(t) {
            var e = /firefox/i.test(wt());
            if (/Trident/i.test(wt()) && gt(t) && "fixed" === St(t).position)
                return null;
            var s = Ft(t);
            for (mt(s) && (s = s.host); gt(s) && ["html", "body"].indexOf(dt(s)) < 0; ) {
                var i = St(s);
                if ("none" !== i.transform || "none" !== i.perspective || "paint" === i.contain || -1 !== ["transform", "perspective"].indexOf(i.willChange) || e && "filter" === i.willChange || e && i.filter && "none" !== i.filter)
                    return s;
                s = s.parentNode
            }
            return null
        }(t) || e
    }
    function Bt(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
    }
    function Ot(t, e, s) {
        return bt(t, kt(e, s))
    }
    function Pt(t) {
        return Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, t)
    }
    function Lt(t, e) {
        return e.reduce((function(e, s) {
            return e[s] = t,
            e
        }
        ), {})
    }
    var Vt = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e, s = t.state, i = t.name, n = t.options, r = s.elements.arrow, o = s.modifiersData.popperOffsets, a = vt(s.placement), l = Bt(a), u = [U, q].indexOf(a) >= 0 ? "height" : "width";
            if (r && o) {
                var h = function(t, e) {
                    return Pt("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {
                        placement: e.placement
                    })) : t) ? t : Lt(t, K))
                }(n.padding, s)
                  , c = Ct(r)
                  , d = "y" === l ? z : U
                  , p = "y" === l ? H : q
                  , f = s.rects.reference[u] + s.rects.reference[l] - o[l] - s.rects.popper[u]
                  , g = o[l] - s.rects.reference[l]
                  , m = Mt(r)
                  , _ = m ? "y" === l ? m.clientHeight || 0 : m.clientWidth || 0 : 0
                  , v = f / 2 - g / 2
                  , b = h[d]
                  , k = _ - c[u] - h[p]
                  , y = _ / 2 - c[u] / 2 + v
                  , w = Ot(b, y, k)
                  , A = l;
                s.modifiersData[i] = ((e = {})[A] = w,
                e.centerOffset = w - y,
                e)
            }
        },
        effect: function(t) {
            var e = t.state
              , s = t.options.element
              , i = void 0 === s ? "[data-popper-arrow]" : s;
            null != i && ("string" != typeof i || (i = e.elements.popper.querySelector(i))) && xt(e.elements.popper, i) && (e.elements.arrow = i)
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
    };
    function Nt(t) {
        return t.split("-")[1]
    }
    var Rt = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };
    function $t(t) {
        var e, s = t.popper, i = t.popperRect, n = t.placement, r = t.variation, o = t.offsets, a = t.position, l = t.gpuAcceleration, u = t.adaptive, h = t.roundOffsets, c = t.isFixed, d = o.x, p = void 0 === d ? 0 : d, f = o.y, g = void 0 === f ? 0 : f, m = "function" == typeof h ? h({
            x: p,
            y: g
        }) : {
            x: p,
            y: g
        };
        p = m.x,
        g = m.y;
        var _ = o.hasOwnProperty("x")
          , v = o.hasOwnProperty("y")
          , b = U
          , k = z
          , y = window;
        if (u) {
            var w = Mt(s)
              , A = "clientHeight"
              , E = "clientWidth";
            if (w === pt(s) && "static" !== St(w = Dt(s)).position && "absolute" === a && (A = "scrollHeight",
            E = "scrollWidth"),
            n === z || (n === U || n === q) && r === X)
                k = H,
                g -= (c && w === y && y.visualViewport ? y.visualViewport.height : w[A]) - i.height,
                g *= l ? 1 : -1;
            if (n === U || (n === z || n === H) && r === X)
                b = q,
                p -= (c && w === y && y.visualViewport ? y.visualViewport.width : w[E]) - i.width,
                p *= l ? 1 : -1
        }
        var C, x = Object.assign({
            position: a
        }, u && Rt), S = !0 === h ? function(t, e) {
            var s = t.x
              , i = t.y
              , n = e.devicePixelRatio || 1;
            return {
                x: yt(s * n) / n || 0,
                y: yt(i * n) / n || 0
            }
        }({
            x: p,
            y: g
        }, pt(s)) : {
            x: p,
            y: g
        };
        return p = S.x,
        g = S.y,
        l ? Object.assign({}, x, ((C = {})[k] = v ? "0" : "",
        C[b] = _ ? "0" : "",
        C.transform = (y.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + g + "px)" : "translate3d(" + p + "px, " + g + "px, 0)",
        C)) : Object.assign({}, x, ((e = {})[k] = v ? g + "px" : "",
        e[b] = _ ? p + "px" : "",
        e.transform = "",
        e))
    }
    var jt = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function(t) {
            var e = t.state
              , s = t.options
              , i = s.gpuAcceleration
              , n = void 0 === i || i
              , r = s.adaptive
              , o = void 0 === r || r
              , a = s.roundOffsets
              , l = void 0 === a || a
              , u = {
                placement: vt(e.placement),
                variation: Nt(e.placement),
                popper: e.elements.popper,
                popperRect: e.rects.popper,
                gpuAcceleration: n,
                isFixed: "fixed" === e.options.strategy
            };
            null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, $t(Object.assign({}, u, {
                offsets: e.modifiersData.popperOffsets,
                position: e.options.strategy,
                adaptive: o,
                roundOffsets: l
            })))),
            null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, $t(Object.assign({}, u, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: l
            })))),
            e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-placement": e.placement
            })
        },
        data: {}
    }
      , zt = {
        passive: !0
    };
    var Ht = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: function(t) {
            var e = t.state
              , s = t.instance
              , i = t.options
              , n = i.scroll
              , r = void 0 === n || n
              , o = i.resize
              , a = void 0 === o || o
              , l = pt(e.elements.popper)
              , u = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return r && u.forEach((function(t) {
                t.addEventListener("scroll", s.update, zt)
            }
            )),
            a && l.addEventListener("resize", s.update, zt),
            function() {
                r && u.forEach((function(t) {
                    t.removeEventListener("scroll", s.update, zt)
                }
                )),
                a && l.removeEventListener("resize", s.update, zt)
            }
        },
        data: {}
    }
      , qt = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };
    function Ut(t) {
        return t.replace(/left|right|bottom|top/g, (function(t) {
            return qt[t]
        }
        ))
    }
    var Wt = {
        start: "end",
        end: "start"
    };
    function Kt(t) {
        return t.replace(/start|end/g, (function(t) {
            return Wt[t]
        }
        ))
    }
    function Yt(t) {
        var e = pt(t);
        return {
            scrollLeft: e.pageXOffset,
            scrollTop: e.pageYOffset
        }
    }
    function Xt(t) {
        return Et(Dt(t)).left + Yt(t).scrollLeft
    }
    function Qt(t) {
        var e = St(t)
          , s = e.overflow
          , i = e.overflowX
          , n = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(s + n + i)
    }
    function Gt(t) {
        return ["html", "body", "#document"].indexOf(dt(t)) >= 0 ? t.ownerDocument.body : gt(t) && Qt(t) ? t : Gt(Ft(t))
    }
    function Zt(t, e) {
        var s;
        void 0 === e && (e = []);
        var i = Gt(t)
          , n = i === (null == (s = t.ownerDocument) ? void 0 : s.body)
          , r = pt(i)
          , o = n ? [r].concat(r.visualViewport || [], Qt(i) ? i : []) : i
          , a = e.concat(o);
        return n ? a : a.concat(Zt(Ft(o)))
    }
    function Jt(t) {
        return Object.assign({}, t, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height
        })
    }
    function te(t, e, s) {
        return e === G ? Jt(function(t, e) {
            var s = pt(t)
              , i = Dt(t)
              , n = s.visualViewport
              , r = i.clientWidth
              , o = i.clientHeight
              , a = 0
              , l = 0;
            if (n) {
                r = n.width,
                o = n.height;
                var u = At();
                (u || !u && "fixed" === e) && (a = n.offsetLeft,
                l = n.offsetTop)
            }
            return {
                width: r,
                height: o,
                x: a + Xt(t),
                y: l
            }
        }(t, s)) : ft(e) ? function(t, e) {
            var s = Et(t, !1, "fixed" === e);
            return s.top = s.top + t.clientTop,
            s.left = s.left + t.clientLeft,
            s.bottom = s.top + t.clientHeight,
            s.right = s.left + t.clientWidth,
            s.width = t.clientWidth,
            s.height = t.clientHeight,
            s.x = s.left,
            s.y = s.top,
            s
        }(e, s) : Jt(function(t) {
            var e, s = Dt(t), i = Yt(t), n = null == (e = t.ownerDocument) ? void 0 : e.body, r = bt(s.scrollWidth, s.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0), o = bt(s.scrollHeight, s.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0), a = -i.scrollLeft + Xt(t), l = -i.scrollTop;
            return "rtl" === St(n || s).direction && (a += bt(s.clientWidth, n ? n.clientWidth : 0) - r),
            {
                width: r,
                height: o,
                x: a,
                y: l
            }
        }(Dt(t)))
    }
    function ee(t, e, s, i) {
        var n = "clippingParents" === e ? function(t) {
            var e = Zt(Ft(t))
              , s = ["absolute", "fixed"].indexOf(St(t).position) >= 0 && gt(t) ? Mt(t) : t;
            return ft(s) ? e.filter((function(t) {
                return ft(t) && xt(t, s) && "body" !== dt(t)
            }
            )) : []
        }(t) : [].concat(e)
          , r = [].concat(n, [s])
          , o = r[0]
          , a = r.reduce((function(e, s) {
            var n = te(t, s, i);
            return e.top = bt(n.top, e.top),
            e.right = kt(n.right, e.right),
            e.bottom = kt(n.bottom, e.bottom),
            e.left = bt(n.left, e.left),
            e
        }
        ), te(t, o, i));
        return a.width = a.right - a.left,
        a.height = a.bottom - a.top,
        a.x = a.left,
        a.y = a.top,
        a
    }
    function se(t) {
        var e, s = t.reference, i = t.element, n = t.placement, r = n ? vt(n) : null, o = n ? Nt(n) : null, a = s.x + s.width / 2 - i.width / 2, l = s.y + s.height / 2 - i.height / 2;
        switch (r) {
        case z:
            e = {
                x: a,
                y: s.y - i.height
            };
            break;
        case H:
            e = {
                x: a,
                y: s.y + s.height
            };
            break;
        case q:
            e = {
                x: s.x + s.width,
                y: l
            };
            break;
        case U:
            e = {
                x: s.x - i.width,
                y: l
            };
            break;
        default:
            e = {
                x: s.x,
                y: s.y
            }
        }
        var u = r ? Bt(r) : null;
        if (null != u) {
            var h = "y" === u ? "height" : "width";
            switch (o) {
            case Y:
                e[u] = e[u] - (s[h] / 2 - i[h] / 2);
                break;
            case X:
                e[u] = e[u] + (s[h] / 2 - i[h] / 2)
            }
        }
        return e
    }
    function ie(t, e) {
        void 0 === e && (e = {});
        var s = e
          , i = s.placement
          , n = void 0 === i ? t.placement : i
          , r = s.strategy
          , o = void 0 === r ? t.strategy : r
          , a = s.boundary
          , l = void 0 === a ? Q : a
          , u = s.rootBoundary
          , h = void 0 === u ? G : u
          , c = s.elementContext
          , d = void 0 === c ? Z : c
          , p = s.altBoundary
          , f = void 0 !== p && p
          , g = s.padding
          , m = void 0 === g ? 0 : g
          , _ = Pt("number" != typeof m ? m : Lt(m, K))
          , v = d === Z ? J : Z
          , b = t.rects.popper
          , k = t.elements[f ? v : d]
          , y = ee(ft(k) ? k : k.contextElement || Dt(t.elements.popper), l, h, o)
          , w = Et(t.elements.reference)
          , A = se({
            reference: w,
            element: b,
            strategy: "absolute",
            placement: n
        })
          , E = Jt(Object.assign({}, b, A))
          , C = d === Z ? E : w
          , x = {
            top: y.top - C.top + _.top,
            bottom: C.bottom - y.bottom + _.bottom,
            left: y.left - C.left + _.left,
            right: C.right - y.right + _.right
        }
          , S = t.modifiersData.offset;
        if (d === Z && S) {
            var T = S[n];
            Object.keys(x).forEach((function(t) {
                var e = [q, H].indexOf(t) >= 0 ? 1 : -1
                  , s = [z, H].indexOf(t) >= 0 ? "y" : "x";
                x[t] += T[s] * e
            }
            ))
        }
        return x
    }
    function ne(t, e) {
        void 0 === e && (e = {});
        var s = e
          , i = s.placement
          , n = s.boundary
          , r = s.rootBoundary
          , o = s.padding
          , a = s.flipVariations
          , l = s.allowedAutoPlacements
          , u = void 0 === l ? et : l
          , h = Nt(i)
          , c = h ? a ? tt : tt.filter((function(t) {
            return Nt(t) === h
        }
        )) : K
          , d = c.filter((function(t) {
            return u.indexOf(t) >= 0
        }
        ));
        0 === d.length && (d = c);
        var p = d.reduce((function(e, s) {
            return e[s] = ie(t, {
                placement: s,
                boundary: n,
                rootBoundary: r,
                padding: o
            })[vt(s)],
            e
        }
        ), {});
        return Object.keys(p).sort((function(t, e) {
            return p[t] - p[e]
        }
        ))
    }
    var re = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state
              , s = t.options
              , i = t.name;
            if (!e.modifiersData[i]._skip) {
                for (var n = s.mainAxis, r = void 0 === n || n, o = s.altAxis, a = void 0 === o || o, l = s.fallbackPlacements, u = s.padding, h = s.boundary, c = s.rootBoundary, d = s.altBoundary, p = s.flipVariations, f = void 0 === p || p, g = s.allowedAutoPlacements, m = e.options.placement, _ = vt(m), v = l || (_ === m || !f ? [Ut(m)] : function(t) {
                    if (vt(t) === W)
                        return [];
                    var e = Ut(t);
                    return [Kt(t), e, Kt(e)]
                }(m)), b = [m].concat(v).reduce((function(t, s) {
                    return t.concat(vt(s) === W ? ne(e, {
                        placement: s,
                        boundary: h,
                        rootBoundary: c,
                        padding: u,
                        flipVariations: f,
                        allowedAutoPlacements: g
                    }) : s)
                }
                ), []), k = e.rects.reference, y = e.rects.popper, w = new Map, A = !0, E = b[0], C = 0; C < b.length; C++) {
                    var x = b[C]
                      , S = vt(x)
                      , T = Nt(x) === Y
                      , D = [z, H].indexOf(S) >= 0
                      , F = D ? "width" : "height"
                      , I = ie(e, {
                        placement: x,
                        boundary: h,
                        rootBoundary: c,
                        altBoundary: d,
                        padding: u
                    })
                      , M = D ? T ? q : U : T ? H : z;
                    k[F] > y[F] && (M = Ut(M));
                    var B = Ut(M)
                      , O = [];
                    if (r && O.push(I[S] <= 0),
                    a && O.push(I[M] <= 0, I[B] <= 0),
                    O.every((function(t) {
                        return t
                    }
                    ))) {
                        E = x,
                        A = !1;
                        break
                    }
                    w.set(x, O)
                }
                if (A)
                    for (var P = function(t) {
                        var e = b.find((function(e) {
                            var s = w.get(e);
                            if (s)
                                return s.slice(0, t).every((function(t) {
                                    return t
                                }
                                ))
                        }
                        ));
                        if (e)
                            return E = e,
                            "break"
                    }, L = f ? 3 : 1; L > 0; L--) {
                        if ("break" === P(L))
                            break
                    }
                e.placement !== E && (e.modifiersData[i]._skip = !0,
                e.placement = E,
                e.reset = !0)
            }
        },
        requiresIfExists: ["offset"],
        data: {
            _skip: !1
        }
    };
    function oe(t, e, s) {
        return void 0 === s && (s = {
            x: 0,
            y: 0
        }),
        {
            top: t.top - e.height - s.y,
            right: t.right - e.width + s.x,
            bottom: t.bottom - e.height + s.y,
            left: t.left - e.width - s.x
        }
    }
    function ae(t) {
        return [z, q, H, U].some((function(e) {
            return t[e] >= 0
        }
        ))
    }
    var le = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function(t) {
            var e = t.state
              , s = t.name
              , i = e.rects.reference
              , n = e.rects.popper
              , r = e.modifiersData.preventOverflow
              , o = ie(e, {
                elementContext: "reference"
            })
              , a = ie(e, {
                altBoundary: !0
            })
              , l = oe(o, i)
              , u = oe(a, n, r)
              , h = ae(l)
              , c = ae(u);
            e.modifiersData[s] = {
                referenceClippingOffsets: l,
                popperEscapeOffsets: u,
                isReferenceHidden: h,
                hasPopperEscaped: c
            },
            e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-reference-hidden": h,
                "data-popper-escaped": c
            })
        }
    };
    var ue = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function(t) {
            var e = t.state
              , s = t.options
              , i = t.name
              , n = s.offset
              , r = void 0 === n ? [0, 0] : n
              , o = et.reduce((function(t, s) {
                return t[s] = function(t, e, s) {
                    var i = vt(t)
                      , n = [U, z].indexOf(i) >= 0 ? -1 : 1
                      , r = "function" == typeof s ? s(Object.assign({}, e, {
                        placement: t
                    })) : s
                      , o = r[0]
                      , a = r[1];
                    return o = o || 0,
                    a = (a || 0) * n,
                    [U, q].indexOf(i) >= 0 ? {
                        x: a,
                        y: o
                    } : {
                        x: o,
                        y: a
                    }
                }(s, e.rects, r),
                t
            }
            ), {})
              , a = o[e.placement]
              , l = a.x
              , u = a.y;
            null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l,
            e.modifiersData.popperOffsets.y += u),
            e.modifiersData[i] = o
        }
    };
    var he = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function(t) {
            var e = t.state
              , s = t.name;
            e.modifiersData[s] = se({
                reference: e.rects.reference,
                element: e.rects.popper,
                strategy: "absolute",
                placement: e.placement
            })
        },
        data: {}
    };
    var ce = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state
              , s = t.options
              , i = t.name
              , n = s.mainAxis
              , r = void 0 === n || n
              , o = s.altAxis
              , a = void 0 !== o && o
              , l = s.boundary
              , u = s.rootBoundary
              , h = s.altBoundary
              , c = s.padding
              , d = s.tether
              , p = void 0 === d || d
              , f = s.tetherOffset
              , g = void 0 === f ? 0 : f
              , m = ie(e, {
                boundary: l,
                rootBoundary: u,
                padding: c,
                altBoundary: h
            })
              , _ = vt(e.placement)
              , v = Nt(e.placement)
              , b = !v
              , k = Bt(_)
              , y = "x" === k ? "y" : "x"
              , w = e.modifiersData.popperOffsets
              , A = e.rects.reference
              , E = e.rects.popper
              , C = "function" == typeof g ? g(Object.assign({}, e.rects, {
                placement: e.placement
            })) : g
              , x = "number" == typeof C ? {
                mainAxis: C,
                altAxis: C
            } : Object.assign({
                mainAxis: 0,
                altAxis: 0
            }, C)
              , S = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null
              , T = {
                x: 0,
                y: 0
            };
            if (w) {
                if (r) {
                    var D, F = "y" === k ? z : U, I = "y" === k ? H : q, M = "y" === k ? "height" : "width", B = w[k], O = B + m[F], P = B - m[I], L = p ? -E[M] / 2 : 0, V = v === Y ? A[M] : E[M], N = v === Y ? -E[M] : -A[M], R = e.elements.arrow, $ = p && R ? Ct(R) : {
                        width: 0,
                        height: 0
                    }, j = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }, W = j[F], K = j[I], X = Ot(0, A[M], $[M]), Q = b ? A[M] / 2 - L - X - W - x.mainAxis : V - X - W - x.mainAxis, G = b ? -A[M] / 2 + L + X + K + x.mainAxis : N + X + K + x.mainAxis, Z = e.elements.arrow && Mt(e.elements.arrow), J = Z ? "y" === k ? Z.clientTop || 0 : Z.clientLeft || 0 : 0, tt = null != (D = null == S ? void 0 : S[k]) ? D : 0, et = B + G - tt, st = Ot(p ? kt(O, B + Q - tt - J) : O, B, p ? bt(P, et) : P);
                    w[k] = st,
                    T[k] = st - B
                }
                if (a) {
                    var it, nt = "x" === k ? z : U, rt = "x" === k ? H : q, ot = w[y], at = "y" === y ? "height" : "width", lt = ot + m[nt], ut = ot - m[rt], ht = -1 !== [z, U].indexOf(_), ct = null != (it = null == S ? void 0 : S[y]) ? it : 0, dt = ht ? lt : ot - A[at] - E[at] - ct + x.altAxis, pt = ht ? ot + A[at] + E[at] - ct - x.altAxis : ut, ft = p && ht ? function(t, e, s) {
                        var i = Ot(t, e, s);
                        return i > s ? s : i
                    }(dt, ot, pt) : Ot(p ? dt : lt, ot, p ? pt : ut);
                    w[y] = ft,
                    T[y] = ft - ot
                }
                e.modifiersData[i] = T
            }
        },
        requiresIfExists: ["offset"]
    };
    function de(t, e, s) {
        void 0 === s && (s = !1);
        var i, n, r = gt(e), o = gt(e) && function(t) {
            var e = t.getBoundingClientRect()
              , s = yt(e.width) / t.offsetWidth || 1
              , i = yt(e.height) / t.offsetHeight || 1;
            return 1 !== s || 1 !== i
        }(e), a = Dt(e), l = Et(t, o, s), u = {
            scrollLeft: 0,
            scrollTop: 0
        }, h = {
            x: 0,
            y: 0
        };
        return (r || !r && !s) && (("body" !== dt(e) || Qt(a)) && (u = (i = e) !== pt(i) && gt(i) ? {
            scrollLeft: (n = i).scrollLeft,
            scrollTop: n.scrollTop
        } : Yt(i)),
        gt(e) ? ((h = Et(e, !0)).x += e.clientLeft,
        h.y += e.clientTop) : a && (h.x = Xt(a))),
        {
            x: l.left + u.scrollLeft - h.x,
            y: l.top + u.scrollTop - h.y,
            width: l.width,
            height: l.height
        }
    }
    function pe(t) {
        var e = new Map
          , s = new Set
          , i = [];
        function n(t) {
            s.add(t.name),
            [].concat(t.requires || [], t.requiresIfExists || []).forEach((function(t) {
                if (!s.has(t)) {
                    var i = e.get(t);
                    i && n(i)
                }
            }
            )),
            i.push(t)
        }
        return t.forEach((function(t) {
            e.set(t.name, t)
        }
        )),
        t.forEach((function(t) {
            s.has(t.name) || n(t)
        }
        )),
        i
    }
    var fe = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };
    function ge() {
        for (var t = arguments.length, e = new Array(t), s = 0; s < t; s++)
            e[s] = arguments[s];
        return !e.some((function(t) {
            return !(t && "function" == typeof t.getBoundingClientRect)
        }
        ))
    }
    function me(t) {
        void 0 === t && (t = {});
        var e = t
          , s = e.defaultModifiers
          , i = void 0 === s ? [] : s
          , n = e.defaultOptions
          , r = void 0 === n ? fe : n;
        return function(t, e, s) {
            void 0 === s && (s = r);
            var n, o, a = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, fe, r),
                modifiersData: {},
                elements: {
                    reference: t,
                    popper: e
                },
                attributes: {},
                styles: {}
            }, l = [], u = !1, h = {
                state: a,
                setOptions: function(s) {
                    var n = "function" == typeof s ? s(a.options) : s;
                    c(),
                    a.options = Object.assign({}, r, a.options, n),
                    a.scrollParents = {
                        reference: ft(t) ? Zt(t) : t.contextElement ? Zt(t.contextElement) : [],
                        popper: Zt(e)
                    };
                    var o, u, d = function(t) {
                        var e = pe(t);
                        return ct.reduce((function(t, s) {
                            return t.concat(e.filter((function(t) {
                                return t.phase === s
                            }
                            )))
                        }
                        ), [])
                    }((o = [].concat(i, a.options.modifiers),
                    u = o.reduce((function(t, e) {
                        var s = t[e.name];
                        return t[e.name] = s ? Object.assign({}, s, e, {
                            options: Object.assign({}, s.options, e.options),
                            data: Object.assign({}, s.data, e.data)
                        }) : e,
                        t
                    }
                    ), {}),
                    Object.keys(u).map((function(t) {
                        return u[t]
                    }
                    ))));
                    return a.orderedModifiers = d.filter((function(t) {
                        return t.enabled
                    }
                    )),
                    a.orderedModifiers.forEach((function(t) {
                        var e = t.name
                          , s = t.options
                          , i = void 0 === s ? {} : s
                          , n = t.effect;
                        if ("function" == typeof n) {
                            var r = n({
                                state: a,
                                name: e,
                                instance: h,
                                options: i
                            })
                              , o = function() {};
                            l.push(r || o)
                        }
                    }
                    )),
                    h.update()
                },
                forceUpdate: function() {
                    if (!u) {
                        var t = a.elements
                          , e = t.reference
                          , s = t.popper;
                        if (ge(e, s)) {
                            a.rects = {
                                reference: de(e, Mt(s), "fixed" === a.options.strategy),
                                popper: Ct(s)
                            },
                            a.reset = !1,
                            a.placement = a.options.placement,
                            a.orderedModifiers.forEach((function(t) {
                                return a.modifiersData[t.name] = Object.assign({}, t.data)
                            }
                            ));
                            for (var i = 0; i < a.orderedModifiers.length; i++)
                                if (!0 !== a.reset) {
                                    var n = a.orderedModifiers[i]
                                      , r = n.fn
                                      , o = n.options
                                      , l = void 0 === o ? {} : o
                                      , c = n.name;
                                    "function" == typeof r && (a = r({
                                        state: a,
                                        options: l,
                                        name: c,
                                        instance: h
                                    }) || a)
                                } else
                                    a.reset = !1,
                                    i = -1
                        }
                    }
                },
                update: (n = function() {
                    return new Promise((function(t) {
                        h.forceUpdate(),
                        t(a)
                    }
                    ))
                }
                ,
                function() {
                    return o || (o = new Promise((function(t) {
                        Promise.resolve().then((function() {
                            o = void 0,
                            t(n())
                        }
                        ))
                    }
                    ))),
                    o
                }
                ),
                destroy: function() {
                    c(),
                    u = !0
                }
            };
            if (!ge(t, e))
                return h;
            function c() {
                l.forEach((function(t) {
                    return t()
                }
                )),
                l = []
            }
            return h.setOptions(s).then((function(t) {
                !u && s.onFirstUpdate && s.onFirstUpdate(t)
            }
            )),
            h
        }
    }
    var _e = me()
      , ve = me({
        defaultModifiers: [Ht, he, jt, _t]
    })
      , be = me({
        defaultModifiers: [Ht, he, jt, _t, ue, re, ce, Vt, le]
    })
      , ke = Object.freeze({
        __proto__: null,
        popperGenerator: me,
        detectOverflow: ie,
        createPopperBase: _e,
        createPopper: be,
        createPopperLite: ve,
        top: z,
        bottom: H,
        right: q,
        left: U,
        auto: W,
        basePlacements: K,
        start: Y,
        end: X,
        clippingParents: Q,
        viewport: G,
        popper: Z,
        reference: J,
        variationPlacements: tt,
        placements: et,
        beforeRead: st,
        read: it,
        afterRead: nt,
        beforeMain: rt,
        main: ot,
        afterMain: at,
        beforeWrite: lt,
        write: ut,
        afterWrite: ht,
        modifierPhases: ct,
        applyStyles: _t,
        arrow: Vt,
        computeStyles: jt,
        eventListeners: Ht,
        flip: re,
        hide: le,
        offset: ue,
        popperOffsets: he,
        preventOverflow: ce
    });
    /*!
	  * Bootstrap v5.3.3 (https://getbootstrap.com/)
	  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
	  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	  */
    const ye = new Map
      , we = {
        set(t, e, s) {
            ye.has(t) || ye.set(t, new Map);
            const i = ye.get(t);
            i.has(e) || 0 === i.size ? i.set(e, s) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)
        },
        get: (t,e)=>ye.has(t) && ye.get(t).get(e) || null,
        remove(t, e) {
            if (!ye.has(t))
                return;
            const s = ye.get(t);
            s.delete(e),
            0 === s.size && ye.delete(t)
        }
    }
      , Ae = "transitionend"
      , Ee = t=>(t && window.CSS && window.CSS.escape && (t = t.replace(/#([^\s"#']+)/g, ((t,e)=>`#${CSS.escape(e)}`))),
    t)
      , Ce = t=>{
        t.dispatchEvent(new Event(Ae))
    }
      , xe = t=>!(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]),
    void 0 !== t.nodeType)
      , Se = t=>xe(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(Ee(t)) : null
      , Te = t=>{
        if (!xe(t) || 0 === t.getClientRects().length)
            return !1;
        const e = "visible" === getComputedStyle(t).getPropertyValue("visibility")
          , s = t.closest("details:not([open])");
        if (!s)
            return e;
        if (s !== t) {
            const e = t.closest("summary");
            if (e && e.parentNode !== s)
                return !1;
            if (null === e)
                return !1
        }
        return e
    }
      , De = t=>!t || t.nodeType !== Node.ELEMENT_NODE || (!!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")))
      , Fe = t=>{
        if (!document.documentElement.attachShadow)
            return null;
        if ("function" == typeof t.getRootNode) {
            const e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null
        }
        return t instanceof ShadowRoot ? t : t.parentNode ? Fe(t.parentNode) : null
    }
      , Ie = ()=>{}
      , Me = t=>{
        t.offsetHeight
    }
      , Be = ()=>window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null
      , Oe = []
      , Pe = ()=>"rtl" === document.documentElement.dir
      , Le = t=>{
        var e;
        e = ()=>{
            const e = Be();
            if (e) {
                const s = t.NAME
                  , i = e.fn[s];
                e.fn[s] = t.jQueryInterface,
                e.fn[s].Constructor = t,
                e.fn[s].noConflict = ()=>(e.fn[s] = i,
                t.jQueryInterface)
            }
        }
        ,
        "loading" === document.readyState ? (Oe.length || document.addEventListener("DOMContentLoaded", (()=>{
            for (const t of Oe)
                t()
        }
        )),
        Oe.push(e)) : e()
    }
      , Ve = (t,e=[],s=t)=>"function" == typeof t ? t(...e) : s
      , Ne = (t,e,s=!0)=>{
        if (!s)
            return void Ve(t);
        const i = (t=>{
            if (!t)
                return 0;
            let {transitionDuration: e, transitionDelay: s} = window.getComputedStyle(t);
            const i = Number.parseFloat(e)
              , n = Number.parseFloat(s);
            return i || n ? (e = e.split(",")[0],
            s = s.split(",")[0],
            1e3 * (Number.parseFloat(e) + Number.parseFloat(s))) : 0
        }
        )(e) + 5;
        let n = !1;
        const r = ({target: s})=>{
            s === e && (n = !0,
            e.removeEventListener(Ae, r),
            Ve(t))
        }
        ;
        e.addEventListener(Ae, r),
        setTimeout((()=>{
            n || Ce(e)
        }
        ), i)
    }
      , Re = (t,e,s,i)=>{
        const n = t.length;
        let r = t.indexOf(e);
        return -1 === r ? !s && i ? t[n - 1] : t[0] : (r += s ? 1 : -1,
        i && (r = (r + n) % n),
        t[Math.max(0, Math.min(r, n - 1))])
    }
      , $e = /[^.]*(?=\..*)\.|.*/
      , je = /\..*/
      , ze = /::\d+$/
      , He = {};
    let qe = 1;
    const Ue = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }
      , We = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
    function Ke(t, e) {
        return e && `${e}::${qe++}` || t.uidEvent || qe++
    }
    function Ye(t) {
        const e = Ke(t);
        return t.uidEvent = e,
        He[e] = He[e] || {},
        He[e]
    }
    function Xe(t, e, s=null) {
        return Object.values(t).find((t=>t.callable === e && t.delegationSelector === s))
    }
    function Qe(t, e, s) {
        const i = "string" == typeof e
          , n = i ? s : e || s;
        let r = ts(t);
        return We.has(r) || (r = t),
        [i, n, r]
    }
    function Ge(t, e, s, i, n) {
        if ("string" != typeof e || !t)
            return;
        let[r,o,a] = Qe(e, s, i);
        if (e in Ue) {
            const t = t=>function(e) {
                if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget))
                    return t.call(this, e)
            }
            ;
            o = t(o)
        }
        const l = Ye(t)
          , u = l[a] || (l[a] = {})
          , h = Xe(u, o, r ? s : null);
        if (h)
            return void (h.oneOff = h.oneOff && n);
        const c = Ke(o, e.replace($e, ""))
          , d = r ? function(t, e, s) {
            return function i(n) {
                const r = t.querySelectorAll(e);
                for (let {target: o} = n; o && o !== this; o = o.parentNode)
                    for (const a of r)
                        if (a === o)
                            return ss(n, {
                                delegateTarget: o
                            }),
                            i.oneOff && es.off(t, n.type, e, s),
                            s.apply(o, [n])
            }
        }(t, s, o) : function(t, e) {
            return function s(i) {
                return ss(i, {
                    delegateTarget: t
                }),
                s.oneOff && es.off(t, i.type, e),
                e.apply(t, [i])
            }
        }(t, o);
        d.delegationSelector = r ? s : null,
        d.callable = o,
        d.oneOff = n,
        d.uidEvent = c,
        u[c] = d,
        t.addEventListener(a, d, r)
    }
    function Ze(t, e, s, i, n) {
        const r = Xe(e[s], i, n);
        r && (t.removeEventListener(s, r, Boolean(n)),
        delete e[s][r.uidEvent])
    }
    function Je(t, e, s, i) {
        const n = e[s] || {};
        for (const [r,o] of Object.entries(n))
            r.includes(i) && Ze(t, e, s, o.callable, o.delegationSelector)
    }
    function ts(t) {
        return t = t.replace(je, ""),
        Ue[t] || t
    }
    const es = {
        on(t, e, s, i) {
            Ge(t, e, s, i, !1)
        },
        one(t, e, s, i) {
            Ge(t, e, s, i, !0)
        },
        off(t, e, s, i) {
            if ("string" != typeof e || !t)
                return;
            const [n,r,o] = Qe(e, s, i)
              , a = o !== e
              , l = Ye(t)
              , u = l[o] || {}
              , h = e.startsWith(".");
            if (void 0 === r) {
                if (h)
                    for (const s of Object.keys(l))
                        Je(t, l, s, e.slice(1));
                for (const [s,i] of Object.entries(u)) {
                    const n = s.replace(ze, "");
                    a && !e.includes(n) || Ze(t, l, o, i.callable, i.delegationSelector)
                }
            } else {
                if (!Object.keys(u).length)
                    return;
                Ze(t, l, o, r, n ? s : null)
            }
        },
        trigger(t, e, s) {
            if ("string" != typeof e || !t)
                return null;
            const i = Be();
            let n = null
              , r = !0
              , o = !0
              , a = !1;
            e !== ts(e) && i && (n = i.Event(e, s),
            i(t).trigger(n),
            r = !n.isPropagationStopped(),
            o = !n.isImmediatePropagationStopped(),
            a = n.isDefaultPrevented());
            const l = ss(new Event(e,{
                bubbles: r,
                cancelable: !0
            }), s);
            return a && l.preventDefault(),
            o && t.dispatchEvent(l),
            l.defaultPrevented && n && n.preventDefault(),
            l
        }
    };
    function ss(t, e={}) {
        for (const [s,i] of Object.entries(e))
            try {
                t[s] = i
            } catch (e) {
                Object.defineProperty(t, s, {
                    configurable: !0,
                    get: ()=>i
                })
            }
        return t
    }
    function is(t) {
        if ("true" === t)
            return !0;
        if ("false" === t)
            return !1;
        if (t === Number(t).toString())
            return Number(t);
        if ("" === t || "null" === t)
            return null;
        if ("string" != typeof t)
            return t;
        try {
            return JSON.parse(decodeURIComponent(t))
        } catch (e) {
            return t
        }
    }
    function ns(t) {
        return t.replace(/[A-Z]/g, (t=>`-${t.toLowerCase()}`))
    }
    const rs = {
        setDataAttribute(t, e, s) {
            t.setAttribute(`data-bs-${ns(e)}`, s)
        },
        removeDataAttribute(t, e) {
            t.removeAttribute(`data-bs-${ns(e)}`)
        },
        getDataAttributes(t) {
            if (!t)
                return {};
            const e = {}
              , s = Object.keys(t.dataset).filter((t=>t.startsWith("bs") && !t.startsWith("bsConfig")));
            for (const i of s) {
                let s = i.replace(/^bs/, "");
                s = s.charAt(0).toLowerCase() + s.slice(1, s.length),
                e[s] = is(t.dataset[i])
            }
            return e
        },
        getDataAttribute: (t,e)=>is(t.getAttribute(`data-bs-${ns(e)}`))
    };
    class os {
        static get Default() {
            return {}
        }
        static get DefaultType() {
            return {}
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!')
        }
        _getConfig(t) {
            return t = this._mergeConfigObj(t),
            t = this._configAfterMerge(t),
            this._typeCheckConfig(t),
            t
        }
        _configAfterMerge(t) {
            return t
        }
        _mergeConfigObj(t, e) {
            const s = xe(e) ? rs.getDataAttribute(e, "config") : {};
            return {
                ...this.constructor.Default,
                ..."object" == typeof s ? s : {},
                ...xe(e) ? rs.getDataAttributes(e) : {},
                ..."object" == typeof t ? t : {}
            }
        }
        _typeCheckConfig(t, e=this.constructor.DefaultType) {
            for (const [i,n] of Object.entries(e)) {
                const e = t[i]
                  , r = xe(e) ? "element" : null == (s = e) ? `${s}` : Object.prototype.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase();
                if (!new RegExp(n).test(r))
                    throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${r}" but expected type "${n}".`)
            }
            var s
        }
    }
    class as extends os {
        constructor(t, e) {
            super(),
            (t = Se(t)) && (this._element = t,
            this._config = this._getConfig(e),
            we.set(this._element, this.constructor.DATA_KEY, this))
        }
        dispose() {
            we.remove(this._element, this.constructor.DATA_KEY),
            es.off(this._element, this.constructor.EVENT_KEY);
            for (const t of Object.getOwnPropertyNames(this))
                this[t] = null
        }
        _queueCallback(t, e, s=!0) {
            Ne(t, e, s)
        }
        _getConfig(t) {
            return t = this._mergeConfigObj(t, this._element),
            t = this._configAfterMerge(t),
            this._typeCheckConfig(t),
            t
        }
        static getInstance(t) {
            return we.get(Se(t), this.DATA_KEY)
        }
        static getOrCreateInstance(t, e={}) {
            return this.getInstance(t) || new this(t,"object" == typeof e ? e : null)
        }
        static get VERSION() {
            return "5.3.3"
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`
        }
        static eventName(t) {
            return `${t}${this.EVENT_KEY}`
        }
    }
    const ls = t=>{
        let e = t.getAttribute("data-bs-target");
        if (!e || "#" === e) {
            let s = t.getAttribute("href");
            if (!s || !s.includes("#") && !s.startsWith("."))
                return null;
            s.includes("#") && !s.startsWith("#") && (s = `#${s.split("#")[1]}`),
            e = s && "#" !== s ? s.trim() : null
        }
        return e ? e.split(",").map((t=>Ee(t))).join(",") : null
    }
      , us = {
        find: (t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e, t)),
        findOne: (t,e=document.documentElement)=>Element.prototype.querySelector.call(e, t),
        children: (t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),
        parents(t, e) {
            const s = [];
            let i = t.parentNode.closest(e);
            for (; i; )
                s.push(i),
                i = i.parentNode.closest(e);
            return s
        },
        prev(t, e) {
            let s = t.previousElementSibling;
            for (; s; ) {
                if (s.matches(e))
                    return [s];
                s = s.previousElementSibling
            }
            return []
        },
        next(t, e) {
            let s = t.nextElementSibling;
            for (; s; ) {
                if (s.matches(e))
                    return [s];
                s = s.nextElementSibling
            }
            return []
        },
        focusableChildren(t) {
            const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(",");
            return this.find(e, t).filter((t=>!De(t) && Te(t)))
        },
        getSelectorFromElement(t) {
            const e = ls(t);
            return e && us.findOne(e) ? e : null
        },
        getElementFromSelector(t) {
            const e = ls(t);
            return e ? us.findOne(e) : null
        },
        getMultipleElementsFromSelector(t) {
            const e = ls(t);
            return e ? us.find(e) : []
        }
    }
      , hs = (t,e="hide")=>{
        const s = `click.dismiss${t.EVENT_KEY}`
          , i = t.NAME;
        es.on(document, s, `[data-bs-dismiss="${i}"]`, (function(s) {
            if (["A", "AREA"].includes(this.tagName) && s.preventDefault(),
            De(this))
                return;
            const n = us.getElementFromSelector(this) || this.closest(`.${i}`);
            t.getOrCreateInstance(n)[e]()
        }
        ))
    }
      , cs = ".bs.alert"
      , ds = `close${cs}`
      , ps = `closed${cs}`;
    class fs extends as {
        static get NAME() {
            return "alert"
        }
        close() {
            if (es.trigger(this._element, ds).defaultPrevented)
                return;
            this._element.classList.remove("show");
            const t = this._element.classList.contains("fade");
            this._queueCallback((()=>this._destroyElement()), this._element, t)
        }
        _destroyElement() {
            this._element.remove(),
            es.trigger(this._element, ps),
            this.dispose()
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = fs.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }
            ))
        }
    }
    hs(fs, "close"),
    Le(fs);
    const gs = '[data-bs-toggle="button"]';
    class ms extends as {
        static get NAME() {
            return "button"
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = ms.getOrCreateInstance(this);
                "toggle" === t && e[t]()
            }
            ))
        }
    }
    es.on(document, "click.bs.button.data-api", gs, (t=>{
        t.preventDefault();
        const e = t.target.closest(gs);
        ms.getOrCreateInstance(e).toggle()
    }
    )),
    Le(ms);
    const _s = ".bs.swipe"
      , vs = `touchstart${_s}`
      , bs = `touchmove${_s}`
      , ks = `touchend${_s}`
      , ys = `pointerdown${_s}`
      , ws = `pointerup${_s}`
      , As = {
        endCallback: null,
        leftCallback: null,
        rightCallback: null
    }
      , Es = {
        endCallback: "(function|null)",
        leftCallback: "(function|null)",
        rightCallback: "(function|null)"
    };
    class Cs extends os {
        constructor(t, e) {
            super(),
            this._element = t,
            t && Cs.isSupported() && (this._config = this._getConfig(e),
            this._deltaX = 0,
            this._supportPointerEvents = Boolean(window.PointerEvent),
            this._initEvents())
        }
        static get Default() {
            return As
        }
        static get DefaultType() {
            return Es
        }
        static get NAME() {
            return "swipe"
        }
        dispose() {
            es.off(this._element, _s)
        }
        _start(t) {
            this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX
        }
        _end(t) {
            this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX),
            this._handleSwipe(),
            Ve(this._config.endCallback)
        }
        _move(t) {
            this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX
        }
        _handleSwipe() {
            const t = Math.abs(this._deltaX);
            if (t <= 40)
                return;
            const e = t / this._deltaX;
            this._deltaX = 0,
            e && Ve(e > 0 ? this._config.rightCallback : this._config.leftCallback)
        }
        _initEvents() {
            this._supportPointerEvents ? (es.on(this._element, ys, (t=>this._start(t))),
            es.on(this._element, ws, (t=>this._end(t))),
            this._element.classList.add("pointer-event")) : (es.on(this._element, vs, (t=>this._start(t))),
            es.on(this._element, bs, (t=>this._move(t))),
            es.on(this._element, ks, (t=>this._end(t))))
        }
        _eventIsPointerPenTouch(t) {
            return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType)
        }
        static isSupported() {
            return "ontouchstart"in document.documentElement || navigator.maxTouchPoints > 0
        }
    }
    const xs = ".bs.carousel"
      , Ss = ".data-api"
      , Ts = "next"
      , Ds = "prev"
      , Fs = "left"
      , Is = "right"
      , Ms = `slide${xs}`
      , Bs = `slid${xs}`
      , Os = `keydown${xs}`
      , Ps = `mouseenter${xs}`
      , Ls = `mouseleave${xs}`
      , Vs = `dragstart${xs}`
      , Ns = `load${xs}${Ss}`
      , Rs = `click${xs}${Ss}`
      , $s = "carousel"
      , js = "active"
      , zs = ".active"
      , Hs = ".carousel-item"
      , qs = zs + Hs
      , Us = {
        ArrowLeft: Is,
        ArrowRight: Fs
    }
      , Ws = {
        interval: 5e3,
        keyboard: !0,
        pause: "hover",
        ride: !1,
        touch: !0,
        wrap: !0
    }
      , Ks = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        pause: "(string|boolean)",
        ride: "(boolean|string)",
        touch: "boolean",
        wrap: "boolean"
    };
    class Ys extends as {
        constructor(t, e) {
            super(t, e),
            this._interval = null,
            this._activeElement = null,
            this._isSliding = !1,
            this.touchTimeout = null,
            this._swipeHelper = null,
            this._indicatorsElement = us.findOne(".carousel-indicators", this._element),
            this._addEventListeners(),
            this._config.ride === $s && this.cycle()
        }
        static get Default() {
            return Ws
        }
        static get DefaultType() {
            return Ks
        }
        static get NAME() {
            return "carousel"
        }
        next() {
            this._slide(Ts)
        }
        nextWhenVisible() {
            !document.hidden && Te(this._element) && this.next()
        }
        prev() {
            this._slide(Ds)
        }
        pause() {
            this._isSliding && Ce(this._element),
            this._clearInterval()
        }
        cycle() {
            this._clearInterval(),
            this._updateInterval(),
            this._interval = setInterval((()=>this.nextWhenVisible()), this._config.interval)
        }
        _maybeEnableCycle() {
            this._config.ride && (this._isSliding ? es.one(this._element, Bs, (()=>this.cycle())) : this.cycle())
        }
        to(t) {
            const e = this._getItems();
            if (t > e.length - 1 || t < 0)
                return;
            if (this._isSliding)
                return void es.one(this._element, Bs, (()=>this.to(t)));
            const s = this._getItemIndex(this._getActive());
            if (s === t)
                return;
            const i = t > s ? Ts : Ds;
            this._slide(i, e[t])
        }
        dispose() {
            this._swipeHelper && this._swipeHelper.dispose(),
            super.dispose()
        }
        _configAfterMerge(t) {
            return t.defaultInterval = t.interval,
            t
        }
        _addEventListeners() {
            this._config.keyboard && es.on(this._element, Os, (t=>this._keydown(t))),
            "hover" === this._config.pause && (es.on(this._element, Ps, (()=>this.pause())),
            es.on(this._element, Ls, (()=>this._maybeEnableCycle()))),
            this._config.touch && Cs.isSupported() && this._addTouchEventListeners()
        }
        _addTouchEventListeners() {
            for (const t of us.find(".carousel-item img", this._element))
                es.on(t, Vs, (t=>t.preventDefault()));
            const t = {
                leftCallback: ()=>this._slide(this._directionToOrder(Fs)),
                rightCallback: ()=>this._slide(this._directionToOrder(Is)),
                endCallback: ()=>{
                    "hover" === this._config.pause && (this.pause(),
                    this.touchTimeout && clearTimeout(this.touchTimeout),
                    this.touchTimeout = setTimeout((()=>this._maybeEnableCycle()), 500 + this._config.interval))
                }
            };
            this._swipeHelper = new Cs(this._element,t)
        }
        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName))
                return;
            const e = Us[t.key];
            e && (t.preventDefault(),
            this._slide(this._directionToOrder(e)))
        }
        _getItemIndex(t) {
            return this._getItems().indexOf(t)
        }
        _setActiveIndicatorElement(t) {
            if (!this._indicatorsElement)
                return;
            const e = us.findOne(zs, this._indicatorsElement);
            e.classList.remove(js),
            e.removeAttribute("aria-current");
            const s = us.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
            s && (s.classList.add(js),
            s.setAttribute("aria-current", "true"))
        }
        _updateInterval() {
            const t = this._activeElement || this._getActive();
            if (!t)
                return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            this._config.interval = e || this._config.defaultInterval
        }
        _slide(t, e=null) {
            if (this._isSliding)
                return;
            const s = this._getActive()
              , i = t === Ts
              , n = e || Re(this._getItems(), s, i, this._config.wrap);
            if (n === s)
                return;
            const r = this._getItemIndex(n)
              , o = e=>es.trigger(this._element, e, {
                relatedTarget: n,
                direction: this._orderToDirection(t),
                from: this._getItemIndex(s),
                to: r
            });
            if (o(Ms).defaultPrevented)
                return;
            if (!s || !n)
                return;
            const a = Boolean(this._interval);
            this.pause(),
            this._isSliding = !0,
            this._setActiveIndicatorElement(r),
            this._activeElement = n;
            const l = i ? "carousel-item-start" : "carousel-item-end"
              , u = i ? "carousel-item-next" : "carousel-item-prev";
            n.classList.add(u),
            Me(n),
            s.classList.add(l),
            n.classList.add(l);
            this._queueCallback((()=>{
                n.classList.remove(l, u),
                n.classList.add(js),
                s.classList.remove(js, u, l),
                this._isSliding = !1,
                o(Bs)
            }
            ), s, this._isAnimated()),
            a && this.cycle()
        }
        _isAnimated() {
            return this._element.classList.contains("slide")
        }
        _getActive() {
            return us.findOne(qs, this._element)
        }
        _getItems() {
            return us.find(Hs, this._element)
        }
        _clearInterval() {
            this._interval && (clearInterval(this._interval),
            this._interval = null)
        }
        _directionToOrder(t) {
            return Pe() ? t === Fs ? Ds : Ts : t === Fs ? Ts : Ds
        }
        _orderToDirection(t) {
            return Pe() ? t === Ds ? Fs : Is : t === Ds ? Is : Fs
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Ys.getOrCreateInstance(this, t);
                if ("number" != typeof t) {
                    if ("string" == typeof t) {
                        if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                            throw new TypeError(`No method named "${t}"`);
                        e[t]()
                    }
                } else
                    e.to(t)
            }
            ))
        }
    }
    es.on(document, Rs, "[data-bs-slide], [data-bs-slide-to]", (function(t) {
        const e = us.getElementFromSelector(this);
        if (!e || !e.classList.contains($s))
            return;
        t.preventDefault();
        const s = Ys.getOrCreateInstance(e)
          , i = this.getAttribute("data-bs-slide-to");
        return i ? (s.to(i),
        void s._maybeEnableCycle()) : "next" === rs.getDataAttribute(this, "slide") ? (s.next(),
        void s._maybeEnableCycle()) : (s.prev(),
        void s._maybeEnableCycle())
    }
    )),
    es.on(window, Ns, (()=>{
        const t = us.find('[data-bs-ride="carousel"]');
        for (const e of t)
            Ys.getOrCreateInstance(e)
    }
    )),
    Le(Ys);
    const Xs = ".bs.collapse"
      , Qs = `show${Xs}`
      , Gs = `shown${Xs}`
      , Zs = `hide${Xs}`
      , Js = `hidden${Xs}`
      , ti = `click${Xs}.data-api`
      , ei = "show"
      , si = "collapse"
      , ii = "collapsing"
      , ni = `:scope .${si} .${si}`
      , ri = '[data-bs-toggle="collapse"]'
      , oi = {
        parent: null,
        toggle: !0
    }
      , ai = {
        parent: "(null|element)",
        toggle: "boolean"
    };
    class li extends as {
        constructor(t, e) {
            super(t, e),
            this._isTransitioning = !1,
            this._triggerArray = [];
            const s = us.find(ri);
            for (const t of s) {
                const e = us.getSelectorFromElement(t)
                  , s = us.find(e).filter((t=>t === this._element));
                null !== e && s.length && this._triggerArray.push(t)
            }
            this._initializeChildren(),
            this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
            this._config.toggle && this.toggle()
        }
        static get Default() {
            return oi
        }
        static get DefaultType() {
            return ai
        }
        static get NAME() {
            return "collapse"
        }
        toggle() {
            this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (this._isTransitioning || this._isShown())
                return;
            let t = [];
            if (this._config.parent && (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t=>t !== this._element)).map((t=>li.getOrCreateInstance(t, {
                toggle: !1
            })))),
            t.length && t[0]._isTransitioning)
                return;
            if (es.trigger(this._element, Qs).defaultPrevented)
                return;
            for (const e of t)
                e.hide();
            const e = this._getDimension();
            this._element.classList.remove(si),
            this._element.classList.add(ii),
            this._element.style[e] = 0,
            this._addAriaAndCollapsedClass(this._triggerArray, !0),
            this._isTransitioning = !0;
            const s = `scroll${e[0].toUpperCase() + e.slice(1)}`;
            this._queueCallback((()=>{
                this._isTransitioning = !1,
                this._element.classList.remove(ii),
                this._element.classList.add(si, ei),
                this._element.style[e] = "",
                es.trigger(this._element, Gs)
            }
            ), this._element, !0),
            this._element.style[e] = `${this._element[s]}px`
        }
        hide() {
            if (this._isTransitioning || !this._isShown())
                return;
            if (es.trigger(this._element, Zs).defaultPrevented)
                return;
            const t = this._getDimension();
            this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`,
            Me(this._element),
            this._element.classList.add(ii),
            this._element.classList.remove(si, ei);
            for (const t of this._triggerArray) {
                const e = us.getElementFromSelector(t);
                e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1)
            }
            this._isTransitioning = !0;
            this._element.style[t] = "",
            this._queueCallback((()=>{
                this._isTransitioning = !1,
                this._element.classList.remove(ii),
                this._element.classList.add(si),
                es.trigger(this._element, Js)
            }
            ), this._element, !0)
        }
        _isShown(t=this._element) {
            return t.classList.contains(ei)
        }
        _configAfterMerge(t) {
            return t.toggle = Boolean(t.toggle),
            t.parent = Se(t.parent),
            t
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
        }
        _initializeChildren() {
            if (!this._config.parent)
                return;
            const t = this._getFirstLevelChildren(ri);
            for (const e of t) {
                const t = us.getElementFromSelector(e);
                t && this._addAriaAndCollapsedClass([e], this._isShown(t))
            }
        }
        _getFirstLevelChildren(t) {
            const e = us.find(ni, this._config.parent);
            return us.find(t, this._config.parent).filter((t=>!e.includes(t)))
        }
        _addAriaAndCollapsedClass(t, e) {
            if (t.length)
                for (const s of t)
                    s.classList.toggle("collapsed", !e),
                    s.setAttribute("aria-expanded", e)
        }
        static jQueryInterface(t) {
            const e = {};
            return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1),
            this.each((function() {
                const s = li.getOrCreateInstance(this, e);
                if ("string" == typeof t) {
                    if (void 0 === s[t])
                        throw new TypeError(`No method named "${t}"`);
                    s[t]()
                }
            }
            ))
        }
    }
    es.on(document, ti, ri, (function(t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
        for (const t of us.getMultipleElementsFromSelector(this))
            li.getOrCreateInstance(t, {
                toggle: !1
            }).toggle()
    }
    )),
    Le(li);
    const ui = "dropdown"
      , hi = ".bs.dropdown"
      , ci = ".data-api"
      , di = "ArrowUp"
      , pi = "ArrowDown"
      , fi = `hide${hi}`
      , gi = `hidden${hi}`
      , mi = `show${hi}`
      , _i = `shown${hi}`
      , vi = `click${hi}${ci}`
      , bi = `keydown${hi}${ci}`
      , ki = `keyup${hi}${ci}`
      , yi = "show"
      , wi = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)'
      , Ai = `${wi}.${yi}`
      , Ei = ".dropdown-menu"
      , Ci = Pe() ? "top-end" : "top-start"
      , xi = Pe() ? "top-start" : "top-end"
      , Si = Pe() ? "bottom-end" : "bottom-start"
      , Ti = Pe() ? "bottom-start" : "bottom-end"
      , Di = Pe() ? "left-start" : "right-start"
      , Fi = Pe() ? "right-start" : "left-start"
      , Ii = {
        autoClose: !0,
        boundary: "clippingParents",
        display: "dynamic",
        offset: [0, 2],
        popperConfig: null,
        reference: "toggle"
    }
      , Mi = {
        autoClose: "(boolean|string)",
        boundary: "(string|element)",
        display: "string",
        offset: "(array|string|function)",
        popperConfig: "(null|object|function)",
        reference: "(string|element|object)"
    };
    class Bi extends as {
        constructor(t, e) {
            super(t, e),
            this._popper = null,
            this._parent = this._element.parentNode,
            this._menu = us.next(this._element, Ei)[0] || us.prev(this._element, Ei)[0] || us.findOne(Ei, this._parent),
            this._inNavbar = this._detectNavbar()
        }
        static get Default() {
            return Ii
        }
        static get DefaultType() {
            return Mi
        }
        static get NAME() {
            return ui
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (De(this._element) || this._isShown())
                return;
            const t = {
                relatedTarget: this._element
            };
            if (!es.trigger(this._element, mi, t).defaultPrevented) {
                if (this._createPopper(),
                "ontouchstart"in document.documentElement && !this._parent.closest(".navbar-nav"))
                    for (const t of [].concat(...document.body.children))
                        es.on(t, "mouseover", Ie);
                this._element.focus(),
                this._element.setAttribute("aria-expanded", !0),
                this._menu.classList.add(yi),
                this._element.classList.add(yi),
                es.trigger(this._element, _i, t)
            }
        }
        hide() {
            if (De(this._element) || !this._isShown())
                return;
            const t = {
                relatedTarget: this._element
            };
            this._completeHide(t)
        }
        dispose() {
            this._popper && this._popper.destroy(),
            super.dispose()
        }
        update() {
            this._inNavbar = this._detectNavbar(),
            this._popper && this._popper.update()
        }
        _completeHide(t) {
            if (!es.trigger(this._element, fi, t).defaultPrevented) {
                if ("ontouchstart"in document.documentElement)
                    for (const t of [].concat(...document.body.children))
                        es.off(t, "mouseover", Ie);
                this._popper && this._popper.destroy(),
                this._menu.classList.remove(yi),
                this._element.classList.remove(yi),
                this._element.setAttribute("aria-expanded", "false"),
                rs.removeDataAttribute(this._menu, "popper"),
                es.trigger(this._element, gi, t)
            }
        }
        _getConfig(t) {
            if ("object" == typeof (t = super._getConfig(t)).reference && !xe(t.reference) && "function" != typeof t.reference.getBoundingClientRect)
                throw new TypeError(`${ui.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t
        }
        _createPopper() {
            if (void 0 === ke)
                throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let t = this._element;
            "parent" === this._config.reference ? t = this._parent : xe(this._config.reference) ? t = Se(this._config.reference) : "object" == typeof this._config.reference && (t = this._config.reference);
            const e = this._getPopperConfig();
            this._popper = be(t, this._menu, e)
        }
        _isShown() {
            return this._menu.classList.contains(yi)
        }
        _getPlacement() {
            const t = this._parent;
            if (t.classList.contains("dropend"))
                return Di;
            if (t.classList.contains("dropstart"))
                return Fi;
            if (t.classList.contains("dropup-center"))
                return "top";
            if (t.classList.contains("dropdown-center"))
                return "bottom";
            const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? e ? xi : Ci : e ? Ti : Si
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar")
        }
        _getOffset() {
            const {offset: t} = this._config;
            return "string" == typeof t ? t.split(",").map((t=>Number.parseInt(t, 10))) : "function" == typeof t ? e=>t(e, this._element) : t
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [{
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }]
            };
            return (this._inNavbar || "static" === this._config.display) && (rs.setDataAttribute(this._menu, "popper", "static"),
            t.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]),
            {
                ...t,
                ...Ve(this._config.popperConfig, [t])
            }
        }
        _selectMenuItem({key: t, target: e}) {
            const s = us.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((t=>Te(t)));
            s.length && Re(s, e, t === pi, !s.includes(e)).focus()
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Bi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
        static clearMenus(t) {
            if (2 === t.button || "keyup" === t.type && "Tab" !== t.key)
                return;
            const e = us.find(Ai);
            for (const s of e) {
                const e = Bi.getInstance(s);
                if (!e || !1 === e._config.autoClose)
                    continue;
                const i = t.composedPath()
                  , n = i.includes(e._menu);
                if (i.includes(e._element) || "inside" === e._config.autoClose && !n || "outside" === e._config.autoClose && n)
                    continue;
                if (e._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName)))
                    continue;
                const r = {
                    relatedTarget: e._element
                };
                "click" === t.type && (r.clickEvent = t),
                e._completeHide(r)
            }
        }
        static dataApiKeydownHandler(t) {
            const e = /input|textarea/i.test(t.target.tagName)
              , s = "Escape" === t.key
              , i = [di, pi].includes(t.key);
            if (!i && !s)
                return;
            if (e && !s)
                return;
            t.preventDefault();
            const n = this.matches(wi) ? this : us.prev(this, wi)[0] || us.next(this, wi)[0] || us.findOne(wi, t.delegateTarget.parentNode)
              , r = Bi.getOrCreateInstance(n);
            if (i)
                return t.stopPropagation(),
                r.show(),
                void r._selectMenuItem(t);
            r._isShown() && (t.stopPropagation(),
            r.hide(),
            n.focus())
        }
    }
    es.on(document, bi, wi, Bi.dataApiKeydownHandler),
    es.on(document, bi, Ei, Bi.dataApiKeydownHandler),
    es.on(document, vi, Bi.clearMenus),
    es.on(document, ki, Bi.clearMenus),
    es.on(document, vi, wi, (function(t) {
        t.preventDefault(),
        Bi.getOrCreateInstance(this).toggle()
    }
    )),
    Le(Bi);
    const Oi = "backdrop"
      , Pi = "show"
      , Li = `mousedown.bs.${Oi}`
      , Vi = {
        className: "modal-backdrop",
        clickCallback: null,
        isAnimated: !1,
        isVisible: !0,
        rootElement: "body"
    }
      , Ni = {
        className: "string",
        clickCallback: "(function|null)",
        isAnimated: "boolean",
        isVisible: "boolean",
        rootElement: "(element|string)"
    };
    class Ri extends os {
        constructor(t) {
            super(),
            this._config = this._getConfig(t),
            this._isAppended = !1,
            this._element = null
        }
        static get Default() {
            return Vi
        }
        static get DefaultType() {
            return Ni
        }
        static get NAME() {
            return Oi
        }
        show(t) {
            if (!this._config.isVisible)
                return void Ve(t);
            this._append();
            const e = this._getElement();
            this._config.isAnimated && Me(e),
            e.classList.add(Pi),
            this._emulateAnimation((()=>{
                Ve(t)
            }
            ))
        }
        hide(t) {
            this._config.isVisible ? (this._getElement().classList.remove(Pi),
            this._emulateAnimation((()=>{
                this.dispose(),
                Ve(t)
            }
            ))) : Ve(t)
        }
        dispose() {
            this._isAppended && (es.off(this._element, Li),
            this._element.remove(),
            this._isAppended = !1)
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                t.className = this._config.className,
                this._config.isAnimated && t.classList.add("fade"),
                this._element = t
            }
            return this._element
        }
        _configAfterMerge(t) {
            return t.rootElement = Se(t.rootElement),
            t
        }
        _append() {
            if (this._isAppended)
                return;
            const t = this._getElement();
            this._config.rootElement.append(t),
            es.on(t, Li, (()=>{
                Ve(this._config.clickCallback)
            }
            )),
            this._isAppended = !0
        }
        _emulateAnimation(t) {
            Ne(t, this._getElement(), this._config.isAnimated)
        }
    }
    const $i = ".bs.focustrap"
      , ji = `focusin${$i}`
      , zi = `keydown.tab${$i}`
      , Hi = "backward"
      , qi = {
        autofocus: !0,
        trapElement: null
    }
      , Ui = {
        autofocus: "boolean",
        trapElement: "element"
    };
    class Wi extends os {
        constructor(t) {
            super(),
            this._config = this._getConfig(t),
            this._isActive = !1,
            this._lastTabNavDirection = null
        }
        static get Default() {
            return qi
        }
        static get DefaultType() {
            return Ui
        }
        static get NAME() {
            return "focustrap"
        }
        activate() {
            this._isActive || (this._config.autofocus && this._config.trapElement.focus(),
            es.off(document, $i),
            es.on(document, ji, (t=>this._handleFocusin(t))),
            es.on(document, zi, (t=>this._handleKeydown(t))),
            this._isActive = !0)
        }
        deactivate() {
            this._isActive && (this._isActive = !1,
            es.off(document, $i))
        }
        _handleFocusin(t) {
            const {trapElement: e} = this._config;
            if (t.target === document || t.target === e || e.contains(t.target))
                return;
            const s = us.focusableChildren(e);
            0 === s.length ? e.focus() : this._lastTabNavDirection === Hi ? s[s.length - 1].focus() : s[0].focus()
        }
        _handleKeydown(t) {
            "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? Hi : "forward")
        }
    }
    const Ki = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
      , Yi = ".sticky-top"
      , Xi = "padding-right"
      , Qi = "margin-right";
    class Gi {
        constructor() {
            this._element = document.body
        }
        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t)
        }
        hide() {
            const t = this.getWidth();
            this._disableOverFlow(),
            this._setElementAttributes(this._element, Xi, (e=>e + t)),
            this._setElementAttributes(Ki, Xi, (e=>e + t)),
            this._setElementAttributes(Yi, Qi, (e=>e - t))
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"),
            this._resetElementAttributes(this._element, Xi),
            this._resetElementAttributes(Ki, Xi),
            this._resetElementAttributes(Yi, Qi)
        }
        isOverflowing() {
            return this.getWidth() > 0
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"),
            this._element.style.overflow = "hidden"
        }
        _setElementAttributes(t, e, s) {
            const i = this.getWidth();
            this._applyManipulationCallback(t, (t=>{
                if (t !== this._element && window.innerWidth > t.clientWidth + i)
                    return;
                this._saveInitialAttribute(t, e);
                const n = window.getComputedStyle(t).getPropertyValue(e);
                t.style.setProperty(e, `${s(Number.parseFloat(n))}px`)
            }
            ))
        }
        _saveInitialAttribute(t, e) {
            const s = t.style.getPropertyValue(e);
            s && rs.setDataAttribute(t, e, s)
        }
        _resetElementAttributes(t, e) {
            this._applyManipulationCallback(t, (t=>{
                const s = rs.getDataAttribute(t, e);
                null !== s ? (rs.removeDataAttribute(t, e),
                t.style.setProperty(e, s)) : t.style.removeProperty(e)
            }
            ))
        }
        _applyManipulationCallback(t, e) {
            if (xe(t))
                e(t);
            else
                for (const s of us.find(t, this._element))
                    e(s)
        }
    }
    const Zi = ".bs.modal"
      , Ji = `hide${Zi}`
      , tn = `hidePrevented${Zi}`
      , en = `hidden${Zi}`
      , sn = `show${Zi}`
      , nn = `shown${Zi}`
      , rn = `resize${Zi}`
      , on = `click.dismiss${Zi}`
      , an = `mousedown.dismiss${Zi}`
      , ln = `keydown.dismiss${Zi}`
      , un = `click${Zi}.data-api`
      , hn = "modal-open"
      , cn = "show"
      , dn = "modal-static"
      , pn = {
        backdrop: !0,
        focus: !0,
        keyboard: !0
    }
      , fn = {
        backdrop: "(boolean|string)",
        focus: "boolean",
        keyboard: "boolean"
    };
    class gn extends as {
        constructor(t, e) {
            super(t, e),
            this._dialog = us.findOne(".modal-dialog", this._element),
            this._backdrop = this._initializeBackDrop(),
            this._focustrap = this._initializeFocusTrap(),
            this._isShown = !1,
            this._isTransitioning = !1,
            this._scrollBar = new Gi,
            this._addEventListeners()
        }
        static get Default() {
            return pn
        }
        static get DefaultType() {
            return fn
        }
        static get NAME() {
            return "modal"
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            if (this._isShown || this._isTransitioning)
                return;
            es.trigger(this._element, sn, {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0,
            this._isTransitioning = !0,
            this._scrollBar.hide(),
            document.body.classList.add(hn),
            this._adjustDialog(),
            this._backdrop.show((()=>this._showElement(t))))
        }
        hide() {
            if (!this._isShown || this._isTransitioning)
                return;
            es.trigger(this._element, Ji).defaultPrevented || (this._isShown = !1,
            this._isTransitioning = !0,
            this._focustrap.deactivate(),
            this._element.classList.remove(cn),
            this._queueCallback((()=>this._hideModal()), this._element, this._isAnimated()))
        }
        dispose() {
            es.off(window, Zi),
            es.off(this._dialog, Zi),
            this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose()
        }
        handleUpdate() {
            this._adjustDialog()
        }
        _initializeBackDrop() {
            return new Ri({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            })
        }
        _initializeFocusTrap() {
            return new Wi({
                trapElement: this._element
            })
        }
        _showElement(t) {
            document.body.contains(this._element) || document.body.append(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.scrollTop = 0;
            const e = us.findOne(".modal-body", this._dialog);
            e && (e.scrollTop = 0),
            Me(this._element),
            this._element.classList.add(cn);
            this._queueCallback((()=>{
                this._config.focus && this._focustrap.activate(),
                this._isTransitioning = !1,
                es.trigger(this._element, nn, {
                    relatedTarget: t
                })
            }
            ), this._dialog, this._isAnimated())
        }
        _addEventListeners() {
            es.on(this._element, ln, (t=>{
                "Escape" === t.key && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition())
            }
            )),
            es.on(window, rn, (()=>{
                this._isShown && !this._isTransitioning && this._adjustDialog()
            }
            )),
            es.on(this._element, an, (t=>{
                es.one(this._element, on, (e=>{
                    this._element === t.target && this._element === e.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition())
                }
                ))
            }
            ))
        }
        _hideModal() {
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            this._isTransitioning = !1,
            this._backdrop.hide((()=>{
                document.body.classList.remove(hn),
                this._resetAdjustments(),
                this._scrollBar.reset(),
                es.trigger(this._element, en)
            }
            ))
        }
        _isAnimated() {
            return this._element.classList.contains("fade")
        }
        _triggerBackdropTransition() {
            if (es.trigger(this._element, tn).defaultPrevented)
                return;
            const t = this._element.scrollHeight > document.documentElement.clientHeight
              , e = this._element.style.overflowY;
            "hidden" === e || this._element.classList.contains(dn) || (t || (this._element.style.overflowY = "hidden"),
            this._element.classList.add(dn),
            this._queueCallback((()=>{
                this._element.classList.remove(dn),
                this._queueCallback((()=>{
                    this._element.style.overflowY = e
                }
                ), this._dialog)
            }
            ), this._dialog),
            this._element.focus())
        }
        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight
              , e = this._scrollBar.getWidth()
              , s = e > 0;
            if (s && !t) {
                const t = Pe() ? "paddingLeft" : "paddingRight";
                this._element.style[t] = `${e}px`
            }
            if (!s && t) {
                const t = Pe() ? "paddingRight" : "paddingLeft";
                this._element.style[t] = `${e}px`
            }
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        static jQueryInterface(t, e) {
            return this.each((function() {
                const s = gn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === s[t])
                        throw new TypeError(`No method named "${t}"`);
                    s[t](e)
                }
            }
            ))
        }
    }
    es.on(document, un, '[data-bs-toggle="modal"]', (function(t) {
        const e = us.getElementFromSelector(this);
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        es.one(e, sn, (t=>{
            t.defaultPrevented || es.one(e, en, (()=>{
                Te(this) && this.focus()
            }
            ))
        }
        ));
        const s = us.findOne(".modal.show");
        s && gn.getInstance(s).hide();
        gn.getOrCreateInstance(e).toggle(this)
    }
    )),
    hs(gn),
    Le(gn);
    const mn = ".bs.offcanvas"
      , _n = ".data-api"
      , vn = `load${mn}${_n}`
      , bn = "show"
      , kn = "showing"
      , yn = "hiding"
      , wn = ".offcanvas.show"
      , An = `show${mn}`
      , En = `shown${mn}`
      , Cn = `hide${mn}`
      , xn = `hidePrevented${mn}`
      , Sn = `hidden${mn}`
      , Tn = `resize${mn}`
      , Dn = `click${mn}${_n}`
      , Fn = `keydown.dismiss${mn}`
      , In = {
        backdrop: !0,
        keyboard: !0,
        scroll: !1
    }
      , Mn = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        scroll: "boolean"
    };
    class Bn extends as {
        constructor(t, e) {
            super(t, e),
            this._isShown = !1,
            this._backdrop = this._initializeBackDrop(),
            this._focustrap = this._initializeFocusTrap(),
            this._addEventListeners()
        }
        static get Default() {
            return In
        }
        static get DefaultType() {
            return Mn
        }
        static get NAME() {
            return "offcanvas"
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            if (this._isShown)
                return;
            if (es.trigger(this._element, An, {
                relatedTarget: t
            }).defaultPrevented)
                return;
            this._isShown = !0,
            this._backdrop.show(),
            this._config.scroll || (new Gi).hide(),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.classList.add(kn);
            this._queueCallback((()=>{
                this._config.scroll && !this._config.backdrop || this._focustrap.activate(),
                this._element.classList.add(bn),
                this._element.classList.remove(kn),
                es.trigger(this._element, En, {
                    relatedTarget: t
                })
            }
            ), this._element, !0)
        }
        hide() {
            if (!this._isShown)
                return;
            if (es.trigger(this._element, Cn).defaultPrevented)
                return;
            this._focustrap.deactivate(),
            this._element.blur(),
            this._isShown = !1,
            this._element.classList.add(yn),
            this._backdrop.hide();
            this._queueCallback((()=>{
                this._element.classList.remove(bn, yn),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                this._config.scroll || (new Gi).reset(),
                es.trigger(this._element, Sn)
            }
            ), this._element, !0)
        }
        dispose() {
            this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose()
        }
        _initializeBackDrop() {
            const t = Boolean(this._config.backdrop);
            return new Ri({
                className: "offcanvas-backdrop",
                isVisible: t,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: t ? ()=>{
                    "static" !== this._config.backdrop ? this.hide() : es.trigger(this._element, xn)
                }
                : null
            })
        }
        _initializeFocusTrap() {
            return new Wi({
                trapElement: this._element
            })
        }
        _addEventListeners() {
            es.on(this._element, Fn, (t=>{
                "Escape" === t.key && (this._config.keyboard ? this.hide() : es.trigger(this._element, xn))
            }
            ))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Bn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }
            ))
        }
    }
    es.on(document, Dn, '[data-bs-toggle="offcanvas"]', (function(t) {
        const e = us.getElementFromSelector(this);
        if (["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        De(this))
            return;
        es.one(e, Sn, (()=>{
            Te(this) && this.focus()
        }
        ));
        const s = us.findOne(wn);
        s && s !== e && Bn.getInstance(s).hide();
        Bn.getOrCreateInstance(e).toggle(this)
    }
    )),
    es.on(window, vn, (()=>{
        for (const t of us.find(wn))
            Bn.getOrCreateInstance(t).show()
    }
    )),
    es.on(window, Tn, (()=>{
        for (const t of us.find("[aria-modal][class*=show][class*=offcanvas-]"))
            "fixed" !== getComputedStyle(t).position && Bn.getOrCreateInstance(t).hide()
    }
    )),
    hs(Bn),
    Le(Bn);
    const On = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        dd: [],
        div: [],
        dl: [],
        dt: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    }
      , Pn = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"])
      , Ln = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i
      , Vn = (t,e)=>{
        const s = t.nodeName.toLowerCase();
        return e.includes(s) ? !Pn.has(s) || Boolean(Ln.test(t.nodeValue)) : e.filter((t=>t instanceof RegExp)).some((t=>t.test(s)))
    }
    ;
    const Nn = {
        allowList: On,
        content: {},
        extraClass: "",
        html: !1,
        sanitize: !0,
        sanitizeFn: null,
        template: "<div></div>"
    }
      , Rn = {
        allowList: "object",
        content: "object",
        extraClass: "(string|function)",
        html: "boolean",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        template: "string"
    }
      , $n = {
        entry: "(string|element|function|null)",
        selector: "(string|element)"
    };
    class jn extends os {
        constructor(t) {
            super(),
            this._config = this._getConfig(t)
        }
        static get Default() {
            return Nn
        }
        static get DefaultType() {
            return Rn
        }
        static get NAME() {
            return "TemplateFactory"
        }
        getContent() {
            return Object.values(this._config.content).map((t=>this._resolvePossibleFunction(t))).filter(Boolean)
        }
        hasContent() {
            return this.getContent().length > 0
        }
        changeContent(t) {
            return this._checkContent(t),
            this._config.content = {
                ...this._config.content,
                ...t
            },
            this
        }
        toHtml() {
            const t = document.createElement("div");
            t.innerHTML = this._maybeSanitize(this._config.template);
            for (const [e,s] of Object.entries(this._config.content))
                this._setContent(t, s, e);
            const e = t.children[0]
              , s = this._resolvePossibleFunction(this._config.extraClass);
            return s && e.classList.add(...s.split(" ")),
            e
        }
        _typeCheckConfig(t) {
            super._typeCheckConfig(t),
            this._checkContent(t.content)
        }
        _checkContent(t) {
            for (const [e,s] of Object.entries(t))
                super._typeCheckConfig({
                    selector: e,
                    entry: s
                }, $n)
        }
        _setContent(t, e, s) {
            const i = us.findOne(s, t);
            i && ((e = this._resolvePossibleFunction(e)) ? xe(e) ? this._putElementInTemplate(Se(e), i) : this._config.html ? i.innerHTML = this._maybeSanitize(e) : i.textContent = e : i.remove())
        }
        _maybeSanitize(t) {
            return this._config.sanitize ? function(t, e, s) {
                if (!t.length)
                    return t;
                if (s && "function" == typeof s)
                    return s(t);
                const i = (new window.DOMParser).parseFromString(t, "text/html")
                  , n = [].concat(...i.body.querySelectorAll("*"));
                for (const t of n) {
                    const s = t.nodeName.toLowerCase();
                    if (!Object.keys(e).includes(s)) {
                        t.remove();
                        continue
                    }
                    const i = [].concat(...t.attributes)
                      , n = [].concat(e["*"] || [], e[s] || []);
                    for (const e of i)
                        Vn(e, n) || t.removeAttribute(e.nodeName)
                }
                return i.body.innerHTML
            }(t, this._config.allowList, this._config.sanitizeFn) : t
        }
        _resolvePossibleFunction(t) {
            return Ve(t, [this])
        }
        _putElementInTemplate(t, e) {
            if (this._config.html)
                return e.innerHTML = "",
                void e.append(t);
            e.textContent = t.textContent
        }
    }
    const zn = new Set(["sanitize", "allowList", "sanitizeFn"])
      , Hn = "fade"
      , qn = "show"
      , Un = ".modal"
      , Wn = "hide.bs.modal"
      , Kn = "hover"
      , Yn = "focus"
      , Xn = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: Pe() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: Pe() ? "right" : "left"
    }
      , Qn = {
        allowList: On,
        animation: !0,
        boundary: "clippingParents",
        container: !1,
        customClass: "",
        delay: 0,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        html: !1,
        offset: [0, 6],
        placement: "top",
        popperConfig: null,
        sanitize: !0,
        sanitizeFn: null,
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        title: "",
        trigger: "hover focus"
    }
      , Gn = {
        allowList: "object",
        animation: "boolean",
        boundary: "(string|element)",
        container: "(string|element|boolean)",
        customClass: "(string|function)",
        delay: "(number|object)",
        fallbackPlacements: "array",
        html: "boolean",
        offset: "(array|string|function)",
        placement: "(string|function)",
        popperConfig: "(null|object|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        selector: "(string|boolean)",
        template: "string",
        title: "(string|element|function)",
        trigger: "string"
    };
    class Zn extends as {
        constructor(t, e) {
            if (void 0 === ke)
                throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t, e),
            this._isEnabled = !0,
            this._timeout = 0,
            this._isHovered = null,
            this._activeTrigger = {},
            this._popper = null,
            this._templateFactory = null,
            this._newContent = null,
            this.tip = null,
            this._setListeners(),
            this._config.selector || this._fixTitle()
        }
        static get Default() {
            return Qn
        }
        static get DefaultType() {
            return Gn
        }
        static get NAME() {
            return "tooltip"
        }
        enable() {
            this._isEnabled = !0
        }
        disable() {
            this._isEnabled = !1
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }
        toggle() {
            this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click,
            this._isShown() ? this._leave() : this._enter())
        }
        dispose() {
            clearTimeout(this._timeout),
            es.off(this._element.closest(Un), Wn, this._hideModalHandler),
            this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")),
            this._disposePopper(),
            super.dispose()
        }
        show() {
            if ("none" === this._element.style.display)
                throw new Error("Please use show on visible elements");
            if (!this._isWithContent() || !this._isEnabled)
                return;
            const t = es.trigger(this._element, this.constructor.eventName("show"))
              , e = (Fe(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
            if (t.defaultPrevented || !e)
                return;
            this._disposePopper();
            const s = this._getTipElement();
            this._element.setAttribute("aria-describedby", s.getAttribute("id"));
            const {container: i} = this._config;
            if (this._element.ownerDocument.documentElement.contains(this.tip) || (i.append(s),
            es.trigger(this._element, this.constructor.eventName("inserted"))),
            this._popper = this._createPopper(s),
            s.classList.add(qn),
            "ontouchstart"in document.documentElement)
                for (const t of [].concat(...document.body.children))
                    es.on(t, "mouseover", Ie);
            this._queueCallback((()=>{
                es.trigger(this._element, this.constructor.eventName("shown")),
                !1 === this._isHovered && this._leave(),
                this._isHovered = !1
            }
            ), this.tip, this._isAnimated())
        }
        hide() {
            if (!this._isShown())
                return;
            if (es.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented)
                return;
            if (this._getTipElement().classList.remove(qn),
            "ontouchstart"in document.documentElement)
                for (const t of [].concat(...document.body.children))
                    es.off(t, "mouseover", Ie);
            this._activeTrigger.click = !1,
            this._activeTrigger[Yn] = !1,
            this._activeTrigger[Kn] = !1,
            this._isHovered = null;
            this._queueCallback((()=>{
                this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(),
                this._element.removeAttribute("aria-describedby"),
                es.trigger(this._element, this.constructor.eventName("hidden")))
            }
            ), this.tip, this._isAnimated())
        }
        update() {
            this._popper && this._popper.update()
        }
        _isWithContent() {
            return Boolean(this._getTitle())
        }
        _getTipElement() {
            return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())),
            this.tip
        }
        _createTipElement(t) {
            const e = this._getTemplateFactory(t).toHtml();
            if (!e)
                return null;
            e.classList.remove(Hn, qn),
            e.classList.add(`bs-${this.constructor.NAME}-auto`);
            const s = (t=>{
                do {
                    t += Math.floor(1e6 * Math.random())
                } while (document.getElementById(t));
                return t
            }
            )(this.constructor.NAME).toString();
            return e.setAttribute("id", s),
            this._isAnimated() && e.classList.add(Hn),
            e
        }
        setContent(t) {
            this._newContent = t,
            this._isShown() && (this._disposePopper(),
            this.show())
        }
        _getTemplateFactory(t) {
            return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new jn({
                ...this._config,
                content: t,
                extraClass: this._resolvePossibleFunction(this._config.customClass)
            }),
            this._templateFactory
        }
        _getContentForTemplate() {
            return {
                ".tooltip-inner": this._getTitle()
            }
        }
        _getTitle() {
            return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title")
        }
        _initializeOnDelegatedTarget(t) {
            return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig())
        }
        _isAnimated() {
            return this._config.animation || this.tip && this.tip.classList.contains(Hn)
        }
        _isShown() {
            return this.tip && this.tip.classList.contains(qn)
        }
        _createPopper(t) {
            const e = Ve(this._config.placement, [this, t, this._element])
              , s = Xn[e.toUpperCase()];
            return be(this._element, t, this._getPopperConfig(s))
        }
        _getOffset() {
            const {offset: t} = this._config;
            return "string" == typeof t ? t.split(",").map((t=>Number.parseInt(t, 10))) : "function" == typeof t ? e=>t(e, this._element) : t
        }
        _resolvePossibleFunction(t) {
            return Ve(t, [this._element])
        }
        _getPopperConfig(t) {
            const e = {
                placement: t,
                modifiers: [{
                    name: "flip",
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "arrow",
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                }, {
                    name: "preSetPlacement",
                    enabled: !0,
                    phase: "beforeMain",
                    fn: t=>{
                        this._getTipElement().setAttribute("data-popper-placement", t.state.placement)
                    }
                }]
            };
            return {
                ...e,
                ...Ve(this._config.popperConfig, [e])
            }
        }
        _setListeners() {
            const t = this._config.trigger.split(" ");
            for (const e of t)
                if ("click" === e)
                    es.on(this._element, this.constructor.eventName("click"), this._config.selector, (t=>{
                        this._initializeOnDelegatedTarget(t).toggle()
                    }
                    ));
                else if ("manual" !== e) {
                    const t = e === Kn ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin")
                      , s = e === Kn ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                    es.on(this._element, t, this._config.selector, (t=>{
                        const e = this._initializeOnDelegatedTarget(t);
                        e._activeTrigger["focusin" === t.type ? Yn : Kn] = !0,
                        e._enter()
                    }
                    )),
                    es.on(this._element, s, this._config.selector, (t=>{
                        const e = this._initializeOnDelegatedTarget(t);
                        e._activeTrigger["focusout" === t.type ? Yn : Kn] = e._element.contains(t.relatedTarget),
                        e._leave()
                    }
                    ))
                }
            this._hideModalHandler = ()=>{
                this._element && this.hide()
            }
            ,
            es.on(this._element.closest(Un), Wn, this._hideModalHandler)
        }
        _fixTitle() {
            const t = this._element.getAttribute("title");
            t && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t),
            this._element.setAttribute("data-bs-original-title", t),
            this._element.removeAttribute("title"))
        }
        _enter() {
            this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0,
            this._setTimeout((()=>{
                this._isHovered && this.show()
            }
            ), this._config.delay.show))
        }
        _leave() {
            this._isWithActiveTrigger() || (this._isHovered = !1,
            this._setTimeout((()=>{
                this._isHovered || this.hide()
            }
            ), this._config.delay.hide))
        }
        _setTimeout(t, e) {
            clearTimeout(this._timeout),
            this._timeout = setTimeout(t, e)
        }
        _isWithActiveTrigger() {
            return Object.values(this._activeTrigger).includes(!0)
        }
        _getConfig(t) {
            const e = rs.getDataAttributes(this._element);
            for (const t of Object.keys(e))
                zn.has(t) && delete e[t];
            return t = {
                ...e,
                ..."object" == typeof t && t ? t : {}
            },
            t = this._mergeConfigObj(t),
            t = this._configAfterMerge(t),
            this._typeCheckConfig(t),
            t
        }
        _configAfterMerge(t) {
            return t.container = !1 === t.container ? document.body : Se(t.container),
            "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            t
        }
        _getDelegateConfig() {
            const t = {};
            for (const [e,s] of Object.entries(this._config))
                this.constructor.Default[e] !== s && (t[e] = s);
            return t.selector = !1,
            t.trigger = "manual",
            t
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(),
            this._popper = null),
            this.tip && (this.tip.remove(),
            this.tip = null)
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Zn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    Le(Zn);
    const Jn = {
        ...Zn.Default,
        content: "",
        offset: [0, 8],
        placement: "right",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: "click"
    }
      , tr = {
        ...Zn.DefaultType,
        content: "(null|string|element|function)"
    };
    class er extends Zn {
        static get Default() {
            return Jn
        }
        static get DefaultType() {
            return tr
        }
        static get NAME() {
            return "popover"
        }
        _isWithContent() {
            return this._getTitle() || this._getContent()
        }
        _getContentForTemplate() {
            return {
                ".popover-header": this._getTitle(),
                ".popover-body": this._getContent()
            }
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content)
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = er.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    Le(er);
    const sr = ".bs.scrollspy"
      , ir = `activate${sr}`
      , nr = `click${sr}`
      , rr = `load${sr}.data-api`
      , or = "active"
      , ar = "[href]"
      , lr = ".nav-link"
      , ur = `${lr}, .nav-item > ${lr}, .list-group-item`
      , hr = {
        offset: null,
        rootMargin: "0px 0px -25%",
        smoothScroll: !1,
        target: null,
        threshold: [.1, .5, 1]
    }
      , cr = {
        offset: "(number|null)",
        rootMargin: "string",
        smoothScroll: "boolean",
        target: "element",
        threshold: "array"
    };
    class dr extends as {
        constructor(t, e) {
            super(t, e),
            this._targetLinks = new Map,
            this._observableSections = new Map,
            this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element,
            this._activeTarget = null,
            this._observer = null,
            this._previousScrollData = {
                visibleEntryTop: 0,
                parentScrollTop: 0
            },
            this.refresh()
        }
        static get Default() {
            return hr
        }
        static get DefaultType() {
            return cr
        }
        static get NAME() {
            return "scrollspy"
        }
        refresh() {
            this._initializeTargetsAndObservables(),
            this._maybeEnableSmoothScroll(),
            this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
            for (const t of this._observableSections.values())
                this._observer.observe(t)
        }
        dispose() {
            this._observer.disconnect(),
            super.dispose()
        }
        _configAfterMerge(t) {
            return t.target = Se(t.target) || document.body,
            t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin,
            "string" == typeof t.threshold && (t.threshold = t.threshold.split(",").map((t=>Number.parseFloat(t)))),
            t
        }
        _maybeEnableSmoothScroll() {
            this._config.smoothScroll && (es.off(this._config.target, nr),
            es.on(this._config.target, nr, ar, (t=>{
                const e = this._observableSections.get(t.target.hash);
                if (e) {
                    t.preventDefault();
                    const s = this._rootElement || window
                      , i = e.offsetTop - this._element.offsetTop;
                    if (s.scrollTo)
                        return void s.scrollTo({
                            top: i,
                            behavior: "smooth"
                        });
                    s.scrollTop = i
                }
            }
            )))
        }
        _getNewObserver() {
            const t = {
                root: this._rootElement,
                threshold: this._config.threshold,
                rootMargin: this._config.rootMargin
            };
            return new IntersectionObserver((t=>this._observerCallback(t)),t)
        }
        _observerCallback(t) {
            const e = t=>this._targetLinks.get(`#${t.target.id}`)
              , s = t=>{
                this._previousScrollData.visibleEntryTop = t.target.offsetTop,
                this._process(e(t))
            }
              , i = (this._rootElement || document.documentElement).scrollTop
              , n = i >= this._previousScrollData.parentScrollTop;
            this._previousScrollData.parentScrollTop = i;
            for (const r of t) {
                if (!r.isIntersecting) {
                    this._activeTarget = null,
                    this._clearActiveClass(e(r));
                    continue
                }
                const t = r.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                if (n && t) {
                    if (s(r),
                    !i)
                        return
                } else
                    n || t || s(r)
            }
        }
        _initializeTargetsAndObservables() {
            this._targetLinks = new Map,
            this._observableSections = new Map;
            const t = us.find(ar, this._config.target);
            for (const e of t) {
                if (!e.hash || De(e))
                    continue;
                const t = us.findOne(decodeURI(e.hash), this._element);
                Te(t) && (this._targetLinks.set(decodeURI(e.hash), e),
                this._observableSections.set(e.hash, t))
            }
        }
        _process(t) {
            this._activeTarget !== t && (this._clearActiveClass(this._config.target),
            this._activeTarget = t,
            t.classList.add(or),
            this._activateParents(t),
            es.trigger(this._element, ir, {
                relatedTarget: t
            }))
        }
        _activateParents(t) {
            if (t.classList.contains("dropdown-item"))
                us.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(or);
            else
                for (const e of us.parents(t, ".nav, .list-group"))
                    for (const t of us.prev(e, ur))
                        t.classList.add(or)
        }
        _clearActiveClass(t) {
            t.classList.remove(or);
            const e = us.find(`${ar}.${or}`, t);
            for (const t of e)
                t.classList.remove(or)
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = dr.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    es.on(window, rr, (()=>{
        for (const t of us.find('[data-bs-spy="scroll"]'))
            dr.getOrCreateInstance(t)
    }
    )),
    Le(dr);
    const pr = ".bs.tab"
      , fr = `hide${pr}`
      , gr = `hidden${pr}`
      , mr = `show${pr}`
      , _r = `shown${pr}`
      , vr = `click${pr}`
      , br = `keydown${pr}`
      , kr = `load${pr}`
      , yr = "ArrowLeft"
      , wr = "ArrowRight"
      , Ar = "ArrowUp"
      , Er = "ArrowDown"
      , Cr = "Home"
      , xr = "End"
      , Sr = "active"
      , Tr = "fade"
      , Dr = "show"
      , Fr = ".dropdown-toggle"
      , Ir = `:not(${Fr})`
      , Mr = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]'
      , Br = `${`.nav-link${Ir}, .list-group-item${Ir}, [role="tab"]${Ir}`}, ${Mr}`
      , Or = `.${Sr}[data-bs-toggle="tab"], .${Sr}[data-bs-toggle="pill"], .${Sr}[data-bs-toggle="list"]`;
    class Pr extends as {
        constructor(t) {
            super(t),
            this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'),
            this._parent && (this._setInitialAttributes(this._parent, this._getChildren()),
            es.on(this._element, br, (t=>this._keydown(t))))
        }
        static get NAME() {
            return "tab"
        }
        show() {
            const t = this._element;
            if (this._elemIsActive(t))
                return;
            const e = this._getActiveElem()
              , s = e ? es.trigger(e, fr, {
                relatedTarget: t
            }) : null;
            es.trigger(t, mr, {
                relatedTarget: e
            }).defaultPrevented || s && s.defaultPrevented || (this._deactivate(e, t),
            this._activate(t, e))
        }
        _activate(t, e) {
            if (!t)
                return;
            t.classList.add(Sr),
            this._activate(us.getElementFromSelector(t));
            this._queueCallback((()=>{
                "tab" === t.getAttribute("role") ? (t.removeAttribute("tabindex"),
                t.setAttribute("aria-selected", !0),
                this._toggleDropDown(t, !0),
                es.trigger(t, _r, {
                    relatedTarget: e
                })) : t.classList.add(Dr)
            }
            ), t, t.classList.contains(Tr))
        }
        _deactivate(t, e) {
            if (!t)
                return;
            t.classList.remove(Sr),
            t.blur(),
            this._deactivate(us.getElementFromSelector(t));
            this._queueCallback((()=>{
                "tab" === t.getAttribute("role") ? (t.setAttribute("aria-selected", !1),
                t.setAttribute("tabindex", "-1"),
                this._toggleDropDown(t, !1),
                es.trigger(t, gr, {
                    relatedTarget: e
                })) : t.classList.remove(Dr)
            }
            ), t, t.classList.contains(Tr))
        }
        _keydown(t) {
            if (![yr, wr, Ar, Er, Cr, xr].includes(t.key))
                return;
            t.stopPropagation(),
            t.preventDefault();
            const e = this._getChildren().filter((t=>!De(t)));
            let s;
            if ([Cr, xr].includes(t.key))
                s = e[t.key === Cr ? 0 : e.length - 1];
            else {
                const i = [wr, Er].includes(t.key);
                s = Re(e, t.target, i, !0)
            }
            s && (s.focus({
                preventScroll: !0
            }),
            Pr.getOrCreateInstance(s).show())
        }
        _getChildren() {
            return us.find(Br, this._parent)
        }
        _getActiveElem() {
            return this._getChildren().find((t=>this._elemIsActive(t))) || null
        }
        _setInitialAttributes(t, e) {
            this._setAttributeIfNotExists(t, "role", "tablist");
            for (const t of e)
                this._setInitialAttributesOnChild(t)
        }
        _setInitialAttributesOnChild(t) {
            t = this._getInnerElement(t);
            const e = this._elemIsActive(t)
              , s = this._getOuterElement(t);
            t.setAttribute("aria-selected", e),
            s !== t && this._setAttributeIfNotExists(s, "role", "presentation"),
            e || t.setAttribute("tabindex", "-1"),
            this._setAttributeIfNotExists(t, "role", "tab"),
            this._setInitialAttributesOnTargetPanel(t)
        }
        _setInitialAttributesOnTargetPanel(t) {
            const e = us.getElementFromSelector(t);
            e && (this._setAttributeIfNotExists(e, "role", "tabpanel"),
            t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `${t.id}`))
        }
        _toggleDropDown(t, e) {
            const s = this._getOuterElement(t);
            if (!s.classList.contains("dropdown"))
                return;
            const i = (t,i)=>{
                const n = us.findOne(t, s);
                n && n.classList.toggle(i, e)
            }
            ;
            i(Fr, Sr),
            i(".dropdown-menu", Dr),
            s.setAttribute("aria-expanded", e)
        }
        _setAttributeIfNotExists(t, e, s) {
            t.hasAttribute(e) || t.setAttribute(e, s)
        }
        _elemIsActive(t) {
            return t.classList.contains(Sr)
        }
        _getInnerElement(t) {
            return t.matches(Br) ? t : us.findOne(Br, t)
        }
        _getOuterElement(t) {
            return t.closest(".nav-item, .list-group-item") || t
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Pr.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    es.on(document, vr, Mr, (function(t) {
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        De(this) || Pr.getOrCreateInstance(this).show()
    }
    )),
    es.on(window, kr, (()=>{
        for (const t of us.find(Or))
            Pr.getOrCreateInstance(t)
    }
    )),
    Le(Pr);
    const Lr = ".bs.toast"
      , Vr = `mouseover${Lr}`
      , Nr = `mouseout${Lr}`
      , Rr = `focusin${Lr}`
      , $r = `focusout${Lr}`
      , jr = `hide${Lr}`
      , zr = `hidden${Lr}`
      , Hr = `show${Lr}`
      , qr = `shown${Lr}`
      , Ur = "hide"
      , Wr = "show"
      , Kr = "showing"
      , Yr = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , Xr = {
        animation: !0,
        autohide: !0,
        delay: 5e3
    };
    class Qr extends as {
        constructor(t, e) {
            super(t, e),
            this._timeout = null,
            this._hasMouseInteraction = !1,
            this._hasKeyboardInteraction = !1,
            this._setListeners()
        }
        static get Default() {
            return Xr
        }
        static get DefaultType() {
            return Yr
        }
        static get NAME() {
            return "toast"
        }
        show() {
            if (es.trigger(this._element, Hr).defaultPrevented)
                return;
            this._clearTimeout(),
            this._config.animation && this._element.classList.add("fade");
            this._element.classList.remove(Ur),
            Me(this._element),
            this._element.classList.add(Wr, Kr),
            this._queueCallback((()=>{
                this._element.classList.remove(Kr),
                es.trigger(this._element, qr),
                this._maybeScheduleHide()
            }
            ), this._element, this._config.animation)
        }
        hide() {
            if (!this.isShown())
                return;
            if (es.trigger(this._element, jr).defaultPrevented)
                return;
            this._element.classList.add(Kr),
            this._queueCallback((()=>{
                this._element.classList.add(Ur),
                this._element.classList.remove(Kr, Wr),
                es.trigger(this._element, zr)
            }
            ), this._element, this._config.animation)
        }
        dispose() {
            this._clearTimeout(),
            this.isShown() && this._element.classList.remove(Wr),
            super.dispose()
        }
        isShown() {
            return this._element.classList.contains(Wr)
        }
        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((()=>{
                this.hide()
            }
            ), this._config.delay)))
        }
        _onInteraction(t, e) {
            switch (t.type) {
            case "mouseover":
            case "mouseout":
                this._hasMouseInteraction = e;
                break;
            case "focusin":
            case "focusout":
                this._hasKeyboardInteraction = e
            }
            if (e)
                return void this._clearTimeout();
            const s = t.relatedTarget;
            this._element === s || this._element.contains(s) || this._maybeScheduleHide()
        }
        _setListeners() {
            es.on(this._element, Vr, (t=>this._onInteraction(t, !0))),
            es.on(this._element, Nr, (t=>this._onInteraction(t, !1))),
            es.on(this._element, Rr, (t=>this._onInteraction(t, !0))),
            es.on(this._element, $r, (t=>this._onInteraction(t, !1)))
        }
        _clearTimeout() {
            clearTimeout(this._timeout),
            this._timeout = null
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Qr.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }
            ))
        }
    }
    hs(Qr),
    Le(Qr);
    var Gr = Object.freeze({
        __proto__: null,
        Alert: fs,
        Button: ms,
        Carousel: Ys,
        Collapse: li,
        Dropdown: Bi,
        Modal: gn,
        Offcanvas: Bn,
        Popover: er,
        ScrollSpy: dr,
        Tab: Pr,
        Toast: Qr,
        Tooltip: Zn
    });
    [].slice.call(document.querySelectorAll('[data-bs-toggle="dropdown"]')).map((function(t) {
        var e = {
            boundary: "viewport" === t.getAttribute("data-bs-boundary") ? document.querySelector(".btn") : "clippingParents"
        };
        return new Bi(t,e)
    }
    )),
    [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map((function(t) {
        var e, s, i = {
            delay: {
                show: 50,
                hide: 50
            },
            html: null !== (e = "true" === t.getAttribute("data-bs-html")) && void 0 !== e && e,
            placement: null !== (s = t.getAttribute("data-bs-placement")) && void 0 !== s ? s : "auto"
        };
        return new Zn(t,i)
    }
    )),
    [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map((function(t) {
        var e, s, i = {
            delay: {
                show: 50,
                hide: 50
            },
            html: null !== (e = "true" === t.getAttribute("data-bs-html")) && void 0 !== e && e,
            placement: null !== (s = t.getAttribute("data-bs-placement")) && void 0 !== s ? s : "auto"
        };
        return new er(t,i)
    }
    )),
    [].slice.call(document.querySelectorAll('[data-bs-toggle="switch-icon"]')).map((function(t) {
        t.addEventListener("click", (function(e) {
            e.stopPropagation(),
            t.classList.toggle("active")
        }
        ))
    }
    ));
    var Zr;
    (Zr = window.location.hash) && [].slice.call(document.querySelectorAll('[data-bs-toggle="tab"]')).filter((function(t) {
        return t.hash === Zr
    }
    )).map((function(t) {
        new Pr(t).show()
    }
    )),
    [].slice.call(document.querySelectorAll('[data-bs-toggle="toast"]')).map((function(t) {
        if (t.hasAttribute("data-bs-target")) {
            var e = new Qr(t.getAttribute("data-bs-target"));
            t.addEventListener("click", (function() {
                e.show()
            }
            ))
        }
    }
    ));
    var Jr = "tblr-"
      , to = function(t, e) {
        var s = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
        return s ? "rgba(".concat(parseInt(s[1], 16), ", ").concat(parseInt(s[2], 16), ", ").concat(parseInt(s[3], 16), ", ").concat(e, ")") : null
    }
      , eo = Object.freeze({
        __proto__: null,
        prefix: Jr,
        hexToRgba: to,
        getColor: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
              , s = getComputedStyle(document.body).getPropertyValue("--".concat(Jr).concat(t)).trim();
            return 1 !== e ? to(s, e) : s
        }
    });
    globalThis.bootstrap = Gr,
    globalThis.tabler = eo
}
));	