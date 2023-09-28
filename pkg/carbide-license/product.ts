// this is the definition of a "blank cluster" for Rancher Dashboard
// definition of a "blank cluster" in Rancher Dashboard
const BLANK_CLUSTER = '_';

export function init($plugin:any, store:any) {
    const YOUR_PRODUCT_NAME = 'Carbide License';
    const YOUR_K8S_RESOURCE_NAME = 'cert-manager.io.certificate';
    const YOUR_OTHER_K8S_RESOURCE_NAME = 'cert-manager.io.clusterissuer';
    const LICENSE_RESOURCE = 'secret';
    const CUSTOM_PAGE_NAME = 'Dashboard';

    const {
        product,
        configureType,
        virtualType,
        basicType
    } = $plugin.DSL(store, YOUR_PRODUCT_NAME);

    // registering a top-level product
    product({
        // icon:    'file',
        svg: require('./license.svg'),
        inStore: 'management',
        weight:  100,
        to:      {
            name:   `${ YOUR_PRODUCT_NAME }-c-cluster-${ CUSTOM_PAGE_NAME }`,
            params: {
                product: YOUR_PRODUCT_NAME,
                cluster: BLANK_CLUSTER
            }
        }
    });

    configureType(LICENSE_RESOURCE, {
        // displayName: 'not certificates',
        isCreatable: true,
        isEditable:  true,
        isRemovable: true,
        showAge:     true,
        showState:   true,
        canYaml:     true,
        customRoute: {
            name:   `${ YOUR_PRODUCT_NAME }-c-cluster-resource`,
            params: {
                product:  YOUR_PRODUCT_NAME,
                cluster:  BLANK_CLUSTER,
                resource: LICENSE_RESOURCE
            }
        }
    });

    configureType(YOUR_K8S_RESOURCE_NAME, {
        // displayName: 'not certificates',
        isCreatable: true,
        isEditable:  true,
        isRemovable: true,
        showAge:     true,
        showState:   true,
        canYaml:     true,
        customRoute: {
            name:   `${ YOUR_PRODUCT_NAME }-c-cluster-resource`,
            params: {
                product:  YOUR_PRODUCT_NAME,
                cluster:  BLANK_CLUSTER,
                resource: YOUR_K8S_RESOURCE_NAME
            }
        }
    });

    configureType(YOUR_OTHER_K8S_RESOURCE_NAME, {
        // displayName: 'not certificates',
        isCreatable: true,
        isEditable:  true,
        isRemovable: true,
        showAge:     true,
        showState:   true,
        canYaml:     true,
        customRoute: {
            name:   `${ YOUR_PRODUCT_NAME }-c-cluster-resource`,
            params: {
                product:  YOUR_PRODUCT_NAME,
                cluster:  BLANK_CLUSTER,
                resource: YOUR_OTHER_K8S_RESOURCE_NAME 
            }
        }
    });

    // dashboard
    virtualType({
        labelKey: 'some.translation.key',
        name:     CUSTOM_PAGE_NAME,
        route:    {
            name:   `${ YOUR_PRODUCT_NAME }-c-cluster-${ CUSTOM_PAGE_NAME }`,
            params: {
                product: YOUR_PRODUCT_NAME,
                cluster: BLANK_CLUSTER
            }
        }
    });

    // registering the defined pages as side-menu entries
    basicType([LICENSE_RESOURCE, YOUR_OTHER_K8S_RESOURCE_NAME, CUSTOM_PAGE_NAME]);
    basicType([YOUR_K8S_RESOURCE_NAME], 'More');
}
