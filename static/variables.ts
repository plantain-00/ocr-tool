// @ts-nocheck
/**
 * This file is generated by 'file2variable-cli'
 * It is not mean to be edited by hand
 */
import { createBlock as _createBlock, createVNode as _createVNode, Fragment as _Fragment, openBlock as _openBlock, renderList as _renderList, resolveComponent as _resolveComponent, toDisplayString as _toDisplayString, vModelCheckbox as _vModelCheckbox, withDirectives as _withDirectives } from 'vue'
// tslint:disable
/* eslint-disable */

export function indexTemplateHtml(_ctx, _cache) {
  const _component_file_uploader = _resolveComponent("file-uploader")

  return (_openBlock(), _createBlock("div", null, [
    (_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.languages, (language) => {
      return (_openBlock(), _createBlock("div", null, [
        _withDirectives(_createVNode("input", {
          type: "checkbox",
          id: language,
          value: language,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (_ctx.selectedLanguages = $event))
        }, null, 8 /* PROPS */, ["id", "value"]), [
          [_vModelCheckbox, _ctx.selectedLanguages]
        ]),
        _createVNode("label", { for: language }, _toDisplayString(language), 9 /* TEXT, PROPS */, ["for"])
      ]))
    }), 256 /* UNKEYED_FRAGMENT */)),
    _createVNode(_component_file_uploader, {
      onFileGot: _cache[2] || (_cache[2] = $event => (_ctx.fileGot($event))),
      accept: "image/*"
    }),
    _createVNode("pre", null, _toDisplayString(_ctx.text), 1 /* TEXT */)
  ]))
}
/* eslint-enable */
// tslint:enable
