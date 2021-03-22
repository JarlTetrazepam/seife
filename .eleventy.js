module.exports = function(eleventyConfig) {
    
    eleventyConfig.setTemplateFormats([
        "md",
        "html",
        "css",
        "png",
        "jpg",
        "svg"
    ]);

    return {
        dir: {
            input: "views",
            output: "public"
        }
    };
};