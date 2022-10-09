(() => {
    // main :: IO ()
    const main = () => {
        const googleTranslateElementInit =
            new google.translate.TranslateElement(
                {
                    pageLanguage: 'en', 
                    includedLanguages : 'es',
                    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
                }, 
                'google_translate_element'
            );
    };

    // GENERICS

    // compose (<<<) :: (b -> c) -> (a -> b) -> a -> c
    const compose = (...fs) =>
        // A function defined by the right-to-left
        // composition of all the functions in fs.
        fs.reduce(
            (f, g) => x => f(g(x)),
            x => x
        );

    // MAIN ---------------------------------------
    return main();
})();