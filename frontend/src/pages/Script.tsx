// ScriptPage.tsx
import React, { useState } from 'react';
import Editor from "@monaco-editor/react";
import axios from "axios";

const ScriptPage = () => {
  const [code, setCode] = useState(`#include <Arduino.h>

void setup() {
  Serial.begin(115200);
}

void loop() {
  Serial.println("Hello OTA!");
  delay(1000);
}`);

  const handleUpload = async () => {
    try {
      const response = await axios.post("http://localhost:5000/upload_script", {
        script: code,
      });

      alert(response.data.message);
      if (response.data.device_response) {
        alert("ESP responded: " + response.data.device_response);
      }
    } catch (err: any) {
      alert("upload failed: " + (err.response?.data?.error || "Unknown error"));
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">ESP OTA Code Editor</h1>
      <Editor
        height="400px"
        defaultLanguage="cpp"
        value={code}
        onChange={(val) => setCode(val || "")}
        theme="vs-dark"
      />
      <button
        onClick={handleUpload}
        className="mt-4 bg-airvibe-blue text-black font-semibold px-6 py-2 rounded"
      >
        Trigger OTA
      </button>
    </div>
  );
};

export default ScriptPage;
