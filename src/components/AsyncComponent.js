import React, { useState, useEffect } from "react";

export default function asyncComponent(importComponent) {
    const AsyncComponent = () => {
        const [Component, setComponent] = useState(() => null);

        useEffect(() => {
            const asyncImport = async () => {
                const { default: component } = await importComponent();
                setComponent(() => component);
            };

            asyncImport();
        }, []);

        return Component ? <Component {...this.props} /> : null;
    }

    return AsyncComponent;
}