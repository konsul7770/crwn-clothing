import React from "react";
import "./collections-overview.styles.scss";
import {connect} from "react-redux";
import CollectionPreview from "../collection-preview/collection-preview";
import {createStructuredSelector} from "reselect";
import {selectCollections} from "../../redux/shop/shop.selectors";

const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
        {
            collections.map(({id, ...otherCollectionsProps}) => (
                <CollectionPreview key={id}{...otherCollectionsProps}></CollectionPreview>
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview);