```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: Returns a JSON file adding the newly posted data from the browser, for the browser to parse data and display accordingly the new data.
    deactivate server