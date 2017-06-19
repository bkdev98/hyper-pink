/**
|--------------------------------------------------
| Syntax schemes
|--------------------------------------------------
*/
const backgroundColor   = '#282A36';
const foregroundColor   = '#CDD2E9';
const cursorColor       = '#2C85F7';
const borderColor       = '#282A36';
const colors            = {
      black             : backgroundColor,
      red               : '#EC407A',
      green             : '#C5E1A5',
      yellow            : '#F8BBD0',
      blue              : '#F06292',
      magenta           : '#BE86E3',
      cyan              : '#F8BBD0',
      white             : foregroundColor,
      lightBlack        : '#546386',
      lightRed          : '#E17E85',
      lightGreen        : '#C5E1A5',
      lightYellow       : '#FFB68E',
      lightBlue         : '#4CB2FF',
      lightMagenta      : '#BE86E3',
      lightCyan         : '#F8BBD0',
      lightWhite        : foregroundColor
};

/**
|--------------------------------------------------
| Configs
|--------------------------------------------------
*/
exports.decorateConfig = config => {
    return Object.assign({}, config, {
        foregroundColor,
        backgroundColor,
        borderColor,
        colors,
        cursorColor: config.cursorColor || cursorColor,
        cursorShape: config.cursorShape || 'BEAM',
        fontSize: config.fontSize || 12,
        fontFamily: config.fontFamily || '"Fira Code"',
        termCSS: `
            ${config.termCSS || ''}
            ::selection {
                background: #9198A2 !important;
            }
            x-screen x-row {
                font-variant-ligatures: initial;
            }
            span {
                font-weight: normal !important;
            }
        `,
        css: `
            ${config.css || ''}
            ::selection {
                background: #9198A2 !important;
            }
        `
    });
};
