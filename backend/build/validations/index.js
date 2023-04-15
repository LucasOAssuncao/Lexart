export default function validate(payload, schema) {
    const { error } = schema.validate(payload);
    if (error) {
        return {
            type: 'INVALID_FIELD',
            message: error.details[0].message,
        };
    }
    return { type: null };
}
;
//# sourceMappingURL=index.js.map