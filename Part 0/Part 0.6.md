```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note right of browser: Send data 
    server-->>browser: {"message":"note created"}
    Note right of browser: The browser executes a function that will redraw the notes
    deactivate server
```
