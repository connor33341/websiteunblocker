export function SetUpEditor(){
    const script = document.createElement("script")
    script.type = "module"
    script.src = "https://cdn.jsdelivr.net/gh/vanillawc/wc-monaco-editor@1/index.js"
    document.head.appendChild(script)
    const editorDiv = document.getElementsByClassName("editor-area")
    const textarea = document.createElement("wc-monaco-editor")
    textarea.setAttribute("language", "javascript")
    textarea.setAttribute("src", `data:text/plain,${encodeURIComponent(document.documentElement.innerHTML)}`)
    editorDiv.appendChild(textarea)
    textarea.spellcheck = false
    return textarea
}
export class EditorController{
    constructor(textarea){
        this.textarea = textarea
    }
    ReturnText(){
        return this.textarea.value
    }
}