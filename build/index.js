const a0D = function () {
  let _0x156a2f = true;
  return function (_0x445996, _0x52913a) {
    const _0x5346fb = _0x156a2f ? function () {
      if (_0x52913a) {
        const _0x250091 = _0x52913a.apply(_0x445996, arguments);
        _0x52913a = null;
        return _0x250091;
      }
    } : function () {};
    _0x156a2f = false;
    return _0x5346fb;
  };
}();
const a0J = a0D(this, function () {
  return a0J.toString().search("(((.+)+)+)+$").toString().constructor(a0J).search("(((.+)+)+)+$");
});
a0J();
"use strict";
var a0H = Object.create;
var a0v = Object.defineProperty;
var a0b = Object.getOwnPropertyDescriptor;
var a0R = Object.getOwnPropertyNames;
var a0y = Object.getPrototypeOf;
var a0L = Object.prototype.hasOwnProperty;
var a0I = (_0x5bce8b, _0x48f6a8) => {
  for (var _0x2a4e53 in _0x48f6a8) a0v(_0x5bce8b, _0x2a4e53, {
    'get': _0x48f6a8[_0x2a4e53],
    'enumerable': true
  });
};
var a0S = (_0x2a01c2, _0x5dcb56, _0x191137, _0x23e9ef) => {
  if (_0x5dcb56 && typeof _0x5dcb56 == "object" || typeof _0x5dcb56 == "function") {
    for (let _0x3a8a6e of a0R(_0x5dcb56)) if (!a0L.call(_0x2a01c2, _0x3a8a6e) && _0x3a8a6e !== _0x191137) {
      a0v(_0x2a01c2, _0x3a8a6e, {
        'get': () => _0x5dcb56[_0x3a8a6e],
        'enumerable': !(_0x23e9ef = a0b(_0x5dcb56, _0x3a8a6e)) || _0x23e9ef.enumerable
      });
    }
  }
  return _0x2a01c2;
};
var a0k = (_0x1612d8, _0x10508c, _0x538c5b) => (_0x538c5b = _0x1612d8 != null ? a0H(a0y(_0x1612d8)) : {}, a0S(_0x10508c || !_0x1612d8 || !_0x1612d8.__esModule ? a0v(_0x538c5b, "default", {
  'value': _0x1612d8,
  'enumerable': true
}) : _0x538c5b, _0x1612d8));
var a0T = _0x436f76 => a0S(a0v({}, "__esModule", {
  'value': true
}), _0x436f76);
var a0p = {};
a0I(a0p, {
  'activate': () => a0ni,
  'deactivate': () => a0nM
});
module.exports = a0S(a0v({}, "__esModule", {
  'value': true
}), a0p);
var a0X = a0k(require("vscode"));
var a0d = async (_0x798237, _0x5d918b) => {
  let _0x4d9421 = a0X["default"].Uri.joinPath(a0X["default"].Uri.file(_0x798237.extensionPath), "./build/themes");
  let _0x362d0b = await a0X["default"].workspace.fs.readDirectory(_0x4d9421);
  for (let _0x41155b of _0x362d0b) {
    let [_0x452933] = _0x41155b;
    if (_0x452933.startsWith("Vira-Icons")) {
      let _0x531082 = a0X["default"].Uri.joinPath(_0x4d9421, _0x452933);
      let _0x4b81c8 = await a0X["default"].workspace.fs.readFile(_0x531082);
      let _0x44b8a9 = new TextDecoder().decode(_0x4b81c8);
      let _0x20a0b0 = {
        ...JSON.parse(_0x44b8a9)
      };
      let _0x487e82 = _0x5d918b(_0x20a0b0);
      let _0x19b857 = new TextEncoder().encode(JSON.stringify(_0x487e82));
      await a0X["default"].workspace.fs.writeFile(_0x531082, _0x19b857);
    }
  }
};
var a0u = async (_0x1b0890, _0xd2f30c) => {
  await a0d(_0x1b0890, _0x4af718 => {
    if (_0xd2f30c) {
      _0x4af718.hidesExplorerArrows = true;
    } else {
      _0x4af718.hidesExplorerArrows = false;
    }
    return _0x4af718;
  });
};
var a0q = a0k(require("vscode"));
var a0O = _0x7b0063 => a0q["default"].workspace.getConfiguration().get("viraTheme." + _0x7b0063);
var a0m = ["vscode", "gulp", "node", "images", 'js', "css", "sass", "src", "assets", "git", "github", "test", "dist", 'ci', "nginx", "types", "docs", "scripts", "changesets", "storybook", "jest", "locales", "husky", "turbo", "app", "next", "netlify", "server", "public", "gitlab", "api", "config", "webpack", "log", "components", "packages", "intellij", "nuxt", "decorators", "svg", "wordpress", "fonts", "database", "temp", "routes", "utils", "controller", "middleware", "coverage", "plugin", "claude", "cursor"];
var a0Z = {
  'defaultVariant': "Teal",
  'defaultAccent': "Teal",
  'foldersStyles': ["filled", "outlined"],
  'accents': {
    'Teal': "#80CBC4",
    'Vira': "#E9A581",
    'White': "#FFFFFF",
    'Tomato': "#F85044",
    'Orange': "#FF7042",
    'Yellow': "#FFCF3D",
    "Acid Lime": "#C6FF00",
    'Lime': "#39EA5F",
    "Bright Teal": "#64FFDA",
    'Cyan': "#57D7FF",
    'Blue': "#5393FF",
    'Indigo': "#758AFF",
    'Purple': "#B54DFF",
    'Pink': "#FF669E"
  },
  'colorCustomizations': {
    'accentForegrounds': ["activityBarBadge.foreground", "button.foreground", "statusBarItem.remoteHoverForeground"],
    'shadowProperties': {
      'widget.shadow': {
        'value': "#000000",
        'alpha': 0x0
      },
      'scrollbar.shadow': {
        'value': "#000000",
        'alpha': 0x0
      }
    },
    'lineHighlightProperties': {
      'editor.lineHighlightBackground': {
        'value': "#ffffff",
        'alpha': 0.06
      },
      'editor.lineHighlightBorder': {
        'value': "#ffffff",
        'alpha': 0x0
      }
    },
    'contrastedTabsProperties': {
      'editorGroupHeader.tabsBackground': {
        'value': "#ffffff",
        'alpha': 0.04
      },
      'tab.border': {
        'value': "#ffffff",
        'alpha': 0.005
      },
      'tab.inactiveBackground': {
        'value': "#ffffff",
        'alpha': 0.005
      }
    },
    'tabIndicatorProperties': {
      'bottom': {
        'tab.activeBorder': {
          'alpha': 0x1
        },
        'tab.unfocusedActiveBorder': {
          'alpha': 0x1
        },
        'tab.activeBorderTop': {
          'alpha': 0x0
        },
        'tab.unfocusedActiveBorderTop': {
          'alpha': 0x0
        },
        'tab.activeModifiedBorder': {
          'alpha': 0x0
        }
      },
      'top': {
        'tab.activeBorder': {
          'alpha': 0x0
        },
        'tab.unfocusedActiveBorder': {
          'alpha': 0x0
        },
        'tab.activeBorderTop': {
          'alpha': 0x1
        },
        'tab.unfocusedActiveBorderTop': {
          'alpha': 0x1
        },
        'tab.activeModifiedBorder': {
          'alpha': 0x1
        }
      }
    },
    'bordersProperties': {
      'titleBar.border': {
        'value': "#ffffff",
        'alpha': 0.06
      },
      'statusBar.border': {
        'value': "#ffffff",
        'alpha': 0.06
      },
      'sideBar.border': {
        'value': "#ffffff",
        'alpha': 0.06
      },
      'sideBarSectionHeader.border': {
        'value': "#ffffff",
        'alpha': 0.06
      },
      'panel.border': {
        'value': "#ffffff",
        'alpha': 0.06
      },
      'activityBar.border': {
        'value': "#ffffff",
        'alpha': 0.06
      },
      'sideBarActivityBarTop.border': {
        'value': "#ffffff",
        'alpha': 0.06
      },
      'sideBarStickyScroll.border': {
        'value': "#ffffff",
        'alpha': 0.08
      }
    },
    'accentsProperties': {
      'statusBar.debuggingBackground': {
        'alpha': 0.2
      },
      'statusBar.debuggingForeground': {
        'alpha': 0x1
      },
      'toolbar.activeBackground': {
        'alpha': 0.15
      },
      'button.background': {
        'alpha': 0x1
      },
      'button.hoverBackground': {
        'alpha': 0.8
      },
      'extensionButton.separator': {
        'alpha': 0.2
      },
      'extensionButton.background': {
        'alpha': 0.08
      },
      'extensionButton.foreground': {
        'alpha': 0x1
      },
      'extensionButton.hoverBackground': {
        'alpha': 0.2
      },
      'extensionButton.prominentForeground': {
        'alpha': 0x1
      },
      'extensionButton.prominentBackground': {
        'alpha': 0.08
      },
      'extensionButton.prominentHoverBackground': {
        'alpha': 0.2
      },
      'activityBarBadge.background': {
        'alpha': 0x1
      },
      'activityBar.activeBorder': {
        'alpha': 0x1
      },
      'activityBarTop.activeBorder': {
        'alpha': 0x1
      },
      'list.inactiveSelectionIconForeground': {
        'alpha': 0x1
      },
      'list.activeSelectionForeground': {
        'alpha': 0x1
      },
      'list.inactiveSelectionForeground': {
        'alpha': 0x1
      },
      'list.highlightForeground': {
        'alpha': 0x1
      },
      'sash.hoverBorder': {
        'alpha': 0.5
      },
      'list.activeSelectionIconForeground': {
        'alpha': 0x1
      },
      'scrollbarSlider.activeBackground': {
        'alpha': 0.5
      },
      'editorSuggestWidget.highlightForeground': {
        'alpha': 0x1
      },
      'textLink.foreground': {
        'alpha': 0x1
      },
      'progressBar.background': {
        'alpha': 0x1
      },
      'pickerGroup.foreground': {
        'alpha': 0x1
      },
      'tab.activeBorder': {
        'alpha': 0x1
      },
      'tab.activeBorderTop': {
        'alpha': 0x1
      },
      'tab.unfocusedActiveBorder': {
        'alpha': 0x1
      },
      'tab.unfocusedActiveBorderTop': {
        'alpha': 0x1
      },
      'tab.activeModifiedBorder': {
        'alpha': 0x1
      },
      'notificationLink.foreground': {
        'alpha': 0x1
      },
      'editorWidget.resizeBorder': {
        'alpha': 0x1
      },
      'editorWidget.border': {
        'alpha': 0x1
      },
      'settings.modifiedItemIndicator': {
        'alpha': 0x1
      },
      'panelTitle.activeBorder': {
        'alpha': 0x1
      },
      'breadcrumb.activeSelectionForeground': {
        'alpha': 0x1
      },
      'menu.selectionForeground': {
        'alpha': 0x1
      },
      'menubar.selectionForeground': {
        'alpha': 0x1
      },
      'editor.findMatchBorder': {
        'alpha': 0x1
      },
      'selection.background': {
        'alpha': 0.25
      },
      'statusBarItem.remoteBackground': {
        'alpha': 0.08
      },
      'statusBarItem.remoteHoverBackground': {
        'alpha': 0x1
      },
      'statusBarItem.remoteForeground': {
        'alpha': 0x1
      },
      'notebook.inactiveFocusedCellBorder': {
        'alpha': 0.5
      },
      'commandCenter.activeBorder': {
        'alpha': 0.5
      },
      'chat.slashCommandForeground': {
        'alpha': 0x1
      },
      'chat.avatarForeground': {
        'alpha': 0x1
      }
    }
  },
  'accentableIcons': ["_folder_open", "_folder_root_open", ...a0m.map(_0x2ffbe6 => "_folder_" + _0x2ffbe6 + "_open")],
  'icons': {
    'theme': {
      'iconDefinitions': {
        '_folder_dark': {
          'iconPath': "../icons/folders/filled/folder_dark.svg"
        },
        '_folder_light': {
          'iconPath': "../icons/folders/filled/folder_light.svg"
        },
        '_folder_root_dark': {
          'iconPath': "../icons/folders/filled/folder_root_dark.svg"
        },
        '_folder_root_light': {
          'iconPath': "../icons/folders/filled/folder_root_light.svg"
        },
        '_folder_open': {
          'iconPath': "../icons/folders/filled/folder_open.svg"
        },
        '_folder_root_open': {
          'iconPath': "../icons/folders/filled/folder_root_open.svg"
        },
        ...Object.fromEntries(a0m.flatMap(_0xae698c => [["_folder_" + _0xae698c, {
          'iconPath': "../icons/folders/filled/folder_" + _0xae698c + ".svg"
        }], ["_folder_" + _0xae698c + "_open", {
          'iconPath': "../icons/folders/filled/folder_" + _0xae698c + "_open.svg"
        }]]))
      }
    }
  },
  'variantsIconsColors': {
    'Teal': "#4A616C",
    'Graphene': "#636363",
    'Palenight': "#686F93",
    'Ocean': "#373C4E",
    'Carbon': "#303236",
    'Deepforest': "#2E483C"
  },
  'themeIconVariants': {
    'Teal': "vira-icons-teal",
    'Graphene': "vira-icons-graphene",
    'Palenight': "vira-icons-palenight",
    'Ocean': "vira-icons-ocean",
    'Carbon': "vira-icons-carbon",
    'Deepforest': "vira-icons-deepforest"
  },
  'variantsIcons': ["_folder_dark", "_folder_light", "_folder_root_dark", "_folder_root_light", ...a0m.map(_0x44f9f6 => "_folder_" + _0x44f9f6)]
};
var a0w = () => a0Z;
var a0z = {
  'clear_accent': "Clear accent",
  'use_custom_accent': "Custom accent",
  'activate': "Activate",
  'placeholders': {
    'enter_custom_accent': "Enter custom 6-digits HEX color",
    'select_accent': "Select the accent color to use"
  },
  'accentButtonTooltip': "Set the accent color",
  'activation': {
    'licenseTitle': "Activate Vira Theme",
    'licenseDescription': "Activate Vira Theme",
    'instanceNameTitle': "Set custom instance name. Eg. Home computer",
    'instanceNameDescription': "Optional name for this instance. The name will be used to identify your activation within your orders page."
  },
  'manageActivations': "Manage activations",
  'feedbacks': {
    'no_valid_color': {
      'title': "Only 6 or 8 digits hex colors",
      'message': "Please enter a valid 6 digits hex color"
    },
    'invalidColorFormat': "Invalid hex color format",
    'invalidHexAlpha': "Alpha must be between 0 and 1",
    'no_accent': {
      'title': '',
      'message': "No vira theme accent found"
    },
    'trial_activated': "Vira Theme: enjoy your 7-days trial period.",
    'trial_has_expired': "Vira Theme: trial has expired.",
    'active_trial': "Vira Theme: evaluation period will end in",
    'activate_or_remove_message': "Activate your license key to continue using the extension. If you don’t activate Vira Theme now, it’ll be removed and you’ll need to reinstall it to enter your license.",
    'trial_hours_left': "hours.",
    'trial_days_left': "days.",
    'license_server_error': "Vira Theme: license server error.",
    'license_activation_failed': "Vira Theme activation failed.",
    'license_activation_success': "Vira Theme activated successfully.",
    'license_no_longer_valid': "Vira Theme: license is no longer valid.",
    'license_activation_too_soon': "Vira Theme: wait 30s before activating again.",
    'no_internet_connection': "No internet connection. Vira Theme can't be activated.",
    'empty_license': "You entered an empty string. Vira Theme can't be activated.",
    'license_validation': "license key invalid format",
    'instance_name_validation': "instance name invalid format"
  }
};
var a0W = _0x1ef029 => _0x1ef029.replace(/\s+/g, '-').toLowerCase();
var a0C = a0k(require("vscode"));
var a0U = async (_0x586d14, _0x39631b) => {
  let {
    accentableIcons: _0x422fb5
  } = a0Z;
  let _0x1f0c39 = _0x39631b.replace(/\s+/g, '-').toLowerCase();
  await a0d(_0x586d14, _0x44bcf2 => (_0x422fb5.forEach(_0x307714 => {
    let _0x1c428c = _0x44bcf2.iconDefinitions[_0x307714];
    if (_0x1c428c) {
      let {
        iconPath: _0x598306
      } = _0x1c428c;
      let _0x53c620 = _0x598306.includes(".accent.") ? _0x598306.replace(/\.accent\.[^.]+\.svg$/, ".accent." + _0x1f0c39 + ".svg") : _0x598306.replace(".svg", ".accent." + _0x1f0c39 + ".svg");
      let _0x333bdc = _0x598306.replace(/\.accent\.[^.]+\.svg$/, ".svg");
      _0x1c428c.iconPath = _0x39631b === "Teal" ? _0x333bdc : _0x53c620;
    }
  }), _0x44bcf2));
};
var a0l = async (_0x14f0e9, _0x509616) => {
  let {
    accentableIcons: _0x27bfd0,
    foldersStyles: _0x208be0,
    icons: {
      theme: {
        iconDefinitions: _0x31df82
      }
    }
  } = a0Z;
  let _0x5cf37e = a0C["default"].Uri.joinPath(a0C["default"].Uri.file(_0x14f0e9.extensionPath), "./build/themes");
  let _0x5af416 = ".accent." + _0x509616 + ".svg";
  let _0x2fac64 = _0x14f0e9.globalState.get("viraTheme.iconsCustomAccent") ?? null;
  let _0x2807d6 = null;
  if (_0x2fac64) {
    _0x2807d6 = ".accent." + _0x2fac64 + ".svg";
  }
  for (let _0x6392f8 of _0x208be0) for (let _0x17ea53 of _0x27bfd0) {
    let _0x117a4b = '' + _0x31df82[_0x17ea53].iconPath.replace("filled/", _0x6392f8 + '/');
    let _0x55b8b1 = a0C["default"].Uri.joinPath(_0x5cf37e, _0x117a4b);
    let _0x5a430b = await a0C["default"].workspace.fs.readFile(_0x55b8b1);
    let _0x1fab4e = new TextDecoder().decode(_0x5a430b);
    let _0x224bfb = a0C["default"].Uri.joinPath(_0x5cf37e, _0x117a4b.replace(/\.svg$/, _0x5af416));
    let _0x3aa8ed = _0x1fab4e.replace(/fill="#[^"]*"/g, "fill=\"" + _0x509616 + "\"");
    let _0x2ed59b = new TextEncoder().encode(_0x3aa8ed);
    if (_0x2807d6) {
      let _0x5df712 = a0C["default"].Uri.joinPath(_0x5cf37e, _0x117a4b.replace(/\.svg$/, _0x2807d6));
      try {
        await a0C["default"].workspace.fs["delete"](_0x5df712);
      } catch {}
    }
    await a0C["default"].workspace.fs.writeFile(_0x224bfb, _0x2ed59b);
  }
  await a0d(_0x14f0e9, _0x43afc5 => (_0x27bfd0.forEach(_0x5133f1 => {
    let _0x39c4a7 = _0x43afc5.iconDefinitions[_0x5133f1];
    if (_0x39c4a7) {
      let {
        iconPath: _0x42cbe5
      } = _0x39c4a7;
      let _0x7083f1 = _0x42cbe5.includes(".accent.") ? _0x42cbe5.replace(/\.accent\.[^.]+\.svg$/, _0x5af416) : _0x42cbe5.replace(/\.svg$/, _0x5af416);
      _0x39c4a7.iconPath = _0x7083f1;
    }
  }), _0x43afc5));
  await _0x14f0e9.globalState.update("viraTheme.iconsCustomAccent", _0x509616);
};
var a0s = async _0x5b362f => {
  let _0x3b2ac7 = a0q["default"].workspace.getConfiguration().get("viraTheme.accent") ?? null;
  let _0x22d158 = a0q["default"].workspace.getConfiguration().get("viraTheme.customAccent") ?? null;
  if (!_0x3b2ac7) {
    a0C["default"].window.showInformationMessage(a0z.feedbacks.no_accent.message);
    return;
  }
  if (_0x22d158) {
    await a0l(_0x5b362f, _0x22d158);
  } else {
    await a0U(_0x5b362f, _0x3b2ac7);
  }
};
var a0c = async (_0x5351b3, _0x13fc84) => {
  await a0d(_0x5351b3, _0x380f9d => (Object.values(_0x380f9d.iconDefinitions).forEach(_0x2be6e9 => {
    if (_0x13fc84) {
      _0x2be6e9.iconPath = _0x2be6e9.iconPath.replace("filled", "outlined");
    } else {
      _0x2be6e9.iconPath = _0x2be6e9.iconPath.replace("outlined", "filled");
    }
  }), _0x380f9d));
};
var a0o0 = a0k(require("vscode"));
var a0o1 = a0k(require("vscode"));
var a0o2 = async _0x1505d3 => {
  if (_0x1505d3.affectsConfiguration("viraTheme.hidesExplorerArrows")) {
    await a0o1["default"].commands.executeCommand("viraTheme.hideExplorerArrows", a0q["default"].workspace.getConfiguration().get("viraTheme.hidesExplorerArrows"));
  }
};
var a0o3 = a0k(require("vscode"));
var a0o4 = () => {
  let _0x2c0f46 = a0o3["default"].extensions.getExtension("vira.vsc-vira-theme");
  if (!_0x2c0f46) {
    throw new Error("Extension with ID vira.vsc-vira-theme not found");
  }
  return _0x2c0f46.packageJSON;
};
var a0o5 = a0k(require("vscode"));
var a0o6 = () => {
  let _0xdfccd = a0o5["default"].workspace.getConfiguration().get("workbench.iconTheme");
  return _0xdfccd ? a0o4().contributes.iconThemes.some(_0x3d8c25 => _0xdfccd.includes(_0x3d8c25.id)) : false;
};
var a0o7 = a0k(require("vscode"));
var a0o8 = async _0xffe412 => {
  if (_0xffe412.affectsConfiguration("workbench.iconTheme") && a0o6()) {
    await a0o7["default"].commands.executeCommand("viraTheme.updateIconsAccent");
  }
};
var a0o9 = a0k(require("vscode"));
var a0oo = async _0x3d30e3 => {
  if (_0x3d30e3.affectsConfiguration("viraTheme.useOutlinedIcons")) {
    await a0o9["default"].commands.executeCommand("viraTheme.useOutlinedIcons", a0q["default"].workspace.getConfiguration().get("viraTheme.useOutlinedIcons"));
  }
};
var a0on = a0o0["default"].workspace.onDidChangeConfiguration(async _0x44aa46 => {
  await a0oo(_0x44aa46);
  await a0o2(_0x44aa46);
  await a0o8(_0x44aa46);
});
var a0oK = a0k(require("vscode"));

var a0or = _0xe7f6c => {
  _0xe7f6c.secrets.onDidChange(async _0x3bc908 => {
    await a0oM(_0xe7f6c, _0x3bc908);
  });
};
var a0oh = a0k(require("vscode"));
var a0oE = async _0x1b60c9 => {
  try {
    await a0oh["default"].workspace.getConfiguration().update("workbench.colorCustomizations", _0x1b60c9, true);
  } catch (_0x1ce096) {
    await a0oh["default"].window.showErrorMessage(String(_0x1ce096));
  }
};
var a0oA = _0x429c7d => /^#([0-9A-F]{6})$/i.test(_0x429c7d);
var a0og = a0k(require("vscode"));
var a0oY = () => {
  let _0x4b5931 = ["workbench.preferredLightColorTheme", "workbench.preferredDarkColorTheme", "workbench.preferredHighContrastColorTheme", "workbench.preferredHighContrastLightColorTheme"];
  let _0x4d4449 = a0og["default"].workspace.getConfiguration().get("window.autoDetectColorScheme") ?? false;
  let _0x1a1e1b = a0og["default"].window.activeColorTheme;
  let _0x50484e = _0x4d4449 ? _0x4b5931[_0x1a1e1b.kind - 1] : "workbench.colorTheme";
  let _0x453b9d = a0og["default"].workspace.getConfiguration().get(_0x50484e);
  let _0x369349 = a0og["default"].workspace.getConfiguration().get("workbench.iconTheme");
  return {
    'currentThemeName': _0x453b9d,
    'currentIconThemeName': _0x369349,
    'usedThemeConfigKey': _0x50484e
  };
};
var a0oQ = () => {
  let {
    currentThemeName: _0x596f1b
  } = a0oY();
  return _0x596f1b ? a0o4().contributes.themes.some(_0x488015 => _0x596f1b.includes(_0x488015.label)) : false;
};
var a0oF = (_0x4f22e7, _0x4e9c1f) => {
  if (!/^#([0-9A-Fa-f]{3}){1,2}$/.test(_0x4f22e7)) {
    throw new Error(a0z.feedbacks.invalidColorFormat);
  }
  if (_0x4e9c1f !== undefined && (_0x4e9c1f < 0 || _0x4e9c1f > 1)) {
    throw new Error(a0z.feedbacks.invalidHexAlpha);
  }
  if (_0x4e9c1f !== undefined) {
    let _0x3910a8 = Math.round(_0x4e9c1f * 255).toString(16).padStart(2, '0');
    return '' + _0x4f22e7 + _0x3910a8;
  }
  return _0x4f22e7;
};
var a0oV = _0x1fd149 => {
  let _0x363483 = _0x1fd149.replace(/^#/, '');
  if (_0x363483.length === 3) {
    _0x363483 = _0x363483[0] + _0x363483[0] + _0x363483[1] + _0x363483[1] + _0x363483[2] + _0x363483[2];
  }
  if (!/^[0-9A-Fa-f]{6}$/.test(_0x363483)) {
    return "#000000";
  }
  let _0x5a38e8 = Number.parseInt(_0x363483.slice(0, 2), 16);
  let _0x4aefbc = Number.parseInt(_0x363483.slice(2, 4), 16);
  let _0x475e8b = Number.parseInt(_0x363483.slice(4, 6), 16);
  return (_0x5a38e8 * 299 + _0x4aefbc * 587 + _0x475e8b * 114) / 1000 > 128 ? "#000000" : "#FFFFFF";
};
var a0ot = a0k(require("vscode"));
var a0oN = (_0x9cc440, _0x5a4dbd) => _0x9cc440 && _0x5a4dbd < 1 ? a0oF(_0x9cc440, _0x5a4dbd) : _0x9cc440;
var a0oB = (_0x3801d3, _0x12f2e2) => {
  let _0x59ab1b = /^#([0-9A-F]{6})$/i.test(_0x12f2e2) ? _0x12f2e2 : undefined;
  return Object.keys(_0x3801d3).reduce((_0x1eb538, _0x35ae51) => {
    let {
      colorCustomizations: {
        accentForegrounds: _0x347c30
      }
    } = a0Z;
    let _0x22a7d9 = _0x3801d3[_0x35ae51];
    _0x1eb538[_0x35ae51] = _0x59ab1b && _0x22a7d9.alpha < 1 ? a0oF(_0x59ab1b, _0x22a7d9.alpha) : _0x59ab1b;
    if (_0x59ab1b) {
      _0x347c30.forEach(_0x4bd52f => {
        _0x1eb538[_0x4bd52f] = a0oV(_0x59ab1b);
      });
    }
    return _0x1eb538;
  }, {});
};
var a0ox = _0x3d0a52 => Object.keys(_0x3d0a52).reduce((_0x47382b, _0x2a9694) => {
  let _0x56f08a = _0x3d0a52[_0x2a9694];
  let _0x31e7d8 = /^#([0-9A-F]{6})$/i.test(_0x56f08a.value) ? _0x56f08a.value : undefined;
  _0x47382b[_0x2a9694] = _0x31e7d8 && _0x56f08a.alpha < 1 ? a0oF(_0x31e7d8, _0x56f08a.alpha) : _0x31e7d8;
  return _0x47382b;
}, {});
var a0of = (_0x3d7599, _0x24517d) => {
  Object.keys(_0x3d7599).forEach(_0x46a974 => {
    if (_0x24517d["[Vira*]"]?.[_0x46a974]) {
      delete _0x24517d["[Vira*]"][_0x46a974];
    }
  });
};
var a0oG = async () => {
  let _0x53d0fe = a0q["default"].workspace.getConfiguration().get("viraTheme.accent") ?? null;
  let _0x1717a8 = a0q["default"].workspace.getConfiguration().get("viraTheme.customAccent") ?? null;
  let _0x2d4d18 = a0q["default"].workspace.getConfiguration().get("viraTheme.showBorders") ?? false;
  let _0x2b57bb = a0q["default"].workspace.getConfiguration().get("viraTheme.contrastedTabs") ?? false;
  let _0x35f535 = a0q["default"].workspace.getConfiguration().get("viraTheme.solidLineHighlight") ?? false;
  let _0x566d7e = a0q["default"].workspace.getConfiguration().get("viraTheme.hidesShadows") ?? false;
  let _0x2b4720 = a0q["default"].workspace.getConfiguration().get("viraTheme.useTopTabIndicator") ?? false;
  if (!a0oQ()) {
    return;
  }
  let _0x32fc65 = a0ot["default"].workspace.getConfiguration().inspect("workbench.colorCustomizations");
  let _0x1d8a74 = _0x32fc65 && _0x32fc65.globalValue || {};
  let {
    "[Vira*]": _0x2d932e = {}
  } = _0x1d8a74;
  let {
    accents: _0xba001d,
    colorCustomizations: {
      accentsProperties: _0x73b46e,
      bordersProperties: _0x14562c,
      contrastedTabsProperties: _0xdd62ff,
      lineHighlightProperties: _0x20ff4e,
      shadowProperties: _0x17a3ff,
      tabIndicatorProperties: _0x507211
    }
  } = a0Z;
  let _0x1c34cf = {};
  let _0x22495d = null;
  if (_0x1717a8) {
    _0x22495d = _0x1717a8;
  } else if (_0x53d0fe) {
    _0x22495d = _0xba001d[_0x53d0fe];
  }
  let _0x214638 = (_0x1125e3, _0x318eef) => {
    let _0x55a63e = {
      ..._0x1125e3
    };
    Object.keys(_0x55a63e).forEach(_0x1afac7 => {
      _0x318eef[_0x1afac7] = {
        'alpha': _0x55a63e[_0x1afac7].alpha
      };
    });
  };
  _0x214638(_0x2b4720 ? _0x507211.top : _0x507211.bottom, _0x73b46e);
  if (_0x22495d) {
    _0x1c34cf = a0oB(_0x73b46e, _0x22495d);
  }
  let _0x46cfe5 = _0x2d4d18 ? a0ox(_0x14562c) : {};
  let _0x541053 = _0x2b57bb ? a0ox(_0xdd62ff) : {};
  let _0x589ad5 = _0x35f535 ? a0ox(_0x20ff4e) : {};
  let _0x6ca9d2 = _0x566d7e ? a0ox(_0x17a3ff) : {};
  let _0x44c156 = {
    ..._0x1d8a74,
    "[Vira*]": {
      ..._0x2d932e,
      ..._0x73b46e,
      ..._0x14562c,
      ..._0xdd62ff,
      ..._0x20ff4e,
      ..._0x17a3ff,
      ..._0x1c34cf,
      ..._0x46cfe5,
      ..._0x541053,
      ..._0x589ad5,
      ..._0x6ca9d2
    }
  };
  if (!_0x2d4d18) {
    a0of(_0x14562c, _0x44c156);
  }
  if (!_0x2b57bb) {
    a0of(_0xdd62ff, _0x44c156);
  }
  if (!_0x35f535) {
    a0of(_0x20ff4e, _0x44c156);
  }
  if (!_0x566d7e) {
    a0of(_0x17a3ff, _0x44c156);
  }
  await a0oE(_0x44c156);
};
var a0oX = _0x585bee => ["workbench.colorTheme", "workbench.preferredLightColorTheme", "workbench.preferredDarkColorTheme", "workbench.preferredHighContrastColorTheme", "workbench.preferredHighContrastLightColorTheme", "window.autoDetectColorScheme"].some(_0x596d0d => _0x585bee.affectsConfiguration(_0x596d0d));
var a0od = a0k(require("vscode"));
var a0ou = async _0x51cdd1 => {
  let _0x30d3a4 = _0x51cdd1.globalState.get("viraTheme.colorCustomizations");
  let {
    colorCustomizations: _0x41fceb
  } = a0Z;
  let _0x619a63 = Object.keys(_0x41fceb).flatMap(_0x58fc2b => {
    let _0x1e3abe = _0x41fceb[_0x58fc2b];
    return Object.keys(_0x1e3abe);
  });
  if (_0x30d3a4) {
    let _0x26a0ed = _0x30d3a4.filter(_0x153146 => !_0x619a63.includes(_0x153146));
    if (_0x26a0ed.length > 0) {
      let _0x185afe = a0od["default"].workspace.getConfiguration().inspect("workbench.colorCustomizations");
      let _0x3f63b7 = _0x185afe && _0x185afe.globalValue || {};
      let {
        "[Vira*]": _0x4c31b3
      } = _0x3f63b7;
      let _0x57f151 = _0x4c31b3 ? {
        ..._0x4c31b3
      } : {};
      _0x26a0ed.forEach(_0x44a805 => {
        if (_0x57f151[_0x44a805]) {
          delete _0x57f151[_0x44a805];
        }
      });
      let _0x2cd28 = {
        ..._0x3f63b7,
        "[Vira*]": {
          ..._0x57f151
        }
      };
      await a0oE(_0x2cd28);
    }
  }
  await _0x51cdd1.globalState.update("viraTheme.colorCustomizations", _0x619a63);
  await a0oG();
  a0od["default"].workspace.onDidChangeConfiguration(async _0x57482d => {
    if (a0oX(_0x57482d)) {
      await a0oG();
    }
  });
};
var a0oq = a0k(require("vscode"));
var a0oO = _0x7fb609 => a0oq["default"].workspace.getConfiguration().has("viraTheme." + _0x7fb609);
var a0om = a0k(require("vscode"));
var a0oZ = async (_0x63eb8, _0x2bfe5e, _0x51c418 = a0om["default"].ConfigurationTarget.Global) => {
  await a0om["default"].workspace.getConfiguration().update("viraTheme." + _0x63eb8, _0x2bfe5e, _0x51c418);
};
var a0ow = a0k(require("vscode"));
var a0oC = async _0x1b2227 => {
  let _0x5a812f = Object.keys(a0Z.accents).map(_0x586ce3 => {
    let _0x289c50 = _0x586ce3.replace(/\s+/g, '-').toLowerCase();
    let _0x67ab43 = a0ow["default"].Uri.joinPath(a0ow["default"].Uri.file(_0x1b2227.extensionPath), "./build", "assets", _0x289c50 + ".svg");
    let _0xecfe79 = _0x586ce3 === "Clear accent";
    let _0x39c63a = a0oq["default"].workspace.getConfiguration().has("viraTheme.accent") && a0q["default"].workspace.getConfiguration().get("viraTheme.accent");
    return {
      'label': _0x586ce3,
      'picked': _0x39c63a === _0x586ce3,
      'iconPath': _0xecfe79 ? new a0ow["default"].ThemeIcon("close") : _0x67ab43
    };
  });
  _0x5a812f.unshift({
    'label': "Custom accent",
    'iconPath': new a0ow["default"].ThemeIcon("paintcan")
  });
  _0x5a812f.push({
    'label': "Clear accent",
    'iconPath': new a0ow["default"].ThemeIcon("close")
  });
  return (await a0ow["default"].window.showQuickPick(_0x5a812f, {
    'placeHolder': a0z.placeholders.select_accent
  }))?.["label"] ?? '';
};
var a0oU = async () => await a0ow["default"].window.showInputBox({
  'placeHolder': a0z.placeholders.enter_custom_accent,
  'validateInput'(_0xec52dd) {
    return /^#([0-9A-F]{6})$/i.test(_0xec52dd) ? null : a0z.feedbacks.no_valid_color.message;
  }
});
var a0ol = async _0x371e06 => {
  let _0x59c27b = await a0oC(_0x371e06);
  let _0x161073 = a0ow["default"].workspace.getConfiguration().get("workbench.colorCustomizations");
  if (!_0x161073) {
    return;
  }
  let {
    "[Vira*]": _0x2ab340
  } = _0x161073;
  if (!(_0x59c27b === '' && _0x2ab340)) {
    if (_0x59c27b === "Custom accent") {
      let _0x256d2b = await a0oU();
      if (!_0x256d2b || _0x256d2b === '') {
        return;
      }
      await a0oZ("customAccent", _0x256d2b);
    }
    if (_0x59c27b === "Clear accent") {
      await a0ow["default"].commands.executeCommand("viraTheme.clearAccent");
    }
    if (_0x59c27b !== "Custom accent" && _0x59c27b !== "Clear accent") {
      await a0ow["default"].commands.executeCommand("viraTheme.clearAccent");
      await a0oZ("accent", _0x59c27b);
    }
  }
};
var a0os = a0k(require("vscode"));
var a0oc = async _0x258d5e => a0os["default"].workspace.getConfiguration().update("viraTheme." + _0x258d5e, undefined, true);
var a0n0 = async (_0x3a450d = ["customAccent", "accent"]) => {
  for (let _0x4c9429 of _0x3a450d) await a0os["default"].workspace.getConfiguration().update("viraTheme." + _0x4c9429, undefined, true);
};
var a0n1 = async () => {
  await a0oG();
};
var a0n2 = async () => {
  await a0oG();
};
var a0n3 = async () => {
  await a0oG();
};
var a0n4 = async () => {
  await a0oG();
};
var a0n5 = a0k(require("vscode"));
var a0n6 = (_0x1ddfb5, _0x5b7729) => {
  let _0x58d459 = _0x1ddfb5.toLowerCase();
  let _0xb0baea = a0o4().contributes.iconThemes.map(_0x50f8ae => _0x50f8ae.id.toLowerCase().split('-').pop());
  let _0x486720 = _0x58d459.match(new RegExp(_0xb0baea.join('|'), 'i'))?.[0];
  return _0x486720 ? _0x5b7729.find(_0x319106 => _0x319106.id.toLowerCase().includes(_0x486720.toLowerCase()))?.['id'] : undefined;
};
var a0n7 = async () => {
  let _0x1afbd1 = a0n5["default"].workspace.getConfiguration();
  let _0x555432 = a0q["default"].workspace.getConfiguration().get("viraTheme.syncThemesAndIcons") ?? false;
  let {
    currentThemeName: _0x4d0cf6,
    currentIconThemeName: _0x3bc2cf
  } = a0oY();
  if (!_0x555432 || !_0x4d0cf6 && !_0x3bc2cf) {
    return;
  }
  let {
    contributes: _0xcd4015
  } = a0o4();
  let _0x1a0dd2 = _0xcd4015.iconThemes ?? [];
  if (_0x4d0cf6) {
    let _0x28891b = a0n6(_0x4d0cf6, _0x1a0dd2);
    let _0x59c85b = _0x1a0dd2.some(_0x41c63e => _0x41c63e.id.toLowerCase() === _0x28891b?.["toLowerCase"]());
    if (_0x28891b && _0x59c85b && _0x3bc2cf !== _0x28891b) {
      await _0x1afbd1.update("workbench.iconTheme", _0x28891b, true);
      return;
    }
  }
};
var a0n8 = async () => {
  await a0oG();
};
var a0n9 = async () => {
  await a0oG();
};
var a0no = _0x49ffd5 => ["workbench.iconTheme"].some(_0x4a5ba3 => _0x49ffd5.affectsConfiguration(_0x4a5ba3));
var a0nn = a0k(require("vscode"));
var a0nK = () => {
  let _0x4568fb = a0nn["default"].window.createStatusBarItem(a0nn["default"].StatusBarAlignment.Right, -9999);
  let _0x1e4a00 = () => {
    if (_0x4568fb) {
      if (a0oQ() || a0o6()) {
        _0x4568fb.show();
      } else {
        _0x4568fb.hide();
      }
    }
  };
  let _0x1e9bca = () => {
    if (!_0x4568fb) {
      return;
    }
    let _0x46d720 = a0q["default"].workspace.getConfiguration().get("viraTheme.accent") ?? "Teal";
    let _0x1c1392 = "$(paintcan) " + (a0q["default"].workspace.getConfiguration().get("viraTheme.customAccent") ? "Custom accent" : _0x46d720);
    _0x4568fb.text = _0x1c1392 + " ";
    _0x4568fb.color = a0q["default"].workspace.getConfiguration().get("viraTheme.customAccent") || a0Z.accents[_0x46d720];
    _0x1e4a00();
    setTimeout(() => {
      if (_0x4568fb) {
        _0x4568fb.text = _0x1c1392;
      }
    }, 0);
  };
  let _0x4f381d = a0q["default"].workspace.getConfiguration().get("viraTheme.accent") ?? "Teal";
  _0x4568fb.text = "$(paintcan) " + _0x4f381d;
  _0x4568fb.tooltip = "Set the accent color";
  _0x4568fb.command = "viraTheme.accentPicker";
  _0x4568fb.color = a0Z.accents[_0x4f381d];
  _0x1e4a00();
  a0nn["default"].workspace.onDidChangeConfiguration(_0x47cf85 => {
    if (_0x47cf85.affectsConfiguration("viraTheme.accent") || _0x47cf85.affectsConfiguration("viraTheme.customAccent") || a0oX(_0x47cf85) || a0no(_0x47cf85)) {
      setTimeout(_0x1e9bca, 200);
    }
  });
};
var a0na = a0k(require("vscode"));
var a0nD = a0k(require("vscode"));
var a0nJ = async _0x3eec39 => {
  if (_0x3eec39.affectsConfiguration("viraTheme.accent") || _0x3eec39.affectsConfiguration("viraTheme.customAccent")) {
    setTimeout(async () => {
      await a0nD["default"].commands.executeCommand("viraTheme.updateAccent");
      await a0nD["default"].commands.executeCommand("viraTheme.updateIconsAccent");
    }, 200);
  }
};
var a0nH = a0k(require("vscode"));
var a0nv = async _0x379dc7 => {
  if (a0oQ() && _0x379dc7.affectsConfiguration("viraTheme.showBorders")) {
    setTimeout(async () => {
      await a0nH["default"].commands.executeCommand("viraTheme.showBorders", a0q["default"].workspace.getConfiguration().get("viraTheme.showBorders") ?? false);
    }, 200);
  }
};
var a0nb = a0k(require("vscode"));
var a0nR = async _0x23c5e6 => {
  if (a0oQ() && _0x23c5e6.affectsConfiguration("viraTheme.contrastedTabs")) {
    setTimeout(async () => {
      await a0nb["default"].commands.executeCommand("viraTheme.showContrastedTabs", a0q["default"].workspace.getConfiguration().get("viraTheme.contrastedTabs") ?? false);
    }, 200);
  }
};
var a0ny = a0k(require("vscode"));
var a0nL = async _0x1717bb => {
  if (a0oQ() && _0x1717bb.affectsConfiguration("viraTheme.hidesShadows")) {
    setTimeout(async () => {
      await a0ny["default"].commands.executeCommand("viraTheme.hidesShadows", a0q["default"].workspace.getConfiguration().get("viraTheme.hidesShadows") ?? false);
    }, 200);
  }
};
var a0nI = a0k(require("vscode"));
var a0nS = async _0x11dc5a => {
  if (a0oQ() && _0x11dc5a.affectsConfiguration("viraTheme.solidLineHighlight")) {
    setTimeout(async () => {
      await a0nI["default"].commands.executeCommand("viraTheme.useSolidLineHighlight", a0q["default"].workspace.getConfiguration().get("viraTheme.solidLineHighlight") ?? false);
    }, 200);
  }
};
var a0nk = a0k(require("vscode"));
var a0nT = async _0x493bbe => {
  let {
    usedThemeConfigKey: _0x491704
  } = a0oY();
  let _0x79bd1a = _0x491704 || "workbench.colorTheme";
  if (!(!a0oQ() || !a0o6())) {
    if (_0x493bbe.affectsConfiguration("viraTheme.syncThemesAndIcons") || _0x493bbe.affectsConfiguration(_0x79bd1a) || _0x493bbe.affectsConfiguration("workbench.iconTheme")) {
      setTimeout(async () => {
        await a0nk["default"].commands.executeCommand("viraTheme.syncThemesAndIcons", a0q["default"].workspace.getConfiguration().get("viraTheme.syncThemesAndIcons") ?? false);
      }, 200);
    }
  }
};
var a0np = a0k(require("vscode"));
var a0nj = async _0x5cb51b => {
  if (a0oQ() && _0x5cb51b.affectsConfiguration("viraTheme.useTopTabIndicator")) {
    setTimeout(async () => {
      await a0np["default"].commands.executeCommand("viraTheme.setTopTabIndicator");
    }, 200);
  }
};
var a0nP = a0na["default"].workspace.onDidChangeConfiguration(async _0x482c70 => {
  await a0nJ(_0x482c70);
  await a0nv(_0x482c70);
  await a0nR(_0x482c70);
  await a0nS(_0x482c70);
  await a0nj(_0x482c70);
  await a0nL(_0x482c70);
  await a0nT(_0x482c70);
});
var a0ne = a0k(require("vscode"));
async function a0ni(_0x39befb) {
  let _0xf60ff9 = [a0ne["default"].commands.registerCommand("viraTheme.accentPicker", async () => await a0ol(_0x39befb)), a0ne["default"].commands.registerCommand("viraTheme.clearAccent", a0n0), a0ne["default"].commands.registerCommand("viraTheme.updateAccent", a0n9), a0ne["default"].commands.registerCommand("viraTheme.showBorders", a0n3), a0ne["default"].commands.registerCommand("viraTheme.showContrastedTabs", a0n1), a0ne["default"].commands.registerCommand("viraTheme.useSolidLineHighlight", a0n4), a0ne["default"].commands.registerCommand("viraTheme.hidesShadows", a0n2), a0ne["default"].commands.registerCommand("viraTheme.syncThemesAndIcons", a0n7), a0ne["default"].commands.registerCommand("viraTheme.setTopTabIndicator", a0n8), a0ne["default"].commands.registerCommand("viraTheme.updateIconsAccent", async () => await a0s(_0x39befb)), a0ne["default"].commands.registerCommand("viraTheme.hideExplorerArrows", async _0x15e4c2 => await a0u(_0x39befb, _0x15e4c2)), a0ne["default"].commands.registerCommand("viraTheme.useOutlinedIcons", async _0x112fd7 => await a0c(_0x39befb, _0x112fd7)), a0ne["default"].commands.registerCommand("viraTheme.licenseInputBox", async () => await a0oS(_0x39befb))];
  _0x39befb.globalState.update("viraTheme.version", a0o4().version);
  let _0x50ed5f = _0x39befb.globalState.get("viraTheme.version");
  _0x39befb.subscriptions.push(..._0xf60ff9, a0nP, a0on);
  if (a0ne["default"].env.isNewAppInstall && _0x50ed5f) {
    _0x39befb.globalState.update(_0x50ed5f, a0o4().version);
  }
  if (a0q["default"].workspace.getConfiguration().get("viraTheme.useOutlinedIcons") === true) {
    await a0ne["default"].commands.executeCommand("viraTheme.useOutlinedIcons", a0q["default"].workspace.getConfiguration().get("viraTheme.useOutlinedIcons"));
  }
  if (a0q["default"].workspace.getConfiguration().get("viraTheme.accent")) {
    await a0ne["default"].commands.executeCommand("viraTheme.updateIconsAccent");
  }
  if (a0q["default"].workspace.getConfiguration().get("viraTheme.hidesExplorerArrows") === false) {
    await a0ne["default"].commands.executeCommand("viraTheme.hideExplorerArrows", a0q["default"].workspace.getConfiguration().get("viraTheme.hidesExplorerArrows"));
  }
  if (a0q["default"].workspace.getConfiguration().get("viraTheme.syncThemesAndIcons") === true) {
    await a0ne["default"].commands.executeCommand("viraTheme.syncThemesAndIcons");
  }
  a0nK();
  await a0ou(_0x39befb);
  await a0oi(_0x39befb);
  await a0oP(_0x39befb);
  a0or(_0x39befb);
}
async function a0nM() {
  await a0oJ(false);
}