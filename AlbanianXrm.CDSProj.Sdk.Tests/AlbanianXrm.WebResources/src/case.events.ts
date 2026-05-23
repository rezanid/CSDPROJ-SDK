export function onLoad(context: Xrm.Events.EventContext) {
    console.log(context.getFormContext().data.entity.getId());
}