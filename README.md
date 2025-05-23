# JSON Cookie Reader (GTM Variable Template)

The **JSON Cookie Reader** is a Google Tag Manager (GTM) **Custom Variable Template** that reads a specified cookie, parses it as JSON, and returns the value from a given key path (e.g. `utm_source`, `click_id.value`).

It is especially useful when paired with a tag like the [Attribution Cookie Writer](https://github.com/dpezrez/gtm-attribution-cookie), which stores attribution data in a JSON-formatted cookie.

Built by [Daniel Perry-Reed](https://www.linkedin.com/in/danielperryreed/) – marketing analytics specialist at [Data to Value](https://www.datatovalue.com).

---

## ⚙️ What It Does

* Reads a cookie by name (e.g. `gtm_attr`)
* Decodes it (if URL-encoded)
* Parses the value as a JSON object
* Retrieves the value at a dot-notated key path (e.g. `click_id.value`)

---

## 🚀 How to Use


### 📦 Option 1: Import the Prebuilt GTM Container

If you want a ready-to-go setup, use the provided GTM container that includes the JSON Cookie Reader template and an example variable.

1. **Download the container file**
   📥 Download `gtm_json_cookie_reader_container.json` [here](./gtm_json_cookie_reader_container.json)

2. **Import into GTM**

   * Go to your GTM workspace > Admin > Import Container
   * Upload the downloaded JSON file
   * Choose your workspace
   * Select **Merge** and resolve any conflicts

3. **Review and publish**

   * The variable template and example variables should be ready to use
   * Update field values as needed and publish your container

### 🛠️ Option 2: Manual Setup

#### 1. Add the Custom Variable Template

* In GTM, go to **Templates** > **New Variable Template**
* Paste in the JavaScript from `json_cookie_reader.js` [here](./json_cookie_reader_template.js)
* Configure the permissions (see below)
* Save and name your variable template (e.g. "JSON Cookie Reader")

#### 2. Set Required Permissions

```json
{
  "permissions": {
    "read_cookies": ["*"],
    "apiAccess": [
      "getCookieValues",
      "decodeUriComponent",
      "JSON"
    ]
  }
}
```

#### 3. Create a Variable Using the Template

* Go to **Variables** > New
* Choose your custom variable template
* Fill in the fields:

  * **Cookie name**: the cookie to read from (e.g. `gtm_attr`)
  * **Key path**: the JSON key to extract (e.g. `utm_source` or `click_id.type`)

---

## 🔍 Example Usage

For a cookie named `gtm_attr` containing:

```json
{
  "utm_source": "google",
  "click_id": {
    "type": "gclid",
    "value": "abc123"
  }
}
```

| Key Path         | Returned Value |
| ---------------- | -------------- |
| `utm_source`     | `google`       |
| `click_id.type`  | `gclid`        |
| `click_id.value` | `abc123`       |

If the cookie is missing or the key doesn’t exist, the variable will return an empty string.

---

## 🟦 About Data to Value

Built and maintained by the team at [Data to Value](https://www.datatovalue.com) — your data activation partner helping marketing teams transform data into predictable revenue and growth.

---

## 📄 License

MIT
