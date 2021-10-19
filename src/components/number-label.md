```jsx
<div className="flex gap-4">
  Default:<NumberLabel>1</NumberLabel>
  Primary:<NumberLabel variant="primary">2</NumberLabel>
  Outline:<NumberLabel variant="outline">3</NumberLabel>
</div>
```

Use render to render element other than `button`. 
E.g. using `<a>` tag as render will generate `<a>` HTML element instead of `<button>`.

```jsx
<NumberLabel
  variant="primary"
  render={(btnProps) => <a {...btnProps} href="https://google.com" />}
>
  Go to Google
</NumberLabel>
```
