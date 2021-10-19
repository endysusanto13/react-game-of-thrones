```jsx
<div className="flex gap-4">
  <Button>Default</Button>
  <Button variant="primary">Primary</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="wideLight">Wide Light</Button>
  <Button variant="wideDark">Wide Dark</Button>
</div>
```

Use render to render element other than `button`. 
E.g. using `<a>` tag as render will generate `<a>` HTML element instead of `<button>`.

```jsx
<Button
  variant="primary"
  render={(btnProps) => <a {...btnProps} href="https://google.com" />}
>
  Go to Google
</Button>
```
