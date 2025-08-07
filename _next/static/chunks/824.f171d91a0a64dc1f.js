"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [824],
  {
    70824: function (e, t, o) {
      o.r(t),
        o.d(t, {
          W3mModal: function () {
            return h;
          },
        });
      var a = o(52284),
        i = o(59662),
        r = o(35592),
        s = o(74490),
        n = o(83408),
        d = o(46083),
        l = a.iv`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  :host(.embedded) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host(.embedded) wui-card {
    max-width: 400px;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: var(--local-border-bottom-mobile-radius);
      border-bottom-right-radius: var(--local-border-bottom-mobile-radius);
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`,
        __decorate = function (e, t, o, a) {
          var i,
            r = arguments.length,
            s =
              r < 3
                ? t
                : null === a
                ? (a = Object.getOwnPropertyDescriptor(t, o))
                : a;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            s = Reflect.decorate(e, t, o, a);
          else
            for (var n = e.length - 1; n >= 0; n--)
              (i = e[n]) &&
                (s = (r < 3 ? i(s) : r > 3 ? i(t, o, s) : i(t, o)) || s);
          return r > 3 && s && Object.defineProperty(t, o, s), s;
        };
      let c = "scroll-lock",
        h = class extends a.oi {
          constructor() {
            super(),
              (this.unsubscribe = []),
              (this.abortController = void 0),
              (this.enableEmbedded = n.OptionsController.state.enableEmbedded),
              (this.open = n.IN.state.open),
              (this.caipAddress = n.RY.state.activeCaipAddress),
              (this.caipNetwork = n.RY.state.activeCaipNetwork),
              (this.shake = n.IN.state.shake),
              this.initializeTheming(),
              n.ApiController.prefetch(),
              this.unsubscribe.push(
                ...[
                  n.IN.subscribeKey("open", (e) =>
                    e ? this.onOpen() : this.onClose()
                  ),
                  n.IN.subscribeKey("shake", (e) => (this.shake = e)),
                  n.RY.subscribeKey("activeCaipNetwork", (e) =>
                    this.onNewNetwork(e)
                  ),
                  n.RY.subscribeKey("activeCaipAddress", (e) =>
                    this.onNewAddress(e)
                  ),
                  n.OptionsController.subscribeKey(
                    "enableEmbedded",
                    (e) => (this.enableEmbedded = e)
                  ),
                ]
              ),
              n.Xs.sendEvent({ type: "track", event: "MODAL_LOADED" });
          }
          firstUpdated() {
            if (this.caipAddress) {
              if (this.enableEmbedded) {
                n.IN.close();
                return;
              }
              this.onNewAddress(this.caipAddress);
            }
            this.open && this.onOpen();
          }
          disconnectedCallback() {
            this.unsubscribe.forEach((e) => e()),
              this.onRemoveKeyboardListener();
          }
          render() {
            return ((this.style.cssText = `
      --local-border-bottom-mobile-radius: ${
        this.enableEmbedded
          ? "clamp(0px, var(--wui-border-radius-l), 44px)"
          : "0px"
      };
    `),
            this.enableEmbedded)
              ? a.dy`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `
              : this.open
              ? a.dy`
          <wui-flex @click=${this.onOverlayClick.bind(
            this
          )} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `
              : null;
          }
          contentTemplate() {
            return a.dy` <wui-card
      shake="${this.shake}"
      data-embedded="${(0, r.o)(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`;
          }
          async onOverlayClick(e) {
            e.target === e.currentTarget && (await this.handleClose());
          }
          async handleClose() {
            let e = "UnsupportedChain" === n.RouterController.state.view;
            e || (await n.wf.isSIWXCloseDisabled())
              ? n.IN.shake()
              : n.IN.close();
          }
          initializeTheming() {
            let { themeVariables: e, themeMode: t } = n.ThemeController.state,
              o = d.UiHelperUtil.getColorTheme(t);
            (0, d.initializeTheming)(e, o);
          }
          onClose() {
            (this.open = !1),
              this.classList.remove("open"),
              this.onScrollUnlock(),
              n.SnackController.hide(),
              this.onRemoveKeyboardListener();
          }
          onOpen() {
            (this.open = !0),
              this.classList.add("open"),
              this.onScrollLock(),
              this.onAddKeyboardListener();
          }
          onScrollLock() {
            let e = document.createElement("style");
            (e.dataset.w3m = c),
              (e.textContent = `
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `),
              document.head.appendChild(e);
          }
          onScrollUnlock() {
            let e = document.head.querySelector(`style[data-w3m="${c}"]`);
            e && e.remove();
          }
          onAddKeyboardListener() {
            this.abortController = new AbortController();
            let e = this.shadowRoot?.querySelector("wui-card");
            e?.focus(),
              window.addEventListener(
                "keydown",
                (t) => {
                  if ("Escape" === t.key) this.handleClose();
                  else if ("Tab" === t.key) {
                    let { tagName: o } = t.target;
                    !o ||
                      o.includes("W3M-") ||
                      o.includes("WUI-") ||
                      e?.focus();
                  }
                },
                this.abortController
              );
          }
          onRemoveKeyboardListener() {
            this.abortController?.abort(), (this.abortController = void 0);
          }
          async onNewAddress(e) {
            let t = n.RY.state.isSwitchingNamespace,
              o = n.j1.getPlainAddress(e);
            o || t ? t && o && n.RouterController.goBack() : n.IN.close(),
              await n.wf.initializeIfEnabled(),
              (this.caipAddress = e),
              n.RY.setIsSwitchingNamespace(!1);
          }
          onNewNetwork(e) {
            n.ApiController.prefetch();
            let t = this.caipNetwork?.caipNetworkId?.toString(),
              o = e?.caipNetworkId?.toString(),
              a = n.RY.state.isSwitchingNamespace,
              i = this.caipNetwork?.name === s.bq.UNSUPPORTED_NETWORK_NAME,
              r = "ConnectingExternal" === n.RouterController.state.view,
              d = !this.caipAddress,
              l = "UnsupportedChain" === n.RouterController.state.view;
            !r &&
              (d || l || (t && o && t !== o && !i && !a)) &&
              n.RouterController.goBack(),
              (this.caipNetwork = e);
          }
        };
      (h.styles = l),
        __decorate(
          [(0, i.Cb)({ type: Boolean })],
          h.prototype,
          "enableEmbedded",
          void 0
        ),
        __decorate([(0, i.SB)()], h.prototype, "open", void 0),
        __decorate([(0, i.SB)()], h.prototype, "caipAddress", void 0),
        __decorate([(0, i.SB)()], h.prototype, "caipNetwork", void 0),
        __decorate([(0, i.SB)()], h.prototype, "shake", void 0),
        (h = __decorate([(0, d.customElement)("w3m-modal")], h));
    },
  },
]);
