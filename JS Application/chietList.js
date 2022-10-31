const formData = new FormData(event.target);
const data = [...formData.entries()].reduce((a, [key, value]) => Object.assign(a, { [key]: value }), {});

