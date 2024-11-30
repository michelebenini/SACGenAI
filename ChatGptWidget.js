"temperature": 0.5
})
});
        const {
          choices
        } = await response.json();
        const generatedTextValue = choices[0].text;
        generatedText.value = generatedTextValue.replace(/^\n+/, '');

        if (response.status === 200) {
          const {
            choices
          } = await response.json();
          const generatedTextValue = choices[0].text;
          generatedText.value = generatedTextValue.replace(/^\n+/, '');
        } else {
          const error = await response.json();
          alert("OpenAI Response: " + error.error.message);
          generatedText.value = "";
        }
});
}
onCustomWidgetBeforeUpdate(changedProperties) {
@@ -118,4 +125,4 @@
}
}
customElements.define("com-rohitchouhan-sap-chatgptwidget", Widget);
})();
})();
